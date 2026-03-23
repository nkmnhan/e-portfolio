"use client";

import { heroData } from "@/lib/data/hero";
import { getSocialLinksFor } from "@/lib/data/site-config";
import { StarfieldCSS } from "./starfield-css";
import { SocialLinkItem } from "./social-link-item";

const heroSocials = getSocialLinksFor("hero");

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden">
      <StarfieldCSS />
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-text-muted text-sm font-[family-name:var(--font-mono)] animate-[fadeInUp_0.5s_ease-out_both]">
          {heroData.greeting}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mt-3 glow-primary-text animate-[fadeInUp_0.5s_0.2s_ease-out_both]">
          {heroData.name}
        </h1>
        <p className="text-text-secondary mt-4 font-[family-name:var(--font-mono)] text-sm md:text-base animate-[fadeIn_0.5s_0.5s_ease-out_both]">
          <span className="text-primary">{">"}</span> {heroData.title}
          <span className="inline-block w-2 h-4 bg-primary ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
        </p>
        <p className="text-text-muted mt-2 font-[family-name:var(--font-mono)] text-xs md:text-sm animate-[fadeIn_0.5s_0.7s_ease-out_both]">
          <span className="text-primary">{">"}</span> {heroData.specialization}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-[fadeInUp_0.5s_0.9s_ease-out_both]">
          <a href={heroData.primaryCta.href} className="px-6 py-3 bg-primary text-bg font-semibold rounded-lg glow-primary hover:brightness-110 transition-[filter] duration-200 text-center">
            {heroData.primaryCta.label}
          </a>
          <a href={heroData.secondaryCta.href} className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-center">
            {heroData.secondaryCta.label}
          </a>
        </div>
        <div className="mt-6 flex gap-4 justify-center animate-[fadeIn_0.5s_1.1s_ease-out_both]">
          {heroSocials.map((link) => (
            <SocialLinkItem key={link.platform} link={link} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted" aria-hidden="true" style={{ animation: "bounce-down 2s ease-in-out infinite" }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
