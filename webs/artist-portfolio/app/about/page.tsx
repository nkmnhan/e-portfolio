import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineStar,
  HiArrowRight,
} from "react-icons/hi";
import {
  SiArtstation,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiVimeo,
} from "react-icons/si";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: profile.shortBio,
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  artstation: SiArtstation,
  linkedin: SiLinkedin,
  instagram: SiInstagram,
  youtube: SiYoutube,
  vimeo: SiVimeo,
};

const skillCategoryNames: Record<string, string> = {
  "3d": "3D Software",
  animation: "Animation",
  concept: "Concept Art",
  engine: "Game Engines",
  general: "General",
};

export default function AboutPage() {
  const socialLinks = Object.entries(profile.socialLinks).filter(
    ([, url]) => url
  );

  // Group skills by category
  const skillsByCategory = profile.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof profile.skills>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Avatar */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={200}
              height={200}
              className="rounded-full ring-4 ring-[var(--color-primary)]/30"
              priority
            />

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                About Me
              </h1>
              <p className="text-xl text-gradient font-medium mb-5">
                {profile.title}
              </p>
              <p className="text-[var(--color-text-muted)] max-w-xl leading-relaxed">
                {profile.shortBio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">My Story</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              {profile.bio.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--color-text-secondary)] mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <HiOutlineStar className="w-6 h-6 text-[var(--color-primary)]" />
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div
                key={category}
                className={clsxMerge(
                  "p-7 rounded-xl",
                  "bg-[var(--color-surface)] border border-[var(--color-border)]"
                )}
              >
                <h3 className="font-semibold mb-5 text-[var(--color-text-secondary)]">
                  {skillCategoryNames[category] || category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-[var(--color-text)]">{skill.name}</span>
                      <span
                        className={clsxMerge(
                          "px-2 py-0.5 rounded text-xs font-medium",
                          skill.level === "expert" &&
                            "bg-[var(--color-primary)]/20 text-[var(--color-primary)]",
                          skill.level === "advanced" &&
                            "bg-[var(--color-accent)]/20 text-[var(--color-accent)]",
                          skill.level === "intermediate" &&
                            "bg-[var(--color-text-muted)]/20 text-[var(--color-text-muted)]"
                        )}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <HiOutlineBriefcase className="w-6 h-6 text-[var(--color-accent)]" />
            Experience
          </h2>

          <div className="space-y-8 max-w-3xl">
            {profile.experience.map((exp, index) => (
              <div
                key={index}
                className={clsxMerge(
                  "relative pl-10 pb-8",
                  index !== profile.experience.length - 1 &&
                    "border-l-2 border-[var(--color-border)]"
                )}
              >
                {/* Timeline dot */}
                <div
                  className={clsxMerge(
                    "absolute left-0 top-0 -translate-x-1/2",
                    "w-4 h-4 rounded-full",
                    "bg-[var(--color-accent)] ring-4 ring-[var(--color-bg)]"
                  )}
                />

                <div
                  className={clsxMerge(
                    "p-6 rounded-xl",
                    "bg-[var(--color-surface)] border border-[var(--color-border)]"
                  )}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-[var(--color-primary)] mt-1">{exp.company}</p>
                    </div>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <HiOutlineAcademicCap className="w-6 h-6 text-yellow-500" />
                Education
              </h2>
              <div className="space-y-5">
                {profile.education.map((edu, index) => (
                  <div
                    key={index}
                    className={clsxMerge(
                      "p-6 rounded-xl",
                      "bg-[var(--color-surface)] border border-[var(--color-border)]"
                    )}
                  >
                    <h3 className="font-semibold mb-1">{edu.school}</h3>
                    <p className="text-[var(--color-text-secondary)]">{edu.degree}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <HiOutlineStar className="w-6 h-6 text-yellow-500" />
                Awards & Recognition
              </h2>
              <div className="space-y-5">
                {profile.awards.map((award, index) => (
                  <div
                    key={index}
                    className={clsxMerge(
                      "p-6 rounded-xl",
                      "bg-[var(--color-surface)] border border-[var(--color-border)]"
                    )}
                  >
                    <h3 className="font-semibold mb-1">{award.title}</h3>
                    <p className="text-[var(--color-text-secondary)]">{award.category}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">{award.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-5">Let&apos;s Connect</h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
            Follow my work on social media or reach out directly for collaborations.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5 mb-10">
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
                    "p-5 rounded-xl",
                    "bg-[var(--color-surface)] border border-[var(--color-border)]",
                    "text-[var(--color-text-secondary)]",
                    "hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]",
                    "transition-all duration-200"
                  )}
                  aria-label={platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          <Link
            href="/contact"
            className={clsxMerge(
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
              "bg-[var(--color-primary)] text-white font-medium",
              "hover:bg-[var(--color-primary-hover)]",
              "transition-colors"
            )}
          >
            Get in Touch
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
