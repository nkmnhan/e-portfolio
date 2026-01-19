import { Metadata } from "next";
import { ShowreelCard } from "../components/ui/showreel-card";
import { showreels, artists } from "@/lib/data";

export const metadata: Metadata = {
  title: "Showreels | ArtFolio",
  description: "Watch demo reels from talented animators and VFX artists.",
};

export default function ShowreelsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Showreels</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Watch demo reels from talented animators and VFX artists.
            See characters come to life and visual effects that push the boundaries.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">{showreels.length}</div>
            <div className="text-sm text-[var(--color-text-muted)]">Showreels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">
              {new Set(showreels.map((s) => s.artistId)).size}
            </div>
            <div className="text-sm text-[var(--color-text-muted)]">Artists</div>
          </div>
        </div>

        {/* Featured Showreels */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Reels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showreels
              .filter((s) => s.featured)
              .map((showreel, index) => {
                const artist = artists.find((a) => a.id === showreel.artistId);
                if (!artist) return null;
                return (
                  <ShowreelCard
                    key={showreel.id}
                    showreel={showreel}
                    artist={artist}
                    priority={index < 2}
                  />
                );
              })}
          </div>
        </section>

        {/* All Showreels */}
        <section>
          <h2 className="text-2xl font-bold mb-6">All Showreels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showreels.map((showreel, index) => {
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
        </section>
      </div>
    </div>
  );
}
