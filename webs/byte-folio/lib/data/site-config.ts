import type { SiteConfig, SocialLink } from "@/lib/types";

export function getSocialLinksFor(section: "hero" | "contact" | "nav"): SocialLink[] {
  return siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes(section)
  );
}

export const siteConfig: SiteConfig = {
  name: "Tony Nguyen",
  title: "Tony Nguyen | Senior Fullstack Developer",
  description:
    "Portfolio of Tony Nguyen — Senior Software Engineer specializing in .NET Core, React, Next.js, and microservices architecture. 8+ years building scalable systems across Singapore, Europe, and Vietnam.",
  url: "https://byte-folio.nkmnhan.com",
  ogImage: "/og-image.png",
  socialLinks: [
    { platform: "github", url: "https://github.com/nkmnhan", label: "GitHub" },
    { platform: "linkedin", url: "https://linkedin.com/in/nkmnhan", label: "LinkedIn" },
    { platform: "facebook", url: "https://facebook.com/nkmnhan", label: "Facebook", showIn: ["contact"] },
    { platform: "email", url: "mailto:nkmnhan@gmail.com", label: "Email" },
  ],
};
