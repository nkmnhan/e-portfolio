import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "ghost";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      hoverable = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-xl transition-all duration-200";

    const variantStyles = {
      default: clsxMerge(
        "bg-[var(--color-bg)]",
        "border border-[var(--color-border)]",
        "shadow-sm"
      ),
      elevated: "bg-[var(--color-bg)] shadow-md",
      outlined: "bg-transparent border-2 border-[var(--color-border)]",
      ghost: "bg-[var(--color-surface)]",
    };

    const paddingStyles = {
      none: "",
      sm: "p-3",
      md: "p-4 md:p-6",
      lg: "p-6 md:p-8",
    };

    const hoverStyles = hoverable
      ? "cursor-pointer hover:shadow-lg hover:border-[var(--color-border-strong)] hover:-translate-y-0.5"
      : "";

    return (
      <div
        ref={ref}
        className={clsxMerge(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsxMerge("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsxMerge("text-[var(--color-text-secondary)]", className)}
      {...props}
    >
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsxMerge(
        "flex items-center pt-4 border-t border-[var(--color-border)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";

// =============================================================================
// STAT CARD
// A specialized card for displaying statistics/metrics
// =============================================================================

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
  hoverable?: boolean;
}

export function StatCard({
  value,
  label,
  icon,
  trend,
  hoverable = true,
  className,
  ...props
}: StatCardProps) {
  const trendColors = {
    up: "text-[var(--color-success)]",
    down: "text-[var(--color-error)]",
    neutral: "text-[var(--color-text-muted)]",
  };

  const trendIcons = {
    up: "↑",
    down: "↓",
    neutral: "→",
  };

  return (
    <div
      className={clsxMerge(
        // Layout
        "flex flex-col items-center justify-center text-center",
        // Sizing
        "p-6",
        // Shape
        "rounded-xl",
        // Colors
        "bg-[var(--color-bg)] border border-[var(--color-border)]",
        // Transitions
        "transition-all duration-200",
        // Hover
        hoverable && "hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 cursor-pointer",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-3 text-[var(--color-primary)]">
          {icon}
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-[var(--color-text)]">
          {value}
        </span>
        {trend && (
          <span className={clsxMerge("text-sm font-medium", trendColors[trend.direction])}>
            {trendIcons[trend.direction]} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <span className="mt-1 text-sm text-[var(--color-text-muted)]">
        {label}
      </span>
    </div>
  );
}

StatCard.displayName = "StatCard";
