"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data/site-config";
import { socialIcons } from "./social-icons";

export function SocialFloat() {
  const [isVisible, setIsVisible] = useState(false);

  const heroSocials = siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes("hero")
  );

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
        >
          {heroSocials.map((link) => {
            const Icon = socialIcons[link.platform];
            return Icon ? (
              <a
                key={link.platform}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="p-2 text-text-muted hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ) : null;
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
