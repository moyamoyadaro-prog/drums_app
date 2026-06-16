import type { Fidelity, Manifest, ManifestItem, Reference } from './types';

const FIDELITY_VALUES: readonly Fidelity[] = ['transcribed', 'paraphrase', 'idiom'];

function isFidelity(value: unknown): value is Fidelity {
  return typeof value === 'string' && (FIDELITY_VALUES as readonly string[]).includes(value);
}

function parseReference(value: unknown, item: number, index: number): Reference {
  const where = `manifest.items[${item}].references[${index}]`;
  if (!isRecord(value)) {
    throw new Error(`${where} must be an object`);
  }
  const { bars, drummer, song, fidelity, refs, libraryId, note } = value;
  if (!Array.isArray(bars) || bars.length !== 2 || !bars.every((bar) => Number.isInteger(bar))) {
    throw new Error(`${where} requires "bars" as [start, end] integers`);
  }
  if (typeof drummer !== 'string' || typeof song !== 'string') {
    throw new Error(`${where} requires string "drummer" and "song"`);
  }
  if (!isFidelity(fidelity)) {
    throw new Error(`${where} "fidelity" must be one of ${FIDELITY_VALUES.join(' | ')}`);
  }
  const reference: Reference = {
    bars: [bars[0] as number, bars[1] as number],
    drummer,
    song,
    fidelity,
  };
  if (Array.isArray(refs)) {
    reference.refs = refs.filter((url): url is string => typeof url === 'string');
  }
  if (typeof libraryId === 'string') reference.libraryId = libraryId;
  if (typeof note === 'string') reference.note = note;
  return reference;
}

/**
 * Base URL the AI-generated drum data is served from. Defaults to the app's own
 * `data/` folder (respecting the Vite base path so it works on GitHub Pages
 * subpaths). The data is pushed to the repo by Claude Code from the terminal.
 */
export const DATA_BASE = `${import.meta.env.BASE_URL}data/`;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseItem(value: unknown, index: number): ManifestItem {
  if (!isRecord(value)) {
    throw new Error(`manifest.items[${index}] must be an object`);
  }
  const { title, file, updatedAt } = value;
  if (typeof title !== 'string' || typeof file !== 'string') {
    throw new Error(`manifest.items[${index}] requires string "title" and "file"`);
  }
  const result: ManifestItem = {
    title,
    file,
    updatedAt: typeof updatedAt === 'string' ? updatedAt : '',
  };
  const { references } = value;
  if (references !== undefined) {
    if (!Array.isArray(references)) {
      throw new Error(`manifest.items[${index}].references must be an array`);
    }
    result.references = references.map((ref, i) => parseReference(ref, index, i));
  }
  return result;
}

/** Validates and normalizes raw JSON into a {@link Manifest}. Pure + testable. */
export function parseManifest(raw: unknown): Manifest {
  if (!isRecord(raw) || !Array.isArray(raw.items)) {
    throw new Error('manifest must be an object with an "items" array');
  }
  return { items: raw.items.map(parseItem) };
}

async function fetchText(url: string): Promise<string> {
  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

/** Fetches and validates the drum-solo manifest. */
export async function fetchManifest(base: string = DATA_BASE): Promise<Manifest> {
  const text = await fetchText(`${base}manifest.json`);
  return parseManifest(JSON.parse(text));
}

/** Fetches the raw alphaTex source for a single solo. */
export async function fetchAlphaTex(file: string, base: string = DATA_BASE): Promise<string> {
  return fetchText(`${base}${file}`);
}
