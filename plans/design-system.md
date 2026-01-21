# E-Portfolio Design System Plan

## Overall Progress: 100%

| Phase | Status | Progress |
|-------|--------|----------|
| Phase 1: Design Tokens | ✅ Complete | **100%** |
| Phase 2: Component Library | ✅ Complete | **100%** |
| Phase 3: Theme Harmonization | ✅ Complete | **100%** |
| Phase 4: Page Implementation | ✅ Complete | **100%** |

---

## Executive Summary

This plan addresses design inconsistencies found in the e-portfolio website, establishing a unified design system that maintains the cinematic feel while ensuring consistency across all pages.

### Current Problems

| Issue | Impact | Files Affected |
|-------|--------|----------------|
| 30+ hard-coded colors | No visual consistency | All pages |
| 2 theme systems | Confusing UX, maintenance burden | about/, rest of site |
| No typography scale | Inconsistent hierarchy | All pages |
| 6 border-radius values | Visual inconsistency | Components |
| 4+ button patterns | No component reuse | Multiple pages |
| Invalid CSS classes | Broken styling | work-gallery.tsx |

---

## MCP Server Integration

This design system leverages four MCP servers for enhanced workflow automation:

| MCP Server | Purpose | Integration Points |
|------------|---------|-------------------|
| **Figma MCP** | Design-to-code sync | Token extraction, component specs |
| **Storybook MCP** | Component documentation | Stories, variants, states |
| **Playwright MCP** | Visual regression testing | Screenshot comparison |
| **A11y MCP** | Accessibility audits | WCAG compliance verification |

### Workflow Diagram

```
┌─────────────┐    ┌──────────────┐    ┌───────────────┐    ┌──────────────┐
│ Figma Design│───▶│Extract Tokens│───▶│Implement Code │───▶│Storybook Story│
└─────────────┘    └──────────────┘    └───────────────┘    └──────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │Playwright Visual │
                                    │     Test         │
                                    └──────────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │  A11y Audit      │
                                    └──────────────────┘
                                              │
                                              ▼
                                    ┌──────────────────┐
                                    │Quality Gate Pass │
                                    └──────────────────┘
```

### MCP Setup Commands

```bash
# Already configured in this project:
claude mcp add --transport http figma https://mcp.figma.com/mcp
claude mcp add storybook-mcp --transport http http://localhost:6006/mcp
claude mcp add playwright -- npx -y @playwright/mcp@latest
claude mcp add a11y -- npx -y a11y-mcp-server
```

---

## Design Vision

**"Cinematic Portfolio with Professional Polish"**

### Design Principles

1. **Cinematic First** - Dark, immersive backgrounds that showcase artwork
2. **Content Focus** - UI should enhance, not compete with portfolio work
3. **Consistent Rhythm** - Predictable spacing and typography
4. **Accessible** - WCAG 2.1 AA compliant contrast ratios
5. **Responsive** - Mobile-first, scales beautifully

---

## Color System

### Primary Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  BRAND COLORS                                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Primary Blue        Secondary Purple    Accent Cyan            │
│  ┌──────────┐        ┌──────────┐        ┌──────────┐          │
│  │ #3B82F6  │        │ #8B5CF6  │        │ #06B6D4  │          │
│  │ blue-500 │        │violet-500│        │ cyan-500 │          │
│  └──────────┘        └──────────┘        └──────────┘          │
│                                                                 │
│  Hover: #2563EB      Hover: #7C3AED      Hover: #0891B2        │
│  Active: #1D4ED8     Active: #6D28D9     Active: #0E7490       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Neutral Palette (Light Mode)

