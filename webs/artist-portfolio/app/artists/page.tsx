import { Metadata } from "next";
import { ArtistCard } from "../components/artist/artist-card";
import { SectionHeader } from "../components/ui/section-header";
import { artists, specializations } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Artists | ArtFolio",
  description: "Discover talented 3D artists, animators, and concept artists showcasing their best work.",
};

export default function ArtistsPage() {
  // Group artists by specialization
  const artistsBySpec = specializations.map((spec) => ({
    ...spec,
    artists: artists.filter((a) => a.specialization === spec.id),
  }));

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Artists</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Meet the talented visual artists who bring imagination to life.
            From 3D characters to stunning concept art and captivating animations.
          </p>
        </div>

        {/* Specialization filters (static display) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span
            className={clsxMerge(
              "px-4 py-2 rounded-full text-sm font-medium",
              "bg-[var(--color-primary)] text-white"
            )}
          >
            All Artists
          </span>
          {specializations.map((spec) => (
            <span
              key={spec.id}
              className={clsxMerge(
                "px-4 py-2 rounded-full text-sm font-medium",
                "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
                "border border-[var(--color-border)]"
              )}
            >
              {spec.name}
            </span>
          ))}
        </div>

        {/* Artists by Specialization */}
        {artistsBySpec.map((section) => (
          <section key={section.id} className="mb-16 last:mb-0">
            <SectionHeader
              title={section.name}
              subtitle={section.description}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.artists.map((artist, index) => (
                <ArtistCard
                  key={artist.id}
                  artist={artist}
                  priority={index < 3}
                />
              ))}
            </div>
            {section.artists.length === 0 && (
              <p className="text-center text-[var(--color-text-muted)] py-8">
                No artists in this category yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
