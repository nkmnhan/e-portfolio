"use client";

import Image from "next/image";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { aboutData } from "@/lib/data/about";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { PullSharkIcon, PairExtraordinaireIcon, YoloIcon } from "./icons/github-badges";
import { useInView, useCountUp } from "@/app/hooks";
import type { GitHubBadge } from "@/lib/types";

const badgeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "pull-shark": PullSharkIcon,
  "pair-extraordinaire": PairExtraordinaireIcon,
  "yolo": YoloIcon,
};

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const { ref, isInView } = useInView();
  const numericPart = parseInt(value);
  const suffix = value.replace(/\d+/, "");
  const count = useCountUp(isNaN(numericPart) ? 0 : numericPart, isInView);

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center">
      <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-primary">
        {isNaN(numericPart) ? value : (<>{count}{suffix}</>)}
      </span>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

function BadgeCard({ badge, index }: { badge: GitHubBadge; index: number }) {
  const Icon = badgeIcons[badge.id];
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`group view-hidden-scale ${isInView ? "view-visible" : ""}`}
      style={{ transitionDelay: `${600 + index * 120}ms` }}
    >
      <div
        style={{ "--_badge-color": `var(${badge.colorVar})` } as React.CSSProperties}
        className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-[color-mix(in_srgb,var(--_badge-color)_25%,transparent)] hover:border-[color-mix(in_srgb,var(--_badge-color)_50%,transparent)] transition-[border-color] duration-300 cursor-default"
      >
        {/* Icon with glow ring */}
        <div className="relative shrink-0">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--_badge-color)_10%,transparent)] ring-1 ring-[color-mix(in_srgb,var(--_badge-color)_30%,transparent)] group-hover:ring-[color-mix(in_srgb,var(--_badge-color)_60%,transparent)] group-hover:bg-[color-mix(in_srgb,var(--_badge-color)_15%,transparent)] transition-colors duration-300">
            {Icon && <Icon className="w-6 h-6 text-[var(--_badge-color)]" />}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold font-[family-name:var(--font-display)] text-text">
            {badge.label}
          </span>
          <span className="text-xs text-text-muted">{badge.description}</span>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { ref: avatarRef, isInView: avatarInView } = useInView();
  const { ref: bioRef, isInView: bioInView } = useInView();
  const { ref: statsRef, isInView: statsInView } = useInView();
  const { ref: badgesRef, isInView: badgesInView } = useInView();
  const { ref: eduRef, isInView: eduInView } = useInView();

  return (
    <SectionWrapper id="about">
      <TerminalHeading command="about --verbose" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div
          ref={avatarRef}
          className={`shrink-0 view-hidden-scale ${avatarInView ? "view-visible" : ""}`}
        >
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/50">
            <div className="absolute -inset-2 rounded-full glow-primary pointer-events-none" style={{ animation: "breathe 3s ease-in-out infinite" }} />
            <Image src={aboutData.avatar} alt="Tony Nguyen — Senior Fullstack Developer" width={192} height={192} className="relative object-cover w-full h-full" priority />
          </div>
        </div>
        <div ref={bioRef} className="flex-1 text-center md:text-left">
          {aboutData.bio.map((paragraph, i) => (
            <p
              key={i}
              className={`text-text-secondary text-sm md:text-base leading-relaxed mb-4 view-hidden ${bioInView ? "view-visible" : ""}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        ref={statsRef}
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 view-hidden ${statsInView ? "view-visible" : ""}`}
        style={{ transitionDelay: "400ms" }}
      >
        {aboutData.stats.map((stat) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* GitHub Achievements */}
      <div
        ref={badgesRef}
        className={`mt-8 view-hidden ${badgesInView ? "view-visible" : ""}`}
        style={{ transitionDelay: "500ms" }}
      >
        <span className="text-text-muted text-xs font-[family-name:var(--font-mono)] block mb-3">
          <span className="text-primary">{">"}</span> github.achievements:
        </span>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {aboutData.githubBadges.map((badge, i) => (
            <BadgeCard key={badge.id} badge={badge} index={i} />
          ))}
        </div>
      </div>

      <div
        ref={eduRef}
        className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 text-text-muted text-sm view-hidden ${eduInView ? "view-visible" : ""}`}
        style={{ transitionDelay: "800ms" }}
      >
        <span className="inline-flex items-center gap-2">
          <FaGraduationCap className="w-4 h-4 text-primary" />
          {aboutData.education}
        </span>
        <span className="inline-flex items-center gap-2">
          <FaLocationDot className="w-4 h-4 text-accent" />
          {aboutData.availability}
        </span>
      </div>
    </SectionWrapper>
  );
}
