import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import { HiArrowRight, HiPlay } from "react-icons/hi";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-glow opacity-30" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative">
        <div className="py-20 md:py-32 lg:py-40 text-center">
          {/* Badge */}
          <div
            className={clsxMerge(
              "inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full",
              "bg-[var(--color-surface)] border border-[var(--color-border)]",
              "text-sm text-[var(--color-text-secondary)]"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span>Discover talented visual artists</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Where{" "}
            <span className="text-gradient">Creative Vision</span>
            <br />
            Meets Exceptional Craft
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10">
            Showcase platform for 3D Artists, Animators, and Concept Artists.
            Discover stunning characters, environments, animations, and visual effects.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gallery"
              className={clsxMerge(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                "bg-[var(--color-primary)] text-white font-medium",
                "hover:bg-[var(--color-primary-hover)]",
                "transition-colors group"
              )}
            >
              <span>Explore Gallery</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/showreels"
              className={clsxMerge(
                "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                "bg-[var(--color-surface)] text-[var(--color-text)]",
                "border border-[var(--color-border)]",
                "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                "transition-colors group"
              )}
            >
              <HiPlay className="w-5 h-5" />
              <span>Watch Showreels</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">50+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Artists</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">500+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Artworks</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient">100+</div>
              <div className="text-sm text-[var(--color-text-muted)]">Showreels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
