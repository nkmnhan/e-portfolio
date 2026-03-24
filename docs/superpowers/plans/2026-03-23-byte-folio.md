# Byte-Folio Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a senior fullstack developer portfolio at `webs/byte-folio/` with a space/cosmic theme, single-page scroll, and 6 content sections — using the shared `@eportfolio/ui` and `@eportfolio/theme` workspace packages.

**Architecture:** Next.js 16 App Router with Server Components composing Client Islands. Static data in `lib/data/`, theme via `@eportfolio/theme` derivation engine (space-cosmic palette), animations via Framer Motion, R3F starfield lazy-loaded with CSS fallback. All sections are client components wrapped by server-rendered `page.tsx`.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, @react-three/fiber + drei, @eportfolio/ui, @eportfolio/theme, react-icons

**Spec:** `docs/superpowers/specs/2026-03-23-byte-folio-design.md`

---

## File Structure

```
webs/byte-folio/
├── package.json                    # Deps, scripts, workspace refs
├── next.config.ts                  # transpilePackages, images
├── tsconfig.json                   # Paths: @/ → src alias via ./
├── postcss.config.mjs              # @tailwindcss/postcss
├── app/
│   ├── layout.tsx                  # Fonts, metadata, JSON-LD, skip link
│   ├── globals.css                 # @import theme tokens + space preset + @theme block
│   ├── page.tsx                    # Server: compose all 6 sections + nav
│   └── components/
│       ├── social-icons.ts         # Shared: platform → icon map (DRY)
│       ├── terminal-heading.tsx    # Server: `> command` styled heading
│       ├── section-wrapper.tsx     # Server: consistent padding + scroll id
│       ├── hero.tsx                # Client: name + title + CTAs + starfield
│       ├── starfield.tsx           # Client: R3F canvas (lazy)
│       ├── starfield-css.tsx       # Client: CSS gradient + dot fallback
│       ├── about.tsx               # Client: avatar + bio + animated stats
│       ├── experience.tsx          # Client: vertical timeline
│       ├── projects.tsx            # Client: featured cards grid
│       ├── project-card.tsx        # Client: glassmorphism card + 3D tilt
│       ├── skills.tsx              # Client: category grid + icon glow
│       ├── skill-icon.tsx          # Client: single icon + name
│       ├── contact.tsx             # Client: form → mailto:
│       ├── social-float.tsx        # Client: floating social column (desktop)
│       ├── nav-dots.tsx            # Client: scroll-spy dot sidebar (desktop)
│       └── nav-mobile.tsx          # Client: bottom bar + slide-up sheet
├── lib/
│   ├── types.ts                    # All TypeScript interfaces
│   ├── data/
│   │   ├── site-config.ts          # SiteConfig + SocialLink[]
│   │   ├── sections.ts             # Section id/label array (shared by nav)
│   │   ├── hero.ts                 # HeroData
│   │   ├── about.ts                # AboutData
│   │   ├── contact.ts              # ContactData
│   │   ├── experience.ts           # ExperienceEntry[]
│   │   ├── projects.ts             # Project[] (5 featured + 9 secondary)
│   │   └── skills.ts               # SkillCategory[] (6 categories, 33 skills)
│   └── services/
│       └── github.ts               # Optional build-time GitHub API fetch
└── public/
    └── og-image.png                # 1200×630 placeholder (create later)
```

---

## Chunk 1: Project Scaffold + Theme + Data Layer

### Task 1: Initialize package.json and Next.js config

**Files:**
- Create: `webs/byte-folio/package.json`
- Create: `webs/byte-folio/next.config.ts`
- Create: `webs/byte-folio/tsconfig.json`
- Create: `webs/byte-folio/postcss.config.mjs`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "byte-folio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3002 --turbopack",
    "build": "next build",
    "start": "next start --port 3002",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@eportfolio/ui": "workspace:*",
    "@eportfolio/theme": "workspace:*",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.0",
    "react-icons": "^5.4.0",
    "framer-motion": "^12.0.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^16.0.0"
  }
}
```

- [ ] **Step 2: Create next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@eportfolio/ui", "@eportfolio/theme"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Create postcss.config.mjs**

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 5: Run pnpm install from repo root**

Run: `cd C:/GitSources/e-portfolio && pnpm install`
Expected: Workspace resolves, `@eportfolio/ui` and `@eportfolio/theme` linked.

- [ ] **Step 6: Commit**

```bash
git add webs/byte-folio/package.json webs/byte-folio/next.config.ts webs/byte-folio/tsconfig.json webs/byte-folio/postcss.config.mjs pnpm-lock.yaml
git commit -m "feat(byte-folio): scaffold project with Next.js 16 + workspace deps"
```

---

### Task 2: CSS architecture — globals.css + theme integration

**Files:**
- Create: `webs/byte-folio/app/globals.css`

**Context:** Tailwind v4 uses `@import "tailwindcss"` instead of `@tailwind` directives. The `@theme` block maps CSS variables to Tailwind utility classes. Theme tokens come from `@eportfolio/theme/tokens/base.css` (contract) and `presets/space.css` (overrides).

- [ ] **Step 1: Create globals.css**

```css
@import "tailwindcss";

/*
 * Theme tokens from shared package.
 * base.css = contract (all token names + light defaults)
 * space.css = space-cosmic preset overrides
 *
 * NOTE: These are imported via CSS, not JS, because Tailwind v4
 * needs to see the custom properties at build time for the @theme block.
 */
@import "@eportfolio/theme/tokens/base.css";
@import "@eportfolio/theme/tokens/presets/space.css";

/*
 * Map CSS custom properties → Tailwind utilities.
 * This lets us write `bg-surface` instead of `bg-[var(--color-surface)]`.
 */
@theme {
  --color-bg: var(--color-bg);
  --color-bg-subtle: var(--color-bg-subtle);
  --color-surface: var(--color-surface);
  --color-surface-hover: var(--color-surface-hover);

  --color-text: var(--color-text);
  --color-text-secondary: var(--color-text-secondary);
  --color-text-muted: var(--color-text-muted);

  --color-primary: var(--color-primary);
  --color-primary-hover: var(--color-primary-hover);
  --color-secondary: var(--color-secondary);
  --color-accent: var(--color-accent);

  --color-border: var(--color-border);
  --color-border-hover: var(--color-border-hover);

  --color-success: var(--color-success);
  --color-error: var(--color-error);
}

