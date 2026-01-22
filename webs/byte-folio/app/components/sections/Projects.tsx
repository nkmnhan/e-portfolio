import { projects, type TechStack } from "@/lib/data";

// Tech stack colors for badges
const techColors: Record<TechStack, string> = {
  dotnet: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  vue: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  react: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  docker: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  identityserver: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  elasticsearch: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  maui: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  firebase: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  nextjs: "bg-white/20 text-white border-white/30",
  typescript: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  angular: "bg-red-500/20 text-red-300 border-red-500/30",
  nodejs: "bg-green-500/20 text-green-300 border-green-500/30",
};

// Tech stack labels
const techLabels: Record<TechStack, string> = {
  dotnet: ".NET",
  vue: "Vue.js",
  react: "React",
  docker: "Docker",
  identityserver: "IdentityServer",
  elasticsearch: "Elasticsearch",
  maui: ".NET MAUI",
  firebase: "Firebase",
  nextjs: "Next.js",
  typescript: "TypeScript",
  angular: "Angular",
  nodejs: "Node.js",
};

function TechBadge({ tech }: { tech: TechStack }) {
  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 text-xs ${techColors[tech]}`}
    >
      {techLabels[tech]}
    </span>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <article className="card-glow flex h-full flex-col overflow-hidden">
      {/* Thumbnail placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-[var(--color-space-mid)] to-[var(--color-space-dark)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-glow text-4xl font-bold text-[var(--color-neon-cyan)] opacity-20">
            {project.title.replace("PROJECT ", "#")}
          </div>
        </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-2 top-2 rounded-full bg-[var(--color-neon-cyan)] px-2 py-0.5 text-xs font-semibold text-[var(--color-bg)]">
            FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        {/* Title */}
        <div className="mb-2">
          <span className="text-xs tracking-widest text-[var(--color-text-muted)]">
            {project.title}
          </span>
          <h3 className="text-lg font-bold text-white">{project.subtitle}</h3>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm text-[var(--color-text-secondary)] line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4">
          {/* GitHub Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-neon-cyan)]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Code
            </a>
          )}

          {/* Stars */}
          {project.stars && project.stars > 0 && (
            <div className="flex items-center gap-1 text-sm text-[var(--color-text-muted)]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {project.stars}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  // Get featured projects first, then others
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const sortedProjects = [...featuredProjects, ...otherProjects];

  return (
    <section
      id="projects"
      className="fade-in-section section-padding container-custom"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-glow mb-4 text-3xl font-bold text-[var(--color-neon-cyan)] md:text-4xl">
          MY PROJECTS
        </h2>
        <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
          Open source projects and professional work showcasing my expertise
        </p>
      </div>

      {/* Projects Carousel - CSS Scroll-Snap (NO JS) */}
      <div className="relative">
        {/* Scroll container */}
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-6">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="w-72 flex-shrink-0 snap-center md:w-80 lg:w-96"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Scroll hint for mobile */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] md:hidden">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Swipe to see more
        </div>
      </div>

      {/* View All Link */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/nkmnhan"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View All on GitHub
        </a>
      </div>
    </section>
  );
}
