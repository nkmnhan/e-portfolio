import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2019 — Present",
    title: "Senior Software Engineer",
    company: "Orient Software",
    techStack: [".NET 9", "Angular", ".NET Core", "Azure", "AWS", "Docker", "RabbitMQ"],
    achievements: [
      "Building BravoSUITE — enterprise HR & Talent Management platform with .NET 9 microservices and Angular micro-frontends",
      "Led MOE Platform microservices design for Singapore's Ministry of Education (2020–2025)",
      "Architected Lowell Microservices for European clients",
      "Built Open Create platform for UK's Open University",
    ],
    accentColor: "primary",
  },
  {
    period: "2018 — 2019",
    title: "Software Engineer",
    company: "NASH TECH",
    techStack: [".NET Core", "Azure", "Docker", "Microservices"],
    achievements: [
      "Deepened expertise in microservices and cloud architecture",
      "Contributed to enterprise-grade distributed systems",
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
