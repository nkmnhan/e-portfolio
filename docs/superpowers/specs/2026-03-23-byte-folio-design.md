# Byte-Folio Design Spec — "Cosmic Journey"

**Date**: 2026-03-23
**Author**: Tony Nguyen + Claude
**Status**: Approved
**Project**: `webs/byte-folio/` (port 3002)

---

## 1. Overview

Byte-folio is a senior fullstack developer portfolio with a space/cosmic theme. It presents Tony Nguyen's career, projects, and skills through a cinematic single-page scroll experience. The portfolio itself demonstrates the exact frontend skills it claims — R3F, Framer Motion, scroll-driven animation, responsive design, accessibility, and performance.

**Target audiences:**
- Recruiters (5-second scan → project evidence → contact)
- Hiring managers (case study depth, code quality via GitHub links)
- Peers/collaborators (technical credibility, open source work)

**Key differentiator from portfolio-nextjs:** portfolio-nextjs uses a sidebar drawer, multi-page layout, and Disney-inspired cinematic aesthetic. Byte-folio uses a single-page scroll journey with space theme, terminal motifs, glassmorphism, and R3F starfield.

---

## 2. Design System

### 2.1 Color Palette — "Deep Space Operations"

Byte-folio uses the `@eportfolio/theme` derivation engine. The 5 brand colors below are fed into `deriveTheme()` which generates 100+ CSS variables (perceptual scales 50–950, semantic colors, surface/border tokens). The "Derived examples" column shows what the engine produces — these are not hand-picked.

**Brand colors (input to derivation engine):**

| Role | Hex | Usage |
|------|-----|-------|
| `background` | `#020614` | Page background (void) |
| `foreground` | `#e9fbff` | Body text (star white) |
| `primary` | `#43e0f7` | CTAs, links, active nav (cyan glow) |
| `secondary` | `#7649fe` | Tags, secondary actions (nebula purple) |
| `accent` | `#f8bc04` | Highlights, special badges (supernova gold) |

These are registered in `@eportfolio/theme/color-themes.ts` as the `"space-cosmic"` palette. The derivation engine then generates all tokens: `--color-bg`, `--color-surface`, `--color-primary-500`, `--color-border`, `--color-success`, etc.

**Derived examples (auto-generated, not hand-picked):**

| Token | Approximate value | Purpose |
|-------|-------------------|---------|
| `--color-surface` | background + 8% lightness | Cards, panels |
| `--color-surface-hover` | background + 12% lightness | Hover states |
| `--color-primary-50` | primary at 8% lightness | Subtle primary bg |
| `--color-primary-500` | primary at base | Solid primary |
| `--color-primary-700` | primary at 70% lightness | Prominent text |
| `--color-border` | background hue at 20% lightness | Borders |
| `--color-text-muted` | foreground at 44% lightness | Muted captions |

**No manual token overrides.** All colors come from the derivation engine. If a derived color needs adjustment, update the 5 brand inputs or add a semantic override in the `color-themes.ts` entry.

### 2.2 Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display/Headings | Space Grotesk | 700 | Hero name, section titles |
| Body | Inter | 400/500 | Paragraphs, descriptions |
| Terminal/Code | JetBrains Mono | 400 | Section headings (`> about --verbose`), typing effects, code |

All fonts loaded via `next/font/google` with `display: swap`.

### 2.3 Spacing & Layout

- Base unit: 4px (Tailwind default)
- Container: `max-w-5xl` (1024px) centered
- Section padding: `py-20 md:py-24` (80–96px)
- Card padding: `p-5 md:p-6` (20–24px)
- Mobile gutter: `px-5` (20px)
- Desktop gutter: `px-8` (32px)

### 2.4 Effects

| Effect | CSS | Usage |
|--------|-----|-------|
| Glassmorphism | `bg-[#0a1628]/70 backdrop-blur-xl border border-[#1e3a5f]/50` | Cards, form, nav sheet |
| Cyan glow | `shadow-[0_0_20px_rgba(79,208,255,0.3)]` | CTAs, active nav, photo border |
| 3D tilt | `perspective: 800px; rotateX/Y` on mousemove | Project cards (desktop only) |
| Text glow | `text-shadow: 0 0 10px rgba(79,208,255,0.5)` | Hero name |

---

## 3. Page Sections

### 3.1 Hero (100vh)

**Purpose:** Identity statement in under 5 seconds.

