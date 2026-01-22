import { portfolioData, summaryStats } from "@/lib/data";
import { Skills } from "@/app/components/sections/Skills";
import { Projects } from "@/app/components/sections/Projects";
import { Experience } from "@/app/components/sections/Experience";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16 md:pt-20"
      >
        {/* Background gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-space-mid)] to-[var(--color-space-dark)]" />

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Subtitle */}
          <p className="mb-2 text-sm tracking-widest text-[var(--color-text-muted)] md:text-base">
            {portfolioData.subtitle}
          </p>

          {/* Greeting */}
          <h1 className="text-glow mb-6 text-2xl font-bold tracking-wider text-[var(--color-neon-cyan)] md:text-4xl lg:text-5xl">
            {portfolioData.greeting}
          </h1>

          {/* Name */}
          <h2 className="text-glow mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            I AM{" "}
            <span className="text-gradient">{portfolioData.name.toUpperCase()}</span>
          </h2>

          {/* Title & Experience */}
          <p className="mb-6 text-lg text-[var(--color-neon-purple)] md:text-xl">
            {portfolioData.title} | {portfolioData.experience}
          </p>

          {/* Bio */}
          <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
            {portfolioData.bio}
          </p>

          {/* Summary Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
            {summaryStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-glow text-3xl font-bold text-[var(--color-neon-cyan)] md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-neon-cyan)]"
            aria-label="Scroll to skills section"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="animate-bounce-down">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Footer CTA */}
      <section className="section-padding container-custom text-center">
        <div className="card-glow mx-auto max-w-2xl p-8 md:p-12">
          <h2 className="text-glow mb-4 text-2xl font-bold text-[var(--color-neon-cyan)] md:text-3xl">
            LET&apos;S WORK TOGETHER
          </h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you.
          </p>
          <a href="/contact" className="btn-glow inline-block">
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] py-8">
        <div className="container-custom text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Tony Nguyen. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
