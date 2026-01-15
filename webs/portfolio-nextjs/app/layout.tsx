import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NavBar, AirNav } from "./components/nav-bar";
import { ThemeModeScript } from "flowbite-react";
import PerformanceMonitor from "./components/performance-monitor";
import { clsxMerge, ThemeToggle } from "./components/themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const waltograph = localFont({
  variable: "--font-waltograph",
  src: [
    { path: "../public/fonts/waltograph.regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/waltograph.regular.ttf", weight: "400", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nkmnhan.com"
  ),
  title: "Tony Nguyen Portfolio | Senior Software Engineer",
  description:
    "Portfolio of Tony Nguyen (Nguyễn Khoa Minh Nhân), a Senior Software Engineer specializing in .NET Core, React, Next.js, and microservices architecture.",
  keywords: ["Tony Nguyen", "Nguyễn Khoa Minh Nhân", "Tony Wilson", "Tony", "nhan", "Nhân", "portfolio", "senior software engineer", ".NET Core", "React", "Next.js", "microservices", "cloud architecture", "web development", "UI/UX design"],
  authors: [{ name: "Tony Nguyen" }],
  creator: "Tony Nguyen",
  publisher: "Tony Nguyen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NKM-NHAN Portfolio",
    description: "Web developer portfolio showcasing innovative projects",
    url: "https://nkmnhan.com",
    siteName: "NKM-NHAN Portfolio",
    images: [
      {
        url: "/astronaut.png",
        width: 800,
        height: 600,
        alt: "NKM-NHAN Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NKM-NHAN Portfolio",
    description: "Web developer portfolio",
    images: ["/astronaut.png"],
    creator: "@nkmnhan", // if applicable
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "SHrjJvYZy8wkjeAIO_cr5DN4XGJuNnnlPWTCWd9PzvQ",
    // Add your Bing verification code from Bing Webmaster Tools
    other: {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION || "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <ThemeModeScript />
        {/* WebSite Schema - Enables sitelinks in search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tony Nguyen Portfolio",
              "alternateName": ["NKM-NHAN", "nkmnhan"],
              "url": "https://nkmnhan.com",
              "description": "Portfolio of Tony Nguyen - Senior Software Engineer specializing in .NET, React, and cloud architecture",
              "publisher": {
                "@type": "Person",
                "name": "Tony Nguyen"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://nkmnhan.com/work?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        {/* Person Schema - Professional profile */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tony Nguyen",
              "alternateName": ["NKM-NHAN", "Nguyễn Khoa Minh Nhân"],
              "jobTitle": "Senior Software Engineer",
              "url": "https://nkmnhan.com",
              "sameAs": [
                "https://github.com/nkmnhan",
                "https://www.linkedin.com/in/nhan-nguyen-813494167/",
                "https://www.facebook.com/nkmnhan"
              ],
              "email": "mailto:nkmnhan@gmail.com",
              "image": "https://avatars.githubusercontent.com/u/49507410?v=4",
              "description": "Senior Software Engineer with 8+ years of experience in .NET, React, Angular, AWS, and enterprise solutions",
              "knowsAbout": [
                ".NET Core", "React", "Angular", "Next.js", "AWS", "Azure",
                "Microservices", "TypeScript", "PostgreSQL", "Docker"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            }),
          }}
        />
        {/* SiteNavigationElement - Helps Google understand site structure for sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Home",
                  "url": "https://nkmnhan.com"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "About",
                  "description": "Learn about Tony Nguyen's experience and skills",
                  "url": "https://nkmnhan.com/about"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Work & Projects",
                  "description": "Open source projects and portfolio",
                  "url": "https://nkmnhan.com/work"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Contact",
                  "description": "Get in touch with Tony Nguyen",
                  "url": "https://nkmnhan.com/contact"
                }
              ]
            }),
          }}
        />
      </head>
      <body
        className={clsxMerge(
          geistSans.variable,
          geistMono.variable,
          waltograph.variable,
          "antialiased",
          "bg-white dark:bg-gray-800",
          "min-h-screen min-w-screen"
        )}
        suppressHydrationWarning={true}
      >
        <PerformanceMonitor className="fixed right-4 bottom-12" />
        <ThemeToggle
          className="fixed right-4 bottom-4 z-100"
          size="0.7rem"
        />
        {/* Floating Menu Button with Popover */}
        <AirNav />
        <div>
          {/* Menu drawer */}
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
