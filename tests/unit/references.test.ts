import { describe, expect, it } from 'vitest';
import { fidelityLabel, formatBarRange, formatReference } from '../../src/references';
import type { Reference } from '../../src/types';

describe('formatBarRange', () => {
  it('collapses a single-bar range', () => {
    expect(formatBarRange([7, 7])).toBe('7');
  });

  it('renders a multi-bar range with an en dash', () => {
    expect(formatBarRange([12, 13])).toBe('12–13');
  });
});

describe('fidelityLabel', () => {
  it('maps each fidelity to a Japanese label', () => {
    expect(fidelityLabel('transcribed')).toBe('採譜準拠');
    expect(fidelityLabel('paraphrase')).toBe('再構成');
    expect(fidelityLabel('idiom')).toBe('語法');
  });
});

describe('formatReference', () => {
  const base: Reference = {
    bars: [12, 13],
    drummer: 'John Bonham',
    song: 'Moby Dick',
    fidelity: 'transcribed',
  };

  it('summarizes drummer, song, range and fidelity', () => {
    expect(formatReference(base)).toBe('小節 12–13: John Bonham —「Moby Dick」風（採譜準拠）');
  });

  it('appends a note when present', () => {
    expect(formatReference({ ...base, note: '三連フィル' })).toBe(
      '小節 12–13: John Bonham —「Moby Dick」風（採譜準拠） — 三連フィル',
    );
  });
});
