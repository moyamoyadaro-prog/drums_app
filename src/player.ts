import * as alphaTab from '@coderline/alphatab';

/** Minimal description of a score track, surfaced to the mixer UI. */
export interface TrackInfo {
  index: number;
  name: string;
}

/** Transport position, in milliseconds, reported as playback advances. */
export interface PlaybackPosition {
  currentTime: number;
  endTime: number;
}

/** Raw synth render result: interleaved-stereo PCM plus its sample rate. */
export interface SynthAudio {
  /** Interleaved stereo samples: `[L, R, L, R, ...]`. */
  samples: Float32Array;
  sampleRate: number;
  /** Always 2 (alphaTab synthesizes stereo). */
  channels: number;
}

/**
 * Thin wrapper around {@link alphaTab.AlphaTabApi} that exposes only what the
 * UI needs: load alphaTex, transport (play/stop/seek), tempo, loop, per-track
 * mixing, and offline audio export for mix recording. Keeping alphaTab behind
 * this class keeps `main.ts` framework-free and the surface easy to reason about.
 */
export class DrumPlayer {
  private readonly api: alphaTab.AlphaTabApi;
  /** Per-track relative volume (1 = authored). Mirrors the live mixer state. */
  private readonly trackGain = new Map<number, number>();
  private readonly muted = new Set<number>();
  private readonly soloed = new Set<number>();

  constructor(element: HTMLElement, scrollElement: HTMLElement) {
    const base = import.meta.env.BASE_URL;
    this.api = new alphaTab.AlphaTabApi(element, {
      core: {
        tex: true,
        fontDirectory: `${base}font/`,
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        enableUserInteraction: true,
        soundFont: `${base}soundfont/sonivox.sf2`,
        scrollElement,
      },
    });
    this.api.scoreLoaded.on(() => {
      this.trackGain.clear();
      this.muted.clear();
      this.soloed.clear();
    });
  }

  /** Fires once the synthesizer + soundfont are ready for playback. */
  onPlayerReady(callback: () => void): void {
    this.api.playerReady.on(callback);
  }

  /** Fires whenever a new score is parsed; provides the track list. */
  onScoreLoaded(callback: (tracks: TrackInfo[]) => void): void {
    this.api.scoreLoaded.on((score) => {
      callback(score.tracks.map((track) => ({ index: track.index, name: track.name })));
    });
  }

  /** Fires on play/pause/stop transitions; `playing` reflects the new state. */
  onStateChanged(callback: (playing: boolean) => void): void {
    this.api.playerStateChanged.on((args) => {
      callback(args.state === alphaTab.synth.PlayerState.Playing);
    });
  }

  /** Fires as the transport position advances (≈ every audio buffer). */
  onPositionChanged(callback: (position: PlaybackPosition) => void): void {
    this.api.playerPositionChanged.on((args) => {
      callback({ currentTime: args.currentTime, endTime: args.endTime });
    });
  }

  /** Surfaces alphaTex parse / load errors to the caller. */
  onError(callback: (error: Error) => void): void {
    this.api.error.on(callback);
  }

  loadTex(tex: string): void {
    this.api.tex(tex);
  }

  playPause(): void {
    this.api.playPause();
  }

  stop(): void {
    this.api.stop();
  }

  /** Seeks the transport to an absolute position in milliseconds. */
  seek(milliseconds: number): void {
    this.api.timePosition = milliseconds;
  }

  /** @param factor playback speed where 1 = original tempo. */
  setTempo(factor: number): void {
    this.api.playbackSpeed = factor;
  }

  /** The score's authored initial tempo in BPM (0 when no score is loaded). */
  get originalTempo(): number {
    return this.api.score?.tempo ?? 0;
  }

  setLooping(looping: boolean): void {
    this.api.isLooping = looping;
  }

  /** @param volume master gain (0-3, 1 = unchanged). */
  setMasterVolume(volume: number): void {
    this.api.masterVolume = volume;
  }

  private trackAt(index: number): alphaTab.model.Track | undefined {
    return this.api.score?.tracks[index];
  }

  /** @param volume gain multiplier where 1 = the track's authored volume. */
  setTrackVolume(index: number, volume: number): void {
    this.trackGain.set(index, volume);
    const track = this.trackAt(index);
    if (track) this.api.changeTrackVolume([track], volume);
  }

  setTrackMute(index: number, mute: boolean): void {
    if (mute) this.muted.add(index);
    else this.muted.delete(index);
    const track = this.trackAt(index);
    if (track) this.api.changeTrackMute([track], mute);
  }

  setTrackSolo(index: number, solo: boolean): void {
    if (solo) this.soloed.add(index);
    else this.soloed.delete(index);
    const track = this.trackAt(index);
    if (track) this.api.changeTrackSolo([track], solo);
  }

  /**
   * Effective per-track volume map for offline export, folding mute/solo into
   * the gain so the rendered audio matches what the mixer plays live. A muted
   * track (or any track while something else is soloed) renders at 0.
   */
  private effectiveTrackVolumes(): Map<number, number> {
    const tracks = this.api.score?.tracks ?? [];
    const result = new Map<number, number>();
    const hasSolo = this.soloed.size > 0;
    for (const track of tracks) {
      const i = track.index;
      const silenced = this.muted.has(i) || (hasSolo && !this.soloed.has(i));
      result.set(i, silenced ? 0 : (this.trackGain.get(i) ?? 1));
    }
    return result;
  }

  /**
   * Renders the currently loaded score offline to interleaved-stereo PCM,
   * honouring tempo, master volume, and the live mixer (volume/mute/solo).
   * Used by the recorder to mix the synth with local media deterministically —
   * no real-time audio-node tapping required.
   */
  async exportSynthAudio(sampleRate = 44100): Promise<SynthAudio> {
    const options = new alphaTab.synth.AudioExportOptions();
    options.sampleRate = sampleRate;
    options.masterVolume = this.api.masterVolume;
    options.trackVolume = this.effectiveTrackVolumes();
    const exporter = await this.api.exportAudio(options);
    try {
      const chunks: Float32Array[] = [];
      let total = 0;
      for (;;) {
        const chunk = await exporter.render(500);
        if (!chunk) break;
        chunks.push(chunk.samples);
        total += chunk.samples.length;
      }
      const samples = new Float32Array(total);
      let offset = 0;
      for (const chunk of chunks) {
        samples.set(chunk, offset);
        offset += chunk.length;
      }
      return { samples, sampleRate, channels: 2 };
    } finally {
      exporter.destroy();
    }
  }
}
