"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Keeps an element mounted during its exit transition, then unmounts it.
 * Returns `shouldRender` (whether to keep in DOM) and `isVisible` (CSS class trigger).
 */
export function useAnimatedPresence(isOpen: boolean, duration = 300) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (isOpen) {
      setShouldRender(true);
      // Delay visibility to next frame so the enter transition plays
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    } else {
      setIsVisible(false);
      timerRef.current = setTimeout(() => setShouldRender(false), duration);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen, duration]);

  return { shouldRender, isVisible };
}
