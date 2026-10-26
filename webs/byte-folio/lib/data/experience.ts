import type { ExperienceEntry } from "@/lib/types";

export const experienceData: ExperienceEntry[] = [
  {
    period: "2020 - Present",
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
    period: "2018 - 2020",
    title: "Software Engineer",
    company: "NASH TECH",
    techStack: ["C#", "ASP.NET Core", "gRPC", "IdentityServer4", "Vue.js", "Angular", "RabbitMQ", "Azure", "Docker", "Kubernetes"],
    achievements: [
      "Lowell (2019-2020): feature developer in an 8-person team (5 developers, 1 frontend developer, 2 testers) building microservices for a European financial services company with ASP.NET Core, gRPC, Vue.js and PostgreSQL on Azure",
      "Worked on the IdentityServer4 identity provider and supported deployments with Docker, Docker Compose and Kubernetes",
      "Open Create (2018-2019): joined The Open University UK project from the resource pool for app upgrades, documentation and project close-out",
      "Dimensions (2018): order management for an apparel company's e-commerce platform, with C# APIs (stored procedures, Dapper, LINQ, SQL Server), a WinForms client and Azure Service Bus",
    ],
    accentColor: "secondary",
  },
  {
    period: "2016 - 2018",
    title: "Software Engineer",
    company: "Hitachi Consulting Vietnam",
    techStack: ["C#", "WPF", "WCF", ".NET Framework", "MySQL", "Groovy", "IBM SiView", "SEMI Standards"],
    achievements: [
      "Semiconductor fab software on IBM SiView and VTAP frameworks for customers in China and Singapore (70-person programme, 3-person sub-team)",
      "ECACS: WPF tool for managing equipment recipes and substrate layouts per SEMI standards, including recipe validation",
      "MCS: equipment-to-host interface that lets host software monitor and control wafer-processing machines (start/stop processing, collect measurement data, select recipes)",
      "MyCIM 4.0: requirement analysis against SEMI standards and data model design for a Material Management client used by fabs in Chengdu, China",
    ],
    accentColor: "muted",
  },
];