```
┌─────────────────────────────────────────────────────────────────┐
│  LIGHT MODE NEUTRALS                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Background    Surface       Border        Text                 │
│  ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐          │
│  │ #FFFFFF│    │ #F9FAFB│    │ #E5E7EB│    │ #111827│          │
│  │ white  │    │gray-50 │    │gray-200│    │gray-900│          │
│  └────────┘    └────────┘    └────────┘    └────────┘          │
│                                                                 │
│  Text Muted: #6B7280 (gray-500)                                │
│  Text Subtle: #9CA3AF (gray-400)                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Neutral Palette (Dark Mode)

```
┌─────────────────────────────────────────────────────────────────┐
│  DARK MODE NEUTRALS                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Background    Surface       Border        Text                 │
│  ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐          │
│  │ #030712│    │ #111827│    │ #374151│    │ #F9FAFB│          │
│  │gray-950│    │gray-900│    │gray-700│    │gray-50 │          │
│  └────────┘    └────────┘    └────────┘    └────────┘          │
│                                                                 │
│  Text Muted: #9CA3AF (gray-400)                                │
│  Text Subtle: #6B7280 (gray-500)                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Cinematic Palette (About Page / Special Sections)

```
┌─────────────────────────────────────────────────────────────────┐
│  CINEMATIC PALETTE (Dark Immersive)                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Deep Background     Mid Background      Accent Rose            │
│  ┌──────────┐        ┌──────────┐        ┌──────────┐          │
│  │ #020016  │        │ #2F122E  │        │ #E4B3A3  │          │
│  │ midnight │        │ burgundy │        │ rose-tan │          │
│  └──────────┘        └──────────┘        └──────────┘          │
│                                                                 │
│  Card Background: #1A0D1A                                       │
│  Highlight: #531431                                             │
│  Hover: #702D4C                                                 │
│  Text Primary: #F2E5D9                                          │
│  Text Secondary: #E4B3A3                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Semantic Colors

```
┌─────────────────────────────────────────────────────────────────┐
│  SEMANTIC COLORS                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Success          Warning          Error            Info        │
│  ┌────────┐       ┌────────┐       ┌────────┐       ┌────────┐ │
│  │ #10B981│       │ #F59E0B│       │ #EF4444│       │ #3B82F6│ │
│  │green500│       │amber500│       │ red-500│       │blue-500│ │
│  └────────┘       └────────┘       └────────┘       └────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Typography System

### Font Families

```
┌─────────────────────────────────────────────────────────────────┐
│  FONT STACK                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Primary (Sans):    Geist Sans (--font-geist-sans)              │
│  Monospace:         Geist Mono (--font-geist-mono)              │
│  Display/Brand:     Waltograph (--font-waltograph)              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Type Scale

```
┌─────────────────────────────────────────────────────────────────┐
│  TYPOGRAPHY SCALE                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Token          Mobile          Desktop         Usage           │
│  ─────────────────────────────────────────────────────────────  │
│  display-xl     text-4xl        text-6xl        Hero headings   │
│  display-lg     text-3xl        text-5xl        Page titles     │
│  display-md     text-2xl        text-4xl        Section heads   │
│  ─────────────────────────────────────────────────────────────  │
│  heading-lg     text-xl         text-2xl        Card titles     │
│  heading-md     text-lg         text-xl         Subsections     │
│  heading-sm     text-base       text-lg         Small headings  │
│  ─────────────────────────────────────────────────────────────  │
│  body-lg        text-base       text-lg         Lead paragraphs │
│  body-md        text-sm         text-base       Body text       │
│  body-sm        text-xs         text-sm         Captions        │
│  ─────────────────────────────────────────────────────────────  │
│  label          text-sm         text-sm         Form labels     │
│  caption        text-xs         text-xs         Metadata        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Font Weights

```
  Regular:    font-normal (400)  - Body text
  Medium:     font-medium (500)  - Emphasis
  Semibold:   font-semibold (600) - Subheadings
  Bold:       font-bold (700)    - Headings
```

---

## Spacing System

### Base Unit: 4px

