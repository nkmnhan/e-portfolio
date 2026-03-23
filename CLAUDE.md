# E-Portfolio — Monorepo

Multi-project portfolio platform. Two Next.js apps sharing code via pnpm workspace packages.

## Tech Stack

| Layer | Stack |
|-------|-------|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Flowbite-React, CSS variables |
| **Animation** | CSS animations, IntersectionObserver |
| **Package Mgr** | pnpm workspaces |
| **Testing** | Storybook 10, Playwright |

## Monorepo Structure

```
e-portfolio/
├── packages/
│   ├── ui/                  # @eportfolio/ui — shared components, types, utils
│   ├── theme/               # @eportfolio/theme — CSS tokens, derivation, hooks
│   └── storybook-config/    # @eportfolio/storybook-config — shared Storybook base
└── webs/
    ├── artist-portfolio/    # 3D/animation/concept art portfolio (:3001)
    └── byte-folio/          # Space/cosmic dev portfolio (:3002)
```

## Shorthand Aliases

| Term | Path |
|------|------|
| **artist** | `webs/artist-portfolio/` |
| **byte** | `webs/byte-folio/` |
| **ui** | `packages/ui/` |
| **theme** | `packages/theme/` |
| **storybook** | `packages/storybook-config/` |

## Commands

```bash
pnpm install                    # Install all workspace deps
pnpm dev:artist                 # Artist portfolio dev (:3001)
pnpm dev:byte                   # Byte-folio dev (:3002)
pnpm -r build                   # Build all projects
pnpm -r lint                    # Lint all projects
```

## Engineering Principles

- **KISS** — simplest solution that works
- **YAGNI** — don't build for hypothetical future requirements
- **DRY** — extract shared logic into `packages/`, but don't over-abstract for a single use
- **Composition over Inheritance** — small components, hooks for reuse
- **Immutability** — never mutate state directly, always return new objects
- **Fail Fast** — validate at boundaries, throw early with meaningful errors

## Naming Conventions

- Booleans: `is`, `has`, `can`, `should` prefix
- Event handlers: `on`/`handle` prefix
- Async: verb prefix (`fetchProject`, `loadProfile`)
- Components: PascalCase, noun-first (`ProjectCard`)
- Hooks: `use` prefix (`useColorTheme`)
- No single-letter names (except `i`/`j` in simple loops)

## Collaboration Protocol

- **Read CHANGELOG.md** at the start of a session
- **Read before write** — always read existing code before modifying
- **Evidence over assumption** — show grep/glob proof when claiming something exists or doesn't
- **Verify after change** — run lint/build after modifying code

## Development Workflow

For non-trivial work: Design → Plan → Isolate (feature branch) → Execute → Verify → Finish.

If superpowers plugin is installed, use its skills for each step.

## Detailed Rules

Path-scoped rules in `.claude/rules/` — auto-loaded when editing relevant files.
Per-project context in each project's `CLAUDE.md`.
