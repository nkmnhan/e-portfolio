"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaChevronUp, FaXmark } from "react-icons/fa6";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { sections } from "@/lib/data/sections";
import { SocialLinkItem } from "./social-link-item";

const navSocials = getSocialLinksFor("nav");

export function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/50 will-change-transform">
        <div className="flex justify-between items-center px-5 py-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-text-secondary text-sm"
            aria-label="Open navigation menu"
          >
            <FaBars className="w-4 h-4" />
            Menu
          </button>
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex items-center gap-2 text-text-secondary text-sm"
          >
            <FaChevronUp className="w-4 h-4" />
            Top
          </a>
        </div>
      </div>

      {/* Slide-up sheet */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-50 bg-black/60"
            />
            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass rounded-t-2xl border-t border-border/50"
            >
              <div className="p-5">
                {/* Handle */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-1 rounded-full bg-text-muted/30" />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 text-text-muted"
                  aria-label="Close navigation menu"
                >
                  <FaXmark className="w-5 h-5" />
                </button>

                {/* Section links */}
                <nav aria-label="Page sections">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-text-secondary hover:text-primary transition-colors text-base"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                {/* Social links */}
                <div className="flex gap-4 mt-4 pt-4 border-t border-border/30">
                  {navSocials.map((link) => (
                    <SocialLinkItem key={link.platform} link={link} />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