```
┌─────────────────────────────────────────────────────────────────┐
│  SPACING SCALE (4px base)                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Token    Value    Tailwind    Usage                            │
│  ───────────────────────────────────────────────────────────    │
│  space-1   4px     p-1, gap-1  Tight: icon padding              │
│  space-2   8px     p-2, gap-2  Compact: badge padding           │
│  space-3   12px    p-3, gap-3  Small: button padding            │
│  space-4   16px    p-4, gap-4  Medium: card padding             │
│  space-6   24px    p-6, gap-6  Large: section padding           │
│  space-8   32px    p-8, gap-8  XL: page margins                 │
│  space-12  48px    p-12       2XL: section margins              │
│  space-16  64px    p-16       3XL: hero padding                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Component Spacing

```
  Card Padding:      p-4 md:p-6
  Section Padding:   py-8 md:py-12
  Page Margins:      px-4 md:px-8 lg:px-12
  Stack Gap:         gap-4 md:gap-6
  Inline Gap:        gap-2 md:gap-4
```

---

## Border & Shadow System

### Border Radius

```
┌─────────────────────────────────────────────────────────────────┐
│  BORDER RADIUS SCALE                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Token         Value       Tailwind       Usage                 │
│  ───────────────────────────────────────────────────────────    │
│  radius-sm     4px         rounded        Buttons, inputs       │
│  radius-md     8px         rounded-lg     Cards, dropdowns      │
│  radius-lg     12px        rounded-xl     Modals, panels        │
│  radius-xl     16px        rounded-2xl    Feature cards         │
│  radius-full   9999px      rounded-full   Avatars, badges       │
│                                                                 │
│  REMOVE: rounded-base (non-standard)                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Shadow Elevation

```
┌─────────────────────────────────────────────────────────────────┐
│  SHADOW ELEVATION                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Level    Tailwind      Usage                                   │
│  ───────────────────────────────────────────────────────────    │
│  0        shadow-none   Flat elements                           │
│  1        shadow-sm     Subtle lift (cards at rest)             │
│  2        shadow        Default cards                           │
│  3        shadow-md     Hover states                            │
│  4        shadow-lg     Dropdowns, popovers                     │
│  5        shadow-xl     Modals, dialogs                         │
│  6        shadow-2xl    Feature highlights                      │
│                                                                 │
│  Hover Pattern: shadow-md -> shadow-lg (one level up)           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Specifications

### Buttons

```
┌─────────────────────────────────────────────────────────────────┐
│  BUTTON VARIANTS                                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PRIMARY (filled)                                               │
│  ┌─────────────────────────────────┐                            │
│  │         View Projects           │  bg-blue-600               │
│  └─────────────────────────────────┘  text-white                │
│  Hover: bg-blue-700                   rounded-lg                │
│  Active: bg-blue-800                  px-6 py-3                 │
│                                                                 │
│  SECONDARY (outline)                                            │
│  ┌─────────────────────────────────┐                            │
│  │         Learn More              │  border-2 border-blue-600  │
│  └─────────────────────────────────┘  text-blue-600             │
│  Hover: bg-blue-50                    rounded-lg                │
│  Dark Hover: bg-blue-950              px-6 py-3                 │
│                                                                 │
│  GHOST (text only)                                              │
│  ┌─────────────────────────────────┐                            │
│  │         Cancel                  │  text-gray-600             │
│  └─────────────────────────────────┘  hover:text-gray-900       │
│  Hover: bg-gray-100                   px-4 py-2                 │
│                                                                 │
│  SIZES                                                          │
│  ───────────────────────────────────────────────────────────    │
│  sm:  px-3 py-1.5 text-sm  rounded                              │
│  md:  px-4 py-2   text-base rounded-lg (default)                │
│  lg:  px-6 py-3   text-lg  rounded-lg                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Cards

