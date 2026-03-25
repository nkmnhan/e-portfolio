"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { StarfieldCSS } from "./starfield-css";

const StarfieldR3F = dynamic(
  () => import("./starfield").then((mod) => ({ default: mod.Starfield })),
  { ssr: false }
);

export function HeroBackground() {
  const [useWebGL, setUseWebGL] = useState(false);
  const [starCount, setStarCount] = useState(2000);

  useEffect(() => {
    const hasPower = (navigator.hardwareConcurrency ?? 1) >= 4;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setUseWebGL(hasPower && !prefersReducedMotion);
    setStarCount(window.innerWidth >= 1280 ? 2000 : 800);
  }, []);

  if (useWebGL) {
    return <StarfieldR3F count={starCount} />;
  }

  return <StarfieldCSS />;
}
