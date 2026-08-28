# Contributing

1. Use Node.js 24 and pnpm 10.15.0.
2. Keep Action metadata and `dist/index.js` synchronized.
3. Run `pnpm check` before opening a pull request.
4. Keep workflow permissions minimal.
5. Add or update tests when changing runtime behavior.

## Local validation

```bash
corepack enable
corepack prepare pnpm@10.15.0 --activate
pnpm install --no-frozen-lockfile
pnpm check
```

Keep commits focused and describe behavioral changes clearly.
