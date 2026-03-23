"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { aboutData } from "@/lib/data/about";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { PullSharkIcon, PairExtraordinaireIcon, YoloIcon } from "./icons/github-badges";
import type { GitHubBadge } from "@/lib/types";

const badgeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "pull-shark": PullSharkIcon,
  "pair-extraordinaire": PairExtraordinaireIcon,
  "yolo": YoloIcon,
};

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseInt(value);
  const suffix = value.replace(/\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, numericPart, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, numericPart]);

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center">
      <motion.span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-primary">
        {isNaN(numericPart) ? value : (<><motion.span>{rounded}</motion.span>{suffix}</>)}
      </motion.span>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

function BadgeCard({ badge, index }: { badge: GitHubBadge; index: number }) {
  const Icon = badgeIcons[badge.id];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 + index * 0.12, type: "spring", stiffness: 200 }}
      className="group"
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
    </motion.div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <TerminalHeading command="about --verbose" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="shrink-0">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/50">
            <div className="absolute -inset-2 rounded-full glow-primary pointer-events-none" style={{ animation: "breathe 3s ease-in-out infinite" }} />
            <Image src={aboutData.avatar} alt="Tony Nguyen — Senior Fullstack Developer" width={192} height={192} className="relative object-cover w-full h-full" priority />
          </div>
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          {aboutData.bio.map((paragraph, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {aboutData.stats.map((stat) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.div>

      {/* GitHub Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <span className="text-text-muted text-xs font-[family-name:var(--font-mono)] block mb-3">
          <span className="text-primary">{">"}</span> github.achievements:
        </span>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {aboutData.githubBadges.map((badge, i) => (
            <BadgeCard key={badge.id} badge={badge} index={i} />
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 text-text-muted text-sm">
        <span className="inline-flex items-center gap-2">
          <FaGraduationCap className="w-4 h-4 text-primary" />
          {aboutData.education}
        </span>
        <span className="inline-flex items-center gap-2">
          <FaLocationDot className="w-4 h-4 text-accent" />
          {aboutData.availability}
        </span>
      </motion.div>
    </SectionWrapper>
  );
}