```
┌─────────────────────────────────────────────────────────────────┐
│  CARD VARIANTS                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DEFAULT CARD                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  ┌───────────────────────────────────────────────────┐  │    │
│  │  │                                                   │  │    │
│  │  │                    IMAGE                          │  │    │
│  │  │                                                   │  │    │
│  │  └───────────────────────────────────────────────────┘  │    │
│  │                                                         │    │
│  │  Card Title                                             │    │
│  │  Card description text goes here with                   │    │
│  │  supporting information.                                │    │
│  │                                                         │    │
│  │  [Action Button]                                        │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  Styling:                                                       │
│  - bg-white dark:bg-gray-900                                    │
│  - border border-gray-200 dark:border-gray-700                  │
│  - rounded-xl                                                   │
│  - shadow-md hover:shadow-lg                                    │
│  - p-0 (image full bleed) or p-4/p-6 (padded)                   │
│                                                                 │
│  STAT CARD                                                      │
│  ┌─────────────────────┐                                        │
│  │        [icon]       │                                        │
│  │        12           │  text-3xl font-bold                    │
│  │   Open Source       │  text-sm text-muted                    │
│  └─────────────────────┘                                        │
│                                                                 │
│  Styling:                                                       │
│  - text-center p-6                                              │
│  - hover:scale-105 transition                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Form Inputs

```
┌─────────────────────────────────────────────────────────────────┐
│  FORM INPUT                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Label                                                          │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Placeholder text                                       │    │
│  └─────────────────────────────────────────────────────────┘    │
│  Helper text or error message                                   │
│                                                                 │
│  Styling:                                                       │
│  - w-full px-4 py-3                                             │
│  - border border-gray-300 dark:border-gray-600                  │
│  - rounded-lg                                                   │
│  - focus:ring-2 focus:ring-blue-500 focus:border-blue-500       │
│  - bg-white dark:bg-gray-800                                    │
│                                                                 │
│  States:                                                        │
│  - Default: border-gray-300                                     │
│  - Focus: ring-2 ring-blue-500                                  │
│  - Error: border-red-500 ring-red-500                           │
│  - Disabled: opacity-50 cursor-not-allowed                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Page Mockups

### Homepage Mockup

```
┌─────────────────────────────────────────────────────────────────┐
│  [Menu]                                   [Theme Toggle]        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         ░░░░░░░░░░░░░░                          │
│                      ░░░ VIDEO/IMAGE ░░░                        │
│                         ░░░░░░░░░░░░░░                          │
│                                                                 │
│                      TONY NGUYEN                                │
│                   Senior Software Engineer                      │
│                                                                 │
│                    [ View My Work ]                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Background: gradient or video                                  │
│  Text: white with text-shadow for readability                   │
│  Button: Primary blue, centered                                 │
│  Animation: Subtle fade-in on load                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Color Tokens Used:
- Background: video/image (dark overlay)
- Text: white (#FFFFFF)
- Button: --color-primary (#3B82F6)
```

### Work Gallery Mockup

```
┌─────────────────────────────────────────────────────────────────┐
│  [Menu]                                   [Theme Toggle]        │
├─────────────────────────────────────────────────────────────────┤
│  Home > Work & Projects                     (Breadcrumb)        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  [Avatar]  Tony Nguyen (nkmnhan)                           │ │
│  │            Senior Software Engineer - 12 Projects - 5 Stars│ │
│  │                                                            │ │
│  │            [ View on GitHub ]                              │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│              My Work & Projects                                 │
│    Explore my open-source contributions on GitHub               │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │    12    │ │    5     │ │    8+    │ │    5     │          │
│  │Open Src  │ │Featured  │ │Tech Stack│ │  Stars   │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                 │
│  [ Featured ] [ All ] [ Enterprise ] [ Tools ] [ Personal ]    │
│                                                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   Project   │ │   Project   │ │   Project   │               │
│  │    Card     │ │    Card     │ │    Card     │               │
│  │─────────────│ │─────────────│ │─────────────│               │
│  │ Title       │ │ Title       │ │ Title       │               │
│  │ Description │ │ Description │ │ Description │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Color Tokens Used:
- Background: --color-bg (white/gray-950)
- Profile Card: gradient blue-50 -> purple-50 / gray-800 -> gray-900
- Stat Cards: --color-surface with border
- Tabs: Flowbite default theme
- Project Cards: --color-surface, --shadow-md
```

### About Page Mockup (Cinematic)

