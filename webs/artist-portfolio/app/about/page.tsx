import { Metadata } from "next";
import Image from "next/image";
import { getProfile } from "@/lib/services";
import { clsxMerge } from "@/lib/utils";

// Get profile for static metadata generation
const profile = getProfile();
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineStar,
} from "react-icons/hi";
import {
  Card,
  Badge,
  Button,
  SocialLinks,
  ResponsiveGrid,
} from "../components/ui";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: profile.shortBio,
};

const skillCategoryNames: Record<string, string> = {
  "3d": "3D Software",
  animation: "Animation",
  concept: "Concept Art",
  engine: "Game Engines",
  general: "General",
};

export default function AboutPage() {
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

          <ResponsiveGrid columns={3}>
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <Card key={category}>
                <h3 className="font-semibold mb-5 text-[var(--color-text-secondary)]">
                  {skillCategoryNames[category] || category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-[var(--color-text)]">{skill.name}</span>
                      <Badge
                        variant={
                          skill.level === "expert"
                            ? "primary"
                            : skill.level === "advanced"
                              ? "accent"
                              : "muted"
                        }
                        size="sm"
                        rounded="md"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </ResponsiveGrid>
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

                <Card padding="md">
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
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <ResponsiveGrid columns={2} gap="lg">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <HiOutlineAcademicCap className="w-6 h-6 text-yellow-500" />
                Education
              </h2>
              <div className="space-y-5">
                {profile.education.map((edu, index) => (
                  <Card key={index} padding="md">
                    <h3 className="font-semibold mb-1">{edu.school}</h3>
                    <p className="text-[var(--color-text-secondary)]">{edu.degree}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">{edu.year}</p>
                  </Card>
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
                  <Card key={index} padding="md">
                    <h3 className="font-semibold mb-1">{award.title}</h3>
                    <p className="text-[var(--color-text-secondary)]">{award.category}</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">{award.year}</p>
                  </Card>
                ))}
              </div>
            </div>
          </ResponsiveGrid>
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
          <SocialLinks
            links={profile.socialLinks}
            variant="icon"
            size="lg"
            className="justify-center mb-10"
          />

          <Button href="/contact" size="lg" withArrow>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
