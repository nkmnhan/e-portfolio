import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2020 - Present",
    title: "Senior Software Engineer",
    company: "Orient Software",
    techStack: [".NET 9", "Angular", ".NET Core", "Azure", "AWS", "Docker", "RabbitMQ"],
    achievements: [
      "BravoSUITE (2026-present): Talent Acquisition features on an enterprise HR platform with .NET 9 microservices and Angular micro-frontends",
      "MOE Platform (2020-2025): led up to 5 developers on the Search, Course and Learner modules of a 100+ person national programme, then 3 years of maintenance with a team of 8",
    ],
    accentColor: "primary",
  },
  {
    period: "2018 - 2020",
    title: "Software Engineer",
    company: "NASH TECH",
    techStack: ["C#", "ASP.NET Core", "gRPC", "IdentityServer4", "Vue.js", "Angular", "RabbitMQ", "Azure", "Docker", "Kubernetes"],
    achievements: [
      "Lowell (2019-2020): built the IdentityServer4 identity provider and the Docker-based project setup for a European financial services microservices system, in an 8-person team",
      "Open Create (2018-2019): upgrades and hand-over documentation for The Open University's learning platform",
      "Dimensions (2018): order APIs (C#, Dapper, SQL Server) and a WinForms client for an apparel e-commerce platform",
    ],
    accentColor: "secondary",
  },
  {
    period: "2016 - 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    techStack: ["C#", "WPF", "WCF", ".NET Framework", "MySQL", "Groovy", "IBM SiView", "SEMI Standards"],
    achievements: [
      "Fab software on IBM SiView and VTAP for semiconductor customers in China and Singapore (3-person sub-team in a 70-person programme)",
      "ECACS: WPF tool for equipment recipes and substrate layouts per SEMI standards, including recipe validation",
      "MCS: equipment-to-host interface for monitoring and controlling wafer-processing machines",
      "MyCIM 4.0: SEMI requirement analysis and data model design for a Material Management client",
    ],
    accentColor: "muted",
  },
];