**Content:**

| Field | Value | Source |
|-------|-------|--------|
| greeting | "Hi, I'm" | Static |
| name | "Tony Nguyen" | Static |
| title | "Senior Fullstack Developer" | Static |
| specialization | ".NET · React · Cloud Architecture" | Static |
| primaryCta | "View My Work" → scroll to Projects | Static |
| secondaryCta | "Get In Touch" → scroll to Contact | Static |
| socialLinks | GitHub, LinkedIn, Email | Static |

**Layout — Mobile (375px):**

```
┌───────────────────────┐
│  ✦  ·    ✦       ·    │ R3F starfield
│     ·        ✦        │ (CSS gradient
│         ✦     ·       │  fallback on
│                       │  low-power)
│                       │
│       Hi, I'm         │ text-sm muted
│                       │
│    TONY NGUYEN        │ text-3xl bold
│                       │
│  > Senior Fullstack   │ JetBrains Mono
│    Developer_         │ text-sm, typing
│                       │
│  > .NET · React ·     │
│    Cloud Architecture │
│                       │
│   ┌─────────────────┐ │
│   │  View My Work   │ │ Full-width CTA
│   └─────────────────┘ │
│   ┌─────────────────┐ │
│   │  Get In Touch   │ │ Ghost button
│   └─────────────────┘ │
│                       │
│  [GH] [LI] [✉]       │ Social row
│         ↓             │ Scroll cue
└───────────────────────┘
```

**Layout — Desktop (1280px+):**

```
┌─────────────────────────────────────────────────────────────────┐
│  ✦  ·    ✦       ·     ✦        ·        ✦     ·       ✦     │
│                                                                 │
│  [GH]              Hi, I'm                                     │
│  [LI]                                                          │
│  [✉ ]              TONY NGUYEN                      ┌──┐      │
│                                                      │● │ nav  │
│                     > Senior Fullstack Developer_     │○ │ dots │
│                     > .NET · React · Cloud Arch.      │○ │      │
│                                                      └──┘      │
│                     [ View My Work ]  [ Get In Touch ]         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Interactions:**
- R3F starfield with parallax depth (near stars drift faster)
- Name fades in with character-by-character animation (Framer Motion)
- Subtitle types out with blinking cursor (CSS animation)
- CTAs have cyan glow pulse on hover
- Scroll indicator bounces at bottom (CSS `@keyframes`)
- `prefers-reduced-motion`: all animations disabled, content visible immediately

**Starfield performance:**
- Desktop: R3F `<Stars>` from `@react-three/drei`, ~2000 points
- Tablet: R3F with ~800 points
- Mobile / low-power: CSS radial gradient + scattered `box-shadow` dots (no WebGL)
- Detection: check `navigator.hardwareConcurrency` and viewport width

---

### 3.2 About (auto height, ~100vh)

**Purpose:** Human connection + credibility.

**Content:**

| Field | Value | Source |
|-------|-------|--------|
| heading | `> about --verbose` | Terminal motif |
| avatar | `https://avatars.githubusercontent.com/u/49507410?v=4` | GitHub API |
| bio (p1) | "I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture." | Portfolio data |
| bio (p2) | "I've built systems serving millions of users across Singapore, Europe, and Vietnam — from education platforms for Singapore's Ministry of Education to manufacturing systems for semiconductor factories." | Portfolio data |
| stats | 8+ Years, 14 Projects, 20+ Technologies, 3 Countries | GitHub API + data |
| education | BSc IT — University of Information Technology | Portfolio data |
| availability | Based in Vietnam · Open to remote worldwide | Portfolio data |

**Layout — Mobile:**

```
┌───────────────────────┐
│                       │
│ > about --verbose     │
│                       │
│   ┌───────────────┐   │
│   │    Avatar     │   │ w-32 h-32
│   │  (cyan glow   │   │ centered
│   │    ring)      │   │ rounded-full
│   └───────────────┘   │
│                       │
│ Bio paragraph 1...    │ text-sm
│                       │ leading-relaxed
│ Bio paragraph 2...    │ fades in on
│                       │ scroll
│  ┌────────┐┌────────┐ │
│  │  8+    ││  14    │ │ 2×2 grid
│  │ Years  ││Projects│ │
│  └────────┘└────────┘ │
│  ┌────────┐┌────────┐ │
│  │  20+   ││   3    │ │
│  │ Techs  ││Country │ │
│  └────────┘└────────┘ │
│                       │
│ 🎓 BSc IT — UIT       │
│ 📍 Vietnam · Remote   │
└───────────────────────┘
```

