import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2020 - Present",
    title: "Senior Software Engineer",
    company: "Orient Software",
    accentColor: "primary",
    projects: [
      {
        name: "BravoSUITE",
        period: "2026 - Present",
        client: "Enterprise HR & Talent Management SaaS",
        summary:
          "Five integrated apps (bravoTALENTS, bravoGROWTH, bravoSURVEYS, bravoINSIGHTS and Accounts) covering the employee lifecycle from hiring to performance evaluation.",
        impact: "Building Talent Acquisition features across the micro-frontend architecture",
        techStack: [".NET 9", "Angular", "Microservices", "Micro-Frontends"],
      },
      {
        name: "MOE Platform",
        period: "2020 - 2025",
        client: "Ministry of Education, Singapore",
        role: "Module Lead",
        summary:
          "National digital learning platform built by a 100+ person team across multiple modules at its peak, with cross-platform mobile apps, cloud infrastructure and end-to-end test automation.",
        impact:
          "Led up to 5 developers on the Search, Course and Learner modules, then kept the platform running for 3 years with a lean team of 8 (1 PM, 4 developers, 1 tester, 1 service desk, 1 DBA)",
        techStack: ["ASP.NET Core", "Angular", ".NET MAUI", "AWS", "Playwright"],
      },
    ],
  },
  {
    period: "2018 - 2020",
    title: "Software Engineer",
    company: "NASH TECH",
    accentColor: "secondary",
    projects: [
      {
        name: "Lowell Client Portal",
        period: "2019 - 2020",
        client: "Lowell, European debt collection",
        summary:
          "Client portal on a microservices system: .NET Core services talking over gRPC, a Vue.js frontend, PostgreSQL, RabbitMQ and Azure Service Bus, on Kubernetes in Azure.",
        impact:
          "Built the IdentityServer4 identity provider, set up Docker and the project structure, and delivered features in an 8-person team",
        techStack: ["ASP.NET Core", "gRPC", "IdentityServer4", "Vue.js", "RabbitMQ", "Kubernetes"],
      },
      {
        name: "Open Create",
        period: "2018 - 2019",
        client: "The Open University, UK",
        summary:
          "Joined from the resource pool for the final phase of the university's interactive learning platform: app upgrades, hand-over documentation and project close-out.",
        techStack: ["C#", "Angular"],
      },
      {
        name: "Dimensions",
        period: "2018",
        client: "Apparel e-commerce",
        summary:
          "Order management APIs with stored procedures, Dapper and LINQ on SQL Server, plus a WinForms client.",
        techStack: ["C#", "Dapper", "SQL Server", "WinForms", "Azure Service Bus"],
      },
    ],
  },
  {
    period: "2016 - 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    summary:
      "Semiconductor fab software on IBM SiView and VTAP for customers in China and Singapore, in a 3-person sub-team of a 70-person programme.",
    accentColor: "muted",
    projects: [
      {
        name: "MCS",
        period: "2017 - 2018",
        summary: "Equipment-to-host interface for monitoring and controlling wafer-processing machines.",
        techStack: ["C#", "WPF", "WCF", "Groovy"],
      },
      {
        name: "MyCIM 4.0",
        period: "2017",
        summary:
          "SEMI requirement analysis and data model design for a Material Management client used by fabs in Chengdu, China.",
      },
      {
        name: "ECACS",
        period: "2016 - 2017",
        summary:
          "WPF tool for equipment recipes and substrate layouts per SEMI standards, including recipe validation.",
        techStack: ["C#", "WPF", "MySQL"],
      },
    ],
  },
];
