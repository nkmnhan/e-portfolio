import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsxMerge } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
  as?: "div" | "article" | "section";
}

const variantStyles = {
  default: clsxMerge(
    "bg-[var(--color-surface)]",
    "border border-[var(--color-border)]"
  ),
  elevated: clsxMerge(
    "bg-[var(--color-surface)]",
    "border border-[var(--color-border)]",
    "shadow-lg"
  ),
  interactive: clsxMerge(
    "bg-[var(--color-surface)]",
    "border border-[var(--color-border)]",
    "hover:border-[var(--color-border-hover)]",
    "transition-all duration-300",
    "cursor-pointer"
  ),
  gradient: clsxMerge(
    "bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20"
  ),
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6 md:p-7",
  lg: "p-8 md:p-10",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      children,
      className,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={clsxMerge(
          // Base
          "rounded-xl",
          // Variant
          variantStyles[variant],
          // Padding
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

// =============================================================================
// CARD HEADER
// =============================================================================

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  iconColor?: "primary" | "accent" | "warning";
  title: string;
  children?: ReactNode;
}

const iconColorStyles = {
  primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  warning: "bg-yellow-500/10 text-yellow-500",
};

export function CardHeader({
  icon,
  iconColor = "primary",
  title,
  children,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={clsxMerge("flex items-center gap-3 mb-5", className)}
      {...props}
    >
      {icon && (
        <div className={clsxMerge("p-2.5 rounded-lg", iconColorStyles[iconColor])}>
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-lg">{title}</h3>
      {children}
    </div>
  );
}

// =============================================================================
// CARD CONTENT
// =============================================================================

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContent({
  children,
  className,
  ...props
}: CardContentProps) {
  return (
    <div className={clsxMerge(className)} {...props}>
      {children}
    </div>
  );
}

// =============================================================================
// CARD FOOTER
// =============================================================================

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardFooter({
  children,
  className,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={clsxMerge(
        "mt-5 pt-4 border-t border-[var(--color-border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
