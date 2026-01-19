import { forwardRef, type InputHTMLAttributes } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={clsxMerge(
              "block mb-2",
              "text-sm font-medium",
              "text-[var(--color-text)]"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsxMerge(
            // Layout
            "w-full px-4 py-3",
            // Shape
            "rounded-lg",
            // Border
            "border",
            error
              ? "border-[var(--color-error)] focus:ring-[var(--color-error)]"
              : "border-[var(--color-border)] focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]",
            // Background
            "bg-[var(--color-bg)]",
            // Text
            "text-[var(--color-text)]",
            "placeholder:text-[var(--color-text-subtle)]",
            // Focus
            "focus:outline-none focus:ring-2",
            // Disabled
            "disabled:opacity-50 disabled:cursor-not-allowed",
            // Transitions
            "transition-colors duration-200",
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={clsxMerge(
              "mt-2 text-sm",
              error ? "text-[var(--color-error)]" : "text-[var(--color-text-muted)]"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
