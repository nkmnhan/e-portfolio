import { clsxMerge } from "@/lib/utils";
import type { Project } from "@/lib/data";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
}

export function ProjectGrid({
  projects,
  columns = 3,
  showCategory = true,
}: ProjectGridProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={clsxMerge("grid gap-8", columnClasses[columns])}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          priority={index < 4}
          showCategory={showCategory}
        />
      ))}
    </div>
  );
}
