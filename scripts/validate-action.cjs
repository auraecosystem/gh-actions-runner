#!/usr/bin/env node
'use strict'

const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const actionPath = path.join(root, 'action.yml')
const packagePath = path.join(root, 'package.json')

function fail(message) {
  console.error(`✖ ${message}`)
  process.exitCode = 1
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}

const pkg = readJson(packagePath)
const action = fs.readFileSync(actionPath, 'utf8')

const requiredActionFields = [
  'name:',
  'description:',
  'inputs:',
  'outputs:',
  'runs:',
  'main: dist/index.js',
]

for (const field of requiredActionFields) {
  if (!action.includes(field)) fail(`action.yml is missing expected field: ${field}`)
}

if (pkg.main !== 'dist/index.js') fail('package.json main must be dist/index.js')
if (!Array.isArray(pkg.files) || !pkg.files.includes('dist')) fail('package.json must publish the dist directory')
if (!pkg.scripts?.build) fail('package.json must define a build script')

if (!fs.existsSync(path.join(root, 'src', 'main.tsx'))) {
  fail('src/main.tsx is missing')
}

if (process.exitCode) process.exit()
console.log('✔ Action metadata and package contract are valid')
