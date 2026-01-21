# E-Portfolio Project

Portfolio platform for **3D Artists**, **Animation Artists**, and **Concept Artists**.

## Target Users
- **3D Artists** - Showcase 3D models, renders, sculpts, environments, character designs
- **Animation Artists** - Display animation reels, character rigs, motion graphics, VFX work
- **Concept Artists** - Present concept art, storyboards, character designs, environment concepts

## Design Philosophy
- Visual-first presentation - artwork is the hero
- Dark/cinematic themes to make artwork pop
- High-quality image/video display
- Mobile responsive (industry professionals browse on tablets)
- Fast loading for image-heavy portfolios

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

## 6 Core Rules

### 1. Mobile-First Responsive Design
```tsx
// ALWAYS design for mobile first, then scale up
// Use Tailwind breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

// GOOD: Mobile-first approach
className="text-sm md:text-base lg:text-lg"
className="flex flex-col md:flex-row"
className="w-full md:w-1/2 lg:w-1/3"
className="p-4 md:p-6 lg:p-8"

// AVOID: Desktop-first (harder to maintain)
className="text-lg md:text-base sm:text-sm"
```

### 2. Flowbite-React First
```tsx
// PRIORITY: Use Flowbite-React components before creating custom ones
import { Button, Card, Modal, Tabs, Breadcrumb } from "flowbite-react";

// Customize via theme prop, NOT className overrides
<Button theme={{ base: "custom-classes" }}>Click</Button>
```

### 3. Server Components First
```tsx
// DEFAULT: No "use client"
// Only add "use client" for: onClick, useState, useEffect, window/localStorage
```

### 4. Use clsxMerge
```tsx
import { clsxMerge } from "@/app/components/themes/utils";

className={clsxMerge("flex", conditional && "active", props.className)}
```

### 5. Group CSS Classes
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

### 6. Use Tailwind Spacing Scale - NO Arbitrary Pixel Values
```tsx
// CRITICAL: Use Tailwind's predefined spacing scale for responsive design
// Tailwind spacing: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

// GOOD: Use Tailwind's spacing scale
className="min-w-56 p-7 gap-10 mb-14"
className="w-64 h-48 mt-20"

// BAD: Arbitrary pixel values - breaks responsive consistency
className="min-w-[220px] p-[28px] gap-[40px] mb-[56px]"
className="w-[256px] h-[192px] mt-[80px]"

// Exception: CSS variables for design tokens are allowed
className="bg-[var(--color-surface)]"  // OK - design token
className="text-[var(--color-primary)]" // OK - design token

// Common Tailwind spacing reference:
// 4 = 1rem (16px)    8 = 2rem (32px)     12 = 3rem (48px)
// 5 = 1.25rem (20px) 9 = 2.25rem (36px)  14 = 3.5rem (56px)
// 6 = 1.5rem (24px)  10 = 2.5rem (40px)  16 = 4rem (64px)
// 7 = 1.75rem (28px) 11 = 2.75rem (44px) 20 = 5rem (80px)
```

## Flowbite-React Guidelines

### Component Priority
1. **Check Flowbite-React first** - Before creating custom components
2. **Use theme prop** - For styling customization
3. **Avoid className overrides** - Use theme settings instead

### Theme Customization
```tsx
// GOOD: Use theme prop
<Card theme={{
  root: { base: "bg-gray-100 dark:bg-gray-800" },
  children: "p-6"
}}>
  Content
</Card>

// AVOID: Direct className override
<Card className="bg-gray-100">Content</Card>
```

### Available Components
Common Flowbite-React components to use:
- `Button`, `ButtonGroup` - Actions
- `Card` - Content containers
- `Modal` - Dialogs
- `Tabs`, `TabItem` - Navigation
- `Breadcrumb`, `BreadcrumbItem` - Path navigation
- `Timeline` - Chronological display
- `Carousel` - Image slideshows
- `Popover`, `Tooltip` - Overlays
- `Table` - Data display
- `Badge`, `Avatar` - UI elements

## Responsive Design Guidelines

### Breakpoints Reference
| Prefix | Min Width | Target Device |
|--------|-----------|---------------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large screens |

### Common Responsive Patterns
```tsx
// Grid columns
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

// Flex direction
className="flex flex-col md:flex-row"

// Spacing
className="gap-4 md:gap-6 lg:gap-8"
className="p-4 md:p-6 lg:p-8"

// Typography
className="text-base md:text-lg lg:text-xl"

// Show/Hide
className="hidden md:block"  // Hide on mobile
className="block md:hidden"  // Show only on mobile

// Image sizes (next/image)
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### Checklist for Responsive Components
- [ ] Touch targets minimum 44x44px on mobile
- [ ] Text readable without zooming (min 16px body)
- [ ] No horizontal scrolling on mobile
- [ ] Images scale properly with `sizes` prop
- [ ] Navigation accessible on all screen sizes
- [ ] Forms usable on touch devices

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

### Development Tools
| Server | Purpose |
|--------|---------|
| `context7` | Docs for Next.js, Tailwind, Flowbite |
| `sequential-thinking` | Complex problem-solving |
| `github` | Issues, PRs, repos (needs `GITHUB_TOKEN`) |
| `next-devtools` | Next.js routing, components, build analysis |

### UI/UX Design Tools
| Server | Purpose | Setup |
|--------|---------|-------|
| `figma` | Read Figma designs, tokens, layouts | Needs OAuth: type `/mcp` → Authenticate |
| `storybook-mcp` | Component stories, screenshots | Run `pnpm storybook` first |
| `playwright` | Visual testing, browser automation | Auto-starts on demand |
| `a11y` | Accessibility audits (axe-core) | Auto-starts on demand |

### Figma Workflow
1. Create designs in Figma
2. Authenticate: `/mcp` → select `figma` → Authenticate
3. Share Figma frame link in prompt
4. AI reads exact design tokens, spacing, colors
