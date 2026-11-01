import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteConfig } from "@/lib/data/site-config";
import { ThemeSwitcher } from "@eportfolio/theme";
import { ClarityInit } from "./components/clarity-init";
import { HeroBackground } from "./components/hero-background";
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
    "Tony Nguyen", "Nhan Nguyen", "Nguyen Khoa Minh Nhan", "Nguyễn Khoa Minh Nhân", "nkmnhan",
    "Senior Fullstack Developer", "Senior Software Engineer",
    ".NET developer", "Angular developer", "React developer",
    "microservices", "Azure", "AWS",
    "software engineer Vietnam", "remote fullstack developer",
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
    siteName: "nkmnhan | Tony Nguyen Portfolio",
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
      data-theme="space-cosmic"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      // theme-init.js sets data-theme before hydration
      suppressHydrationWarning
    >
      <head>
          {/* Must block render so the saved theme applies before first paint */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="/theme-init.js" />
          <link rel="dns-prefetch" href="https://avatars.githubusercontent.com" />
          <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        </head>
      <body className="min-h-screen bg-bg text-text font-[family-name:var(--font-sans)] antialiased">
        {/* Fixed starfield behind every page */}
        <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <HeroBackground />
        </div>
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
                  alternateName: ["Nhan Nguyen", "nkmnhan", "Tony F. Wilson", "Nguyen Khoa Minh Nhan", "Nguyễn Khoa Minh Nhân"],
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
                    "https://www.facebook.com/nkmnhan",
                    "https://nhannguyensharing.com",
                    "https://www.facebook.com/nhannguyensharingday",
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
                      skills: ".NET, Angular, React, TypeScript, Microservices, Azure, AWS",
                    },
                  ],
                  knowsAbout: [
                    ".NET Core", "React", "Next.js", "Angular", "TypeScript",
                    "Microservices", "Docker", "AWS", "Azure",
                    "PostgreSQL", "MongoDB", "Elasticsearch",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Orient Software",
                  },
                  knowsLanguage: ["English", "Vietnamese"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  name: "nkmnhan | Tony Nguyen Portfolio",
                  alternateName: ["Tony Nguyen portfolio", "Nhan Nguyen developer portfolio", "nkmnhan portfolio"],
                  url: siteConfig.url,
                  description: siteConfig.description,
                  author: { "@id": `${siteConfig.url}/#person` },
                  inLanguage: "en-US",
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
        <ThemeSwitcher className="bottom-1 md:bottom-4" />
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
