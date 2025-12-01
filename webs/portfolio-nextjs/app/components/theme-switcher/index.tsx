"use client";
import { useEffect, useState } from "react";

const THEME_KEY = "theme";
const LIGHT = "light";
const DARK = "dark";
const SYSTEM = "system";

type ThemeMode = typeof LIGHT | typeof DARK | typeof SYSTEM;

const THEME_ICONS: Record<ThemeMode, string> = {
    [LIGHT]: "🌞",
    [DARK]: "🌚",
    [SYSTEM]: "🖥️",
};

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<ThemeMode | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_KEY);
        if (storedTheme === DARK || storedTheme === LIGHT) {
            setTheme(storedTheme as ThemeMode);
        } else {
            setTheme(SYSTEM);
        }
    }, []);

    useEffect(() => {
        if (!theme) return;
        switch (theme) {
            case DARK:
                document.documentElement.classList.add(DARK);
                localStorage.setItem(THEME_KEY, DARK);
                break;
            case LIGHT:
                document.documentElement.classList.remove(DARK);
                localStorage.setItem(THEME_KEY, LIGHT);
                break;
            case SYSTEM:
                localStorage.removeItem(THEME_KEY);
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.classList.toggle(DARK, prefersDark);
                break;
            default:
                break;
        }
    }, [theme]);

    const toggleTheme = () => {
        if (theme === LIGHT) setTheme(DARK);
        else if (theme === DARK) setTheme(SYSTEM);
        else setTheme(LIGHT);
    };

    if (!theme) return null;

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition shadow"
            aria-label="Toggle Theme"
        >
            {THEME_ICONS[theme]}
        </button>
    );
}