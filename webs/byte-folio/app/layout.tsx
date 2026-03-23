import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/data/site-config";
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
    "Tony Nguyen", "Senior Software Engineer", ".NET Core",
    "React", "Next.js", "microservices", "fullstack developer",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: "8+ years building scalable systems with .NET, React & cloud architecture",
    url: siteConfig.url,
    siteName: "Tony Nguyen Portfolio",
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
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
                  jobTitle: "Senior Fullstack Developer",
                  url: siteConfig.url,
                  sameAs: [
                    "https://github.com/nkmnhan",
                    "https://linkedin.com/in/nkmnhan",
                  ],
                  knowsAbout: [
                    ".NET Core", "React", "Next.js", "TypeScript",
                    "Microservices", "Docker", "AWS", "Azure",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Tony Nguyen Portfolio",
                  url: siteConfig.url,
                  author: { "@type": "Person", name: "Tony Nguyen" },
                },
                {
                  "@type": "SiteNavigationElement",
                  name: ["About", "Experience", "Projects", "Skills", "Contact"],
                  url: [
                    `${siteConfig.url}#about`,
                    `${siteConfig.url}#experience`,
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
        {children}
      </body>
    </html>
  );
}
