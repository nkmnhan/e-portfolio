import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  withArrow?: boolean;
  href?: string;
  external?: boolean;
  children?: ReactNode;
}

const variantStyles = {
  primary: clsxMerge(
    "bg-[var(--color-primary)] text-white",
    "hover:bg-[var(--color-primary-hover)]"
  ),
  secondary: clsxMerge(
    "bg-[var(--color-surface)] text-[var(--color-text)]",
    "border border-[var(--color-border)]",
    "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
  ),
  ghost: clsxMerge(
    "text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]"
  ),
  icon: clsxMerge(
    "bg-[var(--color-surface)]",
    "text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)]"
  ),
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const iconSizeStyles = {
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      withArrow = false,
      href,
      external = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isIconOnly = variant === "icon";

    const buttonClasses = clsxMerge(
      // Base
      "inline-flex items-center justify-center gap-2",
      "font-medium",
      "rounded-lg",
      "transition-all duration-200",
      // Variant
      variantStyles[variant],
      // Size
      isIconOnly ? iconSizeStyles[size] : sizeStyles[size],
      // Disabled
      disabled && "opacity-50 cursor-not-allowed",
      // Group hover for arrow
      withArrow && "group",
      className
    );

    const content = (
      <>
        {leftIcon}
        {children}
        {withArrow && (
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        )}
        {rightIcon && !withArrow && rightIcon}
      </>
    );

    // Link button
    if (href) {
      const linkProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <Link href={href} className={buttonClasses} {...linkProps}>
          {content}
        </Link>
      );
    }

    // Regular button
    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

// =============================================================================
// BUTTON GROUP
// =============================================================================

export interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
}

export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div
      className={clsxMerge(
        "flex flex-col sm:flex-row items-center gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
