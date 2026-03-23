---
description: Frontend development rules for all Next.js web projects
globs: webs/**
---

# Frontend Rules

## Server Components First
- No `"use client"` by default
- Only add for: onClick handlers, useState/useEffect, browser APIs (window, localStorage), third-party client libs
- Extract client islands — keep pages as server components, push interactivity to leaf components

## Mobile-First Responsive
- Design for mobile first, scale up: `sm:` → `md:` → `lg:` → `xl:`
- Touch targets minimum 44×44px (`min-w-11 min-h-11`)
- No horizontal scrolling on mobile

## CSS Variables / Semantic Tokens Only
- Use design tokens: `bg-[var(--color-surface)]`, `text-[var(--color-primary)]`
- Never hardcode colors: no `bg-gray-800`, `text-gray-400`
- Exception: Tailwind's built-in semantic classes (`bg-white`, `text-black`) for light/dark base

## clsxMerge for Class Composition
```tsx
import { clsxMerge } from "@eportfolio/ui/utils";
className={clsxMerge("base-classes", conditional && "active", props.className)}
```

## CSS Class Grouping Order
```
Layout → Sizing → Shape → Colors → Typography → Effects → Animation → States → Responsive
```
Example: `"flex items-center"` → `"w-full h-12 px-4"` → `"rounded-lg border"` → `"bg-surface text-primary"` → `"transition-all"` → `"hover:bg-surface-hover"`

## Tailwind Spacing Scale
- Use predefined spacing only: 0–12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
- No arbitrary pixel values: `min-w-[220px]` → use `min-w-56`
- Exception: CSS variable references are allowed (`bg-[var(--color-surface)]`)

## next/image Rules
- Always use `next/image` for external images
- Use `fill` + `sizes` prop for responsive images
- Set `priority` for above-fold images (first 4)
- Provide meaningful `alt` text: `"${title} - ${category} by ${artist}"`

## Accessibility
- Skip-to-content link in layout
- Meaningful alt text on all images
- Keyboard navigation support
- `prefers-reduced-motion` respected (no essential animations)
- ARIA labels on interactive elements

## Flowbite-React First
- Check Flowbite-React before creating custom components
- Customize via `theme` prop, not `className` overrides
- Common: Button, Card, Modal, Tabs, Breadcrumb, Timeline, Badge

## React Patterns
- Composition over inheritance — small, focused components
- Immutability — never mutate state/props directly
- No manual `React.memo` unless profiling proves a bottleneck
- Hooks for shared logic (`use` prefix)
