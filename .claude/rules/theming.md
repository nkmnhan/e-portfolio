---
description: Theme system architecture and rules
globs:
  - "**/globals.css"
  - "**/color-themes.ts"
  - "**/themeDerivation.ts"
  - "**/derivation.ts"
  - "**/use-color-theme.ts"
  - "**/use-theme*.ts"
---

# Theme System Rules

## Architecture
```
color-themes.ts (config: palette name + 5 brand colors + optional overrides)
  → derivation.ts (5 hex → 100+ CSS vars: core + perceptual scales + semantics)
    → use-color-theme.ts (<style> injection at runtime, localStorage cache)
      → ThemeSwitcher.tsx (UI picker)
```

## Adding a New Palette
Add one object to `color-themes.ts`. No CSS edits, no manual HSL, no other files.
```ts
{ id: "my-theme", label: "My Theme", mode: "dark",
  palette: { background: "#...", foreground: "#...", primary: "#...", secondary: "#...", accent: "#..." } }
```

## Perceptual Color Scales
The derivation engine generates scales (50–950) for brand and semantic colors.
Shade numbers have consistent meaning:
- `50` = subtle background
- `200` = border
- `500` = solid/base
- `700` = prominent text
- `950` = near-black

## No `dark:` Overrides on Color Scales
Perceptual mapping handles light/dark automatically. Use `bg-primary-50 text-primary-700` — works in both modes.

## CSS Variable Contract
Token groups: background/surface, text, brand (primary/secondary/accent), semantic (success/warning/error/info), borders, gradients, typography, spacing, radius, shadows, z-index, transitions.

## Components Use Semantic Tokens Only
- `bg-[var(--color-surface)]` not `bg-zinc-900`
- `text-[var(--color-primary)]` not `text-cyan-400`
- `border-[var(--color-border)]` not `border-zinc-700`
