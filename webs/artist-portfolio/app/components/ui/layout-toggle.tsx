"use client";

import { clsxMerge } from "@/lib/utils";
import { HiViewGrid, HiViewBoards } from "react-icons/hi";
import type { LayoutMode } from "@/app/components/media/project-grid";

interface LayoutToggleProps {
  layout: LayoutMode;
  onLayoutChange: (layout: LayoutMode) => void;
  className?: string;
}

/**
 * LayoutToggle - Switch between grid and masonry layouts
 *
 * ArtStation-style layout selector
 */
export function LayoutToggle({
  layout,
  onLayoutChange,
  className,
}: LayoutToggleProps) {
  return (
    <div
      className={clsxMerge(
        "inline-flex rounded-lg p-1",
        "bg-[var(--color-surface)] border border-[var(--color-border)]",
        className
      )}
    >
      <button
        onClick={() => onLayoutChange("grid")}
        className={clsxMerge(
          "p-2 rounded-md transition-all duration-200",
          layout === "grid"
            ? "bg-[var(--color-primary)] text-white"
            : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        )}
        aria-label="Grid layout"
        title="Grid layout"
      >
        <HiViewGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onLayoutChange("masonry")}
        className={clsxMerge(
          "p-2 rounded-md transition-all duration-200",
          layout === "masonry"
            ? "bg-[var(--color-primary)] text-white"
            : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        )}
        aria-label="Masonry layout"
        title="Masonry layout"
      >
        <HiViewBoards className="w-5 h-5" />
      </button>
    </div>
  );
}
