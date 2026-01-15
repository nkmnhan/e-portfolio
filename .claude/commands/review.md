---
description: Review code for quality and patterns
argument-hint: [file-or-pattern]
---

Review code in: `$ARGUMENTS`

## Checklist

### Performance
- [ ] Server Components used where possible?
- [ ] No unnecessary "use client"?
- [ ] Images use next/image?
- [ ] Heavy components use dynamic import?
- [ ] No blocking data fetches in client?

### CSS Patterns
- [ ] Using clsxMerge (not template literals)?
- [ ] Classes grouped by purpose?
- [ ] Responsive classes (mobile-first)?
- [ ] Dark mode support if needed?

### Code Quality
- [ ] TypeScript types defined?
- [ ] Props interface clear?
- [ ] Component single responsibility?
- [ ] No deep nesting (< 3 levels)?
- [ ] Meaningful variable names?

### Accessibility
- [ ] Semantic HTML elements?
- [ ] Alt text for images?
- [ ] Focus states visible?
- [ ] Keyboard navigation works?

## Output Format

```
## Review: {filename}

### Issues Found
1. [Category] Description - Line X
2. ...

### Suggestions
1. Description
2. ...

### Good Practices
- ✓ What's done well
```