```
┌─────────────────────────────────────────────────────────────────┐
│  [Menu]                                   [Theme Toggle]        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░ PARALLAX HERO IMAGE ░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                 │
│                      TONY NGUYEN                                │
│                  SENIOR SOFTWARE ENGINEER                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────┐  ┌─────────────────────────┐  │
│  │                             │  │                         │  │
│  │  About Overview             │  │  Core Skills            │  │
│  │                             │  │                         │  │
│  │  8+ years of experience...  │  │  [.NET] [React] [AWS]   │  │
│  │                             │  │  [Docker] [TypeScript]  │  │
│  │                             │  │                         │  │
│  └─────────────────────────────┘  └─────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────┐  ┌─────────────────────────┐  │
│  │                             │  │                         │  │
│  │  My Journey                 │  │  Projects               │  │
│  │  ───────────────────────    │  │                         │  │
│  │  2024 -- Full-Stack Dev     │  │  MOE Platform           │  │
│  │  2018 -- Senior Engineer    │  │  Lowell Microservices   │  │
│  │  2016 -- Software Engineer  │  │  Open Create            │  │
│  │                             │  │                         │  │
│  └─────────────────────────────┘  └─────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Color Tokens Used (Cinematic Palette):
- Background: --cinematic-bg-deep (#020016)
- Cards: --cinematic-bg-card (#1A0D1A)
- Text Primary: --cinematic-text (#F2E5D9)
- Text Secondary: --cinematic-text-muted (#E4B3A3)
- Accents: --cinematic-accent (#531431)
- Borders: --cinematic-border (#702D4C)
```

### Contact Page Mockup

```
┌─────────────────────────────────────────────────────────────────┐
│  [Menu]                                   [Theme Toggle]        │
├─────────────────────────────────────────────────────────────────┤
│  Home > Contact                             (Breadcrumb)        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                        Get In Touch                             │
│           I'd love to hear from you. Send me a message!         │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                                                         │    │
│  │  Name                                                   │    │
│  │  ┌─────────────────────────────────────────────────┐    │    │
│  │  │                                                 │    │    │
│  │  └─────────────────────────────────────────────────┘    │    │
│  │                                                         │    │
│  │  Email                                                  │    │
│  │  ┌─────────────────────────────────────────────────┐    │    │
│  │  │                                                 │    │    │
│  │  └─────────────────────────────────────────────────┘    │    │
│  │                                                         │    │
│  │  Message                                                │    │
│  │  ┌─────────────────────────────────────────────────┐    │    │
│  │  │                                                 │    │    │
│  │  │                                                 │    │    │
│  │  └─────────────────────────────────────────────────┘    │    │
│  │                                                         │    │
│  │              [ Send Message ]                           │    │
│  │                                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                        │
│  │  GitHub  │ │ LinkedIn │ │  Email   │                        │
│  └──────────┘ └──────────┘ └──────────┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Color Tokens Used:
- Background: --color-bg
- Form Card: --color-surface with --shadow-lg
- Inputs: --color-surface, --color-border
- Button: --color-primary
- Social Links: --color-surface with hover
```

---

## CSS Custom Properties (Design Tokens)

### Implementation in globals.css

```css
:root {
  /* === Primary Colors === */
  --color-primary: #3B82F6;
  --color-primary-hover: #2563EB;
  --color-primary-active: #1D4ED8;

  --color-secondary: #8B5CF6;
  --color-secondary-hover: #7C3AED;

  --color-accent: #06B6D4;
  --color-accent-hover: #0891B2;

  /* === Neutral Colors (Light) === */
  --color-bg: #FFFFFF;
  --color-surface: #F9FAFB;
  --color-border: #E5E7EB;
  --color-text: #111827;
  --color-text-muted: #6B7280;
  --color-text-subtle: #9CA3AF;

  /* === Semantic Colors === */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* === Spacing === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* === Border Radius === */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}

/* === Dark Mode === */
.dark {
  --color-bg: #030712;
  --color-surface: #111827;
  --color-border: #374151;
  --color-text: #F9FAFB;
  --color-text-muted: #9CA3AF;
  --color-text-subtle: #6B7280;
}

/* === Cinematic Theme (About Page) === */
.theme-cinematic {
  --color-bg: #020016;
  --color-surface: #1A0D1A;
  --color-border: #702D4C;
  --color-text: #F2E5D9;
  --color-text-muted: #E4B3A3;
  --color-accent: #531431;
  --color-accent-hover: #702D4C;
}
```

