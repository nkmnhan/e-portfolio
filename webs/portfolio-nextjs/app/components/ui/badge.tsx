import { type HTMLAttributes, type ReactNode } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Badge({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: BadgeProps) {
  const baseStyles = clsxMerge(
    "inline-flex items-center justify-center",
    "font-medium",
    "rounded-full"
  );

  const variantStyles = {
    default: "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
    primary: "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]",
    secondary: "bg-[var(--color-secondary-light)] text-[var(--color-secondary)]",
    success: "bg-[var(--color-success-light)] text-[var(--color-success-dark)]",
    warning: "bg-[var(--color-warning-light)] text-[var(--color-warning-dark)]",
    error: "bg-[var(--color-error-light)] text-[var(--color-error-dark)]",
    info: "bg-[var(--color-info-light)] text-[var(--color-info-dark)]",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  return (
    <span
      className={clsxMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
