"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { StarfieldCSS } from "./starfield-css";

const StarfieldR3F = dynamic(
  () => import("./starfield").then((mod) => ({ default: mod.Starfield })),
  { ssr: false }
);

// 0 = CSS starfield; otherwise the WebGL star count. Read once on the client, never changes.
function subscribeToNothing() {
  return () => {};
}

function getWebGLStarCount() {
  const hasPower = (navigator.hardwareConcurrency ?? 1) >= 4;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!hasPower || prefersReducedMotion) return 0;
  return window.innerWidth >= 1280 ? 2000 : 800;
}

function getServerWebGLStarCount() {
  return 0;
}

export function HeroBackground() {
  const webGLStarCount = useSyncExternalStore(
    subscribeToNothing,
    getWebGLStarCount,
    getServerWebGLStarCount
  );

  if (webGLStarCount > 0) {
    return <StarfieldR3F count={webGLStarCount} />;
  }

  return <StarfieldCSS />;
}
