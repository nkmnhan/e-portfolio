import { SectionHeader } from "../components/ui/section-header";
import { ProjectGrid } from "../components/media/project-grid";
import { projects, categories } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Projects | Alex Chen",
  description: "Browse my portfolio of 3D art, animation, concept art, and VFX projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            My Projects
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            A collection of my work in 3D art, animation, concept design, and visual effects.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-[var(--color-border)] sticky top-16 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/projects"
              className={clsxMerge(
                "px-4 py-2 rounded-lg",
                "bg-[var(--color-primary)] text-white",
                "text-sm font-medium",
                "transition-colors"
              )}
            >
              All Projects
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/projects?category=${cat.id}`}
                className={clsxMerge(
                  "px-4 py-2 rounded-lg",
                  "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
                  "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]",
                  "text-sm font-medium",
                  "transition-colors"
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ProjectGrid projects={projects} columns={3} />
        </div>
      </section>
    </>
  );
}
