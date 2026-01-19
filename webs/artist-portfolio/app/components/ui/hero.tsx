import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { profile } from "@/lib/data";
import { HiPlay, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { Badge } from "./badge";
import { Button, ButtonGroup } from "./button";
import { SocialLinks } from "./social-links";

export function Hero() {
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
                <Badge
                  variant="success"
                  size="sm"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  Open to Work
                </Badge>
              )}
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              {/* Specializations */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                {profile.specializations.map((spec) => (
                  <Badge key={spec} variant="surface" size="md" className="capitalize">
                    {spec.replace("-", " ")}
                  </Badge>
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
              <ButtonGroup className="justify-center md:justify-start mb-6">
                <Button href="/projects" size="lg" withArrow>
                  View Projects
                </Button>
                <Button
                  href="/showreels"
                  variant="secondary"
                  size="lg"
                  leftIcon={<HiPlay className="w-5 h-5" />}
                >
                  Watch Showreels
                </Button>
              </ButtonGroup>

              {/* Social Links */}
              <SocialLinks
                links={profile.socialLinks}
                variant="icon"
                size="md"
                className="justify-center md:justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
