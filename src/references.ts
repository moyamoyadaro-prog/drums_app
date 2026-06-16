import type { Fidelity, Reference } from './types';

/** Japanese label shown next to each borrowing for its faithfulness level. */
const FIDELITY_LABEL: Record<Fidelity, string> = {
  transcribed: '採譜準拠',
  paraphrase: '再構成',
  idiom: '語法',
};

export function fidelityLabel(fidelity: Fidelity): string {
  return FIDELITY_LABEL[fidelity];
}

/** Renders a 1-based inclusive bar range as `12` or `12–13`. */
export function formatBarRange([start, end]: [number, number]): string {
  return start === end ? `${start}` : `${start}–${end}`;
}

/**
 * One-line, link-free summary of a borrowed phrase for the 備考 panel, e.g.
 * `小節 12–13: John Bonham —「Moby Dick」風（採譜準拠）`. The optional `note`
 * is appended in parentheses. Pure so it can be unit-tested; the app wraps the
 * output in DOM and appends `refs` links separately.
 */
export function formatReference(ref: Reference): string {
  const head = `小節 ${formatBarRange(ref.bars)}: ${ref.drummer} —「${ref.song}」風（${fidelityLabel(ref.fidelity)}）`;
  return ref.note ? `${head} — ${ref.note}` : head;
}
