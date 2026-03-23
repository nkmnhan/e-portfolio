"use client";

import { useCallback, useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "eportfolio-theme-mode";

function getSystemMode(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyMode(mode: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.classList.toggle("light", mode === "light");
}

export function useThemeMode(defaultMode: ThemeMode = "system") {
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);
  const [resolvedMode, setResolvedMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved =
      typeof localStorage !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as ThemeMode | null)
        : null;

    const initial = saved ?? defaultMode;
    setModeState(initial);

    const resolved = initial === "system" ? getSystemMode() : initial;
    setResolvedMode(resolved);
    applyMode(resolved);
  }, [defaultMode]);

  // Listen for system theme changes
  useEffect(() => {
    if (mode !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (event: MediaQueryListEvent) => {
      const resolved = event.matches ? "dark" : "light";
      setResolvedMode(resolved);
      applyMode(resolved);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    setModeState(newMode);
    const resolved = newMode === "system" ? getSystemMode() : newMode;
    setResolvedMode(resolved);
    applyMode(resolved);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newMode);
    }
  }, []);

  return { mode, resolvedMode, setMode };
}