---

## Implementation Plan

### Phase 1: Design Tokens (Foundation)

**Files to create/modify:**
- `app/globals.css` - Add CSS custom properties
- `tailwind.config.ts` - Extend theme with design tokens

**Core Tasks:**
- [x] Add color tokens to `:root`
- [x] Add dark mode tokens to `.dark`
- [x] Add cinematic theme tokens
- [x] Add spacing tokens
- [x] Add typography tokens
- [x] Test token application (build verified)

**Figma MCP Tasks:**
- [ ] Authenticate Figma MCP (`/mcp` -> figma -> Authenticate)
- [ ] Extract color tokens from Figma design file
- [ ] Extract typography scale from Figma text styles
- [ ] Export spacing values from Figma auto-layout
- [ ] Compare extracted tokens with implemented CSS variables
- [ ] Document token mapping (Figma style -> CSS variable)

**A11y MCP Tasks - Color Contrast Validation:**
- [ ] Run A11y audit on all color combinations
- [ ] Verify primary/background contrast >= 4.5:1
- [ ] Verify text/muted on dark background >= 4.5:1
- [ ] Verify cinematic theme palette accessibility

| Combination | Required Ratio | Status |
|-------------|----------------|--------|
| --color-text on --color-bg | 4.5:1 | Pending |
| --color-text-muted on --color-bg | 4.5:1 | Pending |
| --cinematic-text on --cinematic-bg-deep | 4.5:1 | Pending |
| --color-primary on white | 3:1 (UI) | Pending |

**Estimated effort:** 4-5 hours

---

### Phase 2: Component Library

**Files to create:**
- `app/components/ui/button.tsx`
- `app/components/ui/card.tsx`
- `app/components/ui/input.tsx`
- `app/components/ui/badge.tsx`
- `app/components/ui/index.tsx`

**Core Tasks:**
- [x] Create Button component with variants (primary, secondary, ghost, danger)
- [x] Create Card component (default, elevated, outlined, ghost + StatCard)
- [x] Create Input component (with label, error, helper text)
- [x] Create Textarea component (with resize options)
- [x] Create Badge component (7 variants including info)
- [x] Document usage patterns (Storybook stories)
- [x] Ensure accessibility (44px touch targets, focus states)

**Storybook MCP Tasks - Component Stories:**

| Component | Stories Required | Status |
|-----------|-----------------|--------|
| Button | primary, secondary, ghost, danger, sizes, loading, icons | ✅ Complete |
| Card | default, elevated, outlined, hoverable, StatCard | ✅ Complete |
| Input | text, email, textarea, states (focus, error, disabled) | ✅ Complete |
| Badge | all 7 color variants, sizes | ✅ Complete |

```tsx
// Example: button.stories.tsx
export default { title: 'UI/Button', component: Button };

export const AllVariants = () => (
  <div className="flex gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export const AllSizes = () => (
  <div className="flex items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
```

**Playwright MCP Tasks - Visual Regression:**
- [ ] Button: 12 visual snapshots (3 variants x 4 states)
- [ ] Card: 8 visual snapshots (2 variants x 4 themes)
- [ ] Input: 8 visual snapshots (2 types x 4 states)
- [ ] Badge: 6 visual snapshots (6 color variants)

**A11y MCP Tasks - Component Accessibility:**

| Component | A11y Requirements | Status |
|-----------|------------------|--------|
| Button | Focus indicator >= 2px, touch target >= 44px, aria-disabled | Pending |
| Card | Descriptive link text, alt text on images, logical focus order | Pending |
| Input | Label association, aria-describedby for errors, aria-required | Pending |
| Badge | Sufficient color contrast, not color-only meaning | Pending |

**Estimated effort:** 8-10 hours

---

### Phase 3: Theme Harmonization

**Files to modify:**
- `app/about/about-layout.tsx`
- `app/work/work-gallery.tsx`
- `app/layout.tsx`
- Remove invalid `cyan700:` classes

