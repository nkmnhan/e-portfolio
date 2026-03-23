"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data/skills";
import { SkillIcon } from "./skill-icon";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <TerminalHeading command="skills --categorize" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="glass rounded-xl p-5"
          >
            <h3 className="text-sm font-semibold text-primary font-[family-name:var(--font-mono)] mb-4">
              {category.name}
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {category.skills.map((skill) => (
                <SkillIcon
                  key={skill.name}
                  name={skill.name}
                  iconName={skill.iconName}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
