"use client";

import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "@/lib/types";
import { TechBadge } from "./tech-badge";

const accents = [
  {
    bar: "bg-primary",
    gradient: "from-primary/8 to-transparent",
    glowVar: "--color-primary",
    text: "text-primary",
    btnBg: "bg-primary/15 border-primary/30 text-primary hover:bg-primary/25",
    signal: "LIVE",
  },
  {
    bar: "bg-secondary",
    gradient: "from-secondary/8 to-transparent",
    glowVar: "--color-secondary",
    text: "text-secondary",
    btnBg: "bg-secondary/15 border-secondary/30 text-secondary hover:bg-secondary/25",
    signal: "DOCS",
  },
  {
    bar: "bg-accent",
    gradient: "from-accent/8 to-transparent",
    glowVar: "--color-accent",
    text: "text-accent",
    btnBg: "bg-accent/15 border-accent/30 text-accent hover:bg-accent/25",
    signal: "LIVE",
  },
];

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const accent = accents[index % accents.length];
  const number = String(index + 1).padStart(2, "0");

  const primaryLink = project.liveUrl
    ? { href: project.liveUrl, label: "Live Demo" }
    : project.docsUrl
      ? { href: project.docsUrl, label: "Documentation" }
      : null;

  return (
    <motion.article
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
      style={{ "--_glow-color": `var(${accent.glowVar})` } as React.CSSProperties}
      className="group relative glass rounded-xl overflow-hidden hover:shadow-[0_0_40px_color-mix(in_srgb,var(--_glow-color)_12%,transparent)] transition-shadow duration-500"
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent.bar}`} />

      {/* Gradient wash */}
      <div className={`absolute inset-0 bg-gradient-to-r ${accent.gradient} pointer-events-none`} />

      {/* Background number */}
      <div className="absolute right-6 top-4 text-8xl md:text-9xl font-bold text-text/5 font-[family-name:var(--font-display)] select-none pointer-events-none leading-none">
        {number}
      </div>

      {/* Content */}
      <div className="relative p-6 md:p-8 pl-7 md:pl-10">
        {/* Signal header */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className={`text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] glow-primary-text`}>
            {project.title}
          </h3>
          {primaryLink && (
            <span className={`px-2 py-0.5 text-xs font-[family-name:var(--font-mono)] rounded-full border ${accent.btnBg} uppercase tracking-widest`}>
              {accent.signal}
            </span>
          )}
        </div>

        {/* Subtitle */}
        <div className="border-l-2 border-border/50 pl-4 mb-4">
          <p className="text-text text-base md:text-lg leading-relaxed font-[family-name:var(--font-mono)]">
            {project.subtitle}
          </p>
        </div>

        {/* Description — the problem & solution */}
        {project.description && (
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5">
            {project.description}
          </p>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1.5">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className={`${accent.text} shrink-0 mt-0.5`}>&#x25B8;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-6">
          <span className="text-text-muted text-xs font-[family-name:var(--font-mono)] block mb-2">
            <span className={accent.text}>{">"}</span> tech.stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {primaryLink && (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 min-h-11 rounded-lg border text-sm font-medium transition-colors ${accent.btnBg}`}
            >
              <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
              {primaryLink.label}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-11 rounded-lg border border-border text-sm text-text-muted hover:text-text hover:border-border-hover transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
