import { Metadata } from "next";
import { ArtworkGrid } from "../components/artwork/artwork-grid";
import { artworks, categories } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import {
  HiOutlineUser,
  HiOutlineGlobe,
  HiOutlinePencil,
  HiOutlineFilm,
  HiOutlineSparkles,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Gallery | ArtFolio",
  description: "Browse stunning artworks from talented 3D artists, animators, and concept artists.",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  character: HiOutlineUser,
  environment: HiOutlineGlobe,
  "concept-art": HiOutlinePencil,
  animation: HiOutlineFilm,
  vfx: HiOutlineSparkles,
};

export default function GalleryPage() {
  // Group artworks by category
  const artworksByCategory = categories.map((cat) => ({
    ...cat,
    artworks: artworks.filter((a) => a.category === cat.id),
  }));

  const totalArtworks = artworks.length;

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Art <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Explore {totalArtworks} stunning artworks from our talented community.
            From 3D characters to concept art and visual effects.
          </p>
        </div>

        {/* Category filters (static display) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span
            className={clsxMerge(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
              "bg-[var(--color-primary)] text-white"
            )}
          >
            All ({totalArtworks})
          </span>
          {categories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const count = artworks.filter((a) => a.category === cat.id).length;
            return (
              <span
                key={cat.id}
                className={clsxMerge(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                  "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
                  "border border-[var(--color-border)]"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.name} ({count})
              </span>
            );
          })}
        </div>

        {/* All Artworks Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">All Artworks</h2>
          <ArtworkGrid artworks={artworks} columns={4} />
        </section>

        {/* Artworks by Category */}
        {artworksByCategory.map((section) => {
          if (section.artworks.length === 0) return null;
          const Icon = categoryIcons[section.id];
          return (
            <section
              key={section.id}
              className="mb-16 last:mb-0 pt-8 border-t border-[var(--color-border)]"
            >
              <div className="flex items-center gap-3 mb-6">
                {Icon && (
                  <div className="p-2 rounded-lg bg-[var(--color-primary-light)]">
                    <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold">{section.name}</h2>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {section.artworks.length} artworks
                  </p>
                </div>
              </div>
              <ArtworkGrid artworks={section.artworks} columns={3} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
