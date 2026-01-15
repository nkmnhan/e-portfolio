# Development Rules

## 1. Server Components First

**Default to Server Components** - No "use client" unless required.

### When to use "use client"
- Event handlers (onClick, onChange)
- React hooks (useState, useEffect)
- Browser APIs (window, localStorage)

### Pattern: Island Architecture
```tsx
// page.tsx (Server - NO "use client")
import { LikeButton } from "./like-button";

export default async function Page() {
  const data = await fetchData();
  return (
    <div>
      <h1>{data.title}</h1>
      <LikeButton /> {/* Only this is client */}
    </div>
  );
}

// like-button.tsx (Client - minimal)
"use client";
export function LikeButton() {
  const [liked, setLiked] = useState(false);
  return <button onClick={() => setLiked(!liked)}>Like</button>;
}
```

---

## 2. CSS with clsxMerge

Always use `clsxMerge` from `@/app/components/themes/utils`:

```tsx
// ✅ GOOD
className={clsxMerge("base", active && "active")}

// ❌ BAD
className={`base ${active ? 'active' : ''}`}
```

---

## 3. CSS Class Grouping

Order classes by purpose:

```tsx
className={clsxMerge(
  // 1. Layout
  "flex items-center justify-center",
  // 2. Sizing
  "w-full h-12 px-4 gap-2",
  // 3. Shape
  "rounded-lg border overflow-hidden",
  // 4. Colors
  "bg-white text-gray-900 dark:bg-gray-800",
  // 5. Typography
  "text-sm font-medium",
  // 6. Effects
  "shadow-sm",
  // 7. Animation
  "transition-all duration-200",
  // 8. States
  "hover:shadow-md focus:ring-2",
  // 9. Responsive
  "md:px-6 lg:w-auto"
)}
```

---

## 4. Component Structure

```
components/{name}/
├── index.tsx          # export { Component }
├── {name}.tsx         # Main component
└── index.stories.tsx  # Storybook
```

### Template

```tsx
import { clsxMerge } from "@/app/components/themes/utils";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Component({ className, children }: Props) {
  return (
    <div className={clsxMerge("flex flex-col w-full", className)}>
      {children}
    </div>
  );
}
```

---

## 5. Performance

- Use `next/image` for all images
- Dynamic import for heavy components (3D, charts)
- Prefer CSS animations over JS
- Respect `prefers-reduced-motion`

```tsx
import dynamic from "next/dynamic";

const R3FViewer = dynamic(() => import("./r3f-viewer"), {
  ssr: false,
  loading: () => <Skeleton />,
});
```

---

## 6. Quick Reference

| Rule | Do | Don't |
|------|-----|-------|
| Component type | Server by default | "use client" everywhere |
| CSS classes | clsxMerge() | Template literals |
| Class order | Grouped by purpose | Random order |
| Images | next/image | img tag |
| Types | Explicit interfaces | any |
