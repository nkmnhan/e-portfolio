"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data/projects";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";
import { useAnimatedPresence } from "@/app/hooks";

export function Projects() {
  const [isShowingAll, setIsShowingAll] = useState(true);
  const { shouldRender, isVisible } = useAnimatedPresence(isShowingAll, 400);

  const featuredProjects = projectsData
    .filter((project) => project.isFeatured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  const secondaryProjects = projectsData
    .filter((project) => !project.isFeatured)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <SectionWrapper id="projects">
      <TerminalHeading command="ls ~/projects --featured" />

      {/* Featured: Deep Space Transmission cards */}
      <div className="flex flex-col gap-5 md:gap-8 mb-8 md:mb-12">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Secondary: compact grid */}
      <TerminalHeading command="ls ~/projects --all" className="mt-4" />
      {shouldRender && (
        <div
          className={`overflow-hidden presence-clip ${isVisible ? "presence-visible" : ""}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, index) => (
              <div
                key={project.id}
                className={`view-hidden ${isVisible ? "view-visible" : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => setIsShowingAll((previous) => !previous)}
          className="text-sm text-primary hover:text-primary-hover transition-colors font-[family-name:var(--font-mono)]"
        >
          {isShowingAll
            ? "< Hide Secondary Projects"
            : `> View All (${secondaryProjects.length} more) \u2192`}
        </button>
      </div>
    </SectionWrapper>
  );
}
