type ProjectType =
  | "enterprise"
  | "personal"
  | "education"
  | "tools"
  | "ecommerce";
type TechStack =
  | "dotnet"
  | "vue"
  | "react"
  | "docker"
  | "identityserver"
  | "elasticsearch"
  | "maui"
  | "firebase";

export interface ProjectInfo {
  id: string;
  type: ProjectType;
  title: string;
  poster: string;
  description: string;
  technologies: TechStack[];
  githubUrl?: string;
  stars?: number;
  createddate?: string;
  updateddate?: string;
  isPublic: boolean;
  featured?: boolean;
}

// Real GitHub Projects
const GITHUB_PROJECTS: ProjectInfo[] = [
  {
    id: "e-portfolio",
    type: "personal",
    title: "E-Portfolio",
    description:
      "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features interactive UI components, responsive design, and optimized performance.",
    technologies: ["react"],
    githubUrl: "https://github.com/nkmnhan/e-portfolio",
    poster: "/work/portfolio.svg",
    createddate: "2025-12-11",
    updateddate: "2025-12-11",
    isPublic: true,
    featured: true,
  },
  {
    id: "maui-mediatr",
    type: "personal",
    title: "MAUI.MediatR",
    description:
      ".NET MAUI application demonstrating MediatR pattern for clean architecture. Implements CQRS pattern for better code organization and maintainability.",
    technologies: ["dotnet", "maui"],
    githubUrl: "https://github.com/nkmnhan/MAUI.MediatR",
    poster: "/work/maui.svg",
    updateddate: "2024-10-16",
    isPublic: true,
    featured: true,
  },
  {
    id: "vue-identityserver4",
    type: "enterprise",
    title: "Vue.js with IdentityServer4",
    description:
      "Authentication demo using Vue.js with oidc-client library and IdentityServer4 as identity provider. Demonstrates secure OAuth 2.0 and OpenID Connect flows.",
    technologies: ["vue", "identityserver", "dotnet"],
    githubUrl: "https://github.com/nkmnhan/Vue-Identityserver4",
    stars: 2,
    poster: "/work/identity.svg",
    updateddate: "2022-12-13",
    isPublic: true,
    featured: true,
  },
  {
    id: "push-notification",
    type: "personal",
    title: "Firebase Push Notifications",
    description:
      "Complete implementation of Firebase Cloud Messaging for push notifications. Demonstrates real-time messaging capabilities across platforms.",
    technologies: ["firebase"],
    githubUrl: "https://github.com/nkmnhan/push-notification",
    poster: "/work/firebase.svg",
    updateddate: "2024-06-02",
    isPublic: true,
  },
  {
    id: "sql-converter",
    type: "tools",
    title: "SQL Converter",
    description:
      "Utility tool to convert data structures into SQL scripts. Streamlines database migration and data seeding processes.",
    technologies: ["dotnet"],
    githubUrl: "https://github.com/nkmnhan/SQLConverter",
    poster: "/work/sql.svg",
    updateddate: "2023-05-29",
    isPublic: true,
  },
  {
    id: "e-shop",
    type: "ecommerce",
    title: "E-Shop Platform",
    description:
      "Full-featured e-commerce platform with product management, shopping cart, and checkout functionality. Built with modern JavaScript frameworks.",
    technologies: ["react"],
    githubUrl: "https://github.com/nkmnhan/E-Shop",
    poster: "/work/eshop.svg",
    updateddate: "2022-12-08",
    isPublic: true,
    featured: true,
  },
  {
    id: "identityserver4-study",
    type: "enterprise",
    title: "IdentityServer4 Study",
    description:
      "Comprehensive sample project demonstrating IdentityServer4 implementation. Covers authentication, authorization, and security best practices.",
    technologies: ["dotnet", "identityserver"],
    githubUrl: "https://github.com/nkmnhan/IdentityServer4.Study",
    poster: "/work/identity2.svg",
    updateddate: "2022-12-08",
    isPublic: true,
  },
  {
    id: "elasticsearch-nest",
    type: "enterprise",
    title: "Elasticsearch NEST",
    description:
      "Elasticsearch integration using NEST client for .NET. Demonstrates full-text search, aggregations, and advanced query patterns.",
    technologies: ["dotnet", "elasticsearch"],
    githubUrl: "https://github.com/nkmnhan/elasticsearch-nest",
    stars: 1,
    poster: "/work/elastic.svg",
    updateddate: "2021-08-21",
    isPublic: true,
    featured: true,
  },
  {
    id: "vuejs-hot-reload-docker",
    type: "tools",
    title: "Vue.js Hot Reload in Docker",
    description:
      "Development setup enabling hot module reloading for Vue.js applications running in Docker containers. Improves developer experience.",
    technologies: ["vue", "docker"],
    githubUrl: "https://github.com/nkmnhan/vuejs-hot-reload-docker",
    stars: 1,
    poster: "/work/docker.svg",
    updateddate: "2020-07-27",
    isPublic: true,
  },
  {
    id: "resource-manager",
    type: "tools",
    title: "Resource Manager",
    description:
      "Excel-based tool for managing XML resource files. Simplifies localization and resource management in .NET applications.",
    technologies: ["dotnet"],
    githubUrl: "https://github.com/nkmnhan/ResourceManager",
    stars: 1,
    poster: "/work/resource.svg",
    updateddate: "2020-03-30",
    isPublic: true,
  },
  {
    id: "calendar-demo",
    type: "personal",
    title: "Calendar Component",
    description:
      "Interactive calendar component built with TypeScript. Features event management, date selection, and customizable views.",
    technologies: ["react"],
    githubUrl: "https://github.com/nkmnhan/calendar-demo",
    poster: "/work/calendar.svg",
    updateddate: "2020-10-09",
    isPublic: true,
  },
  {
    id: "hybrid-webview",
    type: "personal",
    title: "Hybrid WebView",
    description:
      "Cross-platform hybrid app using WebView with native integration. Bridges web technologies with native capabilities.",
    technologies: ["dotnet"],
    githubUrl: "https://github.com/nkmnhan/HybridWebView",
    poster: "/work/hybrid.svg",
    updateddate: "2022-02-24",
    isPublic: true,
  },
];

export default GITHUB_PROJECTS;
