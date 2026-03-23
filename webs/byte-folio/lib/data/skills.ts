import type { SkillCategory } from "@/lib/types";

export const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C#", iconName: "SiCsharp" },
      { name: "TypeScript", iconName: "SiTypescript" },
      { name: "JavaScript", iconName: "SiJavascript" },
      { name: "Python", iconName: "SiPython" },
      { name: "SQL", iconName: "SiPostgresql" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", iconName: "SiReact" },
      { name: "Next.js", iconName: "SiNextdotjs" },
      { name: "Vue.js", iconName: "SiVuedotjs" },
      { name: "Angular", iconName: "SiAngular" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss" },
      { name: "Framer Motion", iconName: "SiFramer" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: ".NET Core", iconName: "SiDotnet" },
      { name: "Node.js", iconName: "SiNodedotjs" },
      { name: "GraphQL", iconName: "SiGraphql" },
      { name: "gRPC", iconName: "SiGrpc" },
      { name: "SignalR", iconName: "SiDotnet" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", iconName: "SiPostgresql" },
      { name: "MongoDB", iconName: "SiMongodb" },
      { name: "Elasticsearch", iconName: "SiElasticsearch" },
      { name: "SQL Server", iconName: "SiMicrosoftsqlserver" },
      { name: "DynamoDB", iconName: "SiAmazondynamodb" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", iconName: "SiAmazonwebservices" },
      { name: "Azure", iconName: "SiMicrosoftazure" },
      { name: "Docker", iconName: "SiDocker" },
      { name: "Kubernetes", iconName: "SiKubernetes" },
      { name: "GitHub Actions", iconName: "SiGithubactions" },
      { name: "CI/CD", iconName: "SiJenkins" },
    ],
  },
  {
    name: "Architecture",
    skills: [
      { name: "Microservices", iconName: "SiApachekafka" },
      { name: "DDD", iconName: "SiDiagramsdotnet" },
      { name: "CQRS", iconName: "SiDiagramsdotnet" },
      { name: "Event-Driven", iconName: "SiRabbitmq" },
      { name: "MediatR", iconName: "SiDotnet" },
      { name: "SOLID", iconName: "SiDotnet" },
    ],
  },
];
