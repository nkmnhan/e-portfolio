# @eportfolio/data — Shared Data Package Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `@eportfolio/data` package centralizing career/profile data, then wire byte-folio (priority) and portfolio-nextjs as consumers.

**Architecture:** New `packages/data/` with raw TypeScript source (no build step, same pattern as `@eportfolio/ui` and `@eportfolio/theme`). Types based on byte-folio's existing `lib/types.ts`. Each consumer imports shared data and extends with app-specific presentation fields (e.g., `accentColor`, `sections`).

**Tech Stack:** TypeScript, pnpm workspace protocol

---

## Task 1: Create `@eportfolio/data` package scaffold

**Files:**
- Create: `packages/data/package.json`
- Create: `packages/data/tsconfig.json`

- [ ] **Step 1: Create package.json**

```json
{
  "name": "@eportfolio/data",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./types": "./src/types.ts",
    "./profile": "./src/profile.ts",
    "./experience": "./src/experience.ts",
    "./projects": "./src/projects.ts",
    "./skills": "./src/skills.ts",
    "./contact": "./src/contact.ts"
  }
}
```

- [ ] **Step 2: Create tsconfig.json**

Same as `@eportfolio/ui`'s tsconfig.

- [ ] **Step 3: Commit**

```bash
git add packages/data/
git commit -m "chore(data): scaffold @eportfolio/data package"
```

---

## Task 2: Create shared types

**Files:**
- Create: `packages/data/src/types.ts`

Based on byte-folio's types, but without presentation-specific fields (`accentColor`, `showIn`, CTAs). Those stay in each consumer.

- [ ] **Step 1: Write types.ts**

```ts
export interface ProfileData {
  name: string;
  title: string;
  email: string;
  avatar: string;
  bio: string[];
  experience: string;
  education: string;
  availability: string;
  stats: Array<{ value: string; label: string }>;
  githubBadges: string[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "facebook" | "email";
  url: string;
  label: string;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  techStack: string[];
  achievements: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  subtitle: string;
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
  email: string;
  availability: string;
  socialLinks: SocialLink[];
}
```

- [ ] **Step 2: Commit**

```bash
git add packages/data/src/types.ts
git commit -m "feat(data): add shared type definitions"
```

---

## Task 3: Create shared data files

**Files:**
- Create: `packages/data/src/profile.ts`
- Create: `packages/data/src/experience.ts`
- Create: `packages/data/src/projects.ts`
- Create: `packages/data/src/skills.ts`
- Create: `packages/data/src/contact.ts`
- Create: `packages/data/src/index.ts`

- [ ] **Step 1: Write profile.ts**

Source of truth for name, title, bio, stats, education, GitHub badges. Content merged from byte-folio's `hero.ts` + `about.ts` + portfolio's `data.tsx`.

```ts
import type { ProfileData } from "./types";

export const profile: ProfileData = {
  name: "Tony Nguyen",
  title: "Senior Software Engineer",
  email: "nkmnhan@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/49507410?v=4",
  bio: [
    "Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 9+ years of experience specializing in .NET Core, Angular, microservices architecture, and cloud-native solutions.",
    "Currently at Orient Software, I'm building enterprise HR & Talent Management features on the BravoSUITE platform using .NET 9 microservices and Angular micro-frontends. Previously, I led development on Singapore's Ministry of Education platform with .NET MAUI and AWS.",
    "Beyond work, I continuously sharpen my skills through open-source projects on GitHub — from IdentityServer4 integrations and Elasticsearch experiments to Vue.js Docker workflows.",
  ],
  experience: "9+",
  education: "BSc IT — University of Information Technology",
  availability: "Based in Vietnam · Open to remote worldwide",
  stats: [
    { value: "9+", label: "Years" },
    { value: "14", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "3", label: "Countries" },
  ],
  githubBadges: ["Pull Shark (x2)", "Pair Extraordinaire", "YOLO"],
};
```

- [ ] **Step 2: Write experience.ts**

Career timeline — single source of truth.

```ts
import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    period: "2019 — Present",
    title: "Senior Software Engineer",
    company: "Orient Software",
    techStack: [".NET 9", "Angular", ".NET Core", "Azure", "AWS", "Docker", "RabbitMQ"],
    achievements: [
      "Building BravoSUITE — enterprise HR & Talent Management platform with .NET 9 microservices and Angular micro-frontends",
      "Led MOE Platform development for Singapore's Ministry of Education (2020–2025)",
      "Architected Lowell Microservices for European clients",
      "Built Open Create platform for UK's Open University",
    ],
  },
  {
    period: "2018 — 2019",
    title: "Software Engineer",
    company: "NASH TECH",
    techStack: [".NET Core", "Azure", "Docker", "Microservices"],
    achievements: [
      "Deepened expertise in microservices and cloud architecture",
      "Contributed to enterprise-grade distributed systems",
    ],
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
  },
];
```

