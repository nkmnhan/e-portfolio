"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useInView<T extends HTMLElement = HTMLDivElement>({
  once = true,
  rootMargin = "-10% 0px",
  threshold = 0,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isInView };
}
