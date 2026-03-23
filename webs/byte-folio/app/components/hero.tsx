"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { heroData } from "@/lib/data/hero";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { StarfieldCSS } from "./starfield-css";
import { SocialLinkItem } from "./social-link-item";

const StarfieldR3F = dynamic(
  () => import("./starfield").then((mod) => ({ default: mod.Starfield })),
  { ssr: false, loading: () => <StarfieldCSS /> }
);

function HeroBackground() {
  const [webgl, setWebgl] = useState<{ enabled: false } | { enabled: true; starCount: number }>({ enabled: false });

  useEffect(() => {
    const hasPower = (navigator.hardwareConcurrency ?? 1) >= 4;
    const isDesktop = window.innerWidth >= 768;
    if (hasPower && isDesktop) {
      setWebgl({ enabled: true, starCount: window.innerWidth >= 1280 ? 2000 : 800 });
    }
  }, []);

  if (webgl.enabled) {
    return <StarfieldR3F count={webgl.starCount} />;
  }

  return <StarfieldCSS />;
}

const heroSocials = getSocialLinksFor("hero");

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-text-muted text-sm font-[family-name:var(--font-mono)]">
          {heroData.greeting}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mt-3 glow-cyan-text">
          {heroData.name}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-text-secondary mt-4 font-[family-name:var(--font-mono)] text-sm md:text-base">
          <span className="text-primary">{">"}</span> {heroData.title}
          <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }} className="text-text-muted mt-2 font-[family-name:var(--font-mono)] text-xs md:text-sm">
          <span className="text-primary">{">"}</span> {heroData.specialization}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href={heroData.primaryCta.href} className="px-6 py-3 bg-primary text-bg font-semibold rounded-lg glow-cyan hover:brightness-110 transition-all text-center">
            {heroData.primaryCta.label}
          </a>
          <a href={heroData.secondaryCta.href} className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-center">
            {heroData.secondaryCta.label}
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }} className="mt-6 flex gap-4 justify-center">
          {heroSocials.map((link) => (
            <SocialLinkItem key={link.platform} link={link} />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted" aria-hidden="true" style={{ animation: "bounce-down 2s ease-in-out infinite" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