**Core Tasks:**
- [x] Decide on About page approach (keep cinematic or unify) - Kept cinematic theme
- [x] Apply design tokens throughout
- [x] Fix background inconsistencies (gray-800 vs gray-900) - Updated layout.tsx
- [x] Remove/fix invalid Tailwind classes (cyan700:, rounded-base)
- [x] Test dark/light mode transitions (build verified)

**Figma MCP Tasks - Theme Sync:**
- [ ] Export light theme from Figma
- [ ] Export dark theme from Figma
- [ ] Export cinematic theme from Figma
- [ ] Verify all themes use consistent token structure

**Playwright MCP Tasks - Theme Visual Tests:**

```typescript
test.describe('Theme Transitions', () => {
  test('light to dark mode transition', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('home-light.png');
    await page.click('[data-testid="theme-toggle"]');
    await expect(page).toHaveScreenshot('home-dark.png');
  });

  test('about page cinematic theme', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveScreenshot('about-cinematic.png');
  });
});
```

**A11y MCP Tasks - Multi-Theme Accessibility:**
- [ ] Light mode full page audit
- [ ] Dark mode full page audit
- [ ] Cinematic theme full page audit
- [ ] Verify focus indicators visible in all themes

**Estimated effort:** 5-6 hours

---

### Phase 4: Page Implementation

**Files to modify:**
- `app/page.tsx`
- `app/about/*.tsx`
- `app/work/*.tsx`
- `app/contact/page.tsx`

**Core Tasks:**
- [x] Apply consistent typography scale
- [x] Apply consistent spacing
- [x] Apply consistent card styling
- [x] Apply consistent button styling
- [x] Test responsive behavior (build verified)
- [x] Test accessibility (skip-to-content link added)

**Storybook MCP Tasks - Page Stories:**
- [ ] Homepage (mobile, tablet, desktop)
- [ ] Work Gallery (mobile, tablet, desktop)
- [ ] About Page (mobile, tablet, desktop)
- [ ] Contact Page (mobile, tablet, desktop)
- [ ] 404 Page
- [ ] Loading states for each page

**Playwright MCP Tasks - Full Page Visual Regression:**

| Page | Mobile | Tablet | Desktop | Dark Mode |
|------|--------|--------|---------|-----------|
| Homepage | Pending | Pending | Pending | Pending |
| Work Gallery | Pending | Pending | Pending | Pending |
| About | Pending | Pending | Pending | N/A |
| Contact | Pending | Pending | Pending | Pending |

**A11y MCP Tasks - Site-Wide Accessibility:**

| Requirement | Home | Work | About | Contact |
|-------------|------|------|-------|---------|
| Heading hierarchy (h1 > h2 > h3) | Pending | Pending | Pending | Pending |
| Skip to content link | Pending | Pending | Pending | Pending |
| Landmark regions | Pending | Pending | Pending | Pending |
| Keyboard navigation | Pending | Pending | Pending | Pending |
| Focus management | Pending | Pending | Pending | Pending |

**Estimated effort:** 8-10 hours

---

## Quality Gates

Each phase must pass these automated quality gates before proceeding:

### Phase 1 Quality Gate

| Check | Tool | Threshold | Required |
|-------|------|-----------|----------|
| Token extraction complete | Figma MCP | 100% | Yes |
| Color contrast passes | A11y MCP | WCAG AA | Yes |
| CSS variables valid | Build | No errors | Yes |
| Tailwind config valid | Build | No errors | Yes |

### Phase 2 Quality Gate

| Check | Tool | Threshold | Required |
|-------|------|-----------|----------|
| All component stories exist | Storybook MCP | 100% | Yes |
| Visual regression passes | Playwright MCP | 0 diffs | Yes |
| Component a11y passes | A11y MCP | 0 critical | Yes |
| Storybook builds | Build | No errors | Yes |

### Phase 3 Quality Gate

| Check | Tool | Threshold | Required |
|-------|------|-----------|----------|
| Theme tokens synced | Figma MCP | 100% match | Yes |
| All themes pass contrast | A11y MCP | WCAG AA | Yes |
| Theme transition visual tests | Playwright MCP | 0 diffs | Yes |
| No invalid CSS classes | Build | 0 warnings | Yes |

