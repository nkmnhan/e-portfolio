"use client";

import { useInView } from "@/app/hooks";
import { skillsData } from "@/lib/data/skills";
import { SkillIcon } from "./skill-icon";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

function SkillCategory({ category, index }: { category: (typeof skillsData)[number]; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-5 view-hidden ${isInView ? "view-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-sm font-semibold text-primary font-[family-name:var(--font-mono)] mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {category.skills.map((skill) => (
          <SkillIcon
            key={skill.name}
            name={skill.name}
            iconName={skill.iconName}
          />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <TerminalHeading command="skills --categorize" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, categoryIndex) => (
          <SkillCategory key={category.name} category={category} index={categoryIndex} />
        ))}
      </div>
    </SectionWrapper>
  );
}
