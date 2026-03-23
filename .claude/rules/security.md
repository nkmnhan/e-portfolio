---
description: Security rules for web applications
globs: webs/**
---

# Security Rules

## XSS Prevention
- Never use `dangerouslySetInnerHTML`
- Sanitize any user-generated content before rendering
- Use React's built-in escaping (JSX expressions)

## Secrets
- Never commit secrets, tokens, API keys, or credentials
- Use environment variables via `process.env` (server-side only)
- `.env*` files in `.gitignore`

## External Resources
- Allowlist external image domains in `next.config.ts` → `images.remotePatterns`
- Use SRI (Subresource Integrity) for external scripts
- No inline scripts without nonce

## Supply Chain
- Review new dependencies before adding (see dependencies.md)
- Keep dependencies updated (security patches)
- Use `pnpm audit` periodically

## Data Handling
- No sensitive data in client bundles
- No PII in URLs or query parameters
- Server-only imports for sensitive operations (`"server-only"` package)
