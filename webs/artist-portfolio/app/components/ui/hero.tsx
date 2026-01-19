import Link from "next/link";
import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { profile } from "@/lib/data";
import {
  HiArrowRight,
  HiPlay,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import {
  SiArtstation,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiVimeo,
} from "react-icons/si";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  artstation: SiArtstation,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  youtube: SiYoutube,
  vimeo: SiVimeo,
};

export function Hero() {
  const socialLinks = Object.entries(profile.socialLinks).filter(
    ([, url]) => url
  );

  return (
    <section className="relative overflow-hidden">
      {/* Cover Image Background */}
      <div className="absolute inset-0">
        <Image
          src={profile.coverImage}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/60 via-[var(--color-bg)]/80 to-[var(--color-bg)]" />
      </div>

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
        <div className="py-16 md:py-24 lg:py-32">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={180}
                height={180}
                className={clsxMerge(
                  "rounded-full",
                  "ring-4 ring-[var(--color-primary)]/30",
                  "shadow-xl shadow-[var(--color-primary)]/20"
                )}
                priority
              />
              {/* Availability indicator */}
              {profile.availableForWork && (
                <div
                  className={clsxMerge(
                    "absolute -bottom-2 left-1/2 -translate-x-1/2",
                    "px-3 py-1 rounded-full",
                    "bg-[var(--color-success)] text-white text-xs font-medium",
                    "whitespace-nowrap"
                  )}
                >
                  Open to Work
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              {/* Specializations */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {profile.specializations.map((spec) => (
                  <span
                    key={spec}
                    className={clsxMerge(
                      "px-3 py-1 rounded-full",
                      "bg-[var(--color-surface)] border border-[var(--color-border)]",
                      "text-xs font-medium text-[var(--color-text-secondary)] capitalize"
                    )}
                  >
                    {spec.replace("-", " ")}
                  </span>
                ))}
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                {profile.name}
              </h1>

              {/* Title */}
              <p className="text-xl md:text-2xl text-gradient font-medium mb-4">
                {profile.title}
              </p>

              {/* Tagline */}
              <p className="text-lg text-[var(--color-text-muted)] max-w-xl mb-6">
                {profile.tagline}
              </p>

              {/* Location & Email */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-[var(--color-text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                  {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors"
                >
                  <HiOutlineMail className="w-4 h-4" />
                  {profile.email}
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
                <Link
                  href="/projects"
                  className={clsxMerge(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                    "bg-[var(--color-primary)] text-white font-medium",
                    "hover:bg-[var(--color-primary-hover)]",
                    "transition-colors group"
                  )}
                >
                  <span>View Projects</span>
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

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-3">
                {socialLinks.map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsxMerge(
                        "p-2.5 rounded-lg",
                        "bg-[var(--color-surface)]",
                        "text-[var(--color-text-secondary)]",
                        "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)]",
                        "transition-all duration-200"
                      )}
                      aria-label={platform}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
