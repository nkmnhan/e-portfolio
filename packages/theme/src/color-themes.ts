// Theme palette definitions — add one object here to create a new theme

export interface ThemePalette {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
}

export interface ColorTheme {
  id: string;
  label: string;
  mode: "light" | "dark";
  palette: ThemePalette;
}

export const themes: ColorTheme[] = [
  {
    id: "artist-dark",
    label: "Cyber Dark",
    mode: "dark",
    palette: {
      background: "#0a0a0b",
      foreground: "#fafafa",
      primary: "#06b6d4",
      secondary: "#a855f7",
      accent: "#f97316",
    },
  },
  {
    id: "space-cosmic",
    label: "Deep Space",
    mode: "dark",
    palette: {
      background: "#020614",
      foreground: "#e9fbff",
      primary: "#43e0f7",
      secondary: "#7649fe",
      accent: "#f8bc04",
    },
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    mode: "dark",
    palette: {
      background: "#0f172a",
      foreground: "#f8fafc",
      primary: "#3b82f6",
      secondary: "#8b5cf6",
      accent: "#f59e0b",
    },
  },
  {
    id: "cinematic-rose",
    label: "Cinematic Rose",
    mode: "dark",
    palette: {
      background: "#1a0a14",
      foreground: "#fdf2f8",
      primary: "#e11d48",
      secondary: "#a855f7",
      accent: "#eab308",
    },
  },
  {
    id: "coderabbit",
    label: "CodeRabbit",
    mode: "dark",
    palette: {
      background: "#0c0c0c",
      foreground: "#e8e8e8",
      primary: "#f97316",
      secondary: "#22c55e",
      accent: "#ec4899",
    },
  },
  {
    id: "terminal-green",
    label: "Terminal",
    mode: "dark",
    palette: {
      background: "#0a0a0a",
      foreground: "#d4d4d4",
      primary: "#4ade80",
      secondary: "#facc15",
      accent: "#38bdf8",
    },
  },
];
