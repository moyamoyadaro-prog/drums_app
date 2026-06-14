// Regenerates public/data/manifest.json from the *.alphatex files on disk.
//
// Title comes from each file's `\title "..."` header (falling back to the file
// name); `updatedAt` is the file's modification time. This removes the need to
// hand-edit the manifest and keeps it structurally in sync with the data files.
//
// Usage: node scripts/build-manifest.mjs   (npm run data:manifest)
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DATA_DIR = join(process.cwd(), 'public', 'data');

/** Extracts the `\title "..."` value from alphaTex source, if present. */
function extractTitle(tex) {
  const match = tex.match(/^\s*\\title\s+"([^"]*)"/m);
  return match?.[1]?.trim() || null;
}

function buildManifest() {
  const files = readdirSync(DATA_DIR)
    .filter((name) => name.endsWith('.alphatex'))
    .sort((a, b) => a.localeCompare(b));

  const items = files.map((file) => {
    const fullPath = join(DATA_DIR, file);
    const tex = readFileSync(fullPath, 'utf8');
    const title = extractTitle(tex) ?? file.replace(/\.alphatex$/, '');
    const updatedAt = statSync(fullPath).mtime.toISOString();
    return { title, file, updatedAt };
  });

  return { items };
}

const manifest = buildManifest();
const outPath = join(DATA_DIR, 'manifest.json');
writeFileSync(outPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Wrote ${manifest.items.length} item(s) to ${outPath}`);