/* ── Base layer ── */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Thin scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 3px;
  }
}

/* ── Glassmorphism utility ── */
@layer utilities {
  .glass {
    background: rgba(10, 22, 40, 0.7);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(30, 58, 95, 0.5);
  }

  .glow-cyan {
    box-shadow: 0 0 20px rgba(67, 224, 247, 0.3);
  }

  .glow-cyan-text {
    text-shadow: 0 0 10px rgba(67, 224, 247, 0.5);
  }
}

/* ── Animations ── */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes breathe {
  0%, 100% { box-shadow: 0 0 20px rgba(67, 224, 247, 0.3); }
  50% { box-shadow: 0 0 30px rgba(67, 224, 247, 0.5); }
}

@keyframes bounce-down {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Verify CSS imports resolve**

This will be verified when the dev server starts after layout.tsx is created (Task 3).

- [ ] **Step 3: Commit**

```bash
git add webs/byte-folio/app/globals.css
git commit -m "feat(byte-folio): add globals.css with theme tokens + glassmorphism utilities"
```

---

### Task 3: Types and data files

**Files:**
- Create: `webs/byte-folio/lib/types.ts`
- Create: `webs/byte-folio/lib/data/site-config.ts`
- Create: `webs/byte-folio/lib/data/hero.ts`
- Create: `webs/byte-folio/lib/data/about.ts`
- Create: `webs/byte-folio/lib/data/experience.ts`
- Create: `webs/byte-folio/lib/data/projects.ts`
- Create: `webs/byte-folio/lib/data/skills.ts`

**Context:** All interfaces and data are defined in the spec §6.1 and §6.2. Data is static TypeScript — no API calls yet.

- [ ] **Step 1: Create lib/types.ts**

All interfaces from spec §6.1:
```typescript
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "facebook" | "email";
  url: string;
  label: string;
  showIn?: ("hero" | "contact" | "nav")[];
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  specialization: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutData {
  avatar: string;
  bio: string[];
  stats: Array<{ value: string; label: string }>;
  education: string;
  availability: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  company?: string;
  context?: string;
  techStack: string[];
  achievements: string[];
  accentColor: "primary" | "secondary" | "muted";
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnail?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  docsUrl?: string;
  isFeatured: boolean;
  sortOrder: number;
}

export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; iconName: string }>;
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
}
```

- [ ] **Step 2: Create lib/data/site-config.ts**

```typescript
import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Tony Nguyen",
  title: "Tony Nguyen | Senior Fullstack Developer",
  description:
    "Portfolio of Tony Nguyen — Senior Software Engineer specializing in .NET Core, React, Next.js, and microservices architecture. 8+ years building scalable systems across Singapore, Europe, and Vietnam.",
  url: "https://byte-folio.nkmnhan.com",
  ogImage: "/og-image.png",
  socialLinks: [
    {
      platform: "github",
      url: "https://github.com/nkmnhan",
      label: "GitHub",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/nkmnhan",
      label: "LinkedIn",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/nkmnhan",
      label: "Facebook",
      showIn: ["contact"],
    },
    {
      platform: "email",
      url: "mailto:nkmnhan@gmail.com",
      label: "Email",
    },
  ],
};
```

- [ ] **Step 3: Create lib/data/hero.ts**

```typescript
import type { HeroData } from "@/lib/types";

export const heroData: HeroData = {
  greeting: "Hi, I'm",
  name: "Tony Nguyen",
  title: "Senior Fullstack Developer",
  specialization: ".NET · React · Cloud Architecture",
  primaryCta: { label: "View My Work", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};
```

- [ ] **Step 4: Create lib/data/about.ts**

```typescript
import type { AboutData } from "@/lib/types";

export const aboutData: AboutData = {
  avatar: "https://avatars.githubusercontent.com/u/49507410?v=4",
  bio: [
    "I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture.",
    "I've built systems serving millions of users across Singapore, Europe, and Vietnam — from education platforms for Singapore's Ministry of Education to manufacturing systems for semiconductor factories.",
  ],
  stats: [
    { value: "8+", label: "Years" },
    { value: "14", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "3", label: "Countries" },
  ],
  education: "BSc IT — University of Information Technology",
  availability: "Based in Vietnam · Open to remote worldwide",
};
```

- [ ] **Step 5: Create lib/data/experience.ts**

```typescript
import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2024 — Present",
    title: "Independent Software Engineer",
    context: "Open Source & Side Projects",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "AWS", ".NET MAUI"],
    achievements: [
      "Built MediTrack — full-stack EMR with .NET microservices, React 19, Clara AI",
      "Created Aspire.Nexus — config-driven .NET Aspire orchestrator",
      "Built E-Portfolio platform with Next.js 16, R3F, Framer Motion",
    ],
    accentColor: "primary",
  },
  {
    period: "2019 — 2024",
    title: "Senior Software Engineer",
    company: "Orient Software / NASH TECH",
    techStack: [".NET Core", "Azure", "Docker", "RabbitMQ", "Entity Framework"],
    achievements: [
      "Led MOE Platform development (Singapore Ministry of Education)",
      "Architected Lowell Microservices for European clients",
      "Built Open Create platform for UK's Open University",
    ],
    accentColor: "secondary",
  },
  {
    period: "2016 — 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    techStack: ["IBM Frameworks", "Real-time Systems"],
    achievements: [
      "Built MES systems for semiconductor manufacturing",
      "Developed real-time monitoring dashboards",
    ],
    accentColor: "muted",
  },
];
```

- [ ] **Step 6: Create lib/data/projects.ts**

```typescript
import type { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    id: "meditrack",
    title: "MediTrack",
    subtitle: "Full-stack EMR with .NET microservices, React 19 & Clara AI",
    techStack: [".NET", "React", "Docker", "PostgreSQL", "RabbitMQ"],
    githubUrl: "https://github.com/nkmnhan/meditrack",
    liveUrl: "https://meditrack-styleguide.lovable.app/",
    isFeatured: true,
    sortOrder: 1,
  },
  {
    id: "aspire-nexus",
    title: "Aspire.Nexus",
    subtitle: "Config-driven .NET Aspire AppHost — orchestrate from JSON",
    techStack: [".NET", "Aspire", "Docker", "Microservices"],
    githubUrl: "https://github.com/nkmnhan/Aspire.Nexus",
    docsUrl: "https://learn.microsoft.com/en-us/dotnet/aspire/",
    isFeatured: true,
    sortOrder: 2,
  },
  {
    id: "e-portfolio",
    title: "E-Portfolio",
    subtitle: "Portfolio platform with Next.js 16, R3F & Framer Motion",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Three.js"],
    githubUrl: "https://github.com/nkmnhan/e-portfolio",
    liveUrl: "https://www.nkmnhan.com/",
    isFeatured: true,
    sortOrder: 3,
  },
  {
    id: "vue-identityserver4",
    title: "Vue-IdentityServer4",
    subtitle: "OAuth 2.0 + OpenID Connect demo with Vue.js + .NET",
    techStack: ["Vue", ".NET", "IdentityServer4", "OAuth"],
    githubUrl: "https://github.com/nkmnhan/Vue-Identityserver4",
    isFeatured: true,
    sortOrder: 4,
  },
  {
    id: "maui-mediatr",
    title: "MAUI.MediatR",
    subtitle: "Clean architecture with .NET MAUI + MediatR CQRS",
    techStack: [".NET", "MAUI", "MediatR", "CQRS"],
    githubUrl: "https://github.com/nkmnhan/MAUI.MediatR",
    isFeatured: true,
    sortOrder: 5,
  },
  {
    id: "elasticsearch-nest",
    title: "Elasticsearch NEST",
    subtitle: "Elasticsearch integration with .NET NEST client",
    techStack: [".NET", "Elasticsearch", "NEST"],
    githubUrl: "https://github.com/nkmnhan/elasticsearch-nest",
    isFeatured: false,
    sortOrder: 6,
  },
  {
    id: "vuejs-hot-reload-docker",
    title: "Vue.js Hot Reload Docker",
    subtitle: "Vue.js development with Docker hot reload support",
    techStack: ["Vue", "Docker"],
    githubUrl: "https://github.com/nkmnhan/vuejs-hot-reload-docker",
    isFeatured: false,
    sortOrder: 7,
  },
  {
    id: "resource-manager",
    title: "ResourceManager",
    subtitle: "Resource management application",
    techStack: [".NET"],
    githubUrl: "https://github.com/nkmnhan/ResourceManager",
    isFeatured: false,
    sortOrder: 8,
  },
  {
    id: "e-shop",
    title: "E-Shop",
    subtitle: "E-commerce application",
    techStack: [".NET", "Microservices"],
    githubUrl: "https://github.com/nkmnhan/E-Shop",
    isFeatured: false,
    sortOrder: 9,
  },
  {
    id: "sql-converter",
    title: "SQLConverter",
    subtitle: "SQL query conversion utility",
    techStack: [".NET", "SQL"],
    githubUrl: "https://github.com/nkmnhan/SQLConverter",
    isFeatured: false,
    sortOrder: 10,
  },
  {
    id: "push-notification",
    title: "Push Notification",
    subtitle: "Push notification service implementation",
    techStack: [".NET", "Firebase"],
    githubUrl: "https://github.com/nkmnhan/push-notification",
    isFeatured: false,
    sortOrder: 11,
  },
  {
    id: "hybrid-webview",
    title: "HybridWebView",
    subtitle: "Hybrid WebView for cross-platform apps",
    techStack: [".NET", "MAUI", "WebView"],
    githubUrl: "https://github.com/nickvdyck/HybridWebView",
    isFeatured: false,
    sortOrder: 12,
  },
  {
    id: "calendar-demo",
    title: "Calendar Demo",
    subtitle: "Calendar component demonstration",
    techStack: ["JavaScript"],
    githubUrl: "https://github.com/nkmnhan/calendar-demo",
    isFeatured: false,
    sortOrder: 13,
  },
  {
    id: "identityserver4-study",
    title: "IdentityServer4.Study",
    subtitle: "IdentityServer4 learning and experimentation",
    techStack: [".NET", "IdentityServer4"],
    githubUrl: "https://github.com/nkmnhan/IdentityServer4.Study",
    isFeatured: false,
    sortOrder: 14,
  },
];
```

- [ ] **Step 7: Create lib/data/skills.ts**

```typescript
import type { SkillCategory } from "@/lib/types";

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C#", iconName: "SiCsharp" },
      { name: "TypeScript", iconName: "SiTypescript" },
      { name: "JavaScript", iconName: "SiJavascript" },
      { name: "Python", iconName: "SiPython" },
      { name: "SQL", iconName: "SiPostgresql" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", iconName: "SiReact" },
      { name: "Next.js", iconName: "SiNextdotjs" },
      { name: "Vue.js", iconName: "SiVuedotjs" },
      { name: "Angular", iconName: "SiAngular" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss" },
      { name: "Framer Motion", iconName: "SiFramer" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: ".NET Core", iconName: "SiDotnet" },
      { name: "Node.js", iconName: "SiNodedotjs" },
      { name: "GraphQL", iconName: "SiGraphql" },
      { name: "gRPC", iconName: "SiGrpc" },
      { name: "SignalR", iconName: "SiDotnet" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", iconName: "SiPostgresql" },
      { name: "MongoDB", iconName: "SiMongodb" },
      { name: "Elasticsearch", iconName: "SiElasticsearch" },
      { name: "SQL Server", iconName: "SiMicrosoftsqlserver" },
      { name: "DynamoDB", iconName: "SiAmazondynamodb" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", iconName: "SiAmazonwebservices" },
      { name: "Azure", iconName: "SiMicrosoftazure" },
      { name: "Docker", iconName: "SiDocker" },
      { name: "Kubernetes", iconName: "SiKubernetes" },
      { name: "GitHub Actions", iconName: "SiGithubactions" },
      { name: "CI/CD", iconName: "SiJenkins" },
    ],
  },
  {
    name: "Architecture",
    skills: [
      { name: "Microservices", iconName: "SiApachekafka" },
      { name: "DDD", iconName: "SiDiagramsdotnet" },
      { name: "CQRS", iconName: "SiDiagramsdotnet" },
      { name: "Event-Driven", iconName: "SiRabbitmq" },
      { name: "MediatR", iconName: "SiDotnet" },
      { name: "SOLID", iconName: "SiDotnet" },
    ],
  },
];
```

- [ ] **Step 8: Create lib/data/contact.ts**

```typescript
import type { ContactData } from "@/lib/types";

export const contactData: ContactData = {
  heading: "send_transmission --to tony",
  description:
    "Open to senior roles and collaboration opportunities. Currently based in Vietnam, available for remote worldwide.",
  email: "nkmnhan@gmail.com",
};
```

- [ ] **Step 9: Create lib/data/sections.ts (shared by nav components)**

```typescript
export const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
```

- [ ] **Step 10: Create app/components/social-icons.ts (shared by hero, contact, social-float)**

```typescript
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

export const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  email: FaEnvelope,
};
```

- [ ] **Step 11: Create lib/services/github.ts (placeholder)**

```typescript
import type { Project } from "@/lib/types";
import { projectsData } from "@/lib/data/projects";

/**
 * Optionally enrich project data from GitHub API at build time.
 * Falls back to hardcoded data if GITHUB_TOKEN is not set or API fails.
 */
export async function getProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return projectsData;
  }

  try {
    const response = await fetch("https://api.github.com/users/nkmnhan/repos?per_page=100", {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 86400 }, // Revalidate daily
      signal: AbortSignal.timeout(3000), // 3s timeout
    });

    if (!response.ok) {
      return projectsData;
    }

    const repos = await response.json();

    // Enrich hardcoded data with fresh descriptions from GitHub
    return projectsData.map((project) => {
      const repo = repos.find(
        (r: { html_url: string }) =>
          r.html_url.toLowerCase() === project.githubUrl.toLowerCase()
      );
      if (repo && repo.description) {
        return { ...project, subtitle: repo.description };
      }
      return project;
    });
  } catch {
    return projectsData;
  }
}
```

- [ ] **Step 9: Commit**

```bash
git add webs/byte-folio/lib/
git commit -m "feat(byte-folio): add types, data files, and GitHub service"
```

---

### Task 4: Root layout + page shell

**Files:**
- Create: `webs/byte-folio/app/layout.tsx`
- Create: `webs/byte-folio/app/page.tsx`
- Create: `webs/byte-folio/app/components/terminal-heading.tsx`
- Create: `webs/byte-folio/app/components/section-wrapper.tsx`

- [ ] **Step 1: Create app/layout.tsx**

```tsx
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/data/site-config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Tony Nguyen",
    "Senior Software Engineer",
    ".NET Core",
    "React",
    "Next.js",
    "microservices",
    "fullstack developer",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description:
      "8+ years building scalable systems with .NET, React & cloud architecture",
    url: siteConfig.url,
    siteName: "Tony Nguyen Portfolio",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-text font-[family-name:var(--font-sans)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-bg focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Create app/components/terminal-heading.tsx (Server Component)**

```tsx
interface TerminalHeadingProps {
  command: string;
  className?: string;
}

export function TerminalHeading({ command, className = "" }: TerminalHeadingProps) {
  return (
    <h2
      className={`font-[family-name:var(--font-mono)] text-lg md:text-xl text-text-muted mb-8 ${className}`}
    >
      <span className="text-primary">{">"}</span> {command}
    </h2>
  );
}
```

- [ ] **Step 3: Create app/components/section-wrapper.tsx (Server Component)**

```tsx
interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-24 px-5 md:px-8 ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
```

- [ ] **Step 4: Create app/page.tsx (Server Component shell)**

Start with placeholder sections — each will be replaced with real components in later tasks.

```tsx
import { SectionWrapper } from "@/app/components/section-wrapper";
import { TerminalHeading } from "@/app/components/terminal-heading";

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero — Task 5 */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <p className="text-text-muted text-sm font-[family-name:var(--font-mono)]">Hi, I&apos;m</p>
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mt-2 glow-cyan-text">
            Tony Nguyen
          </h1>
          <p className="text-text-secondary mt-4 font-[family-name:var(--font-mono)]">
            &gt; Senior Fullstack Developer
          </p>
        </div>
      </section>

      {/* About — Task 6 */}
      <SectionWrapper id="about">
        <TerminalHeading command="about --verbose" />
        <p className="text-text-secondary">About section placeholder</p>
      </SectionWrapper>

      {/* Experience — Task 7 */}
      <SectionWrapper id="experience">
        <TerminalHeading command="career --timeline" />
        <p className="text-text-secondary">Experience section placeholder</p>
      </SectionWrapper>

      {/* Projects — Task 8 */}
      <SectionWrapper id="projects">
        <TerminalHeading command="ls ~/projects --featured" />
        <p className="text-text-secondary">Projects section placeholder</p>
      </SectionWrapper>

      {/* Skills — Task 9 */}
      <SectionWrapper id="skills">
        <TerminalHeading command="skills --categorize" />
        <p className="text-text-secondary">Skills section placeholder</p>
      </SectionWrapper>

      {/* Contact — Task 10 */}
      <SectionWrapper id="contact">
        <TerminalHeading command="send_transmission --to tony" />
        <p className="text-text-secondary">Contact section placeholder</p>
      </SectionWrapper>
    </main>
  );
}
```

- [ ] **Step 5: Verify dev server starts**

Run: `cd C:/GitSources/e-portfolio && pnpm dev:byte`
Expected: Next.js starts on port 3002, page renders with placeholder sections, space theme colors visible.

- [ ] **Step 6: Commit**

```bash
git add webs/byte-folio/app/
git commit -m "feat(byte-folio): add layout, page shell, terminal-heading, section-wrapper"
```

---

## Chunk 2: Hero + About + Experience Sections

### Task 5: Hero section with starfield

**Files:**
- Create: `webs/byte-folio/app/components/starfield-css.tsx`
- Create: `webs/byte-folio/app/components/hero.tsx`
- Modify: `webs/byte-folio/app/page.tsx` — replace hero placeholder

**Context:** The hero is 100vh with a starfield background, typing animation for the title, and two CTAs. Start with the CSS-only starfield (R3F starfield is a separate enhancement task). The hero must work on mobile-first.

- [ ] **Step 1: Create starfield-css.tsx**

CSS-only starfield with scattered dots via box-shadow. No WebGL.

```tsx
"use client";

