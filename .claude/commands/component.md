---
description: Create a new component with proper structure
argument-hint: [component-name]
---

Create a new component: `$ARGUMENTS`

## Structure

```
app/components/{component-name}/
├── index.tsx              # Barrel export
├── {component-name}.tsx   # Main component (Server by default)
└── index.stories.tsx      # Storybook story
```

## Rules

1. **Server Component by default** - No "use client" unless needed
2. **Use clsxMerge** - Import from `@/app/components/themes/utils`
3. **Group CSS classes** - Layout → Sizing → Shape → Colors → Animation → States
4. **Accept className prop** - For external customization

## Template

```tsx
// {component-name}.tsx
import { clsxMerge } from "@/app/components/themes/utils";

interface {ComponentName}Props {
  className?: string;
  children?: React.ReactNode;
}

export function {ComponentName}({ className, children }: {ComponentName}Props) {
  return (
    <div className={clsxMerge(
      // Layout
      "flex flex-col",
      // Sizing
      "w-full",
      // Override
      className
    )}>
      {children}
    </div>
  );
}
```

```tsx
// index.tsx
export { {ComponentName} } from "./{component-name}";
```

```tsx
// index.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { {ComponentName} } from "./{component-name}";

const meta: Meta<typeof {ComponentName}> = {
  component: {ComponentName},
};
export default meta;

type Story = StoryObj<typeof {ComponentName}>;

export const Default: Story = {
  args: {},
};
```
