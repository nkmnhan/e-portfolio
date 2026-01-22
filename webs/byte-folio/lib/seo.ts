import { Metadata } from "next";

// ============================================
// SEO CONFIGURATION
// ============================================

export const siteConfig = {
  name: "Tony Nguyen",
  title: "Tony Nguyen | Software Engineer",
  description:
    "Software Engineer with 8+ years of experience in .NET Core, React, and microservices architecture. Building scalable solutions for global clients.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tonynguyen.dev",
  ogImage: "/og-image.jpg",
  locale: "en_US",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    ".NET Core",
    "React",
    "TypeScript",
    "Microservices",
    "Cloud Architecture",
    "AWS",
    "Azure",
  ],
};

// ============================================
// DEFAULT METADATA
// ============================================

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,

  // Robots
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

  // Open Graph
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer Portfolio`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Verification (add your own IDs when ready)
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

  // Canonical
  alternates: {
    canonical: siteConfig.url,
  },
};

// ============================================
// PAGE-SPECIFIC METADATA HELPER
// ============================================

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}
