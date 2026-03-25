import type { SiteConfig, SocialLink } from "@/lib/types";

export function getSocialLinksFor(section: "hero" | "contact" | "nav"): SocialLink[] {
  return siteConfig.socialLinks.filter(
    (link) => !link.showIn || link.showIn.includes(section)
  );
}

export const siteConfig: SiteConfig = {
  name: "Tony Nguyen",
  title: "Tony Nguyen (Nhan Nguyen) — Senior Fullstack Developer | .NET, React, Cloud",
  description:
    "Tony Nguyen (Nhan Nguyen) — Senior Fullstack Developer portfolio. 9+ years building scalable .NET Core, React, Angular & cloud-native systems across Singapore, Europe, and Vietnam. View projects, skills & experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nkmnhan.com",
  ogImage: "/og-image.png",
  socialLinks: [
    { platform: "github", url: "https://github.com/nkmnhan", label: "GitHub" },
    { platform: "linkedin", url: "https://linkedin.com/in/nkmnhan", label: "LinkedIn" },
    { platform: "facebook", url: "https://facebook.com/nkmnhan", label: "Facebook", showIn: ["contact"] },
    { platform: "email", url: "mailto:nkmnhan@gmail.com", label: "Email" },
  ],
};
