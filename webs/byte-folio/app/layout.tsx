import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/lib/data/site-config";
import { ThemeSwitcher } from "./components/theme-switcher";
import { ClarityInit } from "./components/clarity-init";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    // Name variations
    "Tony Nguyen", "Nhan Nguyen", "Nguyen Khanh Minh Nhan",
    "nkmnhan", "@nkmnhan", "nkmnhan.com", "Tony F. Wilson",
    // Name + role
    "Tony Nguyen developer", "Nhan Nguyen developer",
    "Tony Nguyen software engineer", "Nhan Nguyen software engineer",
    "Tony Nguyen fullstack developer", "Nhan Nguyen fullstack developer",
    "Tony Nguyen .NET developer", "Tony Nguyen React developer",
    // Name + portfolio
    "Tony Nguyen portfolio", "Nhan Nguyen portfolio",
    "nkmnhan portfolio", "nkmnhan github", "nkmnhan developer",
    // Name + location
    "Tony Nguyen Ho Chi Minh City", "Nhan Nguyen Ho Chi Minh City",
    "Tony Nguyen Vietnam developer", "Nhan Nguyen Vietnam developer",
    "Tony Nguyen Singapore developer", "Nhan Nguyen Singapore developer",
    // Name + company
    "Orient Software Tony Nguyen",
    // Role keywords
    "Senior Software Engineer", "Senior Fullstack Developer",
    // Tech keywords
    ".NET Core developer", "React developer", "Angular developer",
    "Next.js", "TypeScript", "microservices", "cloud architecture",
    "AWS", "Azure", "Docker",
    // Location keywords
    "fullstack developer Vietnam", "software engineer Vietnam",
    "fullstack developer Singapore",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: "Tony Nguyen (nkmnhan)",
  publisher: "Tony Nguyen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "nkmnhan — Tony Nguyen Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
          <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
          <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://picsum.photos" />
          <link rel="preconnect" href="https://picsum.photos" crossOrigin="anonymous" />
        </head>
      <body className="min-h-screen bg-bg text-text font-[family-name:var(--font-sans)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteConfig.url}/#person`,
                  name: "Tony Nguyen",
                  alternateName: ["Nhan Nguyen", "nkmnhan", "Tony F. Wilson", "Nguyen Khanh Minh Nhan"],
                  givenName: "Nhan",
                  familyName: "Nguyen",
                  jobTitle: "Senior Fullstack Developer",
                  url: siteConfig.url,
                  email: "nkmnhan@gmail.com",
                  image: `${siteConfig.url}/opengraph-image`,
                  description: siteConfig.description,
                  nationality: { "@type": "Country", name: "Vietnam" },
                  address: { "@type": "PostalAddress", addressCountry: "VN", addressLocality: "Ho Chi Minh City" },
                  sameAs: [
                    "https://github.com/nkmnhan",
                    "https://www.linkedin.com/in/nkmnhan",
                    "https://www.nkmnhan.com",
                    "https://www.facebook.com/nkmnhan",
                    "https://nhannguyensharing.com",
                    "https://www.facebook.com/nhannguyensharingday",
                    "https://www.rmit.edu.vn/profiles/n/nhan-nguyen",
                  ],
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "University of Information Technology",
                    url: "https://www.uit.edu.vn",
                    sameAs: "https://en.wikipedia.org/wiki/University_of_Information_Technology",
                  },
                  hasOccupation: [
                    {
                      "@type": "Occupation",
                      name: "Senior Software Engineer",
                      occupationLocation: { "@type": "Country", name: "Vietnam" },
                      skills: ".NET Core, React, Angular, TypeScript, Microservices, Cloud Architecture",
                    },
                  ],
                  knowsAbout: [
                    ".NET Core", "React", "Next.js", "Angular", "TypeScript",
                    "Microservices", "Docker", "AWS", "Azure", "Kubernetes",
                    "PostgreSQL", "MongoDB", "Elasticsearch",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Orient Software",
                  },
                  knowsLanguage: ["English", "Vietnamese"],
                },
                {
                  "@type": "ProfilePage",
                  "@id": siteConfig.url,
                  name: siteConfig.title,
                  url: siteConfig.url,
                  description: siteConfig.description,
                  mainEntity: { "@id": `${siteConfig.url}/#person` },
                  dateCreated: "2024-01-01T00:00:00Z",
                  dateModified: new Date().toISOString(),
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  name: "nkmnhan — Tony Nguyen Portfolio",
                  alternateName: ["Tony Nguyen portfolio", "Nhan Nguyen developer portfolio", "nkmnhan portfolio"],
                  url: siteConfig.url,
                  description: siteConfig.description,
                  author: { "@id": `${siteConfig.url}/#person` },
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
                        description: "Multi-app portfolio monorepo with 3D graphics and perceptual theming engine",
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
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-bg focus:rounded-md"
        >
          Skip to main content
        </a>
        <ThemeSwitcher />
        {children}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <ClarityInit projectId={process.env.NEXT_PUBLIC_CLARITY_ID} />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
