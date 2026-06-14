import type { SynthAudio } from './player';

/**
 * Splits interleaved samples (`[c0, c1, c0, c1, ...]`) into per-channel planar
 * arrays. Pure + testable.
 */
export function deinterleave(samples: Float32Array, channels: number): Float32Array[] {
  if (channels < 1) throw new Error('channels must be >= 1');
  const frames = Math.floor(samples.length / channels);
  const planar = Array.from({ length: channels }, () => new Float32Array(frames));
  for (let frame = 0; frame < frames; frame++) {
    for (let ch = 0; ch < channels; ch++) {
      // biome-ignore lint/style/noNonNullAssertion: index is within allocated bounds
      planar[ch]![frame] = samples[frame * channels + ch]!;
    }
  }
  return planar;
}

/** Clamps a float sample to the [-1, 1] range and converts it to signed 16-bit. */
function toInt16(sample: number): number {
  const clamped = sample < -1 ? -1 : sample > 1 ? 1 : sample;
  return clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff;
}

/**
 * Encodes planar float channels into a 16-bit PCM WAV file. Channels are
 * assumed equal length (shorter ones are treated as silent past their end).
 * Pure + testable — no Web Audio required.
 */
export function encodeWav(channels: Float32Array[], sampleRate: number): ArrayBuffer {
  if (channels.length === 0) throw new Error('at least one channel is required');
  const channelCount = channels.length;
  const frames = channels.reduce((max, ch) => Math.max(max, ch.length), 0);
  const bytesPerSample = 2;
  const blockAlign = channelCount * bytesPerSample;
  const dataSize = frames * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset: number, text: string): void => {
    for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i));
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true); // PCM chunk size
  view.setUint16(20, 1, true); // audio format = PCM
  view.setUint16(22, channelCount, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * blockAlign, true); // byte rate
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 8 * bytesPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let frame = 0; frame < frames; frame++) {
    for (let ch = 0; ch < channelCount; ch++) {
      const sample = channels[ch]?.[frame] ?? 0;
      view.setInt16(offset, toInt16(sample), true);
      offset += bytesPerSample;
    }
  }
  return buffer;
}

/**
 * Mixes the offline-rendered drum synth with an optional local media file into a
 * single stereo WAV. Mixing happens in an {@link OfflineAudioContext} so the
 * result is deterministic and needs no real-time audio-node tapping — YouTube
 * audio is intentionally out of scope (browser sandbox + DRM).
 *
 * @param mediaGain relative volume for the local media (1 = unchanged).
 */
export async function renderMixToWav(
  synth: SynthAudio,
  mediaFile: File | null,
  mediaGain = 1,
): Promise<Blob> {
  const { sampleRate } = synth;
  const synthFrames = Math.floor(synth.samples.length / synth.channels);

  let mediaBuffer: AudioBuffer | null = null;
  if (mediaFile) {
    const decodeCtx = new OfflineAudioContext(2, 1, sampleRate);
    mediaBuffer = await decodeCtx.decodeAudioData(await mediaFile.arrayBuffer());
  }
  const mediaFrames = mediaBuffer ? Math.ceil(mediaBuffer.duration * sampleRate) : 0;
  const totalFrames = Math.max(synthFrames, mediaFrames, 1);

  const ctx = new OfflineAudioContext(2, totalFrames, sampleRate);

  const synthBuffer = ctx.createBuffer(2, synthFrames, sampleRate);
  const [left, right] = deinterleave(synth.samples, synth.channels);
  if (left) synthBuffer.getChannelData(0).set(left);
  if (right) synthBuffer.getChannelData(1).set(right);
  const synthSource = ctx.createBufferSource();
  synthSource.buffer = synthBuffer;
  synthSource.connect(ctx.destination);
  synthSource.start();

  if (mediaBuffer) {
    const mediaSource = ctx.createBufferSource();
    mediaSource.buffer = mediaBuffer;
    const gain = ctx.createGain();
    gain.gain.value = mediaGain;
    mediaSource.connect(gain).connect(ctx.destination);
    mediaSource.start();
  }

  const rendered = await ctx.startRendering();
  const channels = [rendered.getChannelData(0), rendered.getChannelData(1)];
  return new Blob([encodeWav(channels, sampleRate)], { type: 'audio/wav' });
}

/** Triggers a browser download of a blob under the given filename. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