**Layout — Desktop:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  > about --verbose                                              │
│                                                                 │
│  ┌──────────────┐    Bio paragraph 1...                        │
│  │   Avatar     │                                              │
│  │  (w-48 h-48  │    Bio paragraph 2...                        │
│  │   glow ring) │                                              │
│  └──────────────┘                                              │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │   8+     │  │    14    │  │   20+    │  │    3     │       │
│  │  Years   │  │ Projects │  │  Techs   │  │Countries │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
│  🎓 BSc IT — UIT               📍 Vietnam · Remote worldwide   │
└─────────────────────────────────────────────────────────────────┘
```

**Interactions:**
- Avatar has animated breathing glow border (CSS `@keyframes`)
- Bio paragraphs fade in sequentially on scroll (Framer Motion `whileInView`)
- Stat numbers count up from 0 (Framer Motion `useMotionValue` + `animate`)

---

### 3.3 Experience (auto height)

**Purpose:** Career arc showing growth from engineer → senior → leader.

**Content (3 entries):**

**Entry 1 — Current:**
- Period: 2024 — Present
- Title: Independent Software Engineer
- Context: Open Source & Side Projects
- Tech: Next.js, React, TypeScript, Tailwind, AWS, .NET MAUI
- Achievements:
  - Built MediTrack — full-stack EMR with .NET microservices, React 19, Clara AI
  - Created Aspire.Nexus — config-driven .NET Aspire orchestrator
  - Built E-Portfolio platform with Next.js 16, R3F, Framer Motion

**Entry 2 — Senior:**
- Period: 2019 — 2024
- Title: Senior Software Engineer
- Company: Orient Software / NASH TECH
- Tech: .NET Core, Azure, Docker, RabbitMQ, Entity Framework
- Achievements:
  - Led MOE Platform development (Singapore Ministry of Education)
  - Architected Lowell Microservices for European clients
  - Built Open Create platform for UK's Open University

**Entry 3 — First Role:**
- Period: 2016 — 2018
- Title: Software Engineer
- Company: Hitachi Consulting Vietnam
- Tech: IBM Frameworks, Real-time Systems
- Achievements:
  - Built MES systems for semiconductor manufacturing
  - Developed real-time monitoring dashboards

**Layout — Mobile:**

```
┌───────────────────────┐
│ > career --timeline   │
│                       │
│ 2024 — Present        │
│ ●━━━━━━━━━━━━━━━━━━━  │ cyan dot
│ │                     │
│ │ Independent SE      │
│ │ OSS & Side Projects │
│ │                     │
│ │ ┌──┐┌──┐┌──┐┌──┐   │ horizontal
│ │ │Nx││⚛ ││TS││AW│   │ scroll badges
│ │ └──┘└──┘└──┘└──┘   │
│ │                     │
│ │ • Built MediTrack   │
│ │ • Created Aspire    │
│ │   .Nexus            │
│ │ • Built E-Portfolio │
│ │                     │
│ 2019 — 2024           │
│ ●━━━━━━━━━━━━━━━━━━━  │ purple dot
│ │                     │
│ │ Senior SE           │
│ │ Orient / NASH TECH  │
│ │ ...                 │
│ │                     │
│ 2016 — 2018           │
│ ●━━━━━━━━━━━━━━━━━━━  │ muted dot
│ │                     │
│ │ Software Engineer   │
│ │ Hitachi Consulting  │
│ │ ...                 │
└───────────────────────┘
```

**Layout — Desktop (1280px+):**

```
┌─────────────────────────────────────────────────────────────────┐
│  > career --timeline                                            │
│                                                                 │
│                    2024 — Present                                │
│                         ●                                       │
│           ┌─────────────┼─────────────┐                         │
│           │ Full-Stack Developer      │  cyan accent border-l   │
│           │ Personal & OSS            │                         │
│           │                           │                         │
│           │ [Nx] [⚛] [TS] [TW] [AWS] │  inline badges          │
│           │                           │                         │
│           │ • Built MediTrack — EMR   │                         │
│           │ • Created Aspire.Nexus    │                         │
│           │ • Built E-Portfolio       │                         │
│           └───────────────────────────┘                         │
│                         │                                       │
│                    2019 — 2024                                   │
│                         ●                                       │
│           ┌─────────────┼─────────────┐                         │
│           │ Senior Software Engineer  │  purple accent          │
│           │ Orient / NASH TECH        │                         │
│           │ ...                       │                         │
│           └───────────────────────────┘                         │
│                         │                                       │
│                    2016 — 2018                                   │
│                         ●                                       │
│           ┌─────────────┼─────────────┐                         │
│           │ Software Engineer         │  muted accent           │
│           │ Hitachi Consulting VN     │                         │
│           │ ...                       │                         │
│           └───────────────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘
```

Cards are `max-w-lg` centered on the timeline spine. Each card has a left border accent matching its `accentColor`. Date labels sit above the timeline dot.

**Interactions:**
- Timeline nodes pulse as they enter viewport
- Cards slide in with `whileInView` (opacity + translateX)
- Most recent entry has cyan accent, earlier entries progressively muted

---

### 3.4 Projects (auto height, ~150vh)

**Purpose:** Evidence of skills through real shipped work.

**Featured projects (5):**

| # | Title | Subtitle | Tech | Links |
|---|-------|----------|------|-------|
| 1 | MediTrack | Full-stack EMR with .NET microservices, React 19 & Clara AI | .NET, React, Docker, PostgreSQL, RabbitMQ | [Demo](https://meditrack-styleguide.lovable.app/) + [Code](https://github.com/nkmnhan/meditrack) |
| 2 | Aspire.Nexus | Config-driven .NET Aspire AppHost — orchestrate from JSON | .NET, Aspire, Docker, Microservices | [Docs](https://learn.microsoft.com/en-us/dotnet/aspire/) + [Code](https://github.com/nkmnhan/Aspire.Nexus) |
| 3 | E-Portfolio | Portfolio platform with Next.js 16, R3F & Framer Motion | Next.js, React, TypeScript, Tailwind, Three.js | [Live](https://www.nkmnhan.com/) + [Code](https://github.com/nkmnhan/e-portfolio) |
| 4 | Vue-IdentityServer4 | OAuth 2.0 + OpenID Connect demo with Vue.js + .NET | Vue, .NET, IdentityServer4, OAuth | [Code](https://github.com/nkmnhan/Vue-Identityserver4) |
| 5 | MAUI.MediatR | Clean architecture with .NET MAUI + MediatR CQRS | .NET, MAUI, MediatR, CQRS | [Code](https://github.com/nkmnhan/MAUI.MediatR) |

**Secondary projects (9):** elasticsearch-nest, vuejs-hot-reload-docker, ResourceManager, E-Shop, SQLConverter, push-notification, HybridWebView, calendar-demo, IdentityServer4.Study

**No star counts displayed** — low numbers hurt more than help. Show tech badges + links instead.

**Layout — Mobile:** Single column, full-width glassmorphism cards stacked vertically.

```
┌───────────────────────┐
│ > ls ~/projects       │
│   --featured          │
│                       │
│ ┌───────────────────┐ │
│ │ ░░░ thumbnail ░░░ │ │ 16:9 aspect
│ │                   │ │
│ │ MediTrack         │ │
│ │ Full-stack EMR    │ │
│ │ with .NET micro-  │ │
│ │ services, React   │ │
│ │ 19 & Clara AI     │ │
│ │                   │ │
│ │ ┌──┐┌──┐┌──┐┌──┐ │ │ Wrap badges
│ │ │.N││⚛ ││🐳││PG│ │ │
│ │ └──┘└──┘└──┘└──┘ │ │
│ │                   │ │
│ │ [Demo ↗] [Code ↗] │ │
│ └───────────────────┘ │
│                       │
│ ... 4 more cards ...  │
│                       │
│ ┌─────────────────┐   │
│ │View All (14) →  │   │
│ └─────────────────┘   │
└───────────────────────┘
```

**Layout — Desktop:** 2-column grid, `max-w-5xl`.

**Interactions:**
- Glassmorphism cards (`backdrop-blur-xl`)
- 3D tilt toward cursor on hover (desktop only, via `onMouseMove`)
- Cards stagger-animate in with `whileInView`
- "View All" expands to show secondary projects (or navigates to `/projects`)

**Data fetching option:** Projects can be enriched from GitHub API at build time (Server Component `fetch` with `next: { revalidate: 86400 }`). If the API call fails or times out (3s), the build falls back silently to hardcoded data in `lib/data/projects.ts` — no error UI needed since the page always renders with static data.

---

### 3.5 Skills (auto height, ~80vh)

**Purpose:** Quick technical assessment by category.

**6 categories, 33 skills:**

| Category | Skills |
|----------|--------|
| **Languages** | C#, TypeScript, JavaScript, Python, SQL |
| **Frontend** | React, Next.js, Vue.js, Angular, Tailwind CSS, Framer Motion |
| **Backend** | .NET Core, Node.js, GraphQL, gRPC, SignalR |
| **Databases** | PostgreSQL, MongoDB, Elasticsearch, SQL Server, DynamoDB |
| **Cloud & DevOps** | AWS, Azure, Docker, Kubernetes, GitHub Actions, CI/CD |
| **Architecture** | Microservices, DDD, CQRS, Event-Driven, MediatR, SOLID |

**No progress bars.** Icon + name grouped by category. No "proficiency percentage."

**Layout — Mobile:** Category label + 5-col icon grid below.

```
┌───────────────────────┐
│ > skills --categorize │
│                       │
│ Languages             │
│ ┌──┐┌──┐┌──┐┌──┐┌──┐ │
│ │C#││TS││JS││Py││SQ│ │ 5-col
│ └──┘└──┘└──┘└──┘└──┘ │ w-12 h-12 each
│                       │
│ Frontend              │
│ ┌──┐┌──┐┌──┐┌──┐┌──┐ │
│ │⚛ ││Nx││Vu││An││TW│ │
│ └──┘└──┘└──┘└──┘└──┘ │
│ ┌──┐                  │
│ │FM│                  │
│ └──┘                  │
│ ... more categories   │
└───────────────────────┘
```

**Layout — Desktop:** 3 categories per row (2 rows of 3).

**Interactions:**
- Icons glow cyan on hover
- Categories stagger-reveal with `whileInView`

---

### 3.6 Contact (auto height, ~60vh)

**Purpose:** Conversion point — make it easy to reach Tony.

**Content:**

| Field | Value |
|-------|-------|
| heading | `> send_transmission --to tony` |
| description | "Open to senior roles and collaboration opportunities. Currently based in Vietnam, available for remote worldwide." |
| email | nkmnhan@gmail.com (visible, tappable) |
| form fields | Name, Email, Message (3 fields only) |
| submitLabel | "Launch Message" with rocket emoji |
| socialLinks | GitHub, LinkedIn, Facebook, Email |

**Layout — Mobile:**

```
┌───────────────────────┐
│ > send_transmission   │
│                       │
│ Open to senior roles  │
│ and collaboration...  │
│                       │
│ ┌───────────────────┐ │ Glassmorphism
│ │ Name              │ │
│ │ [_______________] │ │
│ │ Email             │ │
│ │ [_______________] │ │
│ │ Message           │ │
│ │ [_______________] │ │
│ │ [_______________] │ │
│ │                   │ │
│ │ [🚀 Launch Msg ]  │ │ Full-width CTA
│ └───────────────────┘ │
│                       │
│ nkmnhan@gmail.com     │ Tappable mailto:
│                       │
│ [GH] [LI] [FB] [✉]   │ 44px touch
└───────────────────────┘
```

**Layout — Desktop:** Centered `max-w-md` form card.

**Submit behavior:** Clicking "Launch Message" composes a `mailto:nkmnhan@gmail.com` link with the form's Name, Subject (auto-generated from name), and Message fields pre-filled. Opens the user's email client in a new tab. A toast confirms "Message prepared — check your email client." No backend required.

---

## 4. Navigation

### 4.1 Mobile — Bottom Bar + Slide-Up Sheet

```
┌───────────────────────┐
│  ... page content ... │
├───────────────────────┤
│ [☰ Menu]     [↑ Top]  │ Fixed bottom
│                       │ glass bg
└───────────────────────┘

