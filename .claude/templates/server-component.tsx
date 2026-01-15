/**
 * Server Component Template
 *
 * Use this for components that:
 * - Don't need event handlers
 * - Don't need React hooks
 * - Can fetch data directly
 */

import { clsxMerge } from "@/app/components/themes/utils";

interface TemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export function Template({ className, children }: TemplateProps) {
  return (
    <div
      className={clsxMerge(
        // Layout
        "flex flex-col",

        // Sizing
        "w-full",

        // Shape
        "rounded-lg",

        // Colors
        "bg-white dark:bg-gray-900",

        // External override
        className
      )}
    >
      {children}
    </div>
  );
}