- [ ] **Step 3: Write projects.ts**

All projects from byte-folio's data (14 projects).

```ts
import type { ProjectEntry } from "./types";

export const projects: ProjectEntry[] = [
  // ... exact same data as byte-folio's projectsData
];
```

- [ ] **Step 4: Write skills.ts**

Skills by category from byte-folio's data (6 categories).

```ts
import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  // ... exact same data as byte-folio's skillsData
];
```

- [ ] **Step 5: Write contact.ts**

```ts
import type { ContactData, SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  { platform: "github", url: "https://github.com/nkmnhan", label: "GitHub" },
  { platform: "linkedin", url: "https://linkedin.com/in/nkmnhan", label: "LinkedIn" },
  { platform: "facebook", url: "https://facebook.com/nkmnhan", label: "Facebook" },
  { platform: "email", url: "mailto:nkmnhan@gmail.com", label: "Email" },
];

export const contact: ContactData = {
  email: "nkmnhan@gmail.com",
  availability: "Based in Vietnam · Open to remote worldwide",
  socialLinks,
};
```

- [ ] **Step 6: Write index.ts barrel**

```ts
export { profile } from "./profile";
export { experience } from "./experience";
export { projects } from "./projects";
export { skills } from "./skills";
export { contact, socialLinks } from "./contact";
export type * from "./types";
```

- [ ] **Step 7: Commit**

```bash
git add packages/data/src/
git commit -m "feat(data): add shared profile, experience, projects, skills, and contact data"
```

---

## Task 4: Wire byte-folio as consumer

**Files:**
- Modify: `webs/byte-folio/package.json` — add `@eportfolio/data` dep
- Modify: `webs/byte-folio/next.config.ts` — add to `transpilePackages`
- Rewrite: `webs/byte-folio/lib/data/experience.ts` — import from `@eportfolio/data`, add `accentColor`
- Rewrite: `webs/byte-folio/lib/data/hero.ts` — derive from `@eportfolio/data/profile`
- Rewrite: `webs/byte-folio/lib/data/about.ts` — derive from `@eportfolio/data/profile`
- Rewrite: `webs/byte-folio/lib/data/projects.ts` — import from `@eportfolio/data`
- Rewrite: `webs/byte-folio/lib/data/skills.ts` — import from `@eportfolio/data`
- Rewrite: `webs/byte-folio/lib/data/contact.ts` — derive from `@eportfolio/data`
- Rewrite: `webs/byte-folio/lib/data/site-config.ts` — derive from `@eportfolio/data`
- Keep: `webs/byte-folio/lib/types.ts` — byte-folio-specific types that extend shared types (e.g., with `accentColor`, `showIn`, CTAs)

Each file imports shared data, then adds byte-folio presentation concerns.

- [ ] **Step 1: Add dependency and transpile config**
- [ ] **Step 2: Rewrite each data file to import from `@eportfolio/data`**
- [ ] **Step 3: Verify build** — `pnpm --filter byte-folio build`
- [ ] **Step 4: Commit**

```bash
git commit -m "refactor(byte-folio): consume @eportfolio/data for shared career data"
```

---

## Task 5: Wire portfolio-nextjs as consumer

**Files:**
- Modify: `webs/portfolio-nextjs/package.json` — add `@eportfolio/data` dep
- Modify: `webs/portfolio-nextjs/next.config.ts` — add to `transpilePackages`
- Rewrite: `webs/portfolio-nextjs/app/about/data.tsx` — derive from `@eportfolio/data`
- Rewrite: `webs/portfolio-nextjs/app/about/content.tsx` — remove duplicated data, import from `data.tsx`

- [ ] **Step 1: Add dependency and transpile config**
- [ ] **Step 2: Rewrite data.tsx to derive from shared data**
- [ ] **Step 3: Clean up content.tsx duplication**
- [ ] **Step 4: Verify build** — `pnpm --filter portfolio-nextjs build`
- [ ] **Step 5: Commit**

```bash
git commit -m "refactor(portfolio): consume @eportfolio/data, eliminate data duplication"
```

---

## Task 6: Update byte-folio about data (consistency fix)

The shared `profile.ts` has `9+` years and updated bio. Byte-folio's `about.ts` currently says `8+`. After wiring, byte-folio auto-gets the correct data.

- [ ] **Step 1: Verify byte-folio about section shows updated stats**
- [ ] **Step 2: Verify site-config description is consistent**

---

## Task 7: Final verification

- [ ] **Step 1: `pnpm install`**
- [ ] **Step 2: `pnpm -r build`** — all three apps build
- [ ] **Step 3: Commit and push**
