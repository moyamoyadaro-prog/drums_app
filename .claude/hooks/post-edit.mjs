// PostToolUse hook (Edit|Write): format + lint the edited file with Biome.
// Reads the hook payload from stdin, applies safe fixes, and on remaining
// lint errors exits 2 so the errors are surfaced back to Claude immediately.
import { execSync } from 'node:child_process';

let raw = '';
process.stdin.on('data', (c) => {
  raw += c;
});
process.stdin.on('end', () => {
  let file;
  try {
    file = JSON.parse(raw)?.tool_input?.file_path;
  } catch {
    process.exit(0);
  }
  if (!file || !/\.(ts|tsx|js|jsx|json|css|html)$/.test(file)) process.exit(0);

  try {
    execSync(`npx biome check --write "${file}"`, { stdio: 'pipe' });
    process.exit(0);
  } catch (e) {
    const out = (e.stdout?.toString() ?? '') + (e.stderr?.toString() ?? '');
    process.stderr.write(out);
    process.exit(2);
  }
});
