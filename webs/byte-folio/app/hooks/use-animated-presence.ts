"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Keeps an element mounted during its exit transition, then unmounts it.
 * Returns `shouldRender` (whether to keep in DOM) and `isVisible` (CSS class trigger).
 */
export function useAnimatedPresence(isOpen: boolean, duration = 300) {
  // Both flags lag `isOpen`: set after the enter frames, cleared after the exit transition
  const [isEntered, setIsEntered] = useState(isOpen);
  const [isMountedForExit, setIsMountedForExit] = useState(isOpen);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    let rafId1: number;
    let rafId2: number;

    if (isOpen) {
      rafId1 = requestAnimationFrame(() => {
        setIsMountedForExit(true);
        rafId2 = requestAnimationFrame(() => setIsEntered(true));
      });
    } else {
      timerRef.current = setTimeout(() => {
        setIsMountedForExit(false);
        setIsEntered(false);
      }, duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
    };
  }, [isOpen, duration]);

  return {
    shouldRender: isOpen || isMountedForExit,
    isVisible: isOpen && isEntered,
  };
}
