"use client";

import { useCallback, useEffect, useState } from "react";
import { themes, type ColorTheme } from "../color-themes";
import { deriveTheme } from "../derivation";

const STORAGE_KEY = "eportfolio-color-theme";
const STYLE_ID = "eportfolio-theme-vars";

function injectStyles(css: string) {
  if (typeof document === "undefined") return;

  let style = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = STYLE_ID;
    document.head.appendChild(style);
  }
  style.textContent = css;
}

function themeToCSS(theme: ColorTheme): string {
  const { vars } = deriveTheme(theme.palette, theme.mode);
  const entries = Object.entries(vars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");

  return `:root {\n${entries}\n}`;
}

export function useColorTheme(defaultThemeId?: string) {
  const [activeTheme, setActiveTheme] = useState<ColorTheme | null>(null);

  // Load saved theme on mount
  useEffect(() => {
    const savedId =
      typeof localStorage !== "undefined"
        ? localStorage.getItem(STORAGE_KEY)
        : null;

    const themeId = savedId ?? defaultThemeId;
    if (themeId) {
      const theme = themes.find((t) => t.id === themeId);
      if (theme) {
        setActiveTheme(theme);
        injectStyles(themeToCSS(theme));
      }
    }
  }, [defaultThemeId]);

  const setTheme = useCallback((themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (!theme) return;

    setActiveTheme(theme);
    injectStyles(themeToCSS(theme));

    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, themeId);
    }
  }, []);

  const clearTheme = useCallback(() => {
    setActiveTheme(null);
    injectStyles("");
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    activeTheme,
    themes,
    setTheme,
    clearTheme,
  };
}
