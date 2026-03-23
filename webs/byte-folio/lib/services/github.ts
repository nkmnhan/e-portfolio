import type { Project } from "@/lib/types";
import { projectsData } from "@/lib/data/projects";

export async function getProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return projectsData;
  }

  try {
    const response = await fetch("https://api.github.com/users/nkmnhan/repos?per_page=100", {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(3000),
    });

    if (!response.ok) {
      return projectsData;
    }

    const repos = await response.json();

    return projectsData.map((project) => {
      const repo = repos.find(
        (r: { html_url: string }) =>
          r.html_url.toLowerCase() === project.githubUrl.toLowerCase()
      );
      if (repo && repo.description) {
        return { ...project, subtitle: repo.description };
      }
      return project;
    });
  } catch {
    return projectsData;
  }
}
