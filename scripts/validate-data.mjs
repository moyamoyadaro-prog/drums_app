// Validates every public/data/*.alphatex file and the manifest that lists them.
//
// Checks performed:
//   1. Syntax — each file parses with alphaTab's AlphaTexImporter (lexer /
//      parser / semantic diagnostics surfaced with line:col).
//   2. Bar lengths — each bar's note durations sum to what its time signature
//      requires (reported per track with the 1-based bar number).
//   3. Track alignment — all tracks in a file share the same bar count.
//   4. Manifest cross-check — every manifest `file` exists on disk and every
//      data file is referenced by the manifest (orphans are warnings).
//
// Exits 1 if any error is found so it can gate CI and the /gen-solo workflow.
// Usage: node scripts/validate-data.mjs   (npm run data:validate)
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import * as alphaTab from '@coderline/alphatab';

const DATA_DIR = join(process.cwd(), 'public', 'data');

const errors = [];
const warnings = [];

/** Formats a diagnostic's source location as `line:col`, when available. */
function locOf(diagnostic) {
  const start = diagnostic.start;
  return start ? `${start.line}:${start.col}` : '?:?';
}

function collectDiagnostics(file, bag, kind) {
  for (const diagnostic of bag.errors) {
    errors.push(`${file} [${kind} ${locOf(diagnostic)}] ${diagnostic.message}`);
  }
}

/** Parses one file, returning the alphaTab Score or null if it failed to parse. */
function parseScore(file, tex) {
  const importer = new alphaTab.importer.AlphaTexImporter();
  importer.logErrors = false;
  try {
    importer.initFromString(tex, new alphaTab.Settings());
    const score = importer.readScore();
    collectDiagnostics(file, importer.lexerDiagnostics, 'lexer');
    collectDiagnostics(file, importer.parserDiagnostics, 'parser');
    collectDiagnostics(file, importer.semanticDiagnostics, 'semantic');
    return score;
  } catch (err) {
    collectDiagnostics(file, importer.lexerDiagnostics, 'lexer');
    collectDiagnostics(file, importer.parserDiagnostics, 'parser');
    collectDiagnostics(file, importer.semanticDiagnostics, 'semantic');
    if (
      importer.lexerDiagnostics.errors.length === 0 &&
      importer.parserDiagnostics.errors.length === 0 &&
      importer.semanticDiagnostics.errors.length === 0
    ) {
      errors.push(`${file} failed to parse: ${err?.message ?? err}`);
    }
    return null;
  }
}

/** Checks bar durations against their time signature and cross-track alignment. */
function checkBars(file, score) {
  let expectedBarCount = null;
  for (const track of score.tracks) {
    for (const staff of track.staves) {
      if (expectedBarCount === null) {
        expectedBarCount = staff.bars.length;
      } else if (staff.bars.length !== expectedBarCount) {
        errors.push(
          `${file} [${track.name}] has ${staff.bars.length} bars, expected ${expectedBarCount} (tracks must align)`,
        );
      }
      staff.bars.forEach((bar, index) => {
        const actual = bar.calculateDuration();
        const expected = bar.masterBar.calculateDuration();
        if (actual !== expected) {
          errors.push(
            `${file} [${track.name}] bar ${index + 1}: duration ${actual} ticks, expected ${expected}`,
          );
        }
      });
    }
  }
}

function validateFiles() {
  const files = readdirSync(DATA_DIR)
    .filter((name) => name.endsWith('.alphatex'))
    .sort((a, b) => a.localeCompare(b));

  if (files.length === 0) {
    warnings.push('No *.alphatex files found in public/data/');
  }

  for (const file of files) {
    const tex = readFileSync(join(DATA_DIR, file), 'utf8');
    const score = parseScore(file, tex);
    if (score) {
      checkBars(file, score);
    }
  }
  return files;
}

function crossCheckManifest(files) {
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(join(DATA_DIR, 'manifest.json'), 'utf8'));
  } catch (err) {
    errors.push(`manifest.json could not be read: ${err?.message ?? err}`);
    return;
  }
  const items = Array.isArray(manifest.items) ? manifest.items : [];
  const referenced = new Set();
  for (const item of items) {
    if (!item || typeof item.file !== 'string') {
      errors.push('manifest.json has an item without a string "file"');
      continue;
    }
    referenced.add(item.file);
    if (!files.includes(item.file)) {
      errors.push(`manifest.json references "${item.file}" which does not exist`);
    }
  }
  for (const file of files) {
    if (!referenced.has(file)) {
      warnings.push(`${file} exists but is not listed in manifest.json (run data:manifest)`);
    }
  }
}

const files = validateFiles();
crossCheckManifest(files);

for (const warning of warnings) {
  console.warn(`WARN  ${warning}`);
}
for (const error of errors) {
  console.error(`ERROR ${error}`);
}

if (errors.length > 0) {
  console.error(`\nValidation failed: ${errors.length} error(s).`);
  process.exit(1);
}
console.log(`Validation passed: ${files.length} file(s) OK.`);
