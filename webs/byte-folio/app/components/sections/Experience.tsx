import { experiences } from "@/lib/data";

function ExperienceCard({
  experience,
  isLast,
}: {
  experience: (typeof experiences)[0];
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="relative z-10 flex h-4 w-4 items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-[var(--color-neon-cyan)] shadow-[var(--glow-cyan)]" />
        </div>
        {/* Line */}
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-[var(--color-neon-cyan)] to-[var(--color-border)]" />
        )}
      </div>

      {/* Content */}
      <div className="card-glow mb-6 flex-1 p-4 md:p-6">
        {/* Period */}
        <div className="mb-2 inline-block rounded-full bg-[var(--color-primary-light)] px-3 py-1 text-xs font-semibold text-[var(--color-neon-cyan)]">
          {experience.period}
        </div>

        {/* Role & Company */}
        <h3 className="mb-1 text-lg font-bold text-white md:text-xl">
          {experience.role}
        </h3>
        <p className="mb-3 text-sm text-[var(--color-neon-purple)]">
          {experience.company}
        </p>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] md:text-base">
          {experience.description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="fade-in-section section-padding container-custom"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-glow mb-4 text-3xl font-bold text-[var(--color-neon-cyan)] md:text-4xl">
          WORK EXPERIENCE
        </h2>
        <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
          My professional journey building enterprise solutions across multiple industries
        </p>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        <div className="card-glow p-4 text-center">
          <div className="text-glow text-2xl font-bold text-[var(--color-neon-cyan)] md:text-3xl">
            3
          </div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            Companies
          </div>
        </div>
        <div className="card-glow p-4 text-center">
          <div className="text-glow text-2xl font-bold text-[var(--color-neon-cyan)] md:text-3xl">
            8+
          </div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            Years
          </div>
        </div>
        <div className="card-glow p-4 text-center">
          <div className="text-glow text-2xl font-bold text-[var(--color-neon-cyan)] md:text-3xl">
            3
          </div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            Countries
          </div>
        </div>
        <div className="card-glow p-4 text-center">
          <div className="text-glow text-2xl font-bold text-[var(--color-neon-cyan)] md:text-3xl">
            10+
          </div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
            Projects
          </div>
        </div>
      </div>
    </section>
  );
}
