---
description: Create a client component (with interactivity)
argument-hint: [component-name]
---

Create a **client** component: `$ARGUMENTS`

## When to Use

Only create client components when you need:
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (window, localStorage)

## Rules

1. **Keep it minimal** - Only the interactive part should be client
2. **Extract from parent** - Parent can remain server component
3. **Use clsxMerge** - Same CSS grouping rules apply

## Template

```tsx
// {component-name}.tsx
"use client";

import { useState, useCallback } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

interface {ComponentName}Props {
  className?: string;
  onAction?: () => void;
}

export function {ComponentName}({ className, onAction }: {ComponentName}Props) {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive(!active);
    onAction?.();
  }, [active, onAction]);

  return (
    <button
      onClick={handleClick}
      className={clsxMerge(
        // Layout
        "inline-flex items-center justify-center",
        // Sizing
        "px-4 py-2",
        // Shape
        "rounded-lg",
        // Colors
        active ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900",
        // Animation
        "transition-colors duration-200",
        // States
        "hover:opacity-90",
        // Override
        className
      )}
    >
      {active ? "Active" : "Click me"}
    </button>
  );
}
```

## Island Pattern

Keep parent as Server Component:

```tsx
// page.tsx (Server Component - NO "use client")
import { ClientButton } from "./client-button";

export default async function Page() {
  const data = await fetchData(); // Server fetch

  return (
    <main>
      <h1>{data.title}</h1>
      <ClientButton /> {/* Only this is client */}
    </main>
  );
}
```
