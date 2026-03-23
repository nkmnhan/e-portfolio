import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2024 — Present",
    title: "Independent Software Engineer",
    context: "Open Source & Side Projects",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "AWS", ".NET MAUI"],
    achievements: [
      "Built MediTrack — full-stack EMR with .NET microservices, React 19, Clara AI",
      "Created Aspire.Nexus — config-driven .NET Aspire orchestrator",
      "Built E-Portfolio platform with Next.js 16, R3F, Framer Motion",
    ],
    accentColor: "primary",
  },
  {
    period: "2019 — 2024",
    title: "Senior Software Engineer",
    company: "Orient Software / NASH TECH",
    techStack: [".NET Core", "Azure", "Docker", "RabbitMQ", "Entity Framework"],
    achievements: [
      "Led MOE Platform development (Singapore Ministry of Education)",
      "Architected Lowell Microservices for European clients",
      "Built Open Create platform for UK's Open University",
    ],
    accentColor: "secondary",
  },
  {
    period: "2016 — 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    techStack: ["IBM Frameworks", "Real-time Systems"],
    achievements: [
      "Built MES systems for semiconductor manufacturing",
      "Developed real-time monitoring dashboards",
    ],
    accentColor: "muted",
  },
];
