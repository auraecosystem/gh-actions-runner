const fs = require('node:fs');
const path = require('node:path');

const required = [
  'package.json',
  'action.yml',
  'src/main.tsx',
  'internal/context.js',
  'internal/deployment.js',
  'internal/api-client.js'
];

const missing = required.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));
if (missing.length) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join('\n')}`);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (pkg.main !== 'dist/index.js') throw new Error('package.json main must be dist/index.js');
if (!pkg.scripts?.build || !pkg.scripts?.['test:e2e']) throw new Error('Required build/test:e2e scripts are missing');

const action = fs.readFileSync('action.yml', 'utf8');
if (!action.includes('main: dist/index.js')) throw new Error('action.yml must point to dist/index.js');

console.log('Repository structure and package metadata are valid.');
