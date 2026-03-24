import type { KeyProject } from "@/lib/types";

export const keyProjectsData: KeyProject[] = [
  {
    id: "bravosuite",
    name: "BravoSUITE",
    client: "Orient Software",
    role: "Senior Developer",
    period: "2026 — Present",
    description:
      "Enterprise HR & Talent Management platform with five integrated apps — bravoTALENTS, bravoGROWTH, bravoSURVEYS, bravoINSIGHTS, and Accounts — managing the full employee lifecycle from hiring through performance evaluation.",
    impact: "Implementing Talent Acquisition features across micro-frontend architecture",
    techStack: [".NET 9", "Angular", "Microservices", "Micro-Frontends"],
    accentColor: "primary",
  },
  {
    id: "moe",
    name: "MOE Platform",
    client: "Ministry of Education, Singapore",
    role: "Lead Developer",
    period: "2020 — 2025",
    description:
      "Large-scale digital learning platform for Singapore's Ministry of Education — led the microservices design with cross-platform mobile apps, cloud infrastructure, and end-to-end test automation.",
    impact: "Led microservices architecture serving national-scale digital education across Singapore",
    techStack: ["ASP.NET Core", "Angular", ".NET MAUI", "AWS", "Playwright"],
    accentColor: "secondary",
  },
  {
    id: "lowell",
    name: "Lowell Microservices",
    client: "European Financial Clients",
    role: "Software Architect",
    period: "2019 — 2020",
    description:
      "Event-driven microservices platform for a European financial services company, handling high-throughput data processing with Azure cloud infrastructure.",
    impact: "Architected distributed system with event-driven communication for financial operations",
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
