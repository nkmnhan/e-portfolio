import { skills, type SkillCategory } from "@/lib/data";

// Category labels with cosmic theme
const categoryLabels: Record<SkillCategory, string> = {
  backend: "BACKEND",
  frontend: "FRONTEND",
  mobile: "MOBILE",
  database: "DATABASE",
  cloud: "CLOUD",
  devops: "DEVOPS",
  testing: "TESTING",
  api: "API & MESSAGING",
};

// Category icons (SVG paths)
const categoryIcons: Record<SkillCategory, string> = {
  backend: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  frontend: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  mobile: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
  database: "M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2z",
  cloud: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
  devops: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  testing: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  api: "M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5z",
};

// Group skills by category
function groupSkillsByCategory() {
  const grouped = new Map<SkillCategory, string[]>();

  skills.forEach((skill) => {
    const existing = grouped.get(skill.category) || [];
    grouped.set(skill.category, [...existing, skill.name]);
  });

  return grouped;
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-neon-cyan)] hover:text-[var(--color-neon-cyan)] hover:shadow-[var(--glow-cyan)]">
      {name}
    </span>
  );
}

function SkillCategory({
  category,
  skillNames,
}: {
  category: SkillCategory;
  skillNames: string[];
}) {
  return (
    <div className="card-glow p-4 md:p-6">
      {/* Category Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-light)]">
          <svg
            className="h-5 w-5 text-[var(--color-neon-cyan)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={categoryIcons[category]} />
          </svg>
        </div>
        <h3 className="text-sm font-semibold tracking-wider text-[var(--color-neon-cyan)]">
          {categoryLabels[category]}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {skillNames.map((name) => (
          <SkillBadge key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const groupedSkills = groupSkillsByCategory();
  const categories = Array.from(groupedSkills.entries());

  return (
    <section
      id="skills"
      className="fade-in-section section-padding container-custom"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-glow mb-4 text-3xl font-bold text-[var(--color-neon-cyan)] md:text-4xl">
          MY SKILLS
        </h2>
        <p className="mx-auto max-w-2xl text-[var(--color-text-secondary)]">
          Technologies and tools I use to build scalable, maintainable solutions
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map(([category, skillNames]) => (
          <SkillCategory
            key={category}
            category={category}
            skillNames={skillNames}
          />
        ))}
      </div>
    </section>
  );
}
