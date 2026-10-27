"use client";

import { useInView } from "@/app/hooks";
import { experienceData } from "@/lib/data/experience";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { TechBadge } from "./tech-badge";
import type { ExperienceEntry, ExperienceProject } from "@/lib/types";

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

function ProjectBlock({ project }: { project: ExperienceProject }) {
  const meta = [project.client, project.role].filter(Boolean).join(" · ");

  return (
    <div className="pt-4 mt-4 border-t border-border/50">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h4 className="text-lg font-semibold font-[family-name:var(--font-display)]">{project.name}</h4>
        <span className="text-sm font-[family-name:var(--font-mono)] text-text-muted">{project.period}</span>
      </div>
      {meta && <p className="text-sm font-[family-name:var(--font-mono)] text-text-muted">{meta}</p>}
      <p className="mt-2 text-text-secondary text-sm md:text-base leading-relaxed">{project.summary}</p>
      {project.impact && (
        <p className="mt-3 px-4 py-3 rounded-lg bg-surface/50 border border-border/50 text-sm text-text-secondary">
          <span className="mr-2 font-bold uppercase tracking-wider text-primary">Impact</span>
          {project.impact}
        </p>
      )}
      {project.techStack && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineEntry({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <li className="relative pl-8">
      {/* Outside the transformed wrapper so it anchors to the li, on the timeline line */}
      <div className={`absolute left-0 top-7 md:top-10 z-10 w-3 h-3 rounded-full ${dotColors[entry.accentColor]}`} />
      <div
        ref={ref}
        className={`view-hidden-left ${isInView ? "view-visible" : ""}`}
        style={{ transitionDelay: `${Math.min(index, 1) * 0.1}s` }}
      >
        <article className={`glass rounded-xl p-5 md:p-8 border-l-2 ${accentColors[entry.accentColor]}`}>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">{entry.company}</h3>
            <span className="text-sm font-[family-name:var(--font-mono)] text-text-muted">{entry.period}</span>
          </div>
          <p className="text-primary text-sm font-[family-name:var(--font-mono)] mt-1">{entry.title}</p>
          {entry.summary && (
            <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed">{entry.summary}</p>
          )}
          {entry.projects.map((project) => (
            <ProjectBlock key={project.name} project={project} />
          ))}
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
        <div className="absolute left-1.5 top-7 md:top-10 bottom-7 w-px bg-border" aria-hidden="true" />
        <ol className="space-y-6 md:space-y-8">
          {experienceData.map((entry, index) => (
            <TimelineEntry key={entry.company} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </SectionWrapper>
  );
}
