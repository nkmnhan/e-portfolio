# CSS Class Grouping Reference

Quick reference for Tailwind CSS class ordering.

## Order

```
1. Layout     → flex, grid, block, relative, absolute, fixed
2. Sizing     → w-*, h-*, p-*, m-*, gap-*
3. Shape      → rounded-*, border-*, overflow-*
4. Colors     → bg-*, text-*, border-* (color)
5. Typography → font-*, text-* (size), leading-*
6. Effects    → shadow-*, opacity-*, blur-*
7. Animation  → transition-*, duration-*, animate-*
8. States     → hover:*, focus:*, active:*, disabled:*
9. Responsive → sm:*, md:*, lg:*, xl:*
```

## Examples

### Button
```tsx
className={clsxMerge(
  "inline-flex items-center justify-center",  // Layout
  "h-10 px-4 py-2",                           // Sizing
  "rounded-md",                                // Shape
  "bg-blue-500 text-white",                   // Colors
  "text-sm font-medium",                      // Typography
  "shadow-sm",                                // Effects
  "transition-colors duration-200",           // Animation
  "hover:bg-blue-600 focus:ring-2",           // States
  "disabled:opacity-50"                       // States
)}
```

### Card
```tsx
className={clsxMerge(
  "flex flex-col",              // Layout
  "w-full p-6 gap-4",          // Sizing
  "rounded-xl border",          // Shape
  "bg-white dark:bg-gray-800", // Colors
  "shadow-lg",                  // Effects
  "transition-shadow",          // Animation
  "hover:shadow-xl"             // States
)}
```

### Container
```tsx
className={clsxMerge(
  "flex flex-col items-center",     // Layout
  "w-full max-w-7xl mx-auto px-4", // Sizing
  "py-8",                           // Sizing
  "md:px-6 lg:px-8"                // Responsive
)}
```

### Image Wrapper
```tsx
className={clsxMerge(
  "relative",                   // Layout
  "w-full aspect-video",       // Sizing
  "rounded-lg overflow-hidden", // Shape
  "bg-gray-100",               // Colors
  "group"                      // For hover effects
)}
```

### Nav Link
```tsx
className={clsxMerge(
  "inline-flex items-center",           // Layout
  "px-3 py-2",                          // Sizing
  "rounded-md",                          // Shape
  isActive ? "bg-gray-100" : "bg-transparent", // Colors
  "text-sm font-medium",                // Typography
  "transition-colors duration-150",      // Animation
  "hover:bg-gray-50 focus:outline-none" // States
)}
```

## Common Patterns

### Responsive Grid
```tsx
"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
```

### Centered Flex
```tsx
"flex items-center justify-center"
```

### Full Screen
```tsx
"min-h-screen w-full"
```

### Overlay
```tsx
"absolute inset-0 bg-black/50"
```

### Text Truncate
```tsx
"truncate" // or "line-clamp-2" for multi-line
```
