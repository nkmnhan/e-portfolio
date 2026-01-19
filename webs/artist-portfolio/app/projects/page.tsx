import { getProjects, getCategories } from "@/lib/services";
import { PageHeader } from "../components/ui";
import { ProjectsView } from "./projects-view";

export const metadata = {
  title: "Projects | Alex Chen",
  description: "Browse my portfolio of 3D art, animation, concept art, and VFX projects.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  const categories = getCategories();

  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="A collection of my work in 3D art, animation, concept design, and visual effects."
      />

      <ProjectsView projects={projects} categories={categories} />
    </>
  );
}
