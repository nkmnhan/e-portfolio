"use client";

import { clsxMerge } from "@/lib/utils";
import type { ProjectCategory } from "@/lib/types";

interface CategoryCount {
  id: ProjectCategory | "all";
  name: string;
  count: number;
}

interface CategoryFilterProps {
  categories: CategoryCount[];
  activeCategory: ProjectCategory | "all";
  onCategoryChange: (category: ProjectCategory | "all") => void;
  className?: string;
}

/**
 * CategoryFilter - ArtStation-style filter tabs
 *
 * Mobile: Horizontal scroll (saves vertical space)
 * Desktop: Centered flex-wrap
 */
export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: CategoryFilterProps) {
  return (
    <div
      className={clsxMerge(
        // Mobile: horizontal scroll with thin 4px scrollbar
        "flex gap-2 overflow-x-auto scrollbar-thin",
        "pb-2 lg:pb-0", // Space for scrollbar on mobile
        "snap-x snap-mandatory",
        // Desktop: centered wrap
        "lg:flex-wrap lg:justify-center lg:overflow-visible",
        // Full width on mobile
        "w-full lg:w-auto",
        className
      )}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={clsxMerge(
              // Base styles - smaller on mobile
              "px-3 py-1.5 lg:px-4 lg:py-2 rounded-full",
              "text-xs lg:text-sm font-medium",
              "transition-all duration-200",
              "flex items-center gap-1.5 lg:gap-2",
              // Prevent shrinking on mobile
              "flex-shrink-0",
              "snap-start",
              // Active state
              isActive
                ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]",
              // Border
              !isActive && "border border-[var(--color-border)]"
            )}
          >
            <span>{category.name}</span>
            <span
              className={clsxMerge(
                "px-1 py-0.5 lg:px-1.5 rounded-full text-xs",
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-[var(--color-bg)] text-[var(--color-text-muted)]"
              )}
            >
              {category.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
