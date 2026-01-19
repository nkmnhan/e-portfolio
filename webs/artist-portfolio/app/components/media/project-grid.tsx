import { clsxMerge } from "@/lib/utils";
import type { Project } from "@/lib/data";
import { ProjectCard, type AspectRatio } from "./project-card";

export type LayoutMode = "grid" | "masonry";

interface ProjectGridProps {
  projects: Project[];
  columns?: 2 | 3 | 4;
  showCategory?: boolean;
  layout?: LayoutMode;
  aspectRatio?: AspectRatio;
  className?: string;
}

/**
 * ProjectGrid - Flexible project display with grid or masonry layout
 *
 * - "grid" mode: Traditional CSS Grid with fixed aspect ratios
 * - "masonry" mode: CSS columns layout respecting natural aspect ratios (ArtStation-style)
 */
export function ProjectGrid({
  projects,
  columns = 3,
  showCategory = true,
  layout = "grid",
  aspectRatio = "4/3",
  className,
}: ProjectGridProps) {
  // Regular grid column classes
  const gridColumnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  // Masonry column classes (CSS columns)
  const masonryColumnClasses = {
    2: "columns-1 sm:columns-2",
    3: "columns-1 sm:columns-2 lg:columns-3",
    4: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
  };

  if (layout === "masonry") {
    return (
      <div
        className={clsxMerge(
          masonryColumnClasses[columns],
          "gap-6",
          className
        )}
      >
        {projects.map((project, index) => (
          <div key={project.id} className="break-inside-avoid mb-6">
            <ProjectCard
              project={project}
              priority={index < 4}
              showCategory={showCategory}
              aspectRatio="auto"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={clsxMerge("grid gap-8", gridColumnClasses[columns], className)}>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          priority={index < 4}
          showCategory={showCategory}
          aspectRatio={aspectRatio}
        />
      ))}
    </div>
  );
}