Sheet (on menu tap):
┌───────────────────────┐
│  ┌───────────────────┐│
│  │   ── handle ──    ││
│  │  ● Hero           ││ Active = cyan
│  │  ○ About          ││ 44px tap rows
│  │  ○ Experience     ││
│  │  ○ Projects       ││
│  │  ○ Skills         ││
│  │  ○ Contact        ││
│  │  [GH] [LI] [✉]   ││
│  └───────────────────┘│
└───────────────────────┘
```

### 4.2 Desktop — Floating Dot Sidebar (right edge)

```
  ┌──┐
  │● │ Hero       (active = cyan glow dot)
  │○ │ About
  │○ │ Experience
  │○ │ Projects
  │○ │ Skills
  │○ │ Contact
  └──┘
```

Scroll-spy updates active dot. Click smooth-scrolls to section. Dots have tooltip labels on hover.

---

## 5. Responsive Breakpoints

| Element | Mobile (375px) | Tablet (768px) | Desktop (1280px+) |
|---------|---------------|----------------|-------------------|
| Hero text | text-3xl | text-5xl | text-6xl |
| Container | px-5 | px-6 | px-8, max-w-5xl |
| Stats grid | 2×2 | 4-across | 4-across |
| Experience | Left-aligned | Centered timeline | Centered, wider cards |
| Project cards | 1 column | 2 columns | 2 columns |
| Skills grid | 5-col icons | 2-col categories | 3-col categories |
| Contact form | Full-width | max-w-md | max-w-md |
| Navigation | Bottom bar + sheet | Dot sidebar | Dot sidebar |
| Social links | Row in hero | Float left edge | Float left edge |
| Starfield | CSS gradient | R3F (800 pts) | R3F (2000 pts) |

---

## 6. Data Architecture

### 6.1 TypeScript Types

```typescript
// lib/types.ts

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
  showIn?: ("hero" | "contact" | "nav")[]; // defaults to all if omitted
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
  thumbnail?: string;             // Screenshot or OG image (16:9)
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;               // Deployed app URL
  docsUrl?: string;               // Documentation URL
  isFeatured: boolean;
  sortOrder: number;
}
// Project cards show up to 2 link buttons:
// - Primary: liveUrl ("Live ↗") or docsUrl ("Docs ↗") — whichever exists
// - Secondary: githubUrl ("Code ↗") — always shown

