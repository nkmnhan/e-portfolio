---
name: ui-review
description: Review e-portfolio React/Next.js UI code against this repo's frontend, theming, accessibility and security rules. Use when asked to review components, pages or a UI diff in webs/ or packages/.
argument-hint: "[file-or-pattern] (default: current git diff)"
---

Review target: `$ARGUMENTS` — if empty, review the files changed in `git diff HEAD` under `webs/` and `packages/`.

Judge against `.claude/rules/frontend.md`, `theming.md` and `security.md`. Report only real problems, each with `file:line`.

## Checklist

### Server/Client boundary
- `"use client"` only where needed (handlers, state/effects, browser APIs); interactivity pushed to leaf components
- `next/image` with `sizes`; `priority` only above the fold

### Styling
- Colors only via theme tokens (`bg-surface`, `text-primary`, `border-border`, …) — no hardcoded palette classes (`bg-gray-800`, `text-cyan-400`) or hex
- Only the 15 `--color-*` vars in `packages/theme/src/tokens/themes.css` exist — flag any other color token (no `primary-50…950`, no `warning`)
- Class composition via `clsxMerge` from `@eportfolio/ui/utils`
- Spacing from the Tailwind scale; no arbitrary pixel values
- Mobile-first breakpoints; no horizontal scroll on mobile

### Accessibility
- Touch targets ≥ 44×44px (`min-w-11 min-h-11`)
- Meaningful `alt`; `aria-label` on icon-only controls; visible focus; keyboard reachable
- Animations respect `prefers-reduced-motion`

### Security
- No `dangerouslySetInnerHTML` except JSON-LD built from static data
- No secrets or PII in client code or URLs; external image hosts allowlisted in `next.config.ts`

### Code quality
- Naming per root `CLAUDE.md` (`is/has` booleans, `handle/on` handlers); no single-letter names
- No state mutation; components small and single-purpose

## Output

```
## UI review: <target>

### Issues
1. [Category] file:line — problem → fix

### Suggestions (optional)
- …
```
