"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data/experience";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { TechBadge } from "./tech-badge";
import type { ExperienceEntry } from "@/lib/types";

const accentColors: Record<ExperienceEntry["accentColor"], string> = {
  primary: "border-l-primary",
  secondary: "border-l-secondary",
  muted: "border-l-text-muted",
};

const dotColors: Record<ExperienceEntry["accentColor"], string> = {
  primary: "bg-primary shadow-[0_0_10px_color-mix(in_srgb,var(--color-primary)_50%,transparent)]",
  secondary: "bg-secondary shadow-[0_0_10px_color-mix(in_srgb,var(--color-secondary)_50%,transparent)]",
  muted: "bg-text-muted",
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <TerminalHeading command="career --timeline" />
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-8 md:space-y-12">
          {experienceData.map((entry, index) => (
            <motion.div key={entry.period} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="relative md:flex md:justify-center">
              <div className="ml-6 text-sm font-[family-name:var(--font-mono)] text-text-muted mb-2 md:ml-0 md:absolute md:top-0 md:-translate-y-8 md:left-1/2 md:-translate-x-1/2 md:whitespace-nowrap">
                {entry.period}
              </div>
              <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0.5 md:top-4 w-3 h-3 rounded-full ${dotColors[entry.accentColor]}`} />
              <div className={`ml-6 md:ml-0 md:max-w-lg glass rounded-xl p-5 border-l-2 ${accentColors[entry.accentColor]}`}>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-display)]">{entry.title}</h3>
                <p className="text-text-muted text-sm">{entry.company || entry.context}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {entry.techStack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
                <ul className="mt-3 space-y-1">
                  {entry.achievements.map((achievement) => (
                    <li key={achievement} className="text-text-secondary text-sm flex gap-2">
                      <span className="text-primary shrink-0">•</span>{achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-border -z-10" />
      </div>
    </SectionWrapper>
  );
}
