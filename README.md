# Aura Ecosystem GitHub Actions Runner

A GitHub Action runner for Aura Ecosystem deployments and GitHub Pages workflows.

## Development

Requires Node.js 24 and pnpm 10.15.0.

```bash
corepack enable
corepack prepare pnpm@10.15.0 --activate
pnpm install --no-frozen-lockfile
pnpm check
```

## Build

```bash
pnpm build
pnpm verify:dist
```

The Action entrypoint is `dist/index.js` and is declared by `action.yml`.

## Quality gates

`pnpm check` runs environment diagnostics, source checks, tests, smoke validation, Action metadata validation, the bundle build, and distribution verification.

## GitHub Action

The Action expects GitHub Pages/deployment permissions appropriate to the calling workflow. See `action.yml` and `docs/` for details.

## Packaging

```bash
pnpm package
```

The package contains the generated `dist` bundle, Action metadata, documentation, and runtime files.

## License

MIT.