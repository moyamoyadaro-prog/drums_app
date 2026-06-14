import { describe, expect, it } from 'vitest';
import { mediaKind } from '../../src/media';

describe('mediaKind', () => {
  it('prefers the MIME type when present', () => {
    expect(mediaKind('clip', 'video/mp4')).toBe('video');
    expect(mediaKind('song', 'audio/mpeg')).toBe('audio');
  });

  it('falls back to the file extension', () => {
    expect(mediaKind('backing.mp4')).toBe('video');
    expect(mediaKind('backing.WEBM')).toBe('video');
    expect(mediaKind('backing.mp3')).toBe('audio');
  });

  it('defaults to audio for unknown extensions', () => {
    expect(mediaKind('mystery')).toBe('audio');
    expect(mediaKind('notes.txt')).toBe('audio');
  });
});
