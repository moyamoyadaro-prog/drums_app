import { describe, expect, it } from 'vitest';
import { deinterleave, encodeWav } from '../../src/recorder';

describe('deinterleave', () => {
  it('splits interleaved stereo into two planar channels', () => {
    const interleaved = new Float32Array([1, 2, 3, 4, 5, 6]);
    const [left, right] = deinterleave(interleaved, 2);
    expect(Array.from(left ?? [])).toEqual([1, 3, 5]);
    expect(Array.from(right ?? [])).toEqual([2, 4, 6]);
  });

  it('drops a trailing partial frame', () => {
    const [left, right] = deinterleave(new Float32Array([1, 2, 3]), 2);
    expect(Array.from(left ?? [])).toEqual([1]);
    expect(Array.from(right ?? [])).toEqual([2]);
  });

  it('throws on a non-positive channel count', () => {
    expect(() => deinterleave(new Float32Array([1]), 0)).toThrow();
  });
});

describe('encodeWav', () => {
  it('writes a valid 44-byte header for stereo PCM', () => {
    const left = new Float32Array([0, 1]);
    const right = new Float32Array([0, -1]);
    const view = new DataView(encodeWav([left, right], 44100));

    const tag = (offset: number): string =>
      String.fromCharCode(...[0, 1, 2, 3].map((i) => view.getUint8(offset + i)));
    expect(tag(0)).toBe('RIFF');
    expect(tag(8)).toBe('WAVE');
    expect(tag(36)).toBe('data');

    expect(view.getUint16(20, true)).toBe(1); // PCM
    expect(view.getUint16(22, true)).toBe(2); // channels
    expect(view.getUint32(24, true)).toBe(44100); // sample rate
    expect(view.getUint16(34, true)).toBe(16); // bits per sample
    expect(view.getUint32(40, true)).toBe(2 * 2 * 2); // data size = frames*channels*2
  });

  it('clamps out-of-range samples to the 16-bit limits', () => {
    const view = new DataView(encodeWav([new Float32Array([2, -2])], 8000));
    expect(view.getInt16(44, true)).toBe(0x7fff);
    expect(view.getInt16(46, true)).toBe(-0x8000);
  });

  it('throws when no channels are given', () => {
    expect(() => encodeWav([], 44100)).toThrow();
  });
});
