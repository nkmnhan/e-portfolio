import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtworkCard } from "../../components/artwork/artwork-card";
import { ShowreelCard } from "../../components/ui/showreel-card";
import { SectionHeader } from "../../components/ui/section-header";
import {
  getArtistBySlug,
  getArtworksByArtist,
  getShowreelsByArtist,
  artists,
} from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import {
  HiLocationMarker,
  HiMail,
  HiBadgeCheck,
  HiExternalLink,
} from "react-icons/hi";
import { FaArtstation, FaLinkedin, FaInstagram, FaVimeo, FaYoutube } from "react-icons/fa";

interface ArtistPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    return { title: "Artist Not Found" };
  }

  return {
    title: `${artist.name} | ${artist.title} | ArtFolio`,
    description: artist.bio,
  };
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  artstation: FaArtstation,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  vimeo: FaVimeo,
  youtube: FaYoutube,
};

export default async function ArtistPage({ params }: ArtistPageProps) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);

  if (!artist) {
    notFound();
  }

  const artworks = getArtworksByArtist(artist.id);
  const showreels = getShowreelsByArtist(artist.id);

  return (
    <>
      {/* Cover & Profile Header */}
      <section className="relative">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 lg:h-80">
          <Image
            src={artist.coverImage}
            alt={`${artist.name} cover`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
        </div>

        {/* Profile Info */}
        <div className="container-custom relative -mt-20 md:-mt-24 pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar */}
            <div className="relative">
              <Image
                src={artist.avatar}
                alt={artist.name}
                width={160}
                height={160}
                className={clsxMerge(
                  "rounded-2xl object-cover",
                  "border-4 border-[var(--color-bg)]",
                  "w-32 h-32 md:w-40 md:h-40"
                )}
                priority
              />
              {artist.availableForWork && (
                <div
                  className={clsxMerge(
                    "absolute -bottom-2 -right-2",
                    "flex items-center gap-1 px-3 py-1 rounded-full",
                    "bg-[var(--color-success)] text-white text-sm font-medium"
                  )}
                >
                  <HiBadgeCheck className="w-4 h-4" />
                  <span>Available</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {artist.name}
              </h1>
              <p className="text-lg text-[var(--color-primary)] mb-3">
                {artist.title}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-[var(--color-text-muted)] mb-4">
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="w-4 h-4" />
                  {artist.location}
                </span>
                <a
                  href={`mailto:${artist.email}`}
                  className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors"
                >
                  <HiMail className="w-4 h-4" />
                  {artist.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {Object.entries(artist.socialLinks).map(([platform, url]) => {
                  if (!url) return null;
                  const Icon = socialIcons[platform];
                  if (!Icon) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsxMerge(
                        "p-2 rounded-lg",
                        "bg-[var(--color-surface)]",
                        "text-[var(--color-text-muted)]",
                        "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)]",
                        "transition-colors"
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
      </section>

      {/* Bio & Skills */}
      <section className="py-8 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {artist.bio}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {artist.skills.map((skill) => (
                  <span
                    key={skill}
                    className={clsxMerge(
                      "px-3 py-1 rounded-full text-sm",
                      "bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
                      "border border-[var(--color-border)]"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks */}
      {artworks.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeader
              title="Portfolio"
              subtitle={`${artworks.length} artworks`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork, index) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  artistSlug={artist.slug}
                  priority={index < 3}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Showreels */}
      {showreels.length > 0 && (
        <section className="section-padding bg-[var(--color-bg-secondary)]">
          <div className="container-custom">
            <SectionHeader
              title="Showreels"
              subtitle="Demo reels and animation work"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {showreels.map((showreel, index) => (
                <ShowreelCard
                  key={showreel.id}
                  showreel={showreel}
                  artist={artist}
                  priority={index < 2}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to artists */}
      <section className="py-8">
        <div className="container-custom text-center">
          <Link
            href="/artists"
            className={clsxMerge(
              "inline-flex items-center gap-2",
              "text-[var(--color-text-muted)]",
              "hover:text-[var(--color-primary)]",
              "transition-colors"
            )}
          >
            <HiExternalLink className="w-4 h-4" />
            <span>View all artists</span>
          </Link>
        </div>
      </section>
    </>
  );
}
