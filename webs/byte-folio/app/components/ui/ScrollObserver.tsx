"use client";

import { useEffect } from "react";

/**
 * ScrollObserver - Minimal client component (~1KB)
 * Uses Intersection Observer to add 'visible' class to elements
 * with 'fade-in-section' class when they enter the viewport.
 */
export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // One-time trigger
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before fully visible
      }
    );

    // Observe all elements with fade-in-section class
    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // This component renders nothing - it only adds behavior
  return null;
}
