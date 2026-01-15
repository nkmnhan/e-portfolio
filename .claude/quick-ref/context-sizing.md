# Context Sizing Guide

Rules to prevent context overflow when working with Claude.

## Token Budget

| Content Type | Max Size | Notes |
|--------------|----------|-------|
| Single file | 500 lines | Read in chunks if larger |
| Multiple files | 10 files max | Prioritize relevant ones |
| Search results | 20 matches | Use specific patterns |
| Code output | 100 lines | Summarize if larger |

## Best Practices

### 1. Read Specific Sections
```
Instead of: Read entire file
Do: Read lines 1-50, or search for specific function
```

### 2. Use Targeted Searches
```
Instead of: Search "function" in all files
Do: Search "handleSubmit" in app/components/
```

### 3. Exclude Large Directories
Always exclude:
- `node_modules/`
- `.next/`
- `dist/`
- `coverage/`
- `*.min.js`
- `*.map`

### 4. Summarize When Needed
If a file is large:
1. Read first 100 lines for overview
2. Search for specific patterns
3. Read only relevant sections

### 5. Batch Operations
```
Instead of: Read 20 files one by one
Do: Read 5 most relevant files, summarize findings
```

## File Priority

When exploring codebase, prioritize:

1. **Entry points first**
   - `app/page.tsx`
   - `app/layout.tsx`
   - `next.config.ts`

2. **Relevant components**
   - Search by feature name
   - Read index.tsx for exports

3. **Configuration**
   - `tailwind.config.ts`
   - `tsconfig.json`

4. **Documentation**
   - `CLAUDE.md`
   - `docs/development-rules.md`

## Context Refresh

When context gets large:
1. Summarize current understanding
2. List remaining tasks
3. Continue with fresh context

## Commands to Reduce Context

Use these patterns:
```bash
# Count lines before reading
wc -l filename.tsx

# Read specific range
head -100 filename.tsx
tail -50 filename.tsx

# Search specific pattern
grep -n "function ComponentName" filename.tsx
```
