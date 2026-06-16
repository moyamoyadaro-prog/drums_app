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

  it('parses references with all fields', () => {
    const result = parseManifest({
      items: [
        {
          title: 'Solo',
          file: 's.alphatex',
          references: [
            {
              bars: [12, 13],
              drummer: 'John Bonham',
              song: 'Moby Dick',
              fidelity: 'transcribed',
              refs: ['https://example.com', 42],
              libraryId: 'rock-fill-03',
              note: 'triplet fill',
            },
          ],
        },
      ],
    });
    expect(result.items[0]?.references).toEqual([
      {
        bars: [12, 13],
        drummer: 'John Bonham',
        song: 'Moby Dick',
        fidelity: 'transcribed',
        refs: ['https://example.com'],
        libraryId: 'rock-fill-03',
        note: 'triplet fill',
      },
    ]);
  });

  it('omits references when absent', () => {
    const result = parseManifest({ items: [{ title: 'A', file: 'a.alphatex' }] });
    expect(result.items[0]?.references).toBeUndefined();
  });

  it('throws when references is not an array', () => {
    expect(() =>
      parseManifest({ items: [{ title: 'A', file: 'a.alphatex', references: {} }] }),
    ).toThrow();
  });

  it('throws on an invalid fidelity', () => {
    expect(() =>
      parseManifest({
        items: [
          {
            title: 'A',
            file: 'a.alphatex',
            references: [{ bars: [1, 1], drummer: 'X', song: 'Y', fidelity: 'guessed' }],
          },
        ],
      }),
    ).toThrow();
  });

  it('throws on a malformed bar range', () => {
    expect(() =>
      parseManifest({
        items: [
          {
            title: 'A',
            file: 'a.alphatex',
            references: [{ bars: [1], drummer: 'X', song: 'Y', fidelity: 'idiom' }],
          },
        ],
      }),
    ).toThrow();
  });
});
