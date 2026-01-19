import { type HTMLAttributes, type ReactNode } from "react";
import { clsxMerge } from "@/lib/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "muted"
    | "surface"
    | "dark";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "lg" | "md";
  children: ReactNode;
}

const variantStyles = {
  primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  accent: "bg-[var(--color-accent)]/20 text-[var(--color-accent)]",
  success: "bg-[var(--color-success)] text-white",
  warning: "bg-yellow-500/10 text-yellow-500",
  muted: "bg-[var(--color-text-muted)]/20 text-[var(--color-text-muted)]",
  surface:
    "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)]",
  dark: "bg-black/60 backdrop-blur-sm text-white",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-sm",
};

const roundedStyles = {
  full: "rounded-full",
  lg: "rounded-lg",
  md: "rounded",
};

export function Badge({
  variant = "primary",
  size = "md",
  rounded = "full",
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsxMerge(
        // Base
        "inline-flex items-center justify-center",
        "font-medium",
        // Variant
        variantStyles[variant],
        // Size
        sizeStyles[size],
        // Rounded
        roundedStyles[rounded],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
