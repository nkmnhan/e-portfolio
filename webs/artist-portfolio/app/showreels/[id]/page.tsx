import { notFound } from "next/navigation";
import Link from "next/link";
import { getShowreelById, getShowreels, getProfile } from "@/lib/services";
import { clsxMerge } from "@/lib/utils";
import {
  HiArrowLeft,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlinePlay,
} from "react-icons/hi";
import { Badge, Card, Breadcrumb } from "@/app/components/ui";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const showreels = getShowreels();
  return showreels.map((reel) => ({
    id: reel.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const showreel = getShowreelById(id);
  const profile = getProfile();

  if (!showreel) {
    return { title: "Showreel Not Found" };
  }

  return {
    title: `${showreel.title} | ${profile.name}`,
    description: showreel.description,
  };
}

export default async function ShowreelDetailPage({ params }: Readonly<Props>) {
  const { id } = await params;
  const showreel = getShowreelById(id);

  if (!showreel) {
    notFound();
  }

  const allShowreels = getShowreels();
  const relatedReels = allShowreels
    .filter((r) => r.id !== showreel.id)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Showreels", href: "/showreels" },
              { label: showreel.title },
            ]}
            className="mb-8"
          />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Title & Meta */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {showreel.featured && (
                  <Badge variant="primary" size="lg">
                    Featured
                  </Badge>
                )}
                <Badge variant="muted" size="lg">
                  {showreel.year}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                {showreel.title}
              </h1>

              <p className="text-lg text-[var(--color-text-muted)] max-w-2xl leading-relaxed">
                {showreel.description}
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
                <HiOutlineClock className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-secondary)]">
                  {showreel.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <HiOutlineCalendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                <span className="text-[var(--color-text-secondary)]">
                  {showreel.year}
                </span>
              </div>
              {showreel.breakdown && (
                <div className="flex items-center gap-2 text-sm">
                  <HiOutlinePlay className="w-4 h-4 text-[var(--color-text-muted)]" />
                  <span className="text-[var(--color-text-secondary)]">
                    {showreel.breakdown.length} Clips
                  </span>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Video Player */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              <video
                src={showreel.videoUrl}
                poster={showreel.thumbnail}
                controls
                className="w-full h-full"
              >
                <track kind="captions" label="English" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown */}
      {showreel.breakdown && showreel.breakdown.length > 0 && (
        <section className="py-12 md:py-16 bg-[var(--color-bg-secondary)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Reel Breakdown</h2>
              <div className="space-y-4">
                {showreel.breakdown.map((item) => (
                  <Card
                    key={`${item.timestamp}-${item.title}`}
                    padding="sm"
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <Badge variant="muted" size="lg">
                        {item.timestamp}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--color-text)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)]">
                        {item.role}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Showreels */}
      {relatedReels.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">More Showreels</h2>
              <Link
                href="/showreels"
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedReels.map((reel) => (
                <Link
                  key={reel.id}
                  href={`/showreels/${reel.id}`}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge variant="surface" size="sm">
                          {reel.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 bg-[var(--color-surface)]">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {reel.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] line-clamp-2">
                        {reel.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Showreels */}
      <section className="pb-16">
        <div className="container-custom">
          <Link
            href="/showreels"
            className={clsxMerge(
              "inline-flex items-center gap-2",
              "text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]",
              "transition-colors"
            )}
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to Showreels
          </Link>
        </div>
      </section>
    </>
  );
}
