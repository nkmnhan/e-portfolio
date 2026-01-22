// ============================================
// BYTE-FOLIO DATA TYPES & REAL DATA
// Based on portfolio-nextjs project
// ============================================

export type SkillCategory =
  | "backend"
  | "frontend"
  | "mobile"
  | "database"
  | "cloud"
  | "devops"
  | "testing"
  | "api";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type ProjectType =
  | "enterprise"
  | "personal"
  | "education"
  | "tools"
  | "ecommerce";

export type TechStack =
  | "dotnet"
  | "vue"
  | "react"
  | "docker"
  | "identityserver"
  | "elasticsearch"
  | "maui"
  | "firebase"
  | "nextjs"
  | "typescript"
  | "angular"
  | "nodejs";

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  technologies: TechStack[];
  githubUrl?: string;
  stars?: number;
  featured?: boolean;
}

export interface Experience {
  id: string;
  period: string;
  company: string;
  role: string;
  description: string;
}

export type SocialPlatform = "github" | "linkedin" | "twitter" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface PortfolioData {
  name: string;
  fullName: string;
  greeting: string;
  subtitle: string;
  title: string;
  experience: string;
  bio: string;
}

export interface KeyHighlight {
  icon: string;
  title: string;
  lines: string[];
}

export interface SummaryStat {
  value: string;
  label: string;
}

// ============================================
// REAL DATA - Tony Nguyen Portfolio
// ============================================

export const portfolioData: PortfolioData = {
  name: "Tony",
  fullName: "Tony Nguyen",
  greeting: "HELLO FELLOW GALAXY MEMBER",
  subtitle: "A MESSAGE FROM EARTH",
  title: "Software Engineer",
  experience: "8+ Years Experience",
  bio: "Hi, I'm Tony Nguyen (Nhan), a Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams.",
};

export const summaryStats: SummaryStat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "10+", label: "Major Projects" },
  { value: "20+", label: "Technologies" },
  { value: "3", label: "Countries Served" },
];

export const keyHighlights: KeyHighlight[] = [
  {
    icon: "graduation-cap",
    title: "Education",
    lines: [
      "Bachelor of Information Technology",
      "University of Information Technology",
    ],
  },
  {
    icon: "briefcase",
    title: "Current Role",
    lines: ["Senior Software Engineer", "Orient Software (2019 - Present)"],
  },
  {
    icon: "trophy",
    title: "Specializations",
    lines: ["Microservices Architecture", "Cloud-Native Development"],
  },
  {
    icon: "globe",
    title: "Global Impact",
    lines: [
      "Singapore, Europe, Vietnam",
      "Education, E-commerce, Manufacturing",
    ],
  },
];

export const skills: Skill[] = [
  // Backend
  { name: "C#", category: "backend" },
  { name: ".NET Core", category: "backend" },
  { name: "ASP.NET Core", category: "backend" },
  { name: "Entity Framework", category: "backend" },

  // Frontend
  { name: "React", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },

  // Mobile
  { name: ".NET MAUI", category: "mobile" },

  // Database
  { name: "PostgreSQL", category: "database" },
  { name: "SQL Server", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Elasticsearch", category: "database" },

  // Cloud
  { name: "AWS", category: "cloud" },
  { name: "Azure", category: "cloud" },
  { name: "Lambda", category: "cloud" },
  { name: "DynamoDB", category: "cloud" },

  // DevOps
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "GoCD", category: "devops" },
  { name: "GitHub Actions", category: "devops" },

  // Testing
  { name: "Playwright", category: "testing" },
  { name: "xUnit", category: "testing" },

  // API
  { name: "REST", category: "api" },
  { name: "gRPC", category: "api" },
  { name: "SignalR", category: "api" },
  { name: "RabbitMQ", category: "api" },
];

