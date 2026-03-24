import { siteConfig } from "@/lib/seo";

// Person Schema for portfolio owner
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tony Nguyen",
  alternateName: "Nhan Nguyen",
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.jpg`,
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Orient Software",
  },
  sameAs: ["https://github.com/nkmnhan", "https://linkedin.com/in/nkmnhan"],
  knowsAbout: [
    ".NET Core",
    "React",
    "TypeScript",
    "Microservices",
    "Cloud Architecture",
    "AWS",
    "Azure",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Information Technology",
  },
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: "Tony Nguyen",
  },
};

// SiteNavigationElement — helps Google build sitelinks tree
const navigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "About",
      url: `${siteConfig.url}/#hero`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Skills",
      url: `${siteConfig.url}/#skills`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Projects",
      url: `${siteConfig.url}/#projects`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Experience",
      url: `${siteConfig.url}/#experience`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Contact",
      url: `${siteConfig.url}/contact`,
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(navigationSchema),
        }}
      />
    </>
  );
}
