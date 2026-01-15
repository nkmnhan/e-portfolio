/**
 * Client Component Template
 *
 * Use this ONLY when you need:
 * - Event handlers (onClick, onChange)
 * - React hooks (useState, useEffect)
 * - Browser APIs (window, localStorage)
 */

"use client";

import { useState, useCallback } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

interface TemplateProps {
  className?: string;
  onAction?: () => void;
}

export function Template({ className, onAction }: TemplateProps) {
  const [active, setActive] = useState(false);

  const handleClick = useCallback(() => {
    setActive((prev) => !prev);
    onAction?.();
  }, [onAction]);

  return (
    <button
      onClick={handleClick}
      className={clsxMerge(
        // Layout
        "inline-flex items-center justify-center",

        // Sizing
        "h-10 px-4 py-2",

        // Shape
        "rounded-md",

        // Colors - conditional
        active ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900",

        // Animation
        "transition-colors duration-200",

        // States
        "hover:opacity-90",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // External override
        className
      )}
    >
      {active ? "Active" : "Click me"}
    </button>
  );
}
