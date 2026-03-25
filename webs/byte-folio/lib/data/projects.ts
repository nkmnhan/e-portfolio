import type { Project } from "@/lib/types";

export const projectsData: Project[] = [
  {
    id: "meditrack",
    title: "MediTrack",
    subtitle: "Open-source EMR platform that lets doctors focus on care, not clicks",
    description: "Doctors spend excessive time on documentation instead of patient care. MediTrack solves this with Clara AI — a clinical companion that provides real-time speech-to-text transcription, automatic SOAP note generation, and live medication suggestions during consultations.",
    highlights: [
      "5 microservices: Identity, Patient, Appointment, MedicalRecords, Clara AI",
      "Clara AI achieves 82% average note quality with doctor review",
      "Event-driven architecture with RabbitMQ for async processing",
      "OIDC/OAuth 2.0 auth via Duende IdentityServer",
    ],
    techStack: [".NET 10", "React 19", "PostgreSQL", "RabbitMQ", "MCP", "Docker"],
    githubUrl: "https://github.com/nkmnhan/meditrack",
    liveUrl: "https://meditrack-styleguide.lovable.app/",
    isFeatured: true,
    sortOrder: 1,
    meta: {
      titleSuffix: "Open-source EMR Platform",
      description:
        "MediTrack by Nhan Nguyen — open-source EMR with Clara AI for speech-to-text transcription and SOAP note generation. Built with .NET 10 and React 19.",
      keywords: [
        "MediTrack", "EMR platform", "electronic medical records", "Clara AI",
        "SOAP note generation", "speech-to-text medical", "healthcare software",
        ".NET microservices", "React medical app", "RabbitMQ event-driven",
        "Tony Nguyen MediTrack", "Nhan Nguyen EMR",
      ],
      category: "HealthApplication",
      dateCreated: "2025-01-01",
      programmingLanguages: ["C#", ".NET 10", "TypeScript", "React 19", "SQL"],
    },
  },
  {
    id: "aspire-nexus",
    title: "Aspire.Nexus",
    subtitle: "Orchestrate your entire dev environment from JSON — zero C# changes",
    description: "Standard .NET Aspire AppHosts require hardcoding every service in Program.cs. As projects scale to 10+ APIs, adding or toggling services means code changes and rebuilds. Aspire.Nexus moves all configuration to JSON, enabling zero-code service management with infrastructure persistence.",
    highlights: [
      "Toggle services via JSON — no rebuilds, no code changes",
      "Infrastructure persistence — databases survive Aspire restarts",
      "Supports .NET, Node.js, and custom dev servers",
      "Automatic pre-build, dependency install, and HTTPS setup",
    ],
    techStack: [".NET 10", "Aspire", "Docker", "Node.js"],
    githubUrl: "https://github.com/nkmnhan/Aspire.Nexus",
    docsUrl: "https://learn.microsoft.com/en-us/dotnet/aspire/",
    isFeatured: true,
    sortOrder: 2,
    meta: {
      titleSuffix: "Zero-code .NET Aspire Orchestration",
      description:
        "Aspire.Nexus by Nhan Nguyen — zero-code .NET Aspire orchestration. Toggle microservices via JSON without rebuilds, with infrastructure persistence.",
      keywords: [
        "Aspire.Nexus", ".NET Aspire", "service orchestration", "JSON configuration",
        "zero-code deployment", "microservices management", "infrastructure persistence",
        "developer tools", ".NET 10 Aspire",
        "Tony Nguyen Aspire", "Nhan Nguyen .NET",
      ],
      category: "DeveloperApplication",
      dateCreated: "2025-03-01",
      programmingLanguages: ["C#", ".NET 10", "JSON", "Docker"],
    },
  },
  {
    id: "e-portfolio",
    title: "E-Portfolio",
    subtitle: "Multi-app portfolio monorepo with 3D graphics, theming engine, and shared packages",
    description: "A pnpm monorepo housing three Next.js 16 portfolio apps — each with a distinct visual identity — sharing code through workspace packages for UI components, a perceptual color theme engine, and centralized data. Built to showcase how a single developer can maintain multiple production-grade sites efficiently.",
    highlights: [
      "3 portfolio apps with shared @eportfolio/ui, theme, and data packages",
      "Perceptual color derivation engine — 5 hex values generate 100+ CSS tokens",
      "React Three Fiber starfield with lazy loading and CSS fallback",
      "Playwright E2E tests and Storybook component documentation",
    ],
    techStack: ["Next.js 16", "React 19", "R3F", "Tailwind v4", "pnpm"],
    githubUrl: "https://github.com/nkmnhan/e-portfolio",
    liveUrl: "https://www.nkmnhan.com/",
    isFeatured: true,
    sortOrder: 3,
    meta: {
      titleSuffix: "Next.js 16 Monorepo Portfolio Platform",
      description:
        "E-Portfolio by Nhan Nguyen — pnpm monorepo with multiple Next.js 16 apps, perceptual color engine, React Three Fiber starfield, and shared packages.",
      keywords: [
        "E-Portfolio", "Next.js 16 portfolio", "React 19 portfolio", "pnpm monorepo",
        "perceptual color engine", "React Three Fiber", "Tailwind CSS v4",
        "developer portfolio", "portfolio monorepo",
        "Tony Nguyen portfolio", "Nhan Nguyen portfolio",
      ],
      category: "WebApplication",
      dateCreated: "2024-01-01",
      programmingLanguages: ["TypeScript", "React 19", "Next.js 16", "CSS"],
    },
  },
  {
    id: "vue-identityserver4",
    title: "Vue-IdentityServer4",
    subtitle: "OAuth 2.0 + OpenID Connect demo with Vue.js + .NET",
    description:
      "Implementing secure authentication in single-page applications requires careful integration between the frontend and identity provider. Vue-IdentityServer4 demonstrates a complete OpenID Connect authentication flow using a Vue.js frontend with the oidc-client library, backed by IdentityServer4 as the identity provider.",
    highlights: [
      "OpenID Connect authentication flow with oidc-client library",
      "IdentityServer4 integration as the identity provider backend",
      "Vue.js SPA with hot-reload development workflow",
      "End-to-end token-based authentication reference implementation",
    ],
    techStack: ["Vue", ".NET", "IdentityServer4", "OAuth"],
    githubUrl: "https://github.com/nkmnhan/Vue-Identityserver4",
    isFeatured: false,
    sortOrder: 4,
    meta: {
      titleSuffix: "OAuth 2.0 + OpenID Connect with Vue.js",
      description:
        "Vue-IdentityServer4 by Nhan Nguyen — complete OpenID Connect auth flow with Vue.js and oidc-client, backed by IdentityServer4 as identity provider.",
      keywords: [
        "Vue-IdentityServer4", "OpenID Connect", "OAuth 2.0", "oidc-client",
        "Vue.js authentication", "IdentityServer4", "SPA authentication",
        "token-based auth", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "WebApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["C#", "Vue", "JavaScript"],
    },
  },
  {
    id: "maui-mediatr",
    title: "MAUI.MediatR",
    subtitle: "Clean architecture with .NET MAUI + MediatR CQRS",
    description:
      "Cross-platform mobile applications often suffer from tightly coupled components that become difficult to maintain and test. MAUI.MediatR brings the mediator design pattern to .NET MAUI by integrating MediatR with the built-in DependencyService, enabling clean request/response handling and decoupled architecture in mobile apps.",
    highlights: [
      "Mediator pattern implementation for .NET MAUI applications",
      "Seamless integration with MAUI's DependencyService container",
      "Decoupled request/response handling for cleaner architecture",
      "Simplified command and query separation in mobile apps",
    ],
    techStack: [".NET", "MAUI", "MediatR", "CQRS"],
    githubUrl: "https://github.com/nkmnhan/MAUI.MediatR",
    isFeatured: false,
    sortOrder: 5,
    meta: {
      titleSuffix: "Clean Architecture with .NET MAUI + MediatR",
      description:
        "MAUI.MediatR by Nhan Nguyen — mediator pattern for .NET MAUI with MediatR and DependencyService for clean, decoupled mobile architecture.",
      keywords: [
        "MAUI.MediatR", ".NET MAUI", "MediatR", "CQRS",
        "mediator pattern", "cross-platform mobile", "clean architecture",
        "DependencyService", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2024-01-01",
      programmingLanguages: ["C#", "XAML"],
    },
  },
  {
    id: "elasticsearch-nest",
    title: "Elasticsearch NEST",
    subtitle: "Elasticsearch integration with .NET NEST client",
    description:
      "Integrating full-text search capabilities into .NET applications requires understanding both Elasticsearch concepts and the NEST client library. This project provides a practical implementation of Elasticsearch operations using the NEST high-level .NET client, demonstrating indexing, querying, and search patterns.",
    highlights: [
      "Elasticsearch integration using the NEST high-level .NET client",
      "Full-text search implementation patterns for .NET applications",
      "Practical examples of indexing and query operations",
      "Reference architecture for search-enabled .NET services",
    ],
    techStack: [".NET", "Elasticsearch", "NEST"],
    githubUrl: "https://github.com/nkmnhan/elasticsearch-nest",
    isFeatured: false,
    sortOrder: 6,
    meta: {
      titleSuffix: "Elasticsearch Integration with .NET NEST Client",
      description:
        "Elasticsearch NEST by Nhan Nguyen — practical full-text search implementation using the NEST high-level .NET client with indexing and query patterns.",
      keywords: [
        "Elasticsearch", "NEST client", ".NET Elasticsearch",
        "full-text search", "search integration", "indexing",
        "query operations", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["C#"],
    },
  },
  {
    id: "vuejs-hot-reload-docker",
    title: "Vue.js Hot Reload Docker",
    subtitle: "Vue.js development with Docker hot reload support",
    description:
      "Developing Vue.js applications inside Docker containers typically breaks the hot module replacement workflow, forcing developers to manually rebuild on every change. This project solves that friction by configuring Docker Compose with Chokidar polling to enable seamless hot-reloading inside containers.",
    highlights: [
      "Hot module replacement working seamlessly inside Docker containers",
      "Docker Compose configuration with Chokidar file-watching polling",
      "Vue CLI integration with containerized development workflow",
      "Zero-restart development cycle with automatic change detection",
    ],
    techStack: ["Vue", "Docker"],
    githubUrl: "https://github.com/nkmnhan/vuejs-hot-reload-docker",
    isFeatured: false,
    sortOrder: 7,
    meta: {
      titleSuffix: "Docker Hot Reload for Vue.js Development",
      description:
        "Vue.js Hot Reload Docker by Nhan Nguyen — seamless HMR inside Docker containers using Chokidar polling with Docker Compose for Vue.js development.",
      keywords: [
        "Vue.js Docker", "hot reload Docker", "Docker Compose",
        "Chokidar polling", "HMR Docker", "containerized development",
        "Vue CLI Docker", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["Vue", "JavaScript", "Dockerfile"],
    },
  },
  {
    id: "resource-manager",
    title: "ResourceManager",
    subtitle: "Excel-based XML resource file management for localization",
    description:
      "Managing multilingual XML resource files manually is tedious and error-prone, especially across large projects with dozens of languages. ResourceManager streamlines the localization workflow by enabling teams to manage XML resource strings through Excel spreadsheets, bridging the gap between translators and developers.",
    highlights: [
      "Excel-based management of XML resource files for localization",
      "Streamlined translation workflow between translators and developers",
      "Bulk import/export of multilingual string resources",
      ".NET Core tooling for resource file generation",
    ],
    techStack: [".NET", "Excel", "XML"],
    githubUrl: "https://github.com/nkmnhan/ResourceManager",
    isFeatured: false,
    sortOrder: 8,
    meta: {
      titleSuffix: "Excel-based XML Resource File Management",
      description:
        "ResourceManager by Nhan Nguyen — manage multilingual XML resource files via Excel spreadsheets, streamlining localization for .NET Core projects.",
      keywords: [
        "ResourceManager", "XML resource files", "localization",
        "Excel resource management", "multilingual", ".NET Core",
        "translation workflow", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["C#"],
    },
  },
  {
    id: "e-shop",
    title: "E-Shop",
    subtitle: "Full-featured e-commerce web application",
    description:
      "Building a modern e-commerce platform requires handling product catalogs, user authentication, and order management in a scalable way. E-Shop is a full-featured e-commerce web application providing product browsing, shopping cart, and purchase workflow functionality.",
    highlights: [
      "Full e-commerce web application with product catalog management",
      "JavaScript-based frontend for responsive shopping experience",
      "Product browsing and purchase workflow implementation",
      "Practical reference for building online retail platforms",
    ],
    techStack: ["JavaScript", "E-commerce"],
    githubUrl: "https://github.com/nkmnhan/E-Shop",
    isFeatured: false,
    sortOrder: 9,
    meta: {
      titleSuffix: "Full-featured E-commerce Web Application",
      description:
        "E-Shop by Nhan Nguyen — full-featured e-commerce web app with product catalog, shopping cart, and purchase workflows for online retail platforms.",
      keywords: [
        "E-Shop", "e-commerce", "online store",
        "product catalog", "shopping cart", "web application",
        "JavaScript e-commerce", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "WebApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["JavaScript"],
    },
  },
  {
    id: "sql-converter",
    title: "SQLConverter",
    subtitle: "Automated data-to-SQL script conversion utility",
    description:
      "Manually writing SQL INSERT statements for large datasets is repetitive and error-prone, consuming valuable developer time during data migrations and seeding. SQLConverter automates this process by converting structured data into ready-to-execute SQL scripts, eliminating manual script writing.",
    highlights: [
      "Automated conversion of structured data to SQL scripts",
      "Eliminates manual SQL INSERT statement writing",
      "Reduces syntax errors in data migration and seeding workflows",
      ".NET-based CLI tool for batch SQL script generation",
    ],
    techStack: [".NET", "SQL"],
    githubUrl: "https://github.com/nkmnhan/SQLConverter",
    isFeatured: false,
    sortOrder: 10,
    meta: {
      titleSuffix: "Automated Data-to-SQL Script Conversion",
      description:
        "SQLConverter by Nhan Nguyen — automate structured data to SQL script conversion, eliminating manual INSERT statements for data migration and seeding.",
      keywords: [
        "SQLConverter", "SQL script generation", "data migration",
        "INSERT statement generator", "database seeding", ".NET CLI tool",
        "SQL automation", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2022-01-01",
      programmingLanguages: ["C#"],
    },
  },
  {
    id: "push-notification",
    title: "Push Notification",
    subtitle: "Firebase Cloud Messaging push notification service",
    description:
      "Implementing real-time push notifications across platforms requires navigating Firebase's Cloud Messaging APIs and device token management. This project provides a working example of Firebase push notifications, demonstrating the complete flow from server-side message dispatch to client-side notification handling.",
    highlights: [
      "Firebase Cloud Messaging (FCM) integration example",
      "End-to-end push notification flow demonstration",
      "Server-side message dispatch implementation",
      "Client-side notification registration and handling",
    ],
    techStack: [".NET", "Firebase"],
    githubUrl: "https://github.com/nkmnhan/push-notification",
    isFeatured: false,
    sortOrder: 11,
    meta: {
      titleSuffix: "Firebase Cloud Messaging Push Notification Service",
      description:
        "Push Notification by Nhan Nguyen — Firebase Cloud Messaging example with end-to-end flow from server-side dispatch to client-side notification handling.",
      keywords: [
        "push notification", "Firebase Cloud Messaging", "FCM",
        "real-time notifications", "server-side dispatch",
        "notification handling", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2024-01-01",
      programmingLanguages: ["C#", "JavaScript"],
    },
  },
  {
    id: "hybrid-webview",
    title: "HybridWebView",
    subtitle: "Hybrid web/native rendering with bidirectional interop",
    description:
      "Embedding web content within native mobile applications while maintaining bidirectional communication between native and web layers presents significant architectural challenges. HybridWebView provides a .NET implementation for rendering web content inside native applications with seamless JavaScript-to-native interop.",
    highlights: [
      "Hybrid web/native rendering within .NET applications",
      "Bidirectional JavaScript and native code communication",
      "WebView integration for embedding web content in native shells",
      "Bridge between web technologies and native platform APIs",
    ],
    techStack: [".NET", "MAUI", "WebView"],
    githubUrl: "https://github.com/nkmnhan/HybridWebView",
    isFeatured: false,
    sortOrder: 12,
    meta: {
      titleSuffix: "Hybrid Web/Native Rendering with .NET",
      description:
        "HybridWebView by Nhan Nguyen — render web content in native .NET apps with bidirectional JavaScript-to-native interop for cross-platform development.",
      keywords: [
        "HybridWebView", "hybrid app", "WebView",
        ".NET MAUI WebView", "JavaScript interop", "native web bridge",
        "cross-platform", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "SoftwareApplication",
      dateCreated: "2022-01-01",
      programmingLanguages: ["C#", "JavaScript", "HTML"],
    },
  },
  {
    id: "calendar-demo",
    title: "Calendar Demo",
    subtitle: "Interactive calendar component built with Angular",
    description:
      "Building interactive calendar interfaces with event management requires handling complex date logic, drag-and-drop interactions, and responsive layouts. Calendar Demo is an Angular application showcasing a fully functional calendar component with event scheduling capabilities.",
    highlights: [
      "Interactive calendar component built with Angular",
      "Event scheduling and date management functionality",
      "TypeScript-based architecture with Angular CLI tooling",
      "Unit testing with Karma and end-to-end testing with Protractor",
    ],
    techStack: ["Angular", "TypeScript"],
    githubUrl: "https://github.com/nkmnhan/calendar-demo",
    isFeatured: false,
    sortOrder: 13,
    meta: {
      titleSuffix: "Interactive Calendar Component with Angular",
      description:
        "Calendar Demo by Nhan Nguyen — interactive Angular calendar component with event scheduling, built with Angular CLI and TypeScript.",
      keywords: [
        "Calendar Demo", "Angular calendar", "event scheduling",
        "interactive calendar", "Angular component", "TypeScript",
        "date management", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "WebApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["TypeScript", "Angular", "HTML", "CSS"],
    },
  },
  {
    id: "identityserver4-study",
    title: "IdentityServer4.Study",
    subtitle: "Complete reference token authentication system with three integrated components",
    description:
      "Understanding OAuth 2.0 and OpenID Connect in practice requires seeing how identity servers, client applications, and protected APIs interact end-to-end. IdentityServer4.Study implements a complete reference token authentication system with an IdentityServer4 instance backed by SQL Server, an MVC client, and a protected API.",
    highlights: [
      "Three-component architecture: Identity Server, MVC Client, and protected API",
      "Reference token authentication with SQL Server persistence",
      "Token introspection via back-channel validation between API and IdentityServer",
      "Includes IdentityServer4 v3.1.2 source for debugging and learning",
    ],
    techStack: [".NET", "IdentityServer4", "SQL Server"],
    githubUrl: "https://github.com/nkmnhan/IdentityServer4.Study",
    isFeatured: false,
    sortOrder: 14,
    meta: {
      titleSuffix: "Complete Reference Token Authentication System",
      description:
        "IdentityServer4.Study by Nhan Nguyen — complete reference token auth with IdentityServer4, SQL Server, MVC client, and protected API integration.",
      keywords: [
        "IdentityServer4", "reference token authentication", "OAuth 2.0",
        "OpenID Connect", "SQL Server", "MVC client",
        "token introspection", "Tony Nguyen", "Nhan Nguyen",
      ],
      category: "DeveloperApplication",
      dateCreated: "2020-01-01",
      programmingLanguages: ["C#", "ASP.NET Core"],
    },
  },
];
