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
