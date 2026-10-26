"use client";

import { useCallback, useEffect, useState } from "react";
import { themes, THEME_STORAGE_KEY, type ThemeId } from "../themes";

// The saved theme is applied before first paint by a blocking init script
// (public/theme-init.js in each app); this hook only reads and switches it.
export function useColorTheme() {
  const [activeThemeId, setActiveThemeId] = useState<string | null>(null);

  useEffect(() => {
    setActiveThemeId(document.documentElement.dataset.theme ?? themes[0].id);
  }, []);

  const setTheme = useCallback((themeId: ThemeId) => {
    document.documentElement.dataset.theme = themeId;
    setActiveThemeId(themeId);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeId);
    } catch {
      // Storage unavailable (private mode) — theme still applies for this page view
    }
  }, []);

  return { activeThemeId, themes, setTheme };
}
