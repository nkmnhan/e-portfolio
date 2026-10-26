import type { SiteConfig, SocialLink } from "@/lib/types";

// First job started in Q2 2016; years are recomputed on every build
const CAREER_START = new Date(2016, 3, 1);

export function getYearsOfExperience(now = new Date()): number {
  const monthsWorked =
    (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
  return Math.floor(monthsWorked / 12);
}

export const yearsOfExperience = `${getYearsOfExperience()}+`;

export function getSocialLinksFor(section: "hero" | "contact" | "nav"): SocialLink[] {
  return siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes(section)
  );
}

export const siteConfig: SiteConfig = {
  name: "Tony Nguyen",
  title: "nkmnhan | Tony Nguyen | Senior Fullstack Developer | .NET, Angular, React",
  description:
    `nkmnhan: Senior Fullstack Developer with ${yearsOfExperience} years in .NET, Angular, React and cloud microservices. Explore projects, skills and experience by Tony Nguyen (Nhan Nguyen).`,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nkmnhan.com",
  ogImage: "/og-image.png",
  socialLinks: [
    { platform: "github", url: "https://github.com/nkmnhan", label: "GitHub" },
    { platform: "linkedin", url: "https://linkedin.com/in/nkmnhan", label: "LinkedIn" },
    { platform: "facebook", url: "https://facebook.com/nkmnhan", label: "Facebook", showIn: ["contact"] },
    { platform: "email", url: "mailto:nkmnhan@gmail.com", label: "Email" },
  ],
};
