import { forwardRef, type SelectHTMLAttributes } from "react";
import { clsxMerge } from "@/lib/utils";

export interface FormSelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: FormSelectOption[];
  placeholder?: string;
  error?: string;
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, options, placeholder, error, className, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        <label
          htmlFor={selectId}
          className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
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
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
