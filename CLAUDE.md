# E-Portfolio — Monorepo

Multi-project portfolio platform. Two Next.js apps sharing code via pnpm workspace packages.

## Tech Stack
- Next.js 16+ (App Router), TypeScript, Tailwind CSS v4, Flowbite-React, R3F
- Package Manager: pnpm workspaces

## Monorepo Structure
```
e-portfolio/
├── packages/
│   ├── ui/                  # @eportfolio/ui — shared components, types, utils
│   ├── theme/               # @eportfolio/theme — CSS tokens, derivation, hooks
│   └── storybook-config/    # @eportfolio/storybook-config — shared Storybook base
└── webs/
    ├── artist-portfolio/    # 3D/animation/concept art portfolio (:3001)
    └── byte-folio/          # Space/cosmic dev portfolio (:3002)
```

## Shorthand Aliases

| Term | Path |
|------|------|
| **artist** | `webs/artist-portfolio/` |
| **byte** | `webs/byte-folio/` |
| **ui** | `packages/ui/` |
| **theme** | `packages/theme/` |
| **storybook** | `packages/storybook-config/` |

## Commands

```bash
pnpm install                    # Install all workspace deps
pnpm dev:artist                 # Artist portfolio dev (:3001)
pnpm dev:byte                   # Byte-folio dev (:3002)
pnpm -r build                   # Build all projects
pnpm -r lint                    # Lint all projects
pnpm storybook                  # Storybook (:6006)
```

## Core Rules

### 1. Server Components First
```tsx
// DEFAULT: No "use client"
// Only add "use client" for: onClick, useState, useEffect, window/localStorage
```

### 2. Mobile-First Responsive Design
```tsx
className="text-sm md:text-base lg:text-lg"
className="flex flex-col md:flex-row"
className="p-4 md:p-6 lg:p-8"
```

### 3. Flowbite-React First
```tsx
import { Button, Card, Modal, Tabs, Breadcrumb } from "flowbite-react";
// Customize via theme prop, NOT className overrides
<Button theme={{ base: "custom-classes" }}>Click</Button>
```

### 4. Use clsxMerge
```tsx
import { clsxMerge } from "@eportfolio/ui/utils";
className={clsxMerge("flex", conditional && "active", props.className)}
```

### 5. CSS Variables / Semantic Tokens Only
```tsx
// Use design tokens, never hardcode colors
className="bg-[var(--color-surface)]"
className="text-[var(--color-primary)]"
```

### 6. Use Tailwind Spacing Scale — NO Arbitrary Pixel Values
```tsx
// GOOD
className="min-w-56 p-7 gap-10 mb-14"
// BAD
className="min-w-[220px] p-[28px] gap-[40px]"
// Exception: CSS variables are allowed
className="bg-[var(--color-surface)]"
```

## Engineering Principles
- **KISS** — simplest solution that works
- **YAGNI** — don't build for hypothetical future requirements
- **DRY** — extract shared logic into `packages/`, don't over-abstract for single use
- **Composition over Inheritance** — small components, hooks for reuse
- **Read before write** — always read existing code before modifying

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

## MCP Servers

### Development Tools
| Server | Purpose |
|--------|---------|
| `context7` | Docs for Next.js, Tailwind, Flowbite |
| `sequential-thinking` | Complex problem-solving |
| `github` | Issues, PRs, repos (needs `GITHUB_TOKEN`) |

### UI/UX Design Tools
| Server | Purpose | Setup |
|--------|---------|-------|
| `figma` | Read Figma designs, tokens, layouts | Needs OAuth: type `/mcp` → Authenticate |
| `storybook-mcp` | Component stories, screenshots | Run `pnpm storybook` first |
| `playwright` | Visual testing, browser automation | Auto-starts on demand |
| `a11y` | Accessibility audits (axe-core) | Auto-starts on demand |
