---
description: Theme system architecture and rules
paths:
  - "**/globals.css"
  - "packages/theme/**"
  - "**/theme-switcher.tsx"
  - "**/theme-init.js"
---

# Theme System Rules

## Architecture
Static CSS, switched by attribute — see `docs/theming-guide.md`.
- `tokens/themes.css`: one `[data-theme="<id>"]` block per theme; `:where(:root)` is only a zero-specificity fallback
- `themes.ts`: `{ id, label }` list; `useColorTheme` sets `<html data-theme>` + localStorage
- `tokens/tailwind.css`: `@theme` mapping + `@source` for shared components; `<ThemeSwitcher />` is shared
- Both apps use it; each sets its default on `<html data-theme>` (byte `space-cosmic`, artist `artist-dark`)
- `webs/*/public/theme-init.js` (same file in both apps) applies the saved theme before paint; key must match `THEME_STORAGE_KEY`

## Keep It Simple
- The theme engine was deliberately removed (102 derived vars, ~15 used). Do NOT reintroduce runtime color derivation, `<style>` injection, or 50–950 shade scales unless a component needs them.
- New color var → add to every theme block in `themes.css` and to the `@theme` block in `tokens/tailwind.css`.
- Adding a theme: copy a block in `themes.css`, add `{ id, label }` to `themes.ts`. Nothing else.

## Components Use Semantic Tokens Only
- `bg-surface`, `text-primary`, `border-border` — not `bg-zinc-900`, `text-cyan-400`
