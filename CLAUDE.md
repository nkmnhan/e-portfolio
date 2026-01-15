# E-Portfolio Project

Portfolio for **Concept Artists** and **Film Animation Developers**.

## Tech Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS, Flowbite-React, R3F
- Package Manager: pnpm

## Project Structure
```
webs/portfolio-nextjs/
├── app/
│   ├── components/    # Reusable UI
│   ├── about/         # About page
│   ├── work/          # Portfolio
│   └── contact/       # Contact
└── public/            # Assets
```

## 3 Core Rules

### 1. Server Components First
```tsx
// DEFAULT: No "use client"
// Only add "use client" for: onClick, useState, useEffect, window/localStorage
```

### 2. Use clsxMerge
```tsx
import { clsxMerge } from "@/app/components/themes/utils";

className={clsxMerge("flex", conditional && "active", props.className)}
```

### 3. Group CSS Classes
```tsx
className={clsxMerge(
  "flex items-center",           // Layout
  "w-full h-12 px-4",            // Sizing
  "rounded-lg border",           // Shape
  "bg-white text-gray-900",      // Colors
  "transition-all duration-200", // Animation
  "hover:bg-gray-50"             // States
)}
```

## Quick Reference

| Task | File |
|------|------|
| CSS grouping | `.claude/quick-ref/css-grouping.md` |
| Server vs Client | `.claude/quick-ref/server-vs-client.md` |
| Context limits | `.claude/quick-ref/context-sizing.md` |

## Commands

| Command | Usage |
|---------|-------|
| `/component` | Create server component |
| `/client-component` | Create client component |
| `/simplify` | Simplify existing code |
| `/review` | Review code quality |

## Team Agents

| Role | Agent | Use for |
|------|-------|---------|
| BA | `business-analyst` | Requirements, user stories |
| Dev | `developer` | Implementation |
| Test | `tester` | Testing, QA |
| PM | `project-manager` | Coordination |
| Design | `ui-ux-designer` | UI/UX review |

## Scripts
```bash
pnpm dev          # Development
pnpm build        # Production build
pnpm storybook    # Component preview
```

## MCP Servers

| Server | Purpose |
|--------|---------|
| `context7` | Docs for Next.js, Tailwind, Flowbite |
| `sequential-thinking` | Complex problem-solving |
| `github` | Issues, PRs, repos (needs `GITHUB_TOKEN`) |
| `next-devtools` | Next.js routing, components, build analysis |
