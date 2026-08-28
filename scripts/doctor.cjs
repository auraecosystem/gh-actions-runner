#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const root = path.resolve(__dirname, '..')
const required = ['package.json', 'action.yml', 'src/main.tsx', 'internal', '.github/workflows']
let failed = false

function check(label, ok, detail = '') {
  console.log(`${ok ? '✔' : '✖'} ${label}${detail ? ` — ${detail}` : ''}`)
  if (!ok) failed = true
}

for (const item of required) {
  check(item, fs.existsSync(path.join(root, item)))
}

try {
  const version = execFileSync('node', ['--version'], { encoding: 'utf8' }).trim()
  check('Node.js', Number.parseInt(version.slice(1), 10) >= 22, version)
} catch {
  check('Node.js', false, 'not available')
}

try {
  const version = execFileSync('pnpm', ['--version'], { encoding: 'utf8' }).trim()
  check('pnpm', true, version)
} catch {
  check('pnpm', false, 'not available')
}

if (failed) process.exit(1)
console.log('\n✔ Aura GitHub Actions Runner environment looks healthy')
