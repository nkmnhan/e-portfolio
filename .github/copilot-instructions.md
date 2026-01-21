# E-Portfolio Project - Coding Instructions

Portfolio platform for **3D Artists**, **Animation Artists**, and **Concept Artists**.

## Tech Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS, Flowbite-React, R3F
- Package Manager: pnpm

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
// CRITICAL: Use Tailwind's predefined spacing scale
// GOOD: Use Tailwind's spacing scale
className="min-w-56 p-7 gap-10 mb-14"
className="w-64 h-48 mt-20"

// BAD: Arbitrary pixel values
className="min-w-[220px] p-[28px] gap-[40px] mb-[56px]"

// Exception: CSS variables for design tokens are allowed
className="bg-[var(--color-surface)]"  // OK - design token
```

## Flowbite-React Guidelines

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

## Responsive Design

### Breakpoints
| Prefix | Min Width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

### Common Patterns
```tsx
// Grid columns
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

// Flex direction
className="flex flex-col md:flex-row"

// Show/Hide
className="hidden md:block"  // Hide on mobile
className="block md:hidden"  // Show only on mobile
```

## Component Organization

| Type | Location |
|------|----------|
| Reusable UI | `app/components/` |
| 3D Components | `app/components/3d/` |
| Layout | `app/components/layout/` |
| Page-specific | `app/[page]/components/` |

## Code Standards

- Use TypeScript with strict mode
- Prefer functional components with hooks
- Use meaningful component and variable names
- Keep components small and focused
- Follow YAGNI, KISS, DRY principles
- Tailwind CSS first - avoid custom CSS files
