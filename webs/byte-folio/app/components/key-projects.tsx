"use client";

import { motion } from "framer-motion";
import { keyProjectsData } from "@/lib/data/key-projects";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { TechBadge } from "./tech-badge";
import type { KeyProject } from "@/lib/types";

const accentBorder: Record<KeyProject["accentColor"], string> = {
  primary: "border-t-primary",
  secondary: "border-t-secondary",
  accent: "border-t-accent",
};

const accentGlowVar: Record<KeyProject["accentColor"], string> = {
  primary: "--color-primary",
  secondary: "--color-secondary",
  accent: "--color-accent",
};

const accentDot: Record<KeyProject["accentColor"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const accentText: Record<KeyProject["accentColor"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export function KeyProjects() {
  return (
    <SectionWrapper id="key-projects">
      <TerminalHeading command="showcase --professional" />
      <div className="grid grid-cols-1 gap-6">
        {keyProjectsData.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            style={{ "--_glow-color": `var(${accentGlowVar[project.accentColor]})` } as React.CSSProperties}
            className={`group relative glass rounded-xl border-t-2 ${accentBorder[project.accentColor]}`}
          >
            {/* Hover glow (GPU-composited via opacity) */}
            <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_color-mix(in_srgb,var(--_glow-color)_15%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative p-6 md:p-8">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className={`w-2 h-2 rounded-full ${accentDot[project.accentColor]}`} />
                    <h3 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-display)]">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm font-[family-name:var(--font-mono)] ml-4.5">
                    {project.client}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted font-[family-name:var(--font-mono)] md:text-right shrink-0">
                  <span className={accentText[project.accentColor]}>{project.role}</span>
                  <span className="text-border">|</span>
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Impact callout */}
              <div className="flex items-start gap-2.5 mb-5 px-4 py-3 rounded-lg bg-surface/50 border border-border/50">
                <span className={`text-sm font-bold uppercase tracking-wider ${accentText[project.accentColor]} shrink-0 mt-px`}>
                  Impact
                </span>
                <span className="text-text-secondary text-sm">
                  {project.impact}
                </span>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
