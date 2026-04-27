import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft, FaBookOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projectsData } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/site-config";
import { TechBadge } from "@/app/components/tech-badge";

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.id }));
}

function getProject(slug: string) {
  return projectsData.find((p) => p.id === slug);
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const { meta } = project;
  const pageUrl = `${siteConfig.url}/projects/${slug}`;
  const title = `${project.title} — nkmnhan | ${meta.titleSuffix}`;

  return {
    title,
    description: meta.description,
    keywords: [
      ...meta.keywords,
      "Tony Nguyen", "Nhan Nguyen", "nkmnhan",
      "Senior Fullstack Developer", "software engineer",
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: "Tony Nguyen (nkmnhan)",
    publisher: "Tony Nguyen",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description: meta.description,
      url: pageUrl,
      siteName: "nkmnhan — Tony Nguyen Portfolio",
      locale: "en_US",
      type: "article",
      publishedTime: new Date(meta.dateCreated).toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: [siteConfig.url],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { meta } = project;
  const pageUrl = `${siteConfig.url}/projects/${slug}`;

  const sortedProjects = [...projectsData].sort((a, b) => a.sortOrder - b.sortOrder);
  const currentIndex = sortedProjects.findIndex((p) => p.id === slug);
  const prevProject = currentIndex > 0 ? sortedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < sortedProjects.length - 1 ? sortedProjects[currentIndex + 1] : null;

  const primaryLink = project.liveUrl
    ? { href: project.liveUrl, label: "Live Demo", icon: FaArrowUpRightFromSquare }
    : project.docsUrl
      ? { href: project.docsUrl, label: "Documentation", icon: FaBookOpen }
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `${project.title} — nkmnhan | ${meta.titleSuffix}`,
        description: meta.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${pageUrl}#software` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        author: { "@id": `${siteConfig.url}/#person` },
        datePublished: new Date(meta.dateCreated).toISOString(),
        dateModified: new Date().toISOString(),
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${pageUrl}#software`,
        name: project.title,
        description: meta.description,
        url: pageUrl,
        applicationCategory: meta.category,
        operatingSystem: "Web",
        dateCreated: new Date(meta.dateCreated).toISOString(),
        dateModified: new Date().toISOString(),
        programmingLanguage: meta.programmingLanguages,
        codeRepository: project.githubUrl,
        ...(project.liveUrl && { installUrl: project.liveUrl }),
        author: { "@id": `${siteConfig.url}/#person` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteConfig.url}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className="min-h-screen py-12 md:py-20 px-5 md:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Back navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors font-[family-name:var(--font-mono)] mb-8 md:mb-12 min-h-11"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            cd ~/projects
          </Link>

          {/* Project header */}
          <header className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-display)] glow-primary-text mb-3">
              {project.title}
            </h1>
            <div className="border-l-2 border-primary/50 pl-4">
              <p className="text-text text-lg md:text-xl leading-relaxed font-[family-name:var(--font-mono)]">
                {project.subtitle}
              </p>
            </div>
          </header>

          {/* Description */}
          {project.description && (
            <section className="mb-8 md:mb-12" aria-label="Project overview">
              <h2 className="text-sm text-text-muted font-[family-name:var(--font-mono)] mb-3">
                <span className="text-primary">{">"}</span> cat README.md
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </section>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section className="mb-8 md:mb-12" aria-label="Key features">
              <h2 className="text-sm text-text-muted font-[family-name:var(--font-mono)] mb-4">
                <span className="text-primary">{">"}</span> grep --highlights
              </h2>
              <div className="glass rounded-xl p-6 md:p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-text-secondary">
                      <span className="text-primary shrink-0 mt-0.5">&#x25B8;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Tech stack */}
          <section className="mb-8 md:mb-12" aria-label="Technology stack">
            <h2 className="text-sm text-text-muted font-[family-name:var(--font-mono)] mb-4">
              <span className="text-primary">{">"}</span> tech.stack:
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </section>

          {/* Links */}
          <section className="mb-12 md:mb-16" aria-label="Project links">
            <div className="flex flex-wrap items-center gap-3">
              {primaryLink && (
                <a
                  href={primaryLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-11 rounded-lg bg-primary/15 border border-primary/30 text-primary hover:bg-primary/25 text-sm font-medium transition-colors"
                >
                  <primaryLink.icon className="w-4 h-4" />
                  {primaryLink.label}
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-11 rounded-lg border border-border text-text-muted hover:text-text hover:border-border-hover text-sm font-medium transition-colors"
              >
                <FaGithub className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </section>

          {/* Project navigation */}
          <nav aria-label="Project navigation" className="border-t border-border/50 pt-8 md:pt-12 mb-8 md:mb-12">
            <div className="flex items-stretch justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="group flex items-center gap-3 min-h-11 max-w-[48%] text-left"
                >
                  <FaChevronLeft className="w-4 h-4 shrink-0 text-text-muted group-hover:text-primary transition-colors" />
                  <div className="min-w-0">
                    <span className="block text-xs text-text-muted font-[family-name:var(--font-mono)]">prev</span>
                    <span className="block text-sm text-text group-hover:text-primary transition-colors truncate">
                      {prevProject.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group flex items-center gap-3 min-h-11 max-w-[48%] text-right ml-auto"
                >
                  <div className="min-w-0">
                    <span className="block text-xs text-text-muted font-[family-name:var(--font-mono)]">next</span>
                    <span className="block text-sm text-text group-hover:text-primary transition-colors truncate">
                      {nextProject.title}
                    </span>
                  </div>
                  <FaChevronRight className="w-4 h-4 shrink-0 text-text-muted group-hover:text-primary transition-colors" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>

          {/* Author + more projects */}
          <footer>
            <p className="text-text-secondary text-sm mb-4">
              Built by{" "}
              <Link href="/" className="text-primary hover:text-primary-hover transition-colors">
                Tony Nguyen (Nhan Nguyen)
              </Link>
              {" "}— Senior Fullstack Developer with 9+ years of experience
              building scalable systems across Singapore, Europe, and Vietnam.
            </p>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors font-[family-name:var(--font-mono)]"
            >
              {">"} View more projects by Tony Nguyen →
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
