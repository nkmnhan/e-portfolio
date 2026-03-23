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
      background: "#090909",
      foreground: "#F0F0F0",
      primary: "#43e0f7",
      secondary: "#8657e8",
      accent: "#d10057",
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
];
