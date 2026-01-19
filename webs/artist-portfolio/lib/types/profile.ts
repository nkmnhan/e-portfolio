// Profile Types - Single Artist Personal Portfolio

export type Specialization = "3d-artist" | "animation-artist" | "concept-artist";

export type SkillCategory = "3d" | "animation" | "concept" | "engine" | "general";

export type SkillLevel = "expert" | "advanced" | "intermediate";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Award {
  title: string;
  category: string;
  year: string;
}

export interface SocialLinks {
  artstation?: string;
  linkedin?: string;
  instagram?: string;
  vimeo?: string;
  youtube?: string;
  github?: string;
  twitter?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  avatar: string;
  coverImage: string;
  bio: string;
  shortBio: string;
  specializations: Specialization[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  socialLinks: SocialLinks;
  availableForWork: boolean;
}
