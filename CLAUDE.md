# E-Portfolio — Monorepo

Multi-project portfolio platform. Two Next.js apps sharing code via pnpm workspace packages.

## Shorthand Aliases

| Term | Path |
|------|------|
| **artist** | `webs/artist-portfolio/` |
| **byte** | `webs/byte-folio/` |
| **ui** | `packages/ui/` |
| **theme** | `packages/theme/` |
| **storybook** | `packages/storybook-config/` |

## Naming Conventions

- Booleans: `is`, `has`, `can`, `should` prefix
- Event handlers: `on`/`handle` prefix
- Async: verb prefix (`fetchProject`, `loadProfile`)
- Components: PascalCase, noun-first (`ProjectCard`)
- Hooks: `use` prefix (`useColorTheme`)
- No single-letter names (except `i`/`j` in simple loops)

## Collaboration Protocol

- **Read before write** — always read existing code before modifying
- **Evidence over assumption** — show grep/glob proof when claiming something exists or doesn't
- **Verify after change** — run lint/build after modifying code

## Development Workflow

For non-trivial work: Design → Plan → Isolate (feature branch) → Execute → Verify → Finish.

If superpowers plugin is installed, use its skills for each step.

## Detailed Rules

Path-scoped rules in `.claude/rules/` — auto-loaded when editing relevant files.
Per-project context in each project's `CLAUDE.md`.
