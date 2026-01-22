import { portfolioData, summaryStats } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
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
          <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
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
          </div>
        </div>
      </section>

      {/* Placeholder sections - to be implemented */}
      <section className="section-padding container-custom">
        <h2 className="text-glow mb-8 text-center text-3xl font-bold text-[var(--color-neon-cyan)]">
          MY SKILLS
        </h2>
        <p className="text-center text-[var(--color-text-muted)]">
          Skills section coming soon...
        </p>
      </section>

      <section className="section-padding container-custom">
        <h2 className="text-glow mb-8 text-center text-3xl font-bold text-[var(--color-neon-cyan)]">
          MY PROJECTS
        </h2>
        <p className="text-center text-[var(--color-text-muted)]">
          Projects section coming soon...
        </p>
      </section>

      <section className="section-padding container-custom">
        <h2 className="text-glow mb-8 text-center text-3xl font-bold text-[var(--color-neon-cyan)]">
          MY WORK EXPERIENCE
        </h2>
        <p className="text-center text-[var(--color-text-muted)]">
          Experience section coming soon...
        </p>
      </section>
    </div>
  );
}
