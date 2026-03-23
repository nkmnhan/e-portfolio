"use client";

import {
  SiSharp,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiFramer,
  SiDotnet,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiElasticsearch,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiApachekafka,
  SiDiagramsdotnet,
  SiRabbitmq,
} from "react-icons/si";
import {
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaServer,
  FaCloud,
} from "react-icons/fa6";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiSharp,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiFramer,
  SiDotnet,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiElasticsearch,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiApachekafka,
  SiDiagramsdotnet,
  SiRabbitmq,
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaServer,
  FaCloud,
};

interface SkillIconProps {
  name: string;
  iconName: string;
}

export function SkillIcon({ name, iconName }: SkillIconProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="flex flex-col items-center gap-1.5 group">
      {Icon ? (
        <Icon className="w-8 h-8 text-text-muted transition-colors duration-200 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(67,224,247,0.5)]" />
      ) : (
        <div className="w-8 h-8 rounded bg-surface flex items-center justify-center text-text-muted text-xs">
          ?
        </div>
      )}
      <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}