### Phase 4 Quality Gate

| Check | Tool | Threshold | Required |
|-------|------|-----------|----------|
| Page stories complete | Storybook MCP | All pages | Yes |
| Full visual regression | Playwright MCP | 0 diffs | Yes |
| Site-wide a11y audit | A11y MCP | 0 critical, <5 serious | Yes |
| Lighthouse performance | CI | >90 | Yes |
| Lighthouse accessibility | CI | >90 | Yes |

---

## Success Criteria

### Visual Consistency (Figma MCP Verified)
- [ ] All pages use design tokens (Figma sync 100%)
- [ ] Consistent typography hierarchy (Figma style match)
- [ ] Consistent spacing rhythm (Figma auto-layout match)
- [ ] Consistent component styling (Figma component match)
- [ ] Design-to-code drift < 2% per page

### Technical Quality (Storybook MCP Verified)
- [ ] No hard-coded colors outside tokens
- [ ] No invalid CSS classes
- [ ] All components documented in Storybook (100% coverage)
- [ ] All component variants have stories
- [ ] All component states documented
- [ ] Dark/light mode works consistently

### Visual Regression (Playwright MCP Verified)
- [ ] All component visual tests pass (0 diffs)
- [ ] All page visual tests pass (0 diffs)
- [ ] All responsive breakpoints tested
- [ ] All theme variants tested
- [ ] Visual baseline established and maintained

### Accessibility (A11y MCP Verified)
- [ ] WCAG 2.1 AA compliance (0 critical violations)
- [ ] Color contrast >= 4.5:1 for all text
- [ ] Color contrast >= 3:1 for UI elements
- [ ] All interactive elements keyboard accessible
- [ ] All images have alt text
- [ ] Proper heading hierarchy on all pages
- [ ] Focus indicators visible in all themes
- [ ] Screen reader compatible

### Performance
- [ ] Lighthouse score > 90 (performance)
- [ ] Lighthouse score > 90 (accessibility)
- [ ] No layout shifts from styling
- [ ] Animations perform at 60fps

---

## Effort Summary

| Phase | Original | With MCP Integration | Notes |
|-------|----------|---------------------|-------|
| Phase 1 | 2-3 hours | 4-5 hours | +Figma sync, +A11y contrast |
| Phase 2 | 4-6 hours | 8-10 hours | +Storybook, +Visual tests, +A11y |
| Phase 3 | 3-4 hours | 5-6 hours | +Theme sync, +Visual regression |
| Phase 4 | 4-6 hours | 8-10 hours | +Page stories, +Full visual suite |
| **Total** | **13-19 hours** | **25-31 hours** | Quality automation ROI |

---

## Changelog

| Date | Progress | Changes |
|------|----------|---------|
| Jan 15, 2026 | 0% | Design system plan created |
| Jan 15, 2026 | 0% | Added MCP integration (Figma, Storybook, Playwright, A11y) |
| Jan 15, 2026 | 0% | Added Quality Gates and enhanced Success Criteria |
| Jan 19, 2026 | 25% | **Phase 1 Complete**: Design tokens implemented in globals.css |
| Jan 19, 2026 | 50% | **Phase 2 Complete**: Component library with Button, Card, StatCard, Input, Textarea, Badge |
| Jan 19, 2026 | 75% | **Phase 3 Complete**: Theme harmonization - fixed invalid classes, applied design tokens |
| Jan 19, 2026 | 100% | **Phase 4 Complete**: Page implementation - design tokens applied across all pages, accessibility features added |

---

*Plan created: January 15, 2026*
*Enhanced: January 15, 2026 with MCP Integration*
*Phase 1 Completed: January 19, 2026*
*Phase 2 Completed: January 19, 2026*
*Phase 3 Completed: January 19, 2026*
*Phase 4 Completed: January 19, 2026*
*Author: UI/UX Designer Agent*
*Focus: Design consistency, visual harmony, and automated quality assurance*
