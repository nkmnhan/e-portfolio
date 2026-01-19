import { type ReactNode } from "react";
import { clsxMerge } from "@/lib/utils";

export interface ResponsiveGridProps {
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const columnStyles = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

const gapStyles = {
  sm: "gap-5",
  md: "gap-8",
  lg: "gap-10",
};

export function ResponsiveGrid({
  columns = 3,
  gap = "md",
  children,
  className,
}: ResponsiveGridProps) {
  return (
    <div
      className={clsxMerge(
        "grid",
        columnStyles[columns],
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
}
