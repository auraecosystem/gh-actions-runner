#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const entry = path.join(dist, 'index.js')

if (!fs.existsSync(entry)) {
  console.error('✖ dist/index.js is missing. Run `pnpm build` first.')
  process.exit(1)
}

const stat = fs.statSync(entry)
if (stat.size < 1000) {
  console.error(`✖ dist/index.js looks incomplete (${stat.size} bytes).`)
  process.exit(1)
}

const source = fs.readFileSync(entry, 'utf8')
if (!source.includes('@actions/core') && !source.includes('getIDToken')) {
  console.error('✖ dist/index.js does not look like the compiled GitHub Action bundle.')
  process.exit(1)
}

console.log(`✔ dist/index.js verified (${stat.size} bytes)`)
