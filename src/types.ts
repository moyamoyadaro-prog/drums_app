/** One drum-solo entry in the data manifest. */
export interface ManifestItem {
  /** Human-readable title shown in the song list. */
  title: string;
  /** alphaTex filename relative to the data directory. */
  file: string;
  /** ISO-8601 timestamp of when the data was last generated. */
  updatedAt: string;
}

/** The `data/manifest.json` document the app fetches on startup. */
export interface Manifest {
  items: ManifestItem[];
}
