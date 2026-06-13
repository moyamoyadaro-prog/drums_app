import { describe, expect, it } from 'vitest';
import { parseManifest } from '../../src/dataSource';

describe('parseManifest', () => {
  it('parses a valid manifest', () => {
    const result = parseManifest({
      items: [{ title: 'Solo A', file: 'a.alphatex', updatedAt: '2026-01-01T00:00:00Z' }],
    });
    expect(result.items).toEqual([
      { title: 'Solo A', file: 'a.alphatex', updatedAt: '2026-01-01T00:00:00Z' },
    ]);
  });

  it('defaults a missing updatedAt to an empty string', () => {
    const result = parseManifest({ items: [{ title: 'B', file: 'b.alphatex' }] });
    expect(result.items[0]?.updatedAt).toBe('');
  });

  it('throws when items is not an array', () => {
    expect(() => parseManifest({ items: 'nope' })).toThrow();
    expect(() => parseManifest(null)).toThrow();
  });

  it('throws when an item is missing required fields', () => {
    expect(() => parseManifest({ items: [{ title: 'no file' }] })).toThrow();
  });
});
