import { Metadata } from "next";
import { ShowreelCard } from "../components/ui/showreel-card";
import { getShowreels, getProfile } from "@/lib/services";

const profile = getProfile();
const showreels = getShowreels();

export const metadata: Metadata = {
  title: `Showreels | ${profile.name}`,
  description: "Watch my demo reels showcasing character art, animation, and VFX work.",
};

export default function ShowreelsPage() {
  const featuredReels = showreels.filter((s) => s.featured);
  const otherReels = showreels.filter((s) => !s.featured);

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            <span className="text-gradient">Showreels</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto leading-relaxed">
            Demo reels showcasing my character art, animation, and VFX work.
            See characters come to life and visual effects in motion.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mb-14">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">{showreels.length}</div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Showreels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient">
              {showreels.reduce((acc, s) => acc + (s.breakdown?.length || 0), 0)}
            </div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">Clips</div>
          </div>
        </div>

        {/* Featured Showreels */}
        {featuredReels.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Reels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredReels.map((showreel, index) => (
                <ShowreelCard
                  key={showreel.id}
                  showreel={showreel}
                  priority={index < 2}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Other Showreels */}
        {otherReels.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">All Showreels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherReels.map((showreel, index) => (
                <ShowreelCard
                  key={showreel.id}
                  showreel={showreel}
                  priority={index < 3}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
