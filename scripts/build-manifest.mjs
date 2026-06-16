// Regenerates public/data/manifest.json from the *.alphatex files on disk.
//
// Title comes from each file's `\title "..."` header (falling back to the file
// name); `updatedAt` is the file's modification time. This removes the need to
// hand-edit the manifest and keeps it structurally in sync with the data files.
//
// Usage: node scripts/build-manifest.mjs   (npm run data:manifest)
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DATA_DIR = join(process.cwd(), 'public', 'data');

/** Extracts the `\title "..."` value from alphaTex source, if present. */
function extractTitle(tex) {
  const match = tex.match(/^\s*\\title\s+"([^"]*)"/m);
  return match?.[1]?.trim() || null;
}

/**
 * Reads provenance from the `<slug>.refs.json` sidecar `/gen-solo` writes next
 * to a solo, so the served manifest carries it (the app reads manifest only;
 * names never enter the `.alphatex` notation body). Returns null when absent or
 * empty; malformed sidecars warn and are skipped so the manifest still builds.
 */
function readReferences(base) {
  const refsPath = join(DATA_DIR, `${base}.refs.json`);
  if (!existsSync(refsPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(refsPath, 'utf8'));
    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
  } catch (err) {
    console.warn(`WARN  ${base}.refs.json could not be parsed: ${err?.message ?? err}`);
  }
  return null;
}

function buildManifest() {
  const files = readdirSync(DATA_DIR)
    .filter((name) => name.endsWith('.alphatex'))
    .sort((a, b) => a.localeCompare(b));

  const items = files.map((file) => {
    const fullPath = join(DATA_DIR, file);
    const tex = readFileSync(fullPath, 'utf8');
    const base = file.replace(/\.alphatex$/, '');
    const title = extractTitle(tex) ?? base;
    const updatedAt = statSync(fullPath).mtime.toISOString();
    const references = readReferences(base);
    return references ? { title, file, updatedAt, references } : { title, file, updatedAt };
  });

  return { items };
}

const manifest = buildManifest();
const outPath = join(DATA_DIR, 'manifest.json');
writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Wrote ${manifest.items.length} item(s) to ${outPath}`);
