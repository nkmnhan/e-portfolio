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
    </>
  );
}
