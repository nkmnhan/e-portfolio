# Byte-Folio

Developer portfolio with space/cosmic theme. Neon accents, CSS-driven animated backgrounds.

## Port & Identity
- **Port**: 3002
- **Theme**: Deep space (dark bg, cyan/neon purple primary, neon pink accent)
- **Design**: Cosmic aesthetic, particle effects, gradient borders, glassmorphism cards

## Data Structure
- Skills grouped by category (frontend, backend, devops, tools)
- Projects with tech stacks, live URLs, GitHub links
- Experience timeline (chronological career history)

## Design Notes
- Space-themed CSS backgrounds (stars, nebula gradients)
- Neon glow effects on interactive elements
- Monospace/tech typography accents
- Default theme `space-cosmic`; the shared `ThemeSwitcher` offers the other `@eportfolio/theme` themes

## Traffic Protection
Vercel Hobby plan. Vercel mitigates L3/L4/L7 DDoS automatically; this limits what gets through.
- **In code**: `dynamicParams = false` on project routes, narrow `images` in `next.config.ts`, scanner paths denied in `vercel.json` (`routes` → `mitigate`, applies per deployment)
- **In dashboard** (Firewall, applies to the whole project; keep this list current): rate limit by IP on paths outside `/_next/static/`, 300 requests / 60s. Start on Log, move to Deny/429 after checking Googlebot and Bingbot aren't caught
- **During an attack**: check traffic by path, IP and JA4 → enable Attack Mode (Firewall → Bot Management) → block the source with a temporary custom rule → undo both afterwards
