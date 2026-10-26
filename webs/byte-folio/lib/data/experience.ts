import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2019 - Present",
    title: "Senior Software Engineer",
    company: "Orient Software",
    techStack: [".NET 9", "Angular", ".NET Core", "Azure", "AWS", "Docker", "RabbitMQ"],
    achievements: [
      "Building BravoSUITE, an enterprise HR & Talent Management platform with .NET 9 microservices and Angular micro-frontends",
      "Led up to 5 developers on the Search, Course and Learner modules of Singapore's MOE Platform (2020-2025)",
    ],
    accentColor: "primary",
  },
  {
    period: "2018 - 2019",
    title: "Software Engineer",
    company: "NASH TECH",
    techStack: ["C#", ".NET Core", "Angular", "Dapper", "SQL Server", "WinForms", "Azure", "Docker", "Docker Compose", "Microservices"],
    achievements: [
      "Built C# APIs with stored procedures, Dapper and LINQ, plus a WinForms client, for Dimension, a back-office system for a garment manufacturer",
      "Joined Open Create (The Open University, UK) from the resource pool for app upgrades, documentation and project close-out",
      "Developed event-driven microservices for Lowell, a European financial services company",
      "Feature developer in an 8-person team (5 developers, 1 frontend developer, 2 testers)",
      "Supported deployments with Docker and Docker Compose",
    ],
    accentColor: "secondary",
  },
  {
    period: "2016 - 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    techStack: ["C#", "WPF", ".NET Framework", "SEMI Standards"],
    achievements: [
      "Semiconductor equipment software for IBM's fab and a wafer manufacturer in China (70-person programme, 3-person sub-team)",
      "Built features for a WPF desktop app that monitors and controls wafer-processing machines via SEMI-standard equipment communication",
      "Developed recipe validation features to catch invalid process recipes before they reach the machine",
      "Learned semiconductor industry (SEMI) standards from the ground up as a first engineering role",
    ],
    accentColor: "muted",
  },
];
