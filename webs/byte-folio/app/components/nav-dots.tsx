"use client";

import { useState, useEffect } from "react";
import { sections } from "@/lib/data/sections";

export function NavDots() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 will-change-transform"
      aria-label="Page sections"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <span className="absolute right-6 px-2 py-1 text-xs text-text bg-surface rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {label}
          </span>
          {/* Dot */}
          <span
            className={`w-3 h-3 rounded-full transition-[transform,background-color] duration-200 ${
              activeSection === id
                ? "bg-primary glow-primary scale-125"
                : "bg-text-muted/30 hover:bg-text-muted/60"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
