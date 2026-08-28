const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const action = fs.readFileSync(path.join(root, 'action.yml'), 'utf8');

if (!pkg.name.startsWith('@auraecosystem/')) throw new Error('Unexpected package scope');
if (!/^\d+\.\d+\.\d+$/.test(pkg.version)) throw new Error('Package version must be semver');
if (!action.includes('using: node24')) throw new Error('Action runtime must be Node 24');
if (!action.includes('main: dist/index.js')) throw new Error('Action entrypoint is incorrect');

for (const file of ['src/main.tsx', 'internal/context.js', 'internal/deployment.js', 'internal/api-client.js']) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing source file: ${file}`);
}

console.log('Smoke tests passed.');
