---
description: Dependency management rules for package.json files
globs: **/package.json
---

# Dependency Rules

## License Check
Only add dependencies with: MIT, Apache 2.0, BSD, ISC licenses.

## Version Policy
- No preview/alpha/beta/RC versions in production dependencies
- Pin major versions with caret (`^`): `"next": "^16.0.0"`
- DevDependencies can be more relaxed

## Evaluation Criteria
Before adding a dependency:
1. Is it actively maintained? (commits in last 6 months)
2. Does it duplicate something we already have? (check existing deps first)
3. Is the bundle size acceptable? (check bundlephobia)
4. Does it support React 19 + Next.js 16?

## pnpm Workspace Protocol
- Internal packages use `"workspace:*"`: `"@eportfolio/ui": "workspace:*"`
- Never publish workspace packages to npm (all `"private": true`)
- Shared peer deps (react, next) declared in packages, installed by consumers
