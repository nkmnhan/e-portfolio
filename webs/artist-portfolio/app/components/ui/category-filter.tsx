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
 * CategoryFilter - ArtStation-style horizontal pill filter tabs
 *
 * Shows category counts and provides visual active state
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
        "flex flex-wrap justify-center gap-2",
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
              // Base styles
              "px-4 py-2 rounded-full",
              "text-sm font-medium",
              "transition-all duration-200",
              "flex items-center gap-2",
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
                "px-1.5 py-0.5 rounded-full text-xs",
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
