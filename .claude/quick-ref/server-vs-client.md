# Server vs Client Components

Quick reference for choosing component type.

## Decision Tree

```
Need event handlers? (onClick, onChange, etc.)
  └─ YES → Client Component
  └─ NO ↓

Need React hooks? (useState, useEffect, etc.)
  └─ YES → Client Component
  └─ NO ↓

Need browser APIs? (window, localStorage, etc.)
  └─ YES → Client Component
  └─ NO ↓

→ Server Component (DEFAULT)
```

## Server Component (Default)

**Use when:**
- Fetching data
- Accessing backend resources
- Keeping sensitive info on server
- Rendering static content
- SEO-critical content

**Benefits:**
- Zero client JS
- Direct DB/API access
- Better performance
- Smaller bundle

```tsx
// page.tsx - NO "use client" needed
export default async function Page() {
  const data = await fetchData();
  return <div>{data.title}</div>;
}
```

## Client Component

**Use when:**
- Event handlers needed
- useState, useEffect, useContext
- Browser APIs (window, localStorage)
- Third-party client libraries

```tsx
// button.tsx
"use client";

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "♥" : "♡"}
    </button>
  );
}
```

## Island Pattern (Best Practice)

Keep parent as Server, extract minimal Client components:

```tsx
// page.tsx (Server - fetches data)
import { LikeButton } from "./like-button";
import { ShareButton } from "./share-button";

export default async function ArtworkPage({ id }) {
  const artwork = await getArtwork(id);

  return (
    <article>
      <h1>{artwork.title}</h1>
      <img src={artwork.url} alt={artwork.title} />
      <p>{artwork.description}</p>

      {/* Only these are client components */}
      <div className="flex gap-2">
        <LikeButton artworkId={id} />
        <ShareButton url={artwork.url} />
      </div>
    </article>
  );
}
```

## Anti-patterns

### ❌ Entire page as client
```tsx
"use client"; // BAD - entire page is client

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => { fetch... }, []);
  return <div>{data?.title}</div>;
}
```

### ✅ Server page with client islands
```tsx
// page.tsx (Server)
export default async function Page() {
  const data = await fetch...;
  return (
    <div>
      {data.title}
      <InteractiveWidget /> {/* Client island */}
    </div>
  );
}
```

## Quick Rules

| Need | Solution |
|------|----------|
| onClick | Client component |
| useState | Client component |
| Data fetch | Server component + async |
| Static text | Server component |
| Animation on hover | CSS (Server OK) |
| Animation on click | Client component |
| Form submission | Client component |
| SEO content | Server component |
