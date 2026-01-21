"use client";

import { useState, useMemo } from "react";
import { ProjectGrid, type LayoutMode } from "@/app/components/media/project-grid";
import { CategoryFilter, LayoutToggle } from "@/app/components/ui";
import type { Project, ProjectCategory } from "@/lib/types";

interface CategoryData {
  id: ProjectCategory;
  name: string;
  icon: string;
}

interface ProjectsViewProps {
  projects: Project[];
  categories: CategoryData[];
}

/**
 * ProjectsView - Client component for interactive filtering and layout
 *
 * Handles:
 * - Category filtering with counts
 * - Layout switching (grid/masonry)
 * - Filtered project display
 */
export function ProjectsView({ projects, categories }: ProjectsViewProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [layout, setLayout] = useState<LayoutMode>("grid");

  // Calculate category counts
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = { all: projects.length };

    projects.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });

    return [
      { id: "all" as const, name: "All", count: counts.all },
      ...categories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        count: counts[cat.id] || 0,
      })),
    ];
  }, [projects, categories]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <>
      {/* Filter Bar */}
      <section className="py-2 lg:py-6 border-b border-[var(--color-border)] sticky top-16 z-40 bg-[var(--color-bg)] backdrop-blur">
        <div className="container-custom">
          <div className="flex items-center gap-3">
            {/* Category Filter - takes remaining space on mobile */}
            <div className="flex-1 min-w-0">
              <CategoryFilter
                categories={categoriesWithCounts}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Layout Toggle - fixed width, hidden on small mobile */}
            <div className="hidden sm:block flex-shrink-0">
              <LayoutToggle
                layout={layout}
                onLayoutChange={setLayout}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <ProjectGrid
              projects={filteredProjects}
              columns={3}
              layout={layout}
            />
          ) : (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-muted)] text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
