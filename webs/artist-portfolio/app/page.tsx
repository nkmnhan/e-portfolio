import { Hero } from "./components/ui/hero";
import { SectionHeader } from "./components/ui/section-header";
import { ProjectGrid } from "./components/media/project-grid";
import { ShowreelCard } from "./components/ui/showreel-card";
import { getFeaturedProjects, getFeaturedShowreels, profile } from "@/lib/data";
import { clsxMerge } from "@/lib/utils";
import Link from "next/link";
import { HiArrowRight, HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineStar } from "react-icons/hi";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredShowreels = getFeaturedShowreels();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Projects */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <SectionHeader
            title="Featured Projects"
            subtitle="Selected works from my portfolio"
            href="/projects"
          />
          <ProjectGrid projects={featuredProjects.slice(0, 6)} columns={3} />
        </div>
      </section>

      {/* Skills & Experience Quick View */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Skills */}
            <div
              className={clsxMerge(
                "p-7 rounded-xl",
                "bg-[var(--color-surface)] border border-[var(--color-border)]"
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                  <HiOutlineStar className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold text-lg">Top Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {profile.skills
                  .filter((s) => s.level === "expert")
                  .slice(0, 6)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={clsxMerge(
                        "px-3.5 py-2 rounded-lg",
                        "bg-[var(--color-bg)] border border-[var(--color-border)]",
                        "text-sm text-[var(--color-text-secondary)]"
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
              <Link
                href="/about#skills"
                className="inline-flex items-center gap-1 mt-5 text-sm text-[var(--color-primary)] hover:underline"
              >
                View all skills
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Experience */}
            <div
              className={clsxMerge(
                "p-7 rounded-xl",
                "bg-[var(--color-surface)] border border-[var(--color-border)]"
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[var(--color-accent)]/10">
                  <HiOutlineBriefcase className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="font-semibold text-lg">Experience</h3>
              </div>
              <div className="space-y-4">
                {profile.experience.slice(0, 2).map((exp) => (
                  <div key={exp.company}>
                    <p className="font-medium text-[var(--color-text)]">
                      {exp.role}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/about#experience"
                className="inline-flex items-center gap-1 mt-5 text-sm text-[var(--color-primary)] hover:underline"
              >
                Full experience
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Awards */}
            <div
              className={clsxMerge(
                "p-7 rounded-xl",
                "bg-[var(--color-surface)] border border-[var(--color-border)]"
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-yellow-500/10">
                  <HiOutlineAcademicCap className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-lg">Recognition</h3>
              </div>
              <div className="space-y-4">
                {profile.awards.slice(0, 3).map((award) => (
                  <div key={award.title}>
                    <p className="font-medium text-[var(--color-text)]">
                      {award.title}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">
                      {award.category} • {award.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showreels */}
      <section className="section-padding bg-[var(--color-bg-secondary)]">
        <div className="container-custom">
          <SectionHeader
            title="Demo Reels"
            subtitle="Watch my work in motion"
            href="/showreels"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredShowreels.map((showreel, index) => (
              <ShowreelCard
                key={showreel.id}
                showreel={showreel}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 p-10 md:p-14 lg:p-20 text-center">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-glow opacity-50" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
                Let&apos;s Create Something Amazing
              </h2>
              <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
                I&apos;m currently available for freelance projects, film
                collaborations, and studio positions. Let&apos;s discuss how I can
                bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                Get in Touch
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
