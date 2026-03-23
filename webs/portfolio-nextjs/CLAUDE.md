# Portfolio-NextJS

Personal developer portfolio with cinematic/film animation aesthetic.

## Port & Identity
- **Port**: 3000
- **Theme**: Midnight blue + cinematic rose variant
- **Design**: Film-inspired, smooth animations, rich transitions

## Features
- **Storybook**: port 6006 — component development & documentation
- **Theme Toggle**: light/dark/system + cinematic variant
- **3D Support**: React Three Fiber scenes
- **Framer Motion**: page transitions, scroll animations
- **SEO**: JSON-LD structured data, robots.ts, sitemap.ts
- **Waltograph**: custom Disney-style font

## Key Directories
- `app/components/themes/` — theme toggle, utils
- `.storybook/` — Storybook config (extends @eportfolio/storybook-config)

## Scripts
```bash
pnpm dev              # Dev server (:3000)
pnpm build            # Production build
pnpm lint             # ESLint
pnpm storybook        # Storybook (:6006)
pnpm build-storybook  # Static Storybook build
```
