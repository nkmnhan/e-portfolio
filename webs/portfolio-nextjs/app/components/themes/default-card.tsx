// 1. Hover utility for consistent interactive polish
export const hoverAnimate =
  // Base: transition, transform origin, backface
  "transition-transform transition-shadow transition-colors [transition-duration:var(--hover-duration)] [transition-timing-function:var(--hover-ease)] origin-center [backface-visibility:hidden] " +
  // Will-change, motion-safe only (optional, for performance)
  "motion-safe:will-change-transform " +
  // Hover/focus: scale, outline-none
  "hover:scale-[var(--hover-scale)] focus:scale-[var(--hover-scale)] focus:outline-none";

// 2. Subtle elevated card hover
export const hoverCard =
  // Border radius (rounded-[10px]), transition on shadow/transform
  "rounded-[10px] transition-shadow transition-transform [transition-duration:var(--hover-duration)] [transition-timing-function:var(--hover-ease)] " +
  // Hover/focus: box-shadow and pop/lift effect
  "hover:shadow-[0_8px_28px_rgba(15,23,42,0.12)] focus:shadow-[0_8px_28px_rgba(15,23,42,0.12)] " +
  "hover:scale-101 hover:-translate-y-1 focus:scale-101 focus:-translate-y-1";

// 3. Small utility for link hover underline
export const linkUnderline =
  // Gradient underline and transition for linear background
  "[background-image:linear-gradient(currentColor,_currentColor)] [background-repeat:no-repeat] [background-size:0%_2px] [background-position:0_100%] " +
  "[transition:background-size_var(--hover-duration)_var(--hover-ease)] " +
  "hover:[background-size:100%_2px]";

// 4. Card-link utility for expanded mobile touch area
export const cardLink =
  "block no-underline [webkit-tap-highlight-color:transparent]";

// 5. Card content utility (flex column, spaced)
export const cardContent =
  "h-full flex flex-col justify-between";

// 6. Safe scale on hover (slightly enlarges - motion-safe only)
export const motionSafeHoverScale102 =
  "motion-safe:hover:scale-102";