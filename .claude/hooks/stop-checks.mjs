// Stop hook: at a work break, run the heavier quality gates (typecheck + unit
// tests). On failure, exit 2 so Claude keeps working until they pass.
import { execSync } from 'node:child_process';

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'pipe' });
    return null;
  } catch (e) {
    return (e.stdout?.toString() ?? '') + (e.stderr?.toString() ?? '');
  }
}

const tsc = run('npx tsc --noEmit');
const unit = run('npx vitest run --passWithNoTests');

if (tsc || unit) {
  process.stderr.write('Quality checks failed — please fix before stopping.\n');
  if (tsc) process.stderr.write(`\n[tsc --noEmit]\n${tsc}\n`);
  if (unit) process.stderr.write(`\n[vitest run]\n${unit}\n`);
  process.exit(2);
}
process.exit(0);