export const projects: Project[] = [
  {
    id: "e-portfolio",
    type: "personal",
    title: "PROJECT 1",
    subtitle: "E-PORTFOLIO",
    description:
      "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features interactive UI components, responsive design, and optimized performance.",
    technologies: ["react", "nextjs", "typescript"],
    githubUrl: "https://github.com/nkmnhan/e-portfolio",
    thumbnail: "/work/portfolio.svg",
    featured: true,
  },
  {
    id: "maui-mediatr",
    type: "personal",
    title: "PROJECT 2",
    subtitle: "MAUI.MEDIATR",
    description:
      ".NET MAUI application demonstrating MediatR pattern for clean architecture. Implements CQRS pattern for better code organization and maintainability.",
    technologies: ["dotnet", "maui"],
    githubUrl: "https://github.com/nkmnhan/MAUI.MediatR",
    thumbnail: "/work/maui.svg",
    featured: true,
  },
  {
    id: "vue-identityserver4",
    type: "enterprise",
    title: "PROJECT 3",
    subtitle: "VUE + IDENTITYSERVER4",
    description:
      "Authentication demo using Vue.js with oidc-client library and IdentityServer4 as identity provider. Demonstrates secure OAuth 2.0 and OpenID Connect flows.",
    technologies: ["vue", "identityserver", "dotnet"],
    githubUrl: "https://github.com/nkmnhan/Vue-Identityserver4",
    stars: 2,
    thumbnail: "/work/identity.svg",
    featured: true,
  },
  {
    id: "e-shop",
    type: "ecommerce",
    title: "PROJECT 4",
    subtitle: "E-SHOP PLATFORM",
    description:
      "Full-featured e-commerce platform with product management, shopping cart, and checkout functionality. Built with modern JavaScript frameworks.",
    technologies: ["react"],
    githubUrl: "https://github.com/nkmnhan/E-Shop",
    thumbnail: "/work/eshop.svg",
    featured: true,
  },
  {
    id: "elasticsearch-nest",
    type: "enterprise",
    title: "PROJECT 5",
    subtitle: "ELASTICSEARCH NEST",
    description:
      "Elasticsearch integration using NEST client for .NET. Demonstrates full-text search, aggregations, and advanced query patterns.",
    technologies: ["dotnet", "elasticsearch"],
    githubUrl: "https://github.com/nkmnhan/elasticsearch-nest",
    stars: 1,
    thumbnail: "/work/elastic.svg",
    featured: true,
  },
  {
    id: "push-notification",
    type: "personal",
    title: "PROJECT 6",
    subtitle: "FIREBASE PUSH",
    description:
      "Complete implementation of Firebase Cloud Messaging for push notifications. Demonstrates real-time messaging capabilities across platforms.",
    technologies: ["firebase"],
    githubUrl: "https://github.com/nkmnhan/push-notification",
    thumbnail: "/work/firebase.svg",
  },
  {
    id: "sql-converter",
    type: "tools",
    title: "PROJECT 7",
    subtitle: "SQL CONVERTER",
    description:
      "Utility tool to convert data structures into SQL scripts. Streamlines database migration and data seeding processes.",
    technologies: ["dotnet"],
    githubUrl: "https://github.com/nkmnhan/SQLConverter",
    thumbnail: "/work/sql.svg",
  },
  {
    id: "vuejs-hot-reload-docker",
    type: "tools",
    title: "PROJECT 8",
    subtitle: "VUE HOT RELOAD DOCKER",
    description:
      "Development setup enabling hot module reloading for Vue.js applications running in Docker containers. Improves developer experience.",
    technologies: ["vue", "docker"],
    githubUrl: "https://github.com/nkmnhan/vuejs-hot-reload-docker",
    stars: 1,
    thumbnail: "/work/docker.svg",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "2024 - Present",
    company: "Full-Stack Development",
    role: "Full-Stack Developer",
    description:
      "Building innovative digital learning platforms and mobile applications using .NET MAUI, Angular, and AWS. Leading end-to-end development from design to deployment.",
  },
  {
    id: "exp-2",
    period: "2018 - 2024",
    company: "NASH TECH / Orient Software",
    role: "Senior Software Engineer",
    description:
      "Led microservices development for European and Singaporean clients. Architected Lowell microservices system on Azure. Contributed to MOE platform for Singapore's Ministry of Education.",
  },
  {
    id: "exp-3",
    period: "2016 - 2018",
    company: "Hitachi Consulting Vietnam",
    role: "Software Engineer",
    description:
      "Worked on semiconductor manufacturing systems and enterprise solutions. Built MES systems for semiconductor factories using IBM frameworks.",
  },
];

export const majorProjects = [
  {
    name: "MOE Platform",
    client: "Ministry of Education Singapore",
    technologies: ".NET MAUI, AWS Lambda, Playwright",
  },
  {
    name: "Lowell Microservices",
    client: "European Clients",
    technologies: "Azure, .NET Core, Event-Driven Architecture",
  },
  {
    name: "Open Create",
    client: "UK Open University",
    technologies: "Dynamic Learning Platform, Angular, Node.js",
  },
  {
    name: "MES Systems",
    client: "Semiconductor Manufacturing",
    technologies: "IBM Frameworks, Real-time Monitoring",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/nkmnhan",
    label: "GitHub",
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/nkmnhan",
    label: "LinkedIn",
  },
  {
    platform: "email",
    url: "mailto:nkmnhan@gmail.com",
    label: "Email",
  },
];
