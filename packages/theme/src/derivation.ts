// Theme derivation engine — 5 hex colors → 100+ CSS variables
// Ported from MediTrack's themeDerivation.ts, adapted for e-portfolio token contract

import type { ThemePalette } from "./color-themes";

// --- Color conversion utilities ---

export function hexToRgb(hex: string): [number, number, number] {
  const cleaned = hex.replace("#", "");
  return [
    parseInt(cleaned.slice(0, 2), 16),
    parseInt(cleaned.slice(2, 4), 16),
    parseInt(cleaned.slice(4, 6), 16),
  ];
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function hexToHsl(hex: string): [number, number, number] {
  return rgbToHsl(...hexToRgb(hex));
}

export function hslString(h: number, s: number, l: number): string {
  return `hsl(${h} ${s}% ${l}%)`;
}

// --- Lightness/Saturation adjusters ---

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function adjustLightness(
  hsl: [number, number, number],
  targetL: number
): [number, number, number] {
  return [hsl[0], hsl[1], clamp(targetL, 0, 100)];
}

export function adjustSaturation(
  hsl: [number, number, number],
  targetS: number
): [number, number, number] {
  return [hsl[0], clamp(targetS, 0, 100), hsl[2]];
}

export function isDark(hex: string): boolean {
  const [r, g, b] = hexToRgb(hex);
  return r * 0.299 + g * 0.587 + b * 0.114 < 128;
}

// --- Perceptual scale generation ---

interface ScaleConfig {
  lightStops: number[]; // Lightness values for light mode (50→950)
  darkStops: number[]; // Lightness values for dark mode (50→950)
}

const brandScale: ScaleConfig = {
  lightStops: [97, 94, 88, 78, 65, 50, 40, 32, 24, 18, 10],
  darkStops: [8, 12, 18, 25, 35, 50, 60, 70, 80, 88, 95],
};

const semanticScale: ScaleConfig = {
  lightStops: [96, 92, 85, 72, 58, 45, 35, 27, 20, 14],
  darkStops: [10, 15, 22, 32, 42, 55, 65, 75, 85, 92],
};

const shadeNames = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const semanticShadeNames = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function deriveColorScale(
  baseHsl: [number, number, number],
  isDarkMode: boolean,
  config: ScaleConfig = brandScale,
  shades: number[] = shadeNames
): Record<string, string> {
  const stops = isDarkMode ? config.darkStops : config.lightStops;
  const vars: Record<string, string> = {};

  shades.forEach((shade, i) => {
    const satAdjust =
      shade <= 100 ? 0.3 : shade >= 800 ? 0.4 : shade === 500 ? 1 : 0.7;
    const adjusted = adjustSaturation(
      adjustLightness(baseHsl, stops[i]),
      baseHsl[1] * satAdjust
    );
    vars[String(shade)] = hslString(...adjusted);
  });

  return vars;
}

// --- Harmonize semantic hue toward primary ---

function harmonizeHue(semanticHue: number, primaryHue: number): number {
  const blend = 0.2;
  let diff = primaryHue - semanticHue;
  if (diff > 180) diff -= 360;
  if (diff < -180) diff += 360;
  return (semanticHue + diff * blend + 360) % 360;
}

// --- Main derivation function ---

export interface DerivedTheme {
  vars: Record<string, string>;
}

export function deriveTheme(
  palette: ThemePalette,
  mode: "light" | "dark"
): DerivedTheme {
  const isDarkMode = mode === "dark";
  const vars: Record<string, string> = {};

  // Core colors from palette
  const bgHsl = hexToHsl(palette.background);
  const fgHsl = hexToHsl(palette.foreground);
  const primaryHsl = hexToHsl(palette.primary);
  const secondaryHsl = hexToHsl(palette.secondary);
  const accentHsl = hexToHsl(palette.accent);

  // --- Core tokens ---
  vars["--color-bg"] = hslString(...bgHsl);
  vars["--color-bg-subtle"] = hslString(
    bgHsl[0],
    bgHsl[1],
    isDarkMode ? bgHsl[2] + 3 : bgHsl[2] - 3
  );
  vars["--color-surface"] = hslString(
    bgHsl[0],
    bgHsl[1],
    isDarkMode ? bgHsl[2] + 8 : bgHsl[2] - 8
  );
  vars["--color-surface-hover"] = hslString(
    bgHsl[0],
    bgHsl[1],
    isDarkMode ? bgHsl[2] + 12 : bgHsl[2] - 12
  );

  vars["--color-text"] = hslString(...fgHsl);
  vars["--color-text-secondary"] = hslString(
    fgHsl[0],
    Math.round(fgHsl[1] * 0.5),
    isDarkMode ? 63 : 37
  );
  vars["--color-text-muted"] = hslString(
    fgHsl[0],
    Math.round(fgHsl[1] * 0.3),
    isDarkMode ? 44 : 56
  );
  vars["--color-text-subtle"] = hslString(
    fgHsl[0],
    Math.round(fgHsl[1] * 0.2),
    isDarkMode ? 35 : 65
  );
  vars["--color-text-inverted"] = isDarkMode
    ? hslString(0, 0, 10)
    : hslString(0, 0, 95);

  // --- Brand scales (50-950) ---
  const primaryScale = deriveColorScale(primaryHsl, isDarkMode);
  const secondaryScale = deriveColorScale(secondaryHsl, isDarkMode);
  const accentScale = deriveColorScale(accentHsl, isDarkMode);

  for (const [shade, value] of Object.entries(primaryScale)) {
    vars[`--color-primary-${shade}`] = value;
  }
  for (const [shade, value] of Object.entries(secondaryScale)) {
    vars[`--color-secondary-${shade}`] = value;
  }
  for (const [shade, value] of Object.entries(accentScale)) {
    vars[`--color-accent-${shade}`] = value;
  }

  // Convenience aliases
  vars["--color-primary"] = hslString(...primaryHsl);
  vars["--color-primary-hover"] = hslString(
    primaryHsl[0],
    primaryHsl[1],
    isDarkMode ? primaryHsl[2] + 10 : primaryHsl[2] - 10
  );
  vars["--color-secondary"] = hslString(...secondaryHsl);
  vars["--color-accent"] = hslString(...accentHsl);

  // --- Semantic colors (harmonized) ---
  const semanticColors: Record<string, [number, number, number]> = {
    success: [harmonizeHue(142, primaryHsl[0]), 70, 45],
    warning: [harmonizeHue(38, primaryHsl[0]), 90, 50],
    error: [harmonizeHue(0, primaryHsl[0]), 72, 50],
    info: [harmonizeHue(210, primaryHsl[0]), 70, 50],
  };

  for (const [name, hsl] of Object.entries(semanticColors)) {
    vars[`--color-${name}`] = hslString(...hsl);
    vars[`--color-${name}-light`] = hslString(
      hsl[0],
      hsl[1],
      isDarkMode ? hsl[2] + 15 : hsl[2] - 15
    );
    vars[`--color-${name}-dark`] = hslString(
      hsl[0],
      hsl[1],
      isDarkMode ? hsl[2] - 10 : hsl[2] + 10
    );

    const scale = deriveColorScale(
      hsl,
      isDarkMode,
      semanticScale,
      semanticShadeNames
    );
    for (const [shade, value] of Object.entries(scale)) {
      vars[`--color-${name}-${shade}`] = value;
    }
  }

  // --- Borders ---
  vars["--color-border"] = hslString(
    bgHsl[0],
    Math.round(bgHsl[1] * 0.5),
    isDarkMode ? 20 : 85
  );
  vars["--color-border-hover"] = hslString(
    bgHsl[0],
    Math.round(bgHsl[1] * 0.5),
    isDarkMode ? 28 : 75
  );

  // --- Gradients ---
  vars["--gradient-primary"] = `linear-gradient(135deg, ${hslString(...primaryHsl)}, ${hslString(...secondaryHsl)})`;
  vars["--gradient-surface"] = `linear-gradient(180deg, ${vars["--color-surface"]}, ${vars["--color-bg"]})`;

  return { vars };
}
