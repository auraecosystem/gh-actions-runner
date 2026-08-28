const fs = require('node:fs');
const path = require('node:path');

const pkgPath = require.resolve('@auraecosystem/gh-actions-runner/package.json');
const pkgRoot = path.dirname(pkgPath);

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const actionPath = path.join(pkgRoot, 'action.yml');
const entrypoint = path.join(pkgRoot, 'dist', 'index.js');

if (pkg.name !== '@auraecosystem/gh-actions-runner') {
  throw new Error(`Unexpected installed package: ${pkg.name}`);
}
if (!fs.existsSync(actionPath)) throw new Error('Published package is missing action.yml');
if (!fs.existsSync(entrypoint)) throw new Error('Published package is missing dist/index.js');

const action = fs.readFileSync(actionPath, 'utf8');
if (!action.includes('main: dist/index.js')) throw new Error('Published action points to the wrong entrypoint');

console.log(`E2E package validation passed: ${pkg.name}@${pkg.version}`);
