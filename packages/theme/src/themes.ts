// Theme list for pickers — colors live in tokens/themes.css (one [data-theme] block per id)

export const themes = [
  { id: "space-cosmic", label: "Deep Space" },
  { id: "artist-dark", label: "Cyber Dark" },
  { id: "midnight-blue", label: "Midnight Blue" },
  { id: "cinematic-rose", label: "Cinematic Rose" },
  { id: "coderabbit", label: "CodeRabbit" },
  { id: "terminal-green", label: "Terminal" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const THEME_STORAGE_KEY = "eportfolio-color-theme";
