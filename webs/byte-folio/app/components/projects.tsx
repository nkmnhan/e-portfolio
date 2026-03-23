"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data/projects";
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isShowingAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
            ? "Show Featured Only"
            : `View All (${projectsData.length}) \u2192`}
        </button>
      </div>
    </SectionWrapper>
  );
}