export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; iconName: string }>; // react-icons import name (e.g. "SiReact"), resolved at render time
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
}
```

### 6.2 Data Source

All content lives in `lib/data/` as static TypeScript files. Projects can optionally be enriched from GitHub API at build time (Next.js `fetch` in Server Components).

```
webs/byte-folio/lib/
├── data/
│   ├── site-config.ts     # name, URL, OG, social links
│   ├── hero.ts            # greeting, name, title, CTAs
│   ├── about.ts           # avatar, bio, stats, education
│   ├── experience.ts      # 3 career entries
│   ├── projects.ts        # 14 projects (5 featured)
│   └── skills.ts          # 6 categories, 33 skills
├── types.ts               # TypeScript interfaces (above)
└── services/
    └── github.ts          # Optional: fetch repos at build time
```

---

## 7. Technical Architecture

### 7.1 Dependencies

Shared packages (already in workspace):
- `@eportfolio/ui` — `clsxMerge`, `truncateText`, `formatDuration`
- `@eportfolio/theme` — CSS tokens, derivation engine (space preset)

Project-specific:
- `next` 16, `react` 19, `react-dom` 19
- `tailwindcss` 4, `@tailwindcss/postcss`
- `clsx`, `tailwind-merge` (peer deps of @eportfolio/ui)
- `react-icons` (tech stack icons)
- `framer-motion` (scroll animations, typing effect, stat counters)
- `@react-three/fiber`, `@react-three/drei` (starfield — lazy loaded)

### 7.2 Component Tree

```
app/
├── layout.tsx              # Root layout, fonts, metadata, SEO JSON-LD
├── globals.css             # Import @eportfolio/theme + space preset + @theme block
├── page.tsx                # Server component composing all sections
└── components/
    ├── hero.tsx            # "use client" — R3F starfield + typing animation
    ├── starfield.tsx       # "use client" — R3F canvas (lazy import)
    ├── starfield-css.tsx   # CSS-only starfield fallback
    ├── about.tsx           # "use client" — animated stats + scroll reveal
    ├── experience.tsx      # "use client" — timeline with scroll animation
    ├── projects.tsx        # "use client" — card grid with 3D tilt
    ├── project-card.tsx    # Individual project card
    ├── skills.tsx          # "use client" — staggered reveal
    ├── skill-icon.tsx      # Icon + name + glow
    ├── contact.tsx         # "use client" — form with validation
    ├── social-float.tsx    # "use client" — floating social column (desktop left edge)
    ├── nav-dots.tsx        # "use client" — scroll-spy sidebar (desktop)
    ├── nav-mobile.tsx      # "use client" — bottom bar + sheet
    ├── terminal-heading.tsx # Server component — `> command` styled heading
    └── section-wrapper.tsx # Server component — consistent section padding + id