export function StarfieldCSS() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(67, 224, 247, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(118, 73, 254, 0.06) 0%, transparent 50%)",
        }}
      />
      {/* Star layers at different sizes */}
      <div className="stars-sm absolute inset-0" />
      <div className="stars-md absolute inset-0" />
      <style>{`
        .stars-sm {
          background-image: radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 30% 65%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 50% 10%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 15% 90%, rgba(255,255,255,0.3) 50%, transparent 50%),
            radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 85% 15%, rgba(255,255,255,0.5) 50%, transparent 50%);
        }
        .stars-md {
          background-image: radial-gradient(2px 2px at 20% 30%, rgba(67,224,247,0.4) 50%, transparent 50%),
            radial-gradient(2px 2px at 40% 70%, rgba(118,73,254,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 75% 20%, rgba(255,255,255,0.6) 50%, transparent 50%),
            radial-gradient(2px 2px at 55% 85%, rgba(67,224,247,0.3) 50%, transparent 50%),
            radial-gradient(2px 2px at 5% 55%, rgba(248,188,4,0.3) 50%, transparent 50%);
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Create hero.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { heroData } from "@/lib/data/hero";
import { siteConfig } from "@/lib/data/site-config";
import { StarfieldCSS } from "./starfield-css";
import { socialIcons } from "./social-icons";

export function Hero() {
  const heroSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("hero")
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden"
    >
      <StarfieldCSS />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-text-muted text-sm font-[family-name:var(--font-mono)]"
        >
          {heroData.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mt-3 glow-cyan-text"
        >
          {heroData.name}
        </motion.h1>

        {/* Title with typing cursor */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-text-secondary mt-4 font-[family-name:var(--font-mono)] text-sm md:text-base"
        >
          <span className="text-primary">{">"}</span> {heroData.title}
          <span
            className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </motion.p>

        {/* Specialization */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-text-muted mt-2 font-[family-name:var(--font-mono)] text-xs md:text-sm"
        >
          <span className="text-primary">{">"}</span> {heroData.specialization}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href={heroData.primaryCta.href}
            className="px-6 py-3 bg-primary text-bg font-semibold rounded-lg glow-cyan hover:brightness-110 transition-all text-center"
          >
            {heroData.primaryCta.label}
          </a>
          <a
            href={heroData.secondaryCta.href}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-center"
          >
            {heroData.secondaryCta.label}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-6 flex gap-4 justify-center"
        >
          {heroSocials.map((link) => {
            const Icon = socialIcons[link.platform];
            return Icon ? (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="text-text-muted hover:text-primary transition-colors p-2"
              >
                <Icon className="w-5 h-5" />
              </a>
            ) : null;
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        style={{ animation: "bounce-down 2s ease-in-out infinite" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update page.tsx — replace hero placeholder with Hero component**

Replace the hero section in `page.tsx`:
```tsx
import { Hero } from "@/app/components/hero";
```
And replace the `<section id="hero">` placeholder with `<Hero />`.

- [ ] **Step 4: Verify hero renders**

Run: `pnpm dev:byte`
Expected: Full-height hero with starfield background, animated name, typing cursor, two CTAs, social links.

- [ ] **Step 5: Commit**

```bash
git add webs/byte-folio/app/components/starfield-css.tsx webs/byte-folio/app/components/hero.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add hero section with CSS starfield + typing animation"
```

---

### Task 6: About section

**Files:**
- Create: `webs/byte-folio/app/components/about.tsx`
- Modify: `webs/byte-folio/app/page.tsx` — replace about placeholder

- [ ] **Step 1: Create about.tsx**

```tsx
"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { aboutData } from "@/lib/data/about";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseInt(value);
  const suffix = value.replace(/\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, numericPart, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, numericPart]);

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center">
      <motion.span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-primary">
        {isNaN(numericPart) ? (
          value
        ) : (
          <>
            <motion.span>{rounded}</motion.span>
            {suffix}
          </>
        )}
      </motion.span>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <TerminalHeading command="about --verbose" />

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/50"
            style={{ animation: "breathe 3s ease-in-out infinite" }}
          >
            <Image
              src={aboutData.avatar}
              alt="Tony Nguyen — Senior Fullstack Developer"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Bio */}
        <div className="flex-1 text-center md:text-left">
          {aboutData.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-text-secondary text-sm md:text-base leading-relaxed mb-4"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
      >
        {aboutData.stats.map((stat) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.div>

      {/* Footer info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 text-text-muted text-sm"
      >
        <span>🎓 {aboutData.education}</span>
        <span>📍 {aboutData.availability}</span>
      </motion.div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Update page.tsx — import and use About**

```tsx
import { About } from "@/app/components/about";
```
Replace the about `<SectionWrapper>` placeholder with `<About />`.

- [ ] **Step 3: Verify about section renders**

Run: `pnpm dev:byte`
Expected: Avatar with glow ring, bio text, animated stat counters, education + location.

- [ ] **Step 4: Commit**

```bash
git add webs/byte-folio/app/components/about.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add about section with animated stats + scroll reveal"
```

---

### Task 7: Experience timeline

**Files:**
- Create: `webs/byte-folio/app/components/experience.tsx`
- Modify: `webs/byte-folio/app/page.tsx` — replace experience placeholder

- [ ] **Step 1: Create experience.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data/experience";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

const accentColors = {
  primary: "border-l-primary",
  secondary: "border-l-secondary",
  muted: "border-l-text-muted",
};

const dotColors = {
  primary: "bg-primary shadow-[0_0_10px_rgba(67,224,247,0.5)]",
  secondary: "bg-secondary shadow-[0_0_10px_rgba(118,73,254,0.5)]",
  muted: "bg-text-muted",
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <TerminalHeading command="career --timeline" />

      <div className="relative">
        {/* Timeline spine (visible on md+) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experienceData.map((entry, index) => (
            <motion.div
              key={entry.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative md:flex md:justify-center"
            >
              {/* Period label */}
              <div className="text-sm font-[family-name:var(--font-mono)] text-text-muted mb-2 md:absolute md:top-0 md:-translate-y-8 md:left-1/2 md:-translate-x-1/2 md:whitespace-nowrap">
                {entry.period}
              </div>

              {/* Timeline dot (mobile: left, desktop: center) */}
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-4 w-3 h-3 rounded-full ${dotColors[entry.accentColor]}`}
              />

              {/* Card */}
              <div
                className={`ml-6 md:ml-0 md:max-w-lg glass rounded-xl p-5 border-l-2 ${accentColors[entry.accentColor]}`}
              >
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)]">
                  {entry.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {entry.company || entry.context}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {entry.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="mt-3 space-y-1">
                  {entry.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="text-text-secondary text-sm flex gap-2"
                    >
                      <span className="text-primary shrink-0">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline line for mobile */}
        <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-border -z-10" />
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Update page.tsx — import and use Experience**

```tsx
import { Experience } from "@/app/components/experience";
```
Replace the experience `<SectionWrapper>` placeholder with `<Experience />`.

- [ ] **Step 3: Verify timeline renders**

Run: `pnpm dev:byte`
Expected: Vertical timeline with 3 entries, color-coded dots, tech badges, achievements.

- [ ] **Step 4: Commit**

```bash
git add webs/byte-folio/app/components/experience.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add experience timeline with scroll animation"
```

---

## Chunk 3: Projects + Skills + Contact Sections

### Task 8: Projects section with cards

**Files:**
- Create: `webs/byte-folio/app/components/project-card.tsx`
- Create: `webs/byte-folio/app/components/projects.tsx`
- Modify: `webs/byte-folio/app/page.tsx`

- [ ] **Step 1: Create project-card.tsx**

```tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rotateX: y * -8, rotateY: x * 8 });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  const primaryLink = project.liveUrl || project.docsUrl;
  const primaryLabel = project.liveUrl ? "Live" : project.docsUrl ? "Docs" : null;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-xl overflow-hidden transition-transform duration-200"
      style={{
        perspective: "800px",
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      {/* Thumbnail placeholder */}
      {project.thumbnail && (
        <div className="relative aspect-video bg-surface overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)]">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mt-1 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {primaryLink && primaryLabel && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
              {primaryLabel}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface text-text-secondary rounded-lg hover:text-text hover:bg-surface-hover transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create projects.tsx**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data/projects";
import { ProjectCard } from "./project-card";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const featured = projectsData
    .filter((p) => p.isFeatured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const secondary = projectsData
    .filter((p) => !p.isFeatured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const visibleProjects = showAll ? [...featured, ...secondary] : featured;

  return (
    <SectionWrapper id="projects">
      <TerminalHeading command="ls ~/projects --featured" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {!showAll && secondary.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-[family-name:var(--font-mono)] text-sm"
          >
            View All ({projectsData.length}) →
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
```

- [ ] **Step 3: Update page.tsx — import and use Projects**

```tsx
import { Projects } from "@/app/components/projects";
```
Replace the projects `<SectionWrapper>` placeholder with `<Projects />`.

- [ ] **Step 4: Verify projects render**

Run: `pnpm dev:byte`
Expected: 5 featured project cards in 2-col grid (desktop), 1-col (mobile), "View All" button expands to 14.

- [ ] **Step 5: Commit**

```bash
git add webs/byte-folio/app/components/project-card.tsx webs/byte-folio/app/components/projects.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add projects section with glassmorphism cards + 3D tilt"
```

---

### Task 9: Skills section

**Files:**
- Create: `webs/byte-folio/app/components/skill-icon.tsx`
- Create: `webs/byte-folio/app/components/skills.tsx`
- Modify: `webs/byte-folio/app/page.tsx`

- [ ] **Step 1: Create skill-icon.tsx**

```tsx
"use client";

import {
  SiCsharp, SiTypescript, SiJavascript, SiPython, SiPostgresql,
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, SiFramer,
  SiDotnet, SiNodedotjs, SiGraphql, SiGrpc,
  SiMongodb, SiElasticsearch, SiMicrosoftsqlserver, SiAmazondynamodb,
  SiAmazonwebservices, SiMicrosoftazure, SiDocker, SiKubernetes, SiGithubactions, SiJenkins,
  SiApachekafka, SiDiagramsdotnet, SiRabbitmq,
} from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiCsharp, SiTypescript, SiJavascript, SiPython, SiPostgresql,
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTailwindcss, SiFramer,
  SiDotnet, SiNodedotjs, SiGraphql, SiGrpc,
  SiMongodb, SiElasticsearch, SiMicrosoftsqlserver, SiAmazondynamodb,
  SiAmazonwebservices, SiMicrosoftazure, SiDocker, SiKubernetes, SiGithubactions, SiJenkins,
  SiApachekafka, SiDiagramsdotnet, SiRabbitmq,
};

interface SkillIconProps {
  name: string;
  iconName: string;
}

export function SkillIcon({ name, iconName }: SkillIconProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center group-hover:glow-cyan transition-shadow">
        {Icon ? (
          <Icon className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" />
        ) : (
          <span className="text-xs text-text-muted">{name.slice(0, 2)}</span>
        )}
      </div>
      <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors text-center">
        {name}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Create skills.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data/skills";
import { SkillIcon } from "./skill-icon";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <TerminalHeading command="skills --categorize" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {category.skills.map((skill) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  iconName={skill.iconName}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 3: Update page.tsx — import and use Skills**

```tsx
import { Skills } from "@/app/components/skills";
```
Replace the skills `<SectionWrapper>` placeholder with `<Skills />`.

- [ ] **Step 4: Verify skills render**

Run: `pnpm dev:byte`
Expected: 6 categories, icons with hover glow, 5-col grid on mobile, 3-col category layout on desktop.

- [ ] **Step 5: Commit**

```bash
git add webs/byte-folio/app/components/skill-icon.tsx webs/byte-folio/app/components/skills.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add skills section with icon grid + hover glow"
```

---

### Task 10: Contact section

**Files:**
- Create: `webs/byte-folio/app/components/contact.tsx`
- Modify: `webs/byte-folio/app/page.tsx`

- [ ] **Step 1: Create contact.tsx**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/site-config";
import { contactData } from "@/lib/data/contact";
import { socialIcons } from "./social-icons";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const contactSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("contact")
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:nkmnhan@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  }

  return (
    <SectionWrapper id="contact">
      <TerminalHeading command="send_transmission --to tony" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <p className="text-text-secondary text-sm text-center mb-8">
          {contactData.description}
        </p>

        <form onSubmit={handleSubmit} className="glass rounded-xl p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-text-secondary mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-surface text-text rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-text-secondary mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-surface text-text rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-text-secondary mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 bg-surface text-text rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-bg font-semibold rounded-lg glow-cyan hover:brightness-110 transition-all"
          >
            🚀 Launch Message
          </button>

          {isSent && (
            <p className="text-center text-sm text-success">
              Message prepared — check your email client.
            </p>
          )}
        </form>

        {/* Direct email */}
        <p className="text-center mt-6">
          <a
            href="mailto:nkmnhan@gmail.com"
            className="text-primary hover:underline text-sm font-[family-name:var(--font-mono)]"
          >
            nkmnhan@gmail.com
          </a>
        </p>

        {/* Social links */}
        <div className="flex gap-4 justify-center mt-4">
          {contactSocials.map((link) => {
            const Icon = socialIcons[link.platform];
            return Icon ? (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-3 text-text-muted hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ) : null;
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Update page.tsx — import and use Contact**

```tsx
import { Contact } from "@/app/components/contact";
```
Replace the contact `<SectionWrapper>` placeholder with `<Contact />`.

- [ ] **Step 3: Verify contact renders**

Run: `pnpm dev:byte`
Expected: Centered form card with glassmorphism, labels, submit opens mailto:, social icons below.

- [ ] **Step 4: Commit**

```bash
git add webs/byte-folio/app/components/contact.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add contact section with mailto: form + social links"
```

---

## Chunk 4: Navigation + Polish

### Task 11: Navigation — desktop dot sidebar + mobile bottom bar

**Files:**
- Create: `webs/byte-folio/app/components/nav-dots.tsx`
- Create: `webs/byte-folio/app/components/nav-mobile.tsx`
- Create: `webs/byte-folio/app/components/social-float.tsx`
- Modify: `webs/byte-folio/app/page.tsx`

- [ ] **Step 1: Create nav-dots.tsx (desktop scroll-spy)**

```tsx
"use client";

import { useState, useEffect } from "react";
import { sections } from "@/lib/data/sections";

export function NavDots() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      aria-label="Page sections"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <span className="absolute right-6 px-2 py-1 text-xs text-text bg-surface rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
          {/* Dot */}
          <span
            className={`w-3 h-3 rounded-full transition-all ${
              activeSection === id
                ? "bg-primary glow-cyan scale-125"
                : "bg-text-muted/30 hover:bg-text-muted/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
```

- [ ] **Step 2: Create nav-mobile.tsx (bottom bar + sheet)**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaChevronUp, FaXmark } from "react-icons/fa6";
import { siteConfig } from "@/lib/data/site-config";
import { sections } from "@/lib/data/sections";
import { socialIcons } from "./social-icons";

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const navSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("nav")
  );

  return (
    <>
      {/* Bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/50">
        <div className="flex justify-between items-center px-5 py-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-text-secondary text-sm"
            aria-label="Open navigation menu"
          >
            <FaBars className="w-4 h-4" />
            Menu
          </button>
          <a
            href="#hero"
            className="flex items-center gap-2 text-text-secondary text-sm"
          >
            <FaChevronUp className="w-4 h-4" />
            Top
          </a>
        </div>
      </div>

      {/* Slide-up sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-50 bg-black/60"
            />
            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass rounded-t-2xl border-t border-border/50"
            >
              <div className="p-5">
                {/* Handle */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-1 rounded-full bg-text-muted/30" />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-text-muted"
                  aria-label="Close navigation menu"
                >
                  <FaXmark className="w-5 h-5" />
                </button>

                {/* Section links */}
                <nav aria-label="Page sections">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-text-secondary hover:text-primary transition-colors text-base"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                {/* Social links */}
                <div className="flex gap-4 mt-4 pt-4 border-t border-border/30">
                  {navSocials.map((link) => {
                    const Icon = socialIcons[link.platform];
                    return Icon ? (
                      <a
                        key={link.platform}
                        href={link.url}
                        target={link.platform !== "email" ? "_blank" : undefined}
                        rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                        aria-label={link.label}
                        className="p-2 text-text-muted hover:text-primary transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 3: Create social-float.tsx (desktop floating column)**

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data/site-config";
import { socialIcons } from "./social-icons";

export function SocialFloat() {
  const [isVisible, setIsVisible] = useState(false);

  const heroSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("hero")
  );

  useEffect(() => {
    function handleScroll() {
      // Show after scrolling past hero (100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
        >
          {heroSocials.map((link) => {
            const Icon = socialIcons[link.platform];
            return Icon ? (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-2 text-text-muted hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ) : null;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 4: Update page.tsx — add all navigation components**

Import and add to page.tsx:
```tsx
import { NavDots } from "@/app/components/nav-dots";
import { NavMobile } from "@/app/components/nav-mobile";
import { SocialFloat } from "@/app/components/social-float";
```

Add before `</main>` closing tag:
```tsx
<NavDots />
<NavMobile />
<SocialFloat />
```

- [ ] **Step 5: Verify navigation works**

Run: `pnpm dev:byte`
Expected:
- Desktop: dot sidebar on right, floating social on left (after scrolling past hero), smooth scroll
- Mobile: bottom bar with Menu/Top, sheet slides up with section links

- [ ] **Step 6: Commit**

```bash
git add webs/byte-folio/app/components/nav-dots.tsx webs/byte-folio/app/components/nav-mobile.tsx webs/byte-folio/app/components/social-float.tsx webs/byte-folio/app/page.tsx
git commit -m "feat(byte-folio): add navigation — desktop dots + mobile bottom bar + social float"
```

---

### Task 12: R3F starfield (lazy-loaded enhancement)

**Files:**
- Create: `webs/byte-folio/app/components/starfield.tsx`
- Modify: `webs/byte-folio/app/components/hero.tsx` — swap starfield based on capability
- Modify: `webs/byte-folio/package.json` — add R3F deps

- [ ] **Step 1: Add R3F dependencies**

Add to `webs/byte-folio/package.json` dependencies:
```json
"@react-three/fiber": "^8.17.0",
"@react-three/drei": "^9.120.0",
"three": "^0.170.0"
```

Run: `cd C:/GitSources/e-portfolio && pnpm install`

- [ ] **Step 2: Create starfield.tsx (R3F)**

```tsx
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Points } from "three";

function RotatingStars({ count }: { count: number }) {
  const ref = useRef<Points>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.01;
    }
  });

  return (
    <Stars
      ref={ref}
      radius={100}
      depth={50}
      count={count}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export function Starfield({ count = 2000 }: { count?: number }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars count={count} />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 3: Update hero.tsx — lazy-load R3F starfield with CSS fallback**

Add at top of hero.tsx:
```tsx
import dynamic from "next/dynamic";

const StarfieldR3F = dynamic(
  () => import("./starfield").then((mod) => ({ default: mod.Starfield })),
  { ssr: false }
);
```

Replace `<StarfieldCSS />` in the hero with:
```tsx
function HeroBackground() {
  const [useWebGL, setUseWebGL] = useState(false);
  const [starCount, setStarCount] = useState(2000);

  useEffect(() => {
    const hasPower = (navigator.hardwareConcurrency ?? 1) >= 4;
    const isDesktop = window.innerWidth >= 768;
    setUseWebGL(hasPower && isDesktop);
    setStarCount(window.innerWidth >= 1280 ? 2000 : 800);
  }, []);

  if (useWebGL) {
    return <StarfieldR3F count={starCount} />;
  }

  return <StarfieldCSS />;
}
```

Then use `<HeroBackground />` instead of `<StarfieldCSS />`.

Add `import { useState, useEffect } from "react";` if not already imported.

- [ ] **Step 4: Verify R3F starfield loads on desktop**

Run: `pnpm dev:byte`
Expected: On desktop with 4+ cores → rotating 3D starfield. On mobile/low-power → CSS gradient dots.

- [ ] **Step 5: Commit**

```bash
git add webs/byte-folio/app/components/starfield.tsx webs/byte-folio/app/components/hero.tsx webs/byte-folio/package.json pnpm-lock.yaml
git commit -m "feat(byte-folio): add R3F starfield with lazy loading + CSS fallback"
```

---

### Task 13: SEO — JSON-LD structured data

**Files:**
- Modify: `webs/byte-folio/app/layout.tsx` — add JSON-LD script

- [ ] **Step 1: Add JSON-LD to layout.tsx**

Add inside `<head>` (or as a child of `<body>` before `{children}`):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Tony Nguyen",
          jobTitle: "Senior Fullstack Developer",
          url: siteConfig.url,
          sameAs: [
            "https://github.com/nkmnhan",
            "https://linkedin.com/in/nkmnhan",
          ],
          knowsAbout: [
            ".NET Core", "React", "Next.js", "TypeScript",
            "Microservices", "Docker", "AWS", "Azure",
          ],
        },
        {
          "@type": "WebSite",
          name: "Tony Nguyen Portfolio",
          url: siteConfig.url,
          author: { "@type": "Person", name: "Tony Nguyen" },
        },
        {
          "@type": "SiteNavigationElement",
          name: ["About", "Experience", "Projects", "Skills", "Contact"],
          url: [
            `${siteConfig.url}#about`,
            `${siteConfig.url}#experience`,
            `${siteConfig.url}#projects`,
            `${siteConfig.url}#skills`,
            `${siteConfig.url}#contact`,
          ],
        },
      ],
    }),
  }}
/>
```

- [ ] **Step 2: Commit**

```bash
git add webs/byte-folio/app/layout.tsx
git commit -m "feat(byte-folio): add JSON-LD structured data for SEO"
```

---

### Task 14: Final verification + build

- [ ] **Step 1: Run lint**

Run: `cd C:/GitSources/e-portfolio && pnpm --filter byte-folio lint`
Expected: No errors (warnings ok).

- [ ] **Step 2: Run build**

Run: `cd C:/GitSources/e-portfolio && pnpm --filter byte-folio build`
Expected: Build succeeds. Check output for bundle size against 200KB budget.

- [ ] **Step 3: Verify dev server — full walkthrough**

Run: `pnpm dev:byte`

Checklist:
- [ ] Hero: starfield renders, name glows, typing cursor blinks, CTAs work
- [ ] About: avatar has glow ring, stats count up, bio fades in
- [ ] Experience: timeline nodes visible, cards slide in, tech badges shown
- [ ] Projects: 5 featured cards, 3D tilt on desktop, "View All" expands
- [ ] Skills: 6 categories, icons glow on hover
- [ ] Contact: form submits via mailto:, toast appears, social links work
- [ ] Navigation: desktop dots scroll-spy, mobile bottom bar + sheet
- [ ] Social float: appears after scrolling past hero (desktop only)
- [ ] Skip link: Tab into page → "Skip to main content" visible
- [ ] Reduced motion: set `prefers-reduced-motion: reduce` → no animations

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat(byte-folio): complete byte-folio portfolio — all 6 sections + navigation"
```
