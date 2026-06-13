import type { Manifest, ManifestItem } from './types';

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
  return {
    title,
    file,
    updatedAt: typeof updatedAt === 'string' ? updatedAt : '',
  };
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
