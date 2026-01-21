import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects, getProfile, getAdjacentProjects, getAllProjectSlugs } from "@/lib/services";
import { MediaRenderer } from "@/app/components/media/media-renderer";
import { clsxMerge } from "@/lib/utils";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineOfficeBuilding,
  HiOutlineTag,
} from "react-icons/hi";
import { Badge, Card, Breadcrumb, Button } from "@/app/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const profile = getProfile();

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find prev/next projects using service
  const { prev: prevProject, next: nextProject } = getAdjacentProjects(slug);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
            className="mb-8"
          />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title & Meta */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="primary" size="lg" className="capitalize">
                  {project.category.replace("-", " ")}
                </Badge>
                {project.featured && (
                  <Badge variant="warning" size="lg">
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                {project.title}
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Quick Info */}
            <Card
              padding="sm"
              className={clsxMerge(
                "flex flex-wrap lg:flex-col gap-4",
                "lg:min-w-56"
              )}
            >
              <div className="flex items-center gap-2 text-sm">
                <HiOutlineOfficeBuilding className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-secondary)]">
                  {project.client}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <HiOutlineCalendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-secondary)]">
                  {project.year}
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-10">
            {project.media.map((media, index) => (
              <MediaRenderer key={index} media={media} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Long Description */}
      {project.longDescription && (
        <section className="py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">About This Project</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                {project.longDescription.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[var(--color-text-secondary)] mb-5 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tools & Tags */}
      <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <span>Tools Used</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="surface" size="lg" rounded="lg">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <HiOutlineTag className="w-5 h-5" />
                <span>Tags</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary" size="lg">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 border-t border-[var(--color-border)]">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className={clsxMerge(
                  "group flex items-center gap-3",
                  "text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text)]",
                  "transition-colors"
                )}
              >
                <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Previous
                  </p>
                  <p className="font-medium">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Button href="/projects" variant="secondary" size="sm">
              All Projects
            </Button>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className={clsxMerge(
                  "group flex items-center gap-3",
                  "text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text)]",
                  "transition-colors"
                )}
              >
                <div className="text-right">
                  <p className="text-xs text-[var(--color-text-muted)]">Next</p>
                  <p className="font-medium">{nextProject.title}</p>
                </div>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
