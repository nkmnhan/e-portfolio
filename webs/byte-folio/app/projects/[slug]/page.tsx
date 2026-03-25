import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowLeft, FaBookOpen } from "react-icons/fa6";
import { projectsData } from "@/lib/data/projects";
import { siteConfig } from "@/lib/data/site-config";
import { TechBadge } from "@/app/components/tech-badge";

const featuredSlugs = ["meditrack", "aspire-nexus", "e-portfolio"];

export function generateStaticParams() {
  return featuredSlugs.map((slug) => ({ slug }));
}

function getProject(slug: string) {
  return projectsData.find((p) => p.id === slug && p.isFeatured);
}

const projectMeta: Record<
  string,
  {
    titleSuffix: string;
    description: string;
    keywords: string[];
    category: string;
    dateCreated: string;
    programmingLanguages: string[];
  }
> = {
  meditrack: {
    titleSuffix: "Open-source EMR Platform",
    description:
      "MediTrack is an open-source EMR platform built by Tony Nguyen (Nhan Nguyen). Featuring Clara AI for real-time speech-to-text transcription and automatic SOAP note generation, MediTrack helps doctors focus on patient care. Built with .NET 10, React 19, PostgreSQL, and RabbitMQ microservices.",
    keywords: [
      "MediTrack", "EMR platform", "electronic medical records", "Clara AI",
      "SOAP note generation", "speech-to-text medical", "healthcare software",
      ".NET microservices", "React medical app", "RabbitMQ event-driven",
      "Tony Nguyen MediTrack", "Nhan Nguyen EMR",
    ],
    category: "HealthApplication",
    dateCreated: "2025-01-01",
    programmingLanguages: ["C#", ".NET 10", "TypeScript", "React 19", "SQL"],
  },
  "aspire-nexus": {
    titleSuffix: "Zero-code .NET Aspire Orchestration",
    description:
      "Aspire.Nexus by Tony Nguyen (Nhan Nguyen) enables zero-code service orchestration for .NET Aspire. Configure and toggle microservices via JSON without C# changes or rebuilds. Supports .NET, Node.js, and custom dev servers with infrastructure persistence.",
    keywords: [
      "Aspire.Nexus", ".NET Aspire", "service orchestration", "JSON configuration",
      "zero-code deployment", "microservices management", "infrastructure persistence",
      "developer tools", ".NET 10 Aspire",
      "Tony Nguyen Aspire", "Nhan Nguyen .NET",
    ],
    category: "DeveloperApplication",
    dateCreated: "2025-03-01",
    programmingLanguages: ["C#", ".NET 10", "JSON", "Docker"],
  },
  "e-portfolio": {
    titleSuffix: "Next.js 16 Monorepo Portfolio Platform",
    description:
      "E-Portfolio is a pnpm monorepo by Tony Nguyen (Nhan Nguyen) housing multiple Next.js 16 portfolio apps with shared packages. Features a perceptual color derivation engine, React Three Fiber starfield, Playwright E2E tests, and Storybook component documentation.",
    keywords: [
      "E-Portfolio", "Next.js 16 portfolio", "React 19 portfolio", "pnpm monorepo",
      "perceptual color engine", "React Three Fiber", "Tailwind CSS v4",
      "developer portfolio", "portfolio monorepo",
      "Tony Nguyen portfolio", "Nhan Nguyen portfolio",
    ],
    category: "WebApplication",
    dateCreated: "2024-01-01",
    programmingLanguages: ["TypeScript", "React 19", "Next.js 16", "CSS"],
  },
};

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const meta = projectMeta[slug];
  const pageUrl = `${siteConfig.url}/projects/${slug}`;
  const title = `${project.title} — ${siteConfig.name} | ${meta.titleSuffix}`;

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
      siteName: "Tony Nguyen (Nhan Nguyen) Portfolio",
      locale: "en_US",
      type: "article",
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

  const meta = projectMeta[slug];
  const pageUrl = `${siteConfig.url}/projects/${slug}`;

  const primaryLink = project.liveUrl
    ? { href: project.liveUrl, label: "Live Demo", icon: FaArrowUpRightFromSquare }
    : project.docsUrl
      ? { href: project.docsUrl, label: "Documentation", icon: FaBookOpen }
      : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: project.title,
        description: meta.description,
        url: pageUrl,
        applicationCategory: meta.category,
        operatingSystem: "Web",
        dateCreated: meta.dateCreated,
        dateModified: new Date().toISOString().split("T")[0],
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

          {/* Divider */}
          <div className="border-t border-border/50 mb-8 md:mb-12" />

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
