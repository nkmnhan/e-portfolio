import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = clsxMerge(
      // Layout
      "inline-flex items-center justify-center gap-2",
      // Shape
      "rounded-lg",
      // Typography
      "font-medium",
      // Transitions
      "transition-all duration-200",
      // Focus
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      // Disabled
      "disabled:opacity-50 disabled:cursor-not-allowed"
    );

    const variantStyles = {
      primary: clsxMerge(
        "bg-[var(--color-primary)] text-white",
        "hover:bg-[var(--color-primary-hover)]",
        "active:bg-[var(--color-primary-active)]",
        "focus:ring-[var(--color-primary)]"
      ),
      secondary: clsxMerge(
        "border-2 border-[var(--color-primary)] text-[var(--color-primary)]",
        "bg-transparent",
        "hover:bg-[var(--color-primary-light)] dark:hover:bg-[var(--color-primary)]/10",
        "focus:ring-[var(--color-primary)]"
      ),
      ghost: clsxMerge(
        "text-[var(--color-text-secondary)]",
        "bg-transparent",
        "hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]",
        "focus:ring-[var(--color-border-strong)]"
      ),
      danger: clsxMerge(
        "bg-[var(--color-error)] text-white",
        "hover:opacity-90",
        "focus:ring-[var(--color-error)]"
      ),
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={clsxMerge(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
