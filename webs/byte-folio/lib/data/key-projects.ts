import type { KeyProject } from "@/lib/types";

export const keyProjectsData: KeyProject[] = [
  {
    id: "bravosuite",
    name: "BravoSUITE",
    client: "Orient Software",
    role: "Senior Developer",
    period: "2026 - Present",
    description:
      "Enterprise HR & Talent Management platform with five integrated apps (bravoTALENTS, bravoGROWTH, bravoSURVEYS, bravoINSIGHTS, and Accounts) managing the full employee lifecycle from hiring through performance evaluation.",
    impact: "Implementing Talent Acquisition features across micro-frontend architecture",
    techStack: [".NET 9", "Angular", "Microservices", "Micro-Frontends"],
    accentColor: "primary",
  },
  {
    id: "moe",
    name: "MOE Platform",
    client: "Ministry of Education, Singapore",
    role: "Lead Developer",
    period: "2020 - 2025",
    description:
      "Large-scale digital learning platform for Singapore's Ministry of Education, built by a 100+ person team across multiple modules at its peak. Led up to 5 developers on the Search, Course and Learner modules, then stayed through a 3-year maintenance phase as the project ramped down to a lean team of 8 (1 PM, 4 developers, 1 tester, 1 service desk, 1 DBA).",
    impact: "5 years on a national-scale platform, from 100+ person build-out to lean 8-person maintenance",
    techStack: ["ASP.NET Core", "Angular", ".NET MAUI", "AWS", "Playwright"],
    accentColor: "secondary",
  },
  {
    id: "lowell",
    name: "Lowell Microservices",
    client: "European Financial Services (at NashTech)",
    role: "Software Developer",
    period: "2018 - 2019",
    description:
      "Event-driven microservices platform for a European financial services company, running on Azure cloud infrastructure.",
    impact: "Developed features in an 8-person team and supported Docker-based deployments",
    techStack: ["Azure", ".NET Core", "RabbitMQ", "Docker", "Event-Driven"],
    accentColor: "accent",
  },
  {
    id: "open-create",
    name: "Open Create",
    client: "The Open University, UK",
    role: "Full-Stack Developer",
    period: "2019",
    description:
      "Digital learning platform transforming static educational materials into dynamic, interactive learning experiences for the UK's largest university.",
    impact: "Delivered interactive content platform serving university-scale learner base",
    techStack: ["Angular", "Node.js", ".NET Core"],
    accentColor: "secondary",
  },
];
