#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const action = fs.readFileSync(path.join(root, 'action.yml'), 'utf8')
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))

const assertions = [
  ['Action uses Node 24', /using:\s*node24/.test(action)],
  ['Action entrypoint is bundled', /main:\s*dist\/index\.js/.test(action)],
  ['Build script exists', typeof pkg.scripts?.build === 'string'],
  ['E2E script exists', typeof pkg.scripts?.['test:e2e'] === 'string'],
  ['Package exposes dist', pkg.files?.includes('dist')],
]

let failed = false
for (const [label, ok] of assertions) {
  console.log(`${ok ? '✔' : '✖'} ${label}`)
  if (!ok) failed = true
}

if (failed) process.exit(1)
console.log('\n✔ Smoke test passed')
