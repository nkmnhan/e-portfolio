# Byte-Folio Project

Space-themed developer portfolio inspired by Figma design.

## Target Users
- **Developers** - Showcase coding skills, projects, and work experience
- **Tech Professionals** - Present technical expertise with a creative twist

## Design Philosophy
- **Cosmic/Space Theme** - Deep purple gradients, neon cyan glows, star fields
- **Immersive Experience** - Full-screen sections, smooth scrolling
- **Gaming/Futuristic Typography** - Bold, glowing text effects
- **Interactive Elements** - Cards with expand behavior, carousels

## Tech Stack
- Next.js 16+ (App Router), TypeScript, Tailwind CSS v4, Flowbite-React
- Package Manager: pnpm
- Port: 3002 (to run alongside portfolio-nextjs:3000 and artist-portfolio:3001)

## Project Structure
```
webs/byte-folio/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, Skills, Projects, Experience
│   │   ├── ui/              # Reusable UI components
│   │   └── background/      # Space background, decorations
│   ├── contact/             # Contact page
│   ├── globals.css          # Space theme CSS
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   ├── data.ts              # Portfolio data
│   └── utils.ts             # Utilities
└── public/                  # Assets
```

## 7 Core Rules

### 1. NO "use client" - Server Components First
```tsx
// CRITICAL: Default to Server Components
// NO "use client" unless absolutely necessary

// Only add "use client" for:
// - onClick handlers that need client state
// - useState, useEffect hooks
// - Browser APIs (window, localStorage)
```

### 2. Mobile-First Responsive Design
```tsx
// ALWAYS design for mobile first, then scale up
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
className="p-4 md:p-6 lg:p-8"
```

### 3. Space Theme with CSS Variables
```tsx
// USE design tokens from globals.css
className="bg-[var(--color-space-dark)]"
className="text-[var(--color-neon-cyan)]"
className="border-[var(--color-border)]"

// Use glow utilities
className="text-glow"      // Neon cyan text glow
className="card-glow"      // Card with hover glow
className="btn-glow"       // Button with glow effect
```

### 4. Use clsxMerge for Class Names
```tsx
import { clsxMerge } from "@/lib/utils";

className={clsxMerge(
  "flex items-center",
  "bg-[var(--color-surface)]",
  "transition-all duration-200",
  props.className
)}
```

### 5. Use Tailwind Spacing Scale
```tsx
// GOOD: Use Tailwind's spacing scale
className="min-w-56 p-7 gap-10 mb-14"

// BAD: Arbitrary pixel values
className="min-w-[220px] p-[28px] gap-[40px]"

// Exception: CSS variables are allowed
className="bg-[var(--color-surface)]"
```

### 6. Flowbite-React First
```tsx
// Check Flowbite-React components before creating custom ones
import { Button, Card, Modal, Tabs } from "flowbite-react";

// Customize via theme prop
<Button theme={{ base: "btn-glow" }}>Click</Button>
```

### 7. Accessibility for All Content
```tsx
// Skip to content link in layout
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Minimum touch targets for mobile
className="p-3 min-w-11 min-h-11"

// Respect reduced motion
@media (prefers-reduced-motion: reduce) { ... }
```

## Design Tokens Reference

```css
/* Space Backgrounds */
--color-space-dark: #0d0618;
--color-space-mid: #1a0a2e;
--color-space-light: #2d1b4e;

/* Neon Glows */
--color-neon-cyan: #00ffff;
--color-neon-blue: #4dffd2;
--color-neon-pink: #ff6b9d;
--color-neon-purple: #a855f7;

/* Text */
--color-text: #ffffff;
--color-text-secondary: #b8b8d0;
--color-text-muted: #6b6b8a;

/* Glows */
--glow-cyan: 0 0 20px rgba(0, 255, 255, 0.4);
--glow-text: 0 0 10px rgba(0, 255, 255, 0.8);
```

## Available Utility Classes

| Class | Description |
|-------|-------------|
| `.text-glow` | Neon cyan text shadow |
| `.text-gradient` | Cyan to purple gradient text |
| `.card-glow` | Card with hover glow effect |
| `.btn-glow` | Button with neon border and glow |
| `.border-glow` | Glowing border effect |
| `.animate-float` | Floating animation |
| `.animate-twinkle` | Star twinkling effect |
| `.animate-bounce-down` | Scroll indicator bounce |

## Scripts
```bash
pnpm dev          # Development (port 3002)
pnpm build        # Production build
pnpm start        # Start production server
```

## Figma Reference

**Design:** [Space-themed portfolio - Community](https://www.figma.com/design/6I4oIyPZUvyABHzi1lZWhk/Space-themed-portfolio--Community-?node-id=0-1)

**Current Frame:** [Hero Section](https://www.figma.com/design/6I4oIyPZUvyABHzi1lZWhk/Space-themed-portfolio--Community-?node-id=21-4058&t=UPAvnXdQpSuLEQZb-0)

### Design Notes (extracted from Figma SVG exports)

| Element | Color | CSS Variable |
|---------|-------|--------------|
| Background | `#090909` | `--color-space-dark` |
| Purple gradient | `#4C009F` → `#19002A` | `--gradient-space` |
| Cyan (primary) | `#43E0F7` | `--color-neon-cyan` |
| Stars | `#439FC2` | `--color-star` |
| Pink glow | `#D10057` | `--color-neon-pink` |
| Purple orb | `#8657E8`, `#42218E` | `--color-neon-purple`, `--color-accent-dark` |
| Earth blue | `#00B1FF`, `#004361` | `--color-neon-blue`, `--gradient-earth` |
| Gold accent | `#FFB400` | `--color-gold` |
| Mountain blues | `#3744B5`, `#330995`, `#142187` | `--color-mountain-*` |

## Commands

| Command | Usage |
|---------|-------|
| `/component` | Create server component |
| `/client-component` | Create client component |
| `/simplify` | Simplify existing code |
| `/review` | Review code quality |
