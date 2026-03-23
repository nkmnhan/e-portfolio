import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/data/site-config";
import { ThemeSwitcher } from "./components/theme-switcher";
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
    "Tony Nguyen", "Nhan Nguyen", "nkmnhan", "@nkmnhan", "Tony F. Wilson",
    "nkmnhan github", "nkmnhan developer", "nkmnhan portfolio",
    "Nhan developer", "Nhan fullstack developer", "Tony developer", "Tony fullstack developer",
    "Senior Software Engineer", "Senior Fullstack Developer",
    ".NET Core", "React", "Next.js", "Angular", "TypeScript",
    "microservices", "cloud architecture", "AWS", "Azure", "Docker",
    "fullstack developer Vietnam", "software engineer portfolio",
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
    siteName: "Tony Nguyen Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Tony Nguyen — Senior Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
      <body className="min-h-screen bg-bg text-text font-[family-name:var(--font-sans)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Tony Nguyen",
                  alternateName: ["Nhan Nguyen", "nkmnhan", "Tony F. Wilson"],
                  jobTitle: "Senior Fullstack Developer",
                  url: siteConfig.url,
                  email: "nkmnhan@gmail.com",
                  image: `${siteConfig.url}${siteConfig.ogImage}`,
                  description: siteConfig.description,
                  sameAs: [
                    "https://github.com/nkmnhan",
                    "https://linkedin.com/in/nkmnhan",
                    "https://www.nkmnhan.com",
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
                },
                {
                  "@type": "WebSite",
                  name: "Tony Nguyen Portfolio",
                  alternateName: "nkmnhan portfolio",
                  url: siteConfig.url,
                  description: siteConfig.description,
                  author: { "@type": "Person", name: "Tony Nguyen" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteConfig.url}#projects`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SiteNavigationElement",
                  name: ["About", "Experience", "Key Projects", "Projects", "Skills", "Contact"],
                  url: [
                    `${siteConfig.url}#about`,
                    `${siteConfig.url}#experience`,
                    `${siteConfig.url}#key-projects`,
                    `${siteConfig.url}#projects`,
                    `${siteConfig.url}#skills`,
                    `${siteConfig.url}#contact`,
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
      </body>
    </html>
  );
}
