import { forwardRef, type TextareaHTMLAttributes } from "react";
import { clsxMerge } from "@/lib/utils";

export interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, id, rows = 5, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium mb-2 text-[var(--color-text-secondary)]"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={clsxMerge(
            // Layout
            "w-full px-4 py-3",
            // Shape
            "rounded-lg resize-none",
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
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
