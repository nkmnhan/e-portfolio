/**
 * PostToolUse hook: auto-lint after Write/Edit on frontend files.
 * Catches lint errors immediately so Claude can fix them in the same turn.
 */
import { readFileSync } from 'fs';
import { execSync } from 'child_process';
import { resolve, relative } from 'path';

const input = JSON.parse(readFileSync('/dev/stdin', 'utf8'));
const filePath = input?.tool_input?.file_path || input?.tool_input?.path || '';

// Only lint TypeScript/React files inside webs/*/
if (!filePath.match(/webs\/[^/]+\/.*\.(ts|tsx)$/) || filePath.includes('node_modules')) {
  process.stdout.write(JSON.stringify({ continue: true }));
  process.exit(0);
}

// Determine which web project this file belongs to
const webMatch = filePath.match(/webs\/([^/]+)\//);
if (!webMatch) {
  process.stdout.write(JSON.stringify({ continue: true }));
  process.exit(0);
}

const webDir = resolve('webs', webMatch[1]);

try {
  execSync(`npx eslint --no-warn-ignored --max-warnings 0 "${filePath}"`, {
    cwd: webDir,
    timeout: 15000,
    stdio: ['pipe', 'pipe', 'pipe']
  });
  process.stdout.write(JSON.stringify({ continue: true }));
} catch (error) {
  const stderr = error.stderr?.toString() || '';
  const stdout = error.stdout?.toString() || '';
  const lintOutput = stdout || stderr;

  process.stdout.write(JSON.stringify({
    continue: true,
    message: `Lint errors in ${filePath.split('/').pop()}:\n${lintOutput.slice(0, 500)}`
  }));
}
