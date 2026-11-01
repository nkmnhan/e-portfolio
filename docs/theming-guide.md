# E-Portfolio Theming Guide

## How It Works

```
packages/theme/src/tokens/themes.css    one [data-theme="<id>"] block per theme (15 color vars)
packages/theme/src/tokens/tailwind.css  @theme mapping → bg-surface, text-primary, …
packages/theme/src/themes.ts            { id, label } list for pickers + THEME_STORAGE_KEY
packages/theme/src/hooks/use-color-theme.ts       reads/switches <html data-theme>, persists to localStorage
packages/theme/src/components/theme-switcher.tsx  shared floating picker (<ThemeSwitcher />)
webs/*/public/theme-init.js             blocking script — applies the saved theme before first paint
                                        (identical copy per app; key must match THEME_STORAGE_KEY)
```

Package exports (`@eportfolio/theme`): `ThemeSwitcher`, `useColorTheme`, `themes`, `ThemeId`, `THEME_STORAGE_KEY`,
plus the CSS subpaths `@eportfolio/theme/tokens/themes.css` and `@eportfolio/theme/tokens/tailwind.css`.
Both apps currently import only `ThemeSwitcher` and the two CSS files.

Switching a theme sets `document.documentElement.dataset.theme = id` and saves the id under
`eportfolio-color-theme` in localStorage. No runtime CSS generation.

Both apps use the same mechanism. Each app:
- imports `themes.css` + `tailwind.css` in `app/globals.css` (after `tailwindcss`)
- sets its default on `<html data-theme="...">` with `suppressHydrationWarning` — byte-folio: `space-cosmic`, artist-portfolio: `artist-dark`
- loads `/theme-init.js` in `<head>` and renders `<ThemeSwitcher />`

### Defaults and fallbacks

- `space-cosmic` is also declared as `:where(:root)`, a zero-specificity fallback. If a saved id matches no
  theme block (e.g. a theme was removed), the colors fall back to **space-cosmic in both apps** — not to the
  app's own default.
- `useColorTheme().activeThemeId` is `null` until mount, then reads `<html data-theme>`.

### Using the tokens

- **byte-folio** uses the mapped classes everywhere (`bg-primary`, `text-text-muted`, `border-border`) — no
  `bg-[var(--color-*)]` usages.
- **artist-portfolio** still uses `bg-[var(--color-surface)]`-style arbitrary values in ~35 files. They are
  equivalent; migrate to the mapped classes when touching a file.

### Known gaps (don't follow the theme)

- byte-folio `.glass` utility (`webs/byte-folio/app/globals.css`) hardcodes the space-cosmic navy
  (`rgba(10, 22, 40, 0.7)` / `rgba(30, 58, 95, 0.5)`), so glass panels stay navy under every theme.
- byte-folio's CSS starfield gradients use fixed white/cyan/purple/amber dots.

## The Color Contract (15 vars)

`bg`, `bg-subtle`, `surface`, `surface-hover`, `text`, `text-secondary`, `text-muted`,
`primary`, `primary-hover`, `secondary`, `accent`, `border`, `border-hover`, `success`, `error`
— each as `--color-<name>`. Values may be hex or `hsl()` (space-cosmic uses `hsl()`).

Add a var only when a component actually needs it, and add it to every theme block **and** to the
`@theme` mapping in `tailwind.css` (otherwise no `bg-<name>` class is generated).

## Themes

| id | Label | Default for |
|----|-------|-------------|
| `space-cosmic` | Deep Space | byte-folio (+ `:root` fallback) |
| `artist-dark` | Cyber Dark | artist-portfolio |
| `midnight-blue` | Midnight Blue | — |
| `cinematic-rose` | Cinematic Rose | — |
| `coderabbit` | CodeRabbit | — |
| `terminal-green` | Terminal | — |

All six are dark themes.

## Adding a Theme

1. Copy a block in `themes.css`, change the id and the 15 colors.
2. Add `{ id, label }` to `themes.ts`.

The picker swatch renders `bg-primary` inside `data-theme={id}`, so it picks up the new colors automatically.

## Contrast (measured)

WCAG AA asks for 4.5:1 for body text and 3:1 for UI components. Current status, computed from `themes.css`:

| Pair | Result |
|------|--------|
| `text`, `text-secondary`, `text-muted` on `bg` | ✅ all themes ≥ 5.3:1 |
| `text-muted` on `surface` | ✅ all themes ≥ 4.6:1 |
| `primary` on `bg` | ✅ ≥ 4.5:1 except `cinematic-rose` (4.1:1 — fine for UI/large text, not body text) |
| `error` on `bg` | ⚠️ below 4.5:1 in `midnight-blue` (3.9), `cinematic-rose` (3.9), `coderabbit` (4.2) |
| `border` on `bg` | ⚠️ 1.3–1.6:1 in every theme — decorative only; don't rely on borders alone to mark inputs or focus |

Re-check new or edited palettes before shipping (any WCAG contrast checker works on the hex/hsl values).

## Color Palette Resources

| Tool | URL | Best For |
|------|-----|----------|
| Coolors | coolors.co | Quick palette generation |
| Realtime Colors | realtimecolors.com | Preview on real UI |
| Atmos | atmos.style | OKLCH shade scales with accessibility |
| Leonardo | leonardocolor.io | Contrast-ratio-first generation |

## Palette Guidelines

- **Dark backgrounds** — artwork and neon accents pop against them; keep `bg` very dark
- **Neon accents OK** — portfolios benefit from vibrant glows
- **High saturation primary** — CTAs and interactive elements need punch
- **Accessibility** — aim for WCAG AA (see measured status above)
