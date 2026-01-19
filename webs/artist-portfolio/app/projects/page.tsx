import { ProjectGrid } from "../components/media/project-grid";
import { projects, categories } from "@/lib/data";
import Link from "next/link";
import { PageHeader, Button } from "../components/ui";

export const metadata = {
  title: "Projects | Alex Chen",
  description: "Browse my portfolio of 3D art, animation, concept art, and VFX projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="A collection of my work in 3D art, animation, concept design, and visual effects."
      />

      {/* Category Filter */}
      <section className="py-6 border-b border-[var(--color-border)] sticky top-16 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/projects" size="sm">
              All Projects
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                href={`/projects?category=${cat.id}`}
                variant="secondary"
                size="sm"
              >
                {cat.name}
              </Button>
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
