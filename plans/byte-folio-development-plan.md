# Byte-Folio Development Plan

> Space-themed developer portfolio - LIGHTWEIGHT & HIGH-PERFORMANCE
> Data sourced from portfolio-nextjs project (Tony Nguyen's portfolio)

## Project Overview

**Project Name:** byte-folio
**Location:** `webs/byte-folio`
**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Flowbite-React
**Port:** 3002
**Status:** Phase 1 Complete (Project Setup)

---

## Performance Goals

| Metric | Target | Notes |
|--------|--------|-------|
| **LCP** | < 1.5s | Hero visible fast |
| **FID** | < 50ms | Minimal JS blocking |
| **CLS** | < 0.05 | No layout shifts |
| **TTI** | < 2.5s | Fast interactive |
| **JS Bundle** | < 70KB gzipped | Minimal client code |
| **Lighthouse** | 95+ | All categories |

### Core Principles
1. **Server Components First** - NO "use client" unless absolutely required
2. **CSS-Only Animations** - No JS animation libraries
3. **Minimal Client Components** - Only 3 client components total
4. **No Tour System** - Portfolio is self-explanatory (4 sections)
5. **Static Generation** - Full SSG for best performance

---

## Client Components Budget (ONLY 3)

| Component | Size | Purpose | Required? |
|-----------|------|---------|-----------|
| `ScrollObserver.tsx` | ~1KB | Intersection Observer for fade-in | YES |
| `Header.tsx` | ~2KB | Scroll state for styling | YES |
| `ContactForm.tsx` | ~3KB | Form state handling | YES |
| **TOTAL** | **~6KB** | | |

**Everything else is Server Component (no "use client")**

---

## Animation Strategy (CSS-ONLY)

### Essential Animations (KEEP)
| Animation | Type | JS Required? |
|-----------|------|--------------|
| Card hover glow | CSS transition | NO |
| Scroll indicator bounce | CSS keyframes | NO |
| Section fade-in | CSS class + IntersectionObserver | 1KB JS |
| Focus ring glow | CSS | NO |
| Star twinkle | CSS keyframes | NO |

### Removed Animations (PERFORMANCE)
- ~~Star field parallax~~ → CSS gradient + static stars
- ~~Floating elements~~ → Removed entirely
- ~~Count-up stats~~ → Display final numbers
- ~~Text reveal stagger~~ → Simple fade-in
- ~~Route transitions~~ → Browser default
- ~~Tour system~~ → Eliminated (not needed)
- ~~Carousel swipe JS~~ → CSS scroll-snap

### CSS Animation Implementation
```css
/* globals.css - All animations CSS-only */

/* 1. Card hover - GPU accelerated */
.card-hover-glow {
  transition: box-shadow 200ms ease-out, transform 200ms ease-out;
}
.card-hover-glow:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* 2. Scroll indicator bounce */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.animate-bounce-down {
  animation: bounce 2s ease-in-out infinite;
}

/* 3. Fade-in (CSS class toggled by minimal JS) */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 4. Focus glow - accessibility */
.focus-glow:focus-visible {
  outline: 2px solid var(--color-neon-cyan);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

/* 5. Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce-down, .star-twinkle { animation: none; }
  .fade-in-section { opacity: 1; transform: none; transition: none; }
}
```

---

## Real Data Overview (from portfolio-nextjs)

### Profile Information
| Field | Value |
|-------|-------|
| **Name** | Tony Nguyen |
| **Title** | Software Engineer |
| **Experience** | 8+ Years |
| **Specializations** | .NET Core, Microservices, Cloud Architecture |

### Summary Statistics
- **8+** Years Experience
- **10+** Major Projects
- **20+** Technologies
- **3** Countries Served

---

## Color Palette

```css
/* Space Background */
--color-space-dark: #0d0618;
--color-space-mid: #1a0a2e;
--color-space-light: #2d1b4e;

/* Neon Glows */
--color-neon-cyan: #00ffff;
--color-neon-blue: #4dffd2;
--color-neon-pink: #ff6b9d;
--color-neon-purple: #a855f7;

/* Text - Optimized contrast */
--color-text-primary: #ffffff;
--color-text-secondary: #b8b8d0;
--color-text-muted: #8585a3; /* 5.2:1 contrast ratio */
```

---

## Phase 1: Project Setup - COMPLETE

- [x] Create `webs/byte-folio` directory
- [x] Initialize Next.js with TypeScript
- [x] Configure Tailwind CSS v4
- [x] Install Flowbite-React
- [x] Set up project scripts (dev on port 3002)
- [x] Create `globals.css` with space theme
- [x] Create layout structure
- [x] Create home page placeholder
- [x] Create contact page
- [x] Set up data file with real portfolio data
- [x] Create CLAUDE.md project instructions

---

## Phase 2: Core Pages - IN PROGRESS

### Task 2.1: Home/Hero Section (Server Component)
- [x] Hero section with greeting text
- [x] Name display with glow
- [x] Title & experience display
- [x] Bio text
- [x] Summary stats grid (static numbers, no count-up)
- [x] Scroll indicator (CSS animation)
- [ ] Add `data-section="hero"` for scroll observer

### Task 2.2: Skills Section (Server Component)
- [ ] Section header component
- [ ] Skills grid component (CSS grid)
- [ ] Skill badge with CSS hover glow
- [ ] Category grouping (static, no JS filtering)
- [ ] Responsive grid layout
- [ ] Add `fade-in-section` class

### Task 2.3: Projects Section (Server Component + CSS Scroll-Snap)
- [ ] Project grid/carousel with CSS scroll-snap (NO JS)
- [ ] Project card component
- [ ] Technology badges
- [ ] GitHub link and stars display
- [ ] CSS-only horizontal scroll on mobile

```tsx
// CSS Scroll-Snap Carousel - NO JS
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
  {projects.map((project) => (
    <article key={project.id} className="snap-center flex-shrink-0 w-72 md:w-80">
      <ProjectCard project={project} />
    </article>
  ))}
</div>
```

### Task 2.4: Work Experience Section (Server Component)
- [ ] Experience timeline component
- [ ] Experience card component
- [ ] Period/company/role display
- [ ] Add `fade-in-section` class

### Task 2.5: Header (Client Component - REQUIRED)
- [ ] Fixed header component (~2KB)
- [ ] "CONTACT ME" button
- [ ] Scroll-based background change
- [ ] Mobile navigation (CSS-only hamburger)

### Task 2.6: ScrollObserver (Client Component - REQUIRED)
- [ ] Single Intersection Observer (~1KB)
- [ ] Adds `.visible` class to `.fade-in-section` elements
- [ ] One-time trigger, then unobserve

```tsx
// ScrollObserver.tsx - ONLY 1KB
"use client";
import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
```

---

## Phase 3: SEO Implementation

### Task 3.1: robots.txt
**File:** `app/robots.ts`

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tonynguyen.dev";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
```

### Task 3.2: sitemap.xml
**File:** `app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tonynguyen.dev";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
```

### Task 3.3: SEO Configuration
**File:** `lib/seo.ts`

```typescript
import { Metadata } from "next";

export const siteConfig = {
  name: "Tony Nguyen",
  title: "Tony Nguyen | Software Engineer",
  description: "Software Engineer with 8+ years of experience in .NET Core, React, and microservices.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tonynguyen.dev",
  ogImage: "/og-image.jpg",
  keywords: ["Software Engineer", ".NET Core", "React", "TypeScript", "Microservices"],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};
```

### Task 3.4: JSON-LD Structured Data
**File:** `app/components/seo/JsonLd.tsx` (Server Component)

```typescript
import { siteConfig } from "@/lib/seo";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tony Nguyen",
  jobTitle: "Senior Software Engineer",
  url: siteConfig.url,
  sameAs: ["https://github.com/nkmnhan", "https://linkedin.com/in/nkmnhan"],
  knowsAbout: [".NET Core", "React", "TypeScript", "Microservices", "AWS", "Azure"],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
```

### Task 3.5: Required Assets
| File | Size | Purpose |
|------|------|---------|
| `public/favicon.ico` | 32x32 | Browser tab |
| `public/icon.svg` | Scalable | Modern browsers |
| `public/apple-touch-icon.png` | 180x180 | iOS |
| `public/og-image.jpg` | 1200x630 | Social sharing |
| `public/manifest.json` | - | PWA support |

---

## Phase 4: Visual Polish (CSS-Only)

### Task 4.1: Star Field Background (CSS-Only)
```css
.space-background {
  background:
    radial-gradient(1px 1px at 20px 30px, white, transparent),
    radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(2px 2px at 160px 120px, white, transparent),
    linear-gradient(180deg, #0d0618 0%, #1a0a2e 50%, #2d1b4e 100%);
  background-size: 200px 200px, 200px 200px, 200px 200px, 200px 200px, 100% 100%;
}
```

### Task 4.2: Optimized Glow Effects
```css
/* Single shadow, hardware accelerated */
.glow-optimized {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

/* Text glow - use text-shadow, not filter */
.text-glow {
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
}

/* Mobile: Reduced glow for performance */
@media (max-width: 768px) {
  .glow-optimized { box-shadow: 0 0 10px rgba(0, 255, 255, 0.2); }
}
```

### Task 4.3: Space Illustrations
- [ ] Astronaut mascot (optimized SVG)
- [ ] Planet decorations (CSS gradients preferred)
- [ ] Use `next/image` with proper `sizes`
- [ ] WebP/AVIF format for all images

---

## Phase 5: Mobile Optimization

### Task 5.1: Touch Targets
- [ ] Add `.touch-target` utility (min 44x44px)
- [ ] Ensure all buttons meet target size
- [ ] Mobile menu with 48px touch targets

### Task 5.2: Mobile Navigation
- [ ] CSS-only hamburger menu
- [ ] Full-screen overlay
- [ ] No JS required for basic open/close (checkbox hack or :target)

### Task 5.3: Responsive Breakpoints
| Breakpoint | Target | Layout |
|------------|--------|--------|
| Mobile (<640px) | Default | Single column |
| Tablet (640-1024px) | `md:` | 2-column grids |
| Desktop (>1024px) | `lg:` | 3-4 column grids |

### Task 5.4: Safe Areas
```css
.container-custom {
  padding-left: max(1.5rem, env(safe-area-inset-left));
  padding-right: max(1.5rem, env(safe-area-inset-right));
}
```

---

## Phase 6: Accessibility & Quality

### Task 6.1: Accessibility
- [x] Skip to content link
- [x] Reduced motion support
- [ ] Fix muted text contrast (#8585a3)
- [ ] Keyboard navigation
- [ ] ARIA labels for interactive elements
- [ ] Focus visible indicators

### Task 6.2: Performance Validation
- [ ] Lighthouse audit (target: 95+)
- [ ] Core Web Vitals check
- [ ] Test on 3G throttling
- [ ] Verify 60fps on mid-range devices

---

## Phase 7: Final Polish

### Task 7.1: 404 Page (Server Component)
- [ ] "Lost in Space" themed error page
- [ ] Simple CSS animation
- [ ] Link back to homepage

### Task 7.2: Contact Form (Client Component - REQUIRED)
- [ ] Form validation (~3KB)
- [ ] Submit handling
- [ ] Success/error states

### Task 7.3: Final Checklist
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility audit (WAVE, axe)
- [ ] Submit sitemap to Google Search Console

---

## Project Structure (Final)

```
webs/byte-folio/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx          # CLIENT (~2KB)
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # SERVER
│   │   │   ├── Skills.tsx          # SERVER
│   │   │   ├── Projects.tsx        # SERVER
│   │   │   └── Experience.tsx      # SERVER
│   │   ├── ui/
│   │   │   ├── ProjectCard.tsx     # SERVER
│   │   │   ├── SkillBadge.tsx      # SERVER
│   │   │   └── ScrollObserver.tsx  # CLIENT (~1KB)
│   │   └── seo/
│   │       └── JsonLd.tsx          # SERVER
│   ├── contact/
│   │   ├── page.tsx                # SERVER
│   │   └── ContactForm.tsx         # CLIENT (~3KB)
│   ├── robots.ts                   # SEO
│   ├── sitemap.ts                  # SEO
│   ├── not-found.tsx               # SERVER
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── data.ts
│   ├── seo.ts                      # SEO config
│   └── utils.ts
├── public/
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.jpg
│   └── manifest.json
└── .env.local
```

---

## What Was Removed (For Performance)

| Feature | Reason | Savings |
|---------|--------|---------|
| Tour System | Not needed for 4-section portfolio | ~15KB |
| Count-up Animation | Static numbers are fine | ~3KB |
| Route Transitions | Browser default is fine | ~5KB |
| Parallax Star Field | CSS gradient is enough | ~10KB |
| Floating Elements | Unnecessary decoration | ~3KB |
| Swipe Library | CSS scroll-snap works | ~8KB |
| **TOTAL SAVINGS** | | **~44KB** |

---

## Bundle Size Comparison

| Before (Planned) | After (Optimized) |
|------------------|-------------------|
| ~120KB JS | ~70KB JS |
| 8-10 client components | 3 client components |
| Multiple animation libs | CSS-only animations |
| Complex tour system | No tour |
| JS carousel | CSS scroll-snap |

---

## Commands

```bash
# Development
cd webs/byte-folio
pnpm dev          # Starts on port 3002

# Build & Analyze
pnpm build
pnpm start

# Lighthouse audit
npx lighthouse http://localhost:3002 --view
```

---

## Notes

- **Server Components First** - Only 3 client components allowed
- **CSS-Only Animations** - No Framer Motion, GSAP, or animation libraries
- **No Tour System** - Portfolio is self-explanatory
- **Static Generation** - Full SSG for best performance
- **Accessibility** - WCAG AA compliance required
- **Performance** - Target 95+ Lighthouse score

---

## Figma Reference

**Design:** [Space-themed portfolio - Community](https://www.figma.com/design/6I4oIyPZUvyABHzi1lZWhk/Space-themed-portfolio--Community-?node-id=0-1)

---

## Next Steps (Priority Order)

1. **Create SEO files** - robots.ts, sitemap.ts, lib/seo.ts
2. **Build Skills section** - Server Component with CSS grid
3. **Build Projects section** - CSS scroll-snap carousel
4. **Build Experience section** - Server Component timeline
5. **Create Header** - Minimal client component
6. **Add ScrollObserver** - Single Intersection Observer
7. **Mobile optimization** - Touch targets, safe areas
8. **Performance audit** - Lighthouse 95+ target
