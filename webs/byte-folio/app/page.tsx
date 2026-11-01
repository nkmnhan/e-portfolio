import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Contact } from "@/app/components/contact";
import { NavDots } from "@/app/components/nav-dots";
import { NavMobile } from "@/app/components/nav-mobile";
import { SocialFloat } from "@/app/components/social-float";
import { Footer } from "@/app/components/footer";
import { siteConfig } from "@/lib/data/site-config";

// Home-only structured data. Person and WebSite live in the root layout so project pages can
// reference them by @id; ProfilePage belongs only on the profile (home) page.
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": siteConfig.url,
      name: siteConfig.title,
      url: siteConfig.url,
      description: siteConfig.description,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      dateCreated: "2024-01-01T00:00:00Z",
      dateModified: new Date(siteConfig.contentUpdatedAt).toISOString(),
      inLanguage: "en-US",
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${siteConfig.url}/#navigation`,
      name: "Main Navigation",
      hasPart: [
        { "@type": "SiteNavigationElement", name: "MediTrack", url: `${siteConfig.url}/projects/meditrack` },
        { "@type": "SiteNavigationElement", name: "Aspire.Nexus", url: `${siteConfig.url}/projects/aspire-nexus` },
        { "@type": "SiteNavigationElement", name: "E-Portfolio", url: `${siteConfig.url}/projects/e-portfolio` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Featured Projects by Tony Nguyen",
      description: "Featured open-source projects by Tony Nguyen (Nhan Nguyen)",
      numberOfItems: 3,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: "MediTrack",
            description: "Open-source EMR platform with AI-powered clinical documentation",
            author: { "@id": `${siteConfig.url}/#person` },
            url: `${siteConfig.url}/projects/meditrack`,
            codeRepository: "https://github.com/nkmnhan/meditrack",
            programmingLanguage: ["C#", "TypeScript"],
            runtimePlatform: ".NET 10",
            dateCreated: "2025-01-01T00:00:00Z",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareSourceCode",
            name: "Aspire.Nexus",
            description: "JSON-driven .NET Aspire orchestrator for zero-code service management",
            author: { "@id": `${siteConfig.url}/#person` },
            url: `${siteConfig.url}/projects/aspire-nexus`,
            codeRepository: "https://github.com/nkmnhan/Aspire.Nexus",
            programmingLanguage: ["C#"],
            runtimePlatform: ".NET 10",
            dateCreated: "2025-03-01T00:00:00Z",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareSourceCode",
            name: "E-Portfolio",
            description: "Multi-app portfolio monorepo with 3D graphics and a shared multi-theme system",
            author: { "@id": `${siteConfig.url}/#person` },
            url: `${siteConfig.url}/projects/e-portfolio`,
            codeRepository: "https://github.com/nkmnhan/e-portfolio",
            programmingLanguage: ["TypeScript"],
            runtimePlatform: "Next.js 16",
            dateCreated: "2024-01-01T00:00:00Z",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <NavDots />
        <NavMobile />
        <SocialFloat />
      </main>
      <Footer />
    </>
  );
}
