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

export interface AboutData {
  avatar: string;
  bio: string[];
  stats: Array<{ value: string; label: string }>;
  education: string;
  availability: string;
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

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  thumbnail?: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  docsUrl?: string;
  isFeatured: boolean;
  sortOrder: number;
}

export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; iconName: string }>;
}

export interface ContactData {
  heading: string;
  description: string;
  email: string;
}
