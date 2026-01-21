# Artist Portfolio Project

Portfolio platform for **3D Artists**, **Animation Artists**, and **Concept Artists**.

## Target Users
- **3D Artists** - Showcase 3D models, renders, sculpts, environments, character designs
- **Animation Artists** - Display animation reels, character rigs, motion graphics, VFX work
- **Concept Artists** - Present concept art, storyboards, character designs, environment concepts

## Design Philosophy
- **Visual-first presentation** - Artwork is the hero, UI stays minimal
- **Dark/cinematic theme** - Make artwork colors pop against dark backgrounds
- **High-quality image/video display** - Proper loading states, lazy loading
- **Mobile responsive** - Industry professionals browse on tablets
- **Fast loading** - Essential for image-heavy portfolios

## Tech Stack
- Next.js 14+ (App Router), TypeScript, Tailwind CSS, Flowbite-React
- Package Manager: pnpm
- Port: 3001 (to run alongside portfolio-nextjs on 3000)

## Project Structure
```
webs/artist-portfolio/
├── app/
│   ├── components/
│   │   ├── artwork/      # Artwork cards, grids
│   │   ├── artist/       # Artist cards, profiles
│   │   ├── nav/          # Header, Footer
│   │   └── ui/           # Shared UI components
│   ├── artists/          # Artist pages
│   │   └── [slug]/       # Individual artist profiles
│   ├── gallery/          # All artworks gallery
│   ├── showreels/        # Video reels showcase
│   └── layout.tsx        # Root layout
├── lib/
│   ├── data.ts           # Mock data with types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 7 Core Rules

### 1. NO "use client" - Server Components First
```tsx
// CRITICAL: Default to Server Components
// NO "use client" unless absolutely necessary

// GOOD: Server Component (default)
export default function ArtworkCard({ artwork }: Props) {
  return <div>...</div>;
}

// ONLY add "use client" for:
// - onClick handlers that need client state
// - useState, useEffect hooks
// - Browser APIs (window, localStorage)
// - Third-party client libraries
```

### 2. Mobile-First Responsive Design
```tsx
// ALWAYS design for mobile first, then scale up
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
className="p-4 md:p-6 lg:p-8"
```

### 3. Dark Theme with CSS Variables
```tsx
// USE design tokens from globals.css
className="bg-[var(--color-surface)]"
className="text-[var(--color-text-muted)]"
className="border-[var(--color-border)]"
className="hover:text-[var(--color-primary)]"

// NEVER hardcode colors
// BAD: className="bg-gray-800 text-gray-400"
```

### 4. Use clsxMerge for Class Names
```tsx
import { clsxMerge } from "@/lib/utils";

className={clsxMerge(
  "flex items-center",           // Layout
  "w-full h-12 px-4",            // Sizing
  "rounded-lg border",           // Shape
  "bg-[var(--color-surface)]",   // Colors
  "transition-all duration-200", // Animation
  props.className                // Allow overrides
)}
```

### 5. External Images with next/image
```tsx
// Always use next/image for external images
import Image from "next/image";

<Image
  src={artwork.thumbnail}
  alt={artwork.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
  priority={index < 4}  // Priority for above-fold images
/>
```

### 6. Accessibility for Visual Content
```tsx
// Always provide meaningful alt text for artwork
<Image alt={`${artwork.title} - ${artwork.category} by ${artist.name}`} />

// Skip to content link in layout
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Minimum touch targets for mobile
className="p-3 min-w-11 min-h-11"
```

### 7. Use Tailwind Spacing Scale - NO Arbitrary Pixel Values
```tsx
// CRITICAL: Use Tailwind's predefined spacing scale for responsive design
// Tailwind spacing: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

// GOOD: Use Tailwind's spacing scale
className="min-w-55 p-7 gap-10 mb-14"
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

## Design Tokens Reference

```css
/* Backgrounds */
--color-bg: #0a0a0b;
--color-bg-secondary: #111113;
--color-surface: #1c1c1f;
--color-surface-hover: #252528;

/* Text */
--color-text: #fafafa;
--color-text-secondary: #a1a1aa;
--color-text-muted: #71717a;

/* Primary (Cyan) */
--color-primary: #06b6d4;
--color-primary-hover: #22d3ee;

/* Accent (Purple) */
--color-accent: #a855f7;

/* Borders */
--color-border: #27272a;
--color-border-hover: #3f3f46;
```

## Image Placeholders

Using external placeholder services for development:
- **Artworks**: `https://images.unsplash.com/photo-{id}?w={width}&h={height}&fit=crop`
- **Avatars**: `https://i.pravatar.cc/150?u={seed}`
- **General**: `https://picsum.photos/{width}/{height}?random={seed}`

## Scripts
```bash
pnpm dev          # Development (port 3001)
pnpm build        # Production build
pnpm start        # Start production server
```

## Team Agents

| Role | Agent | Use for |
|------|-------|---------|
| BA | `business-analyst` | Requirements, user stories for artists |
| Dev | `developer` | Implementation |
| Test | `tester` | Testing, QA |
| PM | `project-manager` | Coordination |
| Design | `ui-ux-designer` | UI/UX review for visual portfolios |

## Commands

| Command | Usage |
|---------|-------|
| `/component` | Create server component |
| `/client-component` | Create client component (use sparingly!) |
| `/simplify` | Simplify existing code |
| `/review` | Review code quality |
