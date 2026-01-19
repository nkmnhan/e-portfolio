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
