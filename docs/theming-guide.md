# E-Portfolio Theming Guide

## How It Works

```
packages/theme/src/tokens/themes.css    one [data-theme="<id>"] block per theme (15 color vars)
packages/theme/src/tokens/tailwind.css  @theme mapping → bg-surface, text-primary, …
packages/theme/src/themes.ts            { id, label } list for pickers
packages/theme/src/hooks/use-color-theme.ts  sets <html data-theme>, persists to localStorage
packages/theme/src/components/theme-switcher.tsx  shared picker (<ThemeSwitcher />)
webs/*/public/theme-init.js             blocking script — applies the saved theme before first paint
                                        (identical copy per app; key must match THEME_STORAGE_KEY)
```

Switching a theme is just `document.documentElement.dataset.theme = id`. No runtime CSS generation.

Both apps use the same mechanism. Each app:
- imports `themes.css` + `tailwind.css` in `globals.css`
- sets its default on `<html data-theme="...">` (byte: `space-cosmic`, artist: `artist-dark`) with `suppressHydrationWarning`
- loads `/theme-init.js` in `<head>` and renders `<ThemeSwitcher />`

Components use the mapped classes (`bg-primary`, `text-text-muted`, `border-border`). artist-portfolio still has older `bg-[var(--color-surface)]` usages — equivalent, migrate when touching them.

## The Color Contract (15 vars)

`bg`, `bg-subtle`, `surface`, `surface-hover`, `text`, `text-secondary`, `text-muted`,
`primary`, `primary-hover`, `secondary`, `accent`, `border`, `border-hover`, `success`, `error`
— each as `--color-<name>`.

Add a var only when a component actually needs it, and add it to every theme block.

## Adding a Theme

1. Copy a block in `themes.css`, change the id and the 15 colors.
2. Add `{ id, label }` to `themes.ts`.

The picker swatch renders `bg-primary` inside `data-theme={id}`, so it picks up the new colors automatically.

## Color Palette Resources

| Tool | URL | Best For |
|------|-----|----------|
| Coolors | coolors.co | Quick palette generation |
| Realtime Colors | realtimecolors.com | Preview on real UI |
| Atmos | atmos.style | OKLCH shade scales with accessibility |
| Leonardo | leonardocolor.io | Contrast-ratio-first generation |

## Portfolio-Specific Guidelines

- **Dark themes dominate** — artwork pops against dark backgrounds
- **Neon accents OK** — portfolios benefit from vibrant glows
- **High saturation primary** — CTAs and interactive elements need punch
- **Muted backgrounds** — keep < 10% brightness to let artwork be the hero
- **Accessibility:** WCAG AA minimum (4.5:1 text, 3:1 UI elements)
