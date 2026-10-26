import type { KeyProject } from "@/lib/types";

export const keyProjectsData: KeyProject[] = [
  {
    id: "bravosuite",
    name: "BravoSUITE",
    client: "Orient Software",
    role: "Senior Software Engineer",
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
    role: "Senior Software Engineer (Module Lead)",
    period: "2020 - 2025",
    description:
      "Large-scale digital learning platform for Singapore's Ministry of Education, built by a 100+ person team across multiple modules at its peak, with cross-platform mobile apps, cloud infrastructure and end-to-end test automation.",
    impact: "Led up to 5 developers on the Search, Course and Learner modules, then kept the platform running for 3 years with a lean team of 8 (1 PM, 4 developers, 1 tester, 1 service desk, 1 DBA)",
    techStack: ["ASP.NET Core", "Angular", ".NET MAUI", "AWS", "Playwright"],
    accentColor: "secondary",
  },
  {
    id: "lowell",
    name: "Lowell Microservices",
    client: "European Financial Services (at NashTech)",
    role: "Software Engineer",
    period: "2019 - 2020",
    description:
      "Microservices system for a European financial services company: .NET Core services talking over gRPC, a Vue.js frontend, PostgreSQL, RabbitMQ and Azure Service Bus, containerized with Kubernetes on Azure.",
    impact: "Built the IdentityServer4 identity provider, set up Docker and the project structure, and delivered features in an 8-person team",
    techStack: ["ASP.NET Core", "gRPC", "IdentityServer4", "Vue.js", "RabbitMQ", "Kubernetes"],
    accentColor: "accent",
  },
];
