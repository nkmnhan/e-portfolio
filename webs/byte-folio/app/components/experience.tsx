"use client";

import { useInView } from "@/app/hooks";
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

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <li className="relative pl-8">
      <div
        ref={ref}
        className={`view-hidden-left ${isInView ? "view-visible" : ""}`}
        style={{ transitionDelay: `${Math.min(index, 1) * 0.1}s` }}
      >
        <div className={`absolute left-0 top-6 w-3 h-3 rounded-full ${dotColors[entry.accentColor]}`} />
        <article className={`glass rounded-xl p-5 md:p-6 border-l-2 ${accentColors[entry.accentColor]}`}>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
              {entry.company || entry.context}
            </h3>
            <span className="text-sm font-[family-name:var(--font-mono)] text-text-muted">{entry.period}</span>
          </div>
          <p className="text-primary text-sm font-[family-name:var(--font-mono)] mt-1">{entry.title}</p>
          <ul className="mt-4 space-y-2">
            {entry.achievements.map((achievement) => (
              <li key={achievement} className="text-text-secondary text-sm md:text-base flex gap-2">
                <span className="text-primary shrink-0">•</span>{achievement}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {entry.techStack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </article>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <TerminalHeading command="career --timeline" label="Experience" />
      <div className="relative">
        <div className="absolute left-1.5 top-6 bottom-6 w-px bg-border" aria-hidden="true" />
        <ol className="space-y-6 md:space-y-8">
          {experienceData.map((entry, index) => (
            <TimelineEntry key={entry.period} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
