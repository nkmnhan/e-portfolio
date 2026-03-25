# E-Portfolio

A monorepo portfolio platform with two Next.js apps and shared packages.

## Tech Stack

- **Framework**: Next.js 16+ (App Router), TypeScript
- **Styling**: Tailwind CSS v4, Flowbite-React
- **3D/Motion**: React Three Fiber, Framer Motion
- **Package Manager**: pnpm workspaces

## Quick Start

```bash
pnpm install
pnpm dev:artist    # Artist portfolio (:3001)
pnpm dev:byte      # Byte-folio (:3002)
```

## Projects

### Artist Portfolio

A 3D artist and animator portfolio featuring project galleries, showreels, and a contact page. Built with React Three Fiber and Framer Motion.

| Desktop | Mobile |
|---------|--------|
| ![Artist Portfolio - Desktop](./docs/screenshots/artist-portfolio-desktop.png) | ![Artist Portfolio - Mobile](./docs/screenshots/artist-portfolio-mobile.png) |

<details open>
<summary>More pages</summary>

| About | Projects |
|-------|----------|
| ![About](./docs/screenshots/artist-portfolio-about.png) | ![Projects](./docs/screenshots/artist-portfolio-projects.png) |

| Showreels | Contact |
|-----------|---------|
| ![Showreels](./docs/screenshots/artist-portfolio-showreels.png) | ![Contact](./docs/screenshots/artist-portfolio-contact.png) |

</details>

### Byte-Folio

A space/cosmic-themed developer portfolio with a CLI aesthetic. Single-page design with sections for about, experience, projects, skills, and contact.

![Byte-Folio - Hero](./docs/screenshots/byte-folio-hero.png)

<details open>
<summary>More sections</summary>

| About | Experience |
|-------|------------|
| ![About](./docs/screenshots/byte-folio-about.png) | ![Experience](./docs/screenshots/byte-folio-experience.png) |

| Key Projects | Projects |
|--------------|----------|
| ![Key Projects](./docs/screenshots/byte-folio-key-projects.png) | ![Projects](./docs/screenshots/byte-folio-projects.png) |

| Skills | Contact |
|--------|---------|
| ![Skills](./docs/screenshots/byte-folio-skills.png) | ![Contact](./docs/screenshots/byte-folio-contact.png) |

</details>

<details>
<summary>Project detail pages</summary>

| MediTrack | Aspire.Nexus | E-Portfolio |
|-----------|--------------|-------------|
| ![MediTrack](./docs/screenshots/byte-folio-project-meditrack.png) | ![Aspire.Nexus](./docs/screenshots/byte-folio-project-aspire-nexus.png) | ![E-Portfolio](./docs/screenshots/byte-folio-project-e-portfolio.png) |

</details>

## Project Structure

```
e-portfolio/
├── packages/
│   ├── ui/                  # Shared components, types, utils
│   ├── theme/               # CSS tokens, derivation, hooks
│   └── storybook-config/    # Shared Storybook base
└── webs/
    ├── artist-portfolio/    # 3D/animation/concept art portfolio
    └── byte-folio/          # Space-themed dev portfolio
```

## Documentation

- [Development Rules](./docs/development-rules.md) - Coding standards
- [Theming Guide](./docs/theming-guide.md) - Theme system documentation
