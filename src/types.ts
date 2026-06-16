/** How closely a reused phrase tracks the cited source performance. */
export type Fidelity = 'transcribed' | 'paraphrase' | 'idiom';

/**
 * Provenance for a phrase in a generated solo that recognizably borrows from a
 * real-world performance. Authored by `/gen-solo` (sourced from the phrase
 * library), surfaced read-only in the app's 備考 panel. Names live here as
 * metadata — never in the `.alphatex` notation body (see CONVENTIONS.md).
 */
export interface Reference {
  /** 1-based, inclusive bar range the borrowed phrase occupies. */
  bars: [number, number];
  /** Drummer the phrase is attributed to. */
  drummer: string;
  /** Song / solo the phrase is drawn from. */
  song: string;
  /** How faithful the rendering is to the cited source. */
  fidelity: Fidelity;
  /** Source URLs the rendering was grounded on (transcriptions, breakdowns). */
  refs?: string[];
  /** Phrase-library entry id this borrowing came from, when available. */
  libraryId?: string;
  /** Optional free-text remark (e.g. which device was borrowed). */
  note?: string;
}

/** One drum-solo entry in the data manifest. */
export interface ManifestItem {
  /** Human-readable title shown in the song list. */
  title: string;
  /** alphaTex filename relative to the data directory. */
  file: string;
  /** ISO-8601 timestamp of when the data was last generated. */
  updatedAt: string;
  /** Attribution for recognizably borrowed phrases, if any. */
  references?: Reference[];
}

/** The `data/manifest.json` document the app fetches on startup. */
export interface Manifest {
  items: ManifestItem[];
}
