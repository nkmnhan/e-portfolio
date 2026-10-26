"use client";

import { useColorTheme } from "../hooks/use-color-theme";
import { useState } from "react";
import { clsxMerge } from "@eportfolio/ui/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { activeThemeId, themes, setTheme } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsxMerge("fixed right-4 bottom-14 md:bottom-4 z-50 flex flex-col items-end", className)}>
      {isOpen && (
        <div className="mb-2 flex flex-col gap-1.5 rounded-lg border border-border bg-surface p-2 shadow-lg backdrop-blur-sm">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => {
                setTheme(theme.id);
                setIsOpen(false);
              }}
              className={clsxMerge(
                "flex items-center gap-2 rounded-md px-3 py-1.5 text-xs transition-colors",
                "hover:bg-surface-hover",
                activeThemeId === theme.id &&
                  "ring-1 ring-primary bg-surface-hover"
              )}
            >
              {/* data-theme scopes this swatch to its own theme's --color-primary */}
              <span
                data-theme={theme.id}
                className="inline-block h-3 w-3 shrink-0 rounded-full bg-primary ring-1 ring-white/20"
              />
              <span className="whitespace-nowrap text-text-secondary">
                {theme.label}
              </span>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch color theme"
        className={clsxMerge(
          "flex h-10 w-10 items-center justify-center rounded-full",
          "border border-border bg-surface",
          "shadow-lg transition-[transform,border-color] duration-200 hover:scale-110",
          "hover:border-primary"
        )}
      >
        <span className="h-4 w-4 rounded-full bg-primary" />
      </button>
    </div>
  );
}
