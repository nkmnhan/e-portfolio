---
description: Simplify code - reduce complexity, apply patterns
argument-hint: [file-or-pattern]
---

Simplify code in: `$ARGUMENTS`

## Simplification Actions

| Action | What to do |
|--------|------------|
| **Flatten nesting** | Use guard clauses, early returns |
| **Extract** | Break long components into smaller ones |
| **Simplify CSS** | Group classes, remove duplicates |
| **Server first** | Remove unnecessary "use client" |
| **DRY** | Extract repeated patterns |

## Checklist

### 1. Check "use client"
- [ ] Is "use client" necessary?
- [ ] Can interactive part be extracted to smaller component?
- [ ] Can parent remain server component?

### 2. Check CSS Classes
- [ ] Using clsxMerge?
- [ ] Classes grouped by purpose?
- [ ] No duplicate/conflicting classes?

### 3. Check Complexity
- [ ] Component < 100 lines?
- [ ] Nesting depth < 3?
- [ ] Single responsibility?

## CSS Grouping Order

```tsx
className={clsxMerge(
  // 1. Layout (flex, grid, position)
  "flex items-center",
  // 2. Sizing (w, h, p, m, gap)
  "w-full h-12 px-4 gap-2",
  // 3. Shape (rounded, border, overflow)
  "rounded-lg border",
  // 4. Colors (bg, text, border-color)
  "bg-white text-gray-900",
  // 5. Typography (font, text-size)
  "text-sm font-medium",
  // 6. Effects (shadow, opacity)
  "shadow-sm",
  // 7. Animation (transition, animate)
  "transition-all duration-200",
  // 8. States (hover, focus, active)
  "hover:shadow-md hover:scale-105",
  // 9. Responsive (sm:, md:, lg:)
  "md:w-auto lg:px-6"
)}
```

## Example Simplification

**Before:**
```tsx
"use client";
import { useState } from "react";

export default function Card({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-white rounded-lg p-4 shadow ${expanded ? 'h-auto' : 'h-24'} transition-all hover:shadow-lg`}>
      <h2 className="font-bold text-lg">{title}</h2>
      {expanded && <p>{content}</p>}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Less' : 'More'}
      </button>
    </div>
  );
}
```

**After:**
```tsx
// card.tsx (Server Component)
import { clsxMerge } from "@/app/components/themes/utils";
import { ExpandButton } from "./expand-button";

interface CardProps {
  title: string;
  content: string;
}

export function Card({ title, content }: CardProps) {
  return (
    <div className={clsxMerge(
      // Layout
      "flex flex-col",
      // Sizing
      "p-4",
      // Shape
      "rounded-lg",
      // Colors
      "bg-white",
      // Effects
      "shadow",
      // Animation
      "transition-shadow",
      // States
      "hover:shadow-lg"
    )}>
      <h2 className="font-bold text-lg">{title}</h2>
      <ExpandButton content={content} />
    </div>
  );
}

// expand-button.tsx (Client - only interactive part)
"use client";
import { useState } from "react";

export function ExpandButton({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded && <p>{content}</p>}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </>
  );
}
```
