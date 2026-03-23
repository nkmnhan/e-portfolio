---
description: Monorepo workspace conventions for shared packages
globs:
  - packages/**
  - pnpm-workspace.yaml
---

# Monorepo Rules

## Package Scope
All shared packages use `@eportfolio/*` scope:
- `@eportfolio/ui` — components, types, utils, services
- `@eportfolio/theme` — CSS tokens, derivation engine, hooks
- `@eportfolio/storybook-config` — shared Storybook base

## Source Protocol (No Build Step)
Packages export raw TypeScript source via `"exports"` field:
```json
{ "exports": { ".": "./src/index.ts" } }
```
Each Next.js app transpiles them via `transpilePackages` in `next.config.ts`.

## Peer Dependencies
Shared packages declare peer deps for framework libraries:
- `react`, `next`, `clsx`, `tailwind-merge`, `react-icons`
- Consumers (webs/) install the actual versions

## Dual-Update Rule
Changes to shared packages must work for ALL consumers. Test with `pnpm -r build` before committing.

## Package Structure
```
packages/{name}/
├── src/
│   ├── index.ts          # Barrel exports
│   └── {feature}/        # Feature modules
├── package.json          # @eportfolio/{name}
└── tsconfig.json
```

## Import Conventions
- From web apps: `import { Button } from "@eportfolio/ui/components"`
- Subpath exports for tree-shaking: `@eportfolio/ui/utils`, `@eportfolio/ui/types`
- Never import from package internals (only exported subpaths)
