import { forwardRef, type InputHTMLAttributes } from "react";
import { clsxMerge } from "@/lib/utils";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={clsxMerge(
            // Layout
            "w-full px-4 py-3",
            // Shape
            "rounded-lg",
            // Colors
            "bg-[var(--color-bg)]",
            "border",
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)]",
            "text-[var(--color-text)]",
            // Focus
            "focus:outline-none",
            // Transitions
            "transition-colors",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
