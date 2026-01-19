import { Hero } from "./components/ui/hero";
import { SectionHeader } from "./components/ui/section-header";
import { ArtworkGrid } from "./components/artwork/artwork-grid";
import { ArtistCard } from "./components/artist/artist-card";
import { ShowreelCard } from "./components/ui/showreel-card";
import {
  getFeaturedArtworks,
  getFeaturedArtists,
  getFeaturedShowreels,
  artists,
} from "@/lib/data";

export default function HomePage() {
  const featuredArtworks = getFeaturedArtworks();
  const featuredArtists = getFeaturedArtists();
  const featuredShowreels = getFeaturedShowreels();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Artworks */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <SectionHeader
            title="Featured Artworks"
            subtitle="Hand-picked masterpieces from our talented community"
            href="/gallery"
          />
          <ArtworkGrid artworks={featuredArtworks.slice(0, 6)} columns={3} />
        </div>
      </section>

      {/* Featured Artists */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            title="Featured Artists"
            subtitle="Meet the creative minds behind the artwork"
            href="/artists"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtists.map((artist, index) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Showreels */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <SectionHeader
            title="Demo Reels"
            subtitle="Watch artists bring their work to life"
            href="/showreels"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredShowreels.map((showreel, index) => {
              const artist = artists.find((a) => a.id === showreel.artistId);
              if (!artist) return null;
              return (
                <ShowreelCard
                  key={showreel.id}
                  showreel={showreel}
                  artist={artist}
                  priority={index < 3}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 p-8 md:p-12 lg:p-16 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-glow opacity-50" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Showcase Your Art?
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-8">
                Join our community of talented 3D artists, animators, and
                concept artists. Let your work speak for itself.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