```

### 7.3 Server vs Client Components

| Component | Server/Client | Why |
|-----------|--------------|-----|
| `page.tsx` | Server | Static composition, no interactivity |
| `layout.tsx` | Server | Metadata, fonts |
| `terminal-heading.tsx` | Server | Pure presentation |
| `section-wrapper.tsx` | Server | Pure presentation |
| `hero.tsx` | Client | R3F canvas, typing animation |
| `about.tsx` | Client | `whileInView` animations, counter |
| `experience.tsx` | Client | Scroll-triggered timeline |
| `projects.tsx` | Client | 3D tilt `onMouseMove`, `whileInView` |
| `skills.tsx` | Client | `whileInView` stagger |
| `contact.tsx` | Client | Form state, validation |
| `social-float.tsx` | Client | Hides/shows based on scroll position |
| `nav-dots.tsx` | Client | Scroll spy, `IntersectionObserver` |
| `nav-mobile.tsx` | Client | Sheet open/close state |

### 7.4 Performance Budget

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| Total bundle (initial) | < 200KB gzipped |
| Three.js chunk | Lazy loaded, < 200KB gzipped |
| Lighthouse Performance | 90+ |

**Strategies:**
- Lazy-load `@react-three/fiber` with `next/dynamic` (`ssr: false`)
- CSS-only starfield fallback renders immediately (no layout shift)
- Fonts loaded via `next/font` (no FOIT)
- Images via `next/image` with `priority` on avatar
- `prefers-reduced-motion` disables all animations

---

## 8. Accessibility

| Requirement | Implementation |
|-------------|---------------|
| Skip to content | `<a href="#main-content" className="sr-only focus:not-sr-only">` |
| Touch targets | All interactive elements ≥ 44×44px |
| Keyboard nav | Tab order follows visual order, focus rings on all interactive elements |
| Screen reader | Semantic HTML (`<main>`, `<section>`, `<nav>`), ARIA labels |
| Reduced motion | `prefers-reduced-motion: reduce` → no animations, content visible immediately |
| Color contrast | All text/bg pairs meet WCAG 2.1 AA (4.5:1 body, 3:1 large) |
| Alt text | Avatar: "Tony Nguyen — Senior Fullstack Developer" |
| Form labels | All inputs have visible labels (not just placeholders) |

---

## 9. SEO

### 9.1 Metadata

```typescript
export const metadata: Metadata = {
  title: "Tony Nguyen | Senior Fullstack Developer",
  description: "Portfolio of Tony Nguyen — Senior Software Engineer specializing in .NET Core, React, Next.js, and microservices architecture. 8+ years building scalable systems across Singapore, Europe, and Vietnam.",
  keywords: ["Tony Nguyen", "Senior Software Engineer", ".NET Core", "React", "Next.js", "microservices", "fullstack developer"],
  authors: [{ name: "Tony Nguyen" }],
  openGraph: {
    title: "Tony Nguyen | Senior Fullstack Developer",
    description: "8+ years building scalable systems with .NET, React & cloud architecture",
    url: "https://byte-folio.nkmnhan.com",
    siteName: "Tony Nguyen Portfolio",
    type: "website",
  },
};
```

### 9.2 Structured Data (JSON-LD)

- `Person` schema: name, jobTitle, knowsAbout, sameAs (GitHub, LinkedIn)
- `WebSite` schema: name, url, author
- `SiteNavigationElement` for scroll sections

---

## 10. Future: GitHub Traffic Dashboard (TODO)

> **Status:** Designed, not yet implemented. Requires a fine-grained PAT with `Administration: Read-only` permission stored as `GITHUB_TOKEN` Vercel server-side env var.

### 10.1 Token Setup

| Setting | Value |
|---------|-------|
| Token type | Fine-grained PAT |
| Scope | Only `nkmnhan/*` repos needed |
| Permissions | `Metadata: Read` (repo content) + `Administration: Read-only` (traffic) |
| Storage | Vercel env var `GITHUB_TOKEN` (no `NEXT_PUBLIC_` prefix) |
| Expiration | 90 days, rotate via reminder |

### 10.2 Data Persistence (traffic is 14-day rolling window)

GitHub only keeps 14 days of traffic data. To build long-term charts:

```
webs/byte-folio/
├── lib/services/
│   └── github.ts          # fetchRepoTraffic(), fetchRepoContent()
├── app/api/
│   └── cron/
│       └── traffic/
│           └── route.ts   # Vercel Cron (daily) → poll traffic → persist
```

**Storage options (pick one at implementation time):**
- **Vercel KV / Redis** — simplest, native to Vercel
- **JSON in private repo** — free, git-backed history
- **Vercel Postgres** — if byte-folio grows to need a DB

### 10.3 API Endpoints to Poll

```typescript
// All require Authorization: Bearer ${GITHUB_TOKEN}
// All return 14-day rolling data only

GET /repos/nkmnhan/{repo}/traffic/views?per=day
// → { count, uniques, views: [{ timestamp, count, uniques }] }

GET /repos/nkmnhan/{repo}/traffic/clones?per=day
// → { count, uniques, clones: [{ timestamp, count, uniques }] }

GET /repos/nkmnhan/{repo}/traffic/popular/referrers
// → [{ referrer, count, uniques }]  (top 10)

GET /repos/nkmnhan/{repo}/traffic/popular/paths
// → [{ path, title, count, uniques }]  (top 10)
```

### 10.4 Display Options

**Option A — Private dashboard route** (`/dashboard`, behind simple auth):
- Total views/clones across all repos (sparkline chart)
- Per-repo breakdown table
- Top referrers
- Trend over time (from persisted snapshots)

**Option B — Public stats on project cards** (subtle, only if numbers are good):
- "142 views this week" badge on featured projects
- Only show if views > threshold (e.g., 50/week)

### 10.5 Types

```typescript
export interface RepoTrafficSnapshot {
  repo: string;
  date: string;               // ISO date (YYYY-MM-DD)
  views: { count: number; uniques: number };
  clones: { count: number; uniques: number };
  referrers: Array<{ referrer: string; count: number; uniques: number }>;
}

export interface TrafficDashboardData {
  lastUpdated: string;
  snapshots: RepoTrafficSnapshot[];
  totalViews: number;
  totalClones: number;
}
```

### 10.6 Vercel Cron Config

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/traffic",
      "schedule": "0 6 * * *"
    }
  ]
}
```

---

## 11. What Stays Out of Scope (YAGNI)

| Feature | Why Not Now |
|---------|-----------|
| Blog/articles | No content yet — add when Tony has 3+ articles |
| Testimonials | Need to collect quotes first |
| Case study pages | Add after launch — separate `/projects/[slug]` pages |
| Light mode | Space theme is dark-only by design |
| i18n | Single language for now |
| Analytics | Add post-launch (Vercel Analytics or Plausible) |
| Contact form backend | Frontend-only initially — mailto: fallback |
| GitHub traffic dashboard | Designed in §10 — implement when token is provided |
| PWA | Not needed for a portfolio |

---

## 12. File Map

| File | Action | Purpose |
|------|--------|---------|
| `webs/byte-folio/package.json` | CREATE | Deps + scripts |
| `webs/byte-folio/next.config.ts` | CREATE | transpilePackages, images |
| `webs/byte-folio/tsconfig.json` | CREATE | Standard Next.js TS config |
| `webs/byte-folio/app/layout.tsx` | CREATE | Root layout, fonts, metadata |
| `webs/byte-folio/app/globals.css` | CREATE | `@import "tailwindcss"` + `@import "@eportfolio/theme/tokens/base.css"` + `@import "@eportfolio/theme/tokens/presets/space.css"` + `@theme {}` block mapping CSS vars to Tailwind utilities |
| `webs/byte-folio/app/page.tsx` | CREATE | Compose all sections |
| `webs/byte-folio/app/components/*.tsx` | CREATE | 14 components (see §7.2) |
| `webs/byte-folio/lib/types.ts` | CREATE | TypeScript interfaces |
| `webs/byte-folio/lib/data/*.ts` | CREATE | 6 data files |
| `webs/byte-folio/lib/services/github.ts` | CREATE | Optional build-time GitHub API fetch |
| `webs/byte-folio/public/og-image.png` | CREATE | 1200×630 OG image for social sharing |
| `webs/byte-folio/public/` | EXISTS | Static assets |
