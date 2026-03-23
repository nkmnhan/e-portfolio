"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { SocialLinkItem } from "./social-link-item";

const heroSocials = getSocialLinksFor("hero");

export function SocialFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sentinel is placed at hero bottom — when it leaves viewport, show float
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel element at 80vh — when it scrolls out, social float appears */}
      <div
        ref={sentinelRef}
        className="absolute top-[80vh] left-0 h-px w-px pointer-events-none"
        aria-hidden="true"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 will-change-transform"
          >
            {heroSocials.map((link) => (
              <SocialLinkItem key={link.platform} link={link} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
