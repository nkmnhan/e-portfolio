export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "facebook" | "email";
  url: string;
  label: string;
  showIn?: ("hero" | "contact" | "nav")[];
}

export interface HeroData {
  greeting: string;
  name: string;
  title: string;
  specialization: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface GitHubBadge {
  id: string;
  label: string;
  description: string;
  colorVar: string;
}

export interface AboutData {
  avatar: string;
  bio: string[];
  stats: Array<{ value: string; label: string }>;
  education: string;
  availability: string;
  githubBadges: GitHubBadge[];
}

export interface ExperienceEntry {
  period: string;
  title: string;
  company?: string;
  context?: string;
  techStack: string[];
  achievements: string[];
  accentColor: "primary" | "secondary" | "muted";
}

export interface ProjectMeta {
  titleSuffix: string;
  description: string;
  keywords: string[];
  category: string;
  dateCreated: string;
  programmingLanguages: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  highlights?: string[];
  thumbnail?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  docsUrl?: string;
  isFeatured: boolean;
  sortOrder: number;
  meta: ProjectMeta;
}

export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; iconName: string }>;
}

export interface KeyProject {
  id: string;
  name: string;
  client: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  techStack: string[];
  accentColor: "primary" | "secondary" | "accent";
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
}
