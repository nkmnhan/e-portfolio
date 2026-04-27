"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Keeps an element mounted during its exit transition, then unmounts it.
 * Returns `shouldRender` (whether to keep in DOM) and `isVisible` (CSS class trigger).
 */
export function useAnimatedPresence(isOpen: boolean, duration = 300) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    let rafId1: number;
    let rafId2: number;

    if (isOpen) {
      setShouldRender(true);
      rafId1 = requestAnimationFrame(() => {
        rafId2 = requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      setIsVisible(false);
      timerRef.current = setTimeout(() => setShouldRender(false), duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
    };
  }, [isOpen, duration]);

  return { shouldRender, isVisible };
}
