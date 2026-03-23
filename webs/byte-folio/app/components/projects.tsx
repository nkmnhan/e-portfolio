"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data/projects";
import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Projects() {
  const [isShowingAll, setIsShowingAll] = useState(false);

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
      <div className="flex flex-col gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Secondary: compact grid */}
      <TerminalHeading command="ls ~/projects --all" className="mt-4" />
      <AnimatePresence>
        {isShowingAll && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
