import { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
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

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nkmnhan.com"
  ),
  title: "NKM-NHAN Portfolio | Web Developer & Designer",
  description:
    "Portfolio of NKM-NHAN showcasing web development projects, UI/UX design, and creative solutions",
  keywords: ["portfolio", "web developer", "Next.js", "React", "UI/UX"],
  authors: [{ name: "NKM-NHAN" }],
  creator: "NKM-NHAN",
  publisher: "NKM-NHAN",
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
        <link rel="icon" href="/icon" type="image/png" sizes="32x32" />
        <ThemeModeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "NKM-NHAN",
              "jobTitle": "Web Developer & Designer",
              "url": "https://nkmnhan.com",
              "sameAs": [
                "https://facebook.com",
                "https://instagram.com",
                "https://youtube.com"
              ],
              "email": "mailto:nkmnhan@gmail.com",
              "telephone": "+84 978 00 43 19",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8/15 Phan Huy Ich Street, Quarter 18, Tan Son Ward",
                "addressLocality": "Ho Chi Minh City",
                "addressCountry": "VN"
              },
              "image": "https://nkmnhan.com/astronaut.png",
              "description": "Portfolio of NKM-NHAN showcasing web development projects, UI/UX design, and creative solutions"
            }),
          }}
        />
      </head>
      <body
        className={clsxMerge(
          geistSans.variable,
          geistMono.variable,
          dancingScript.variable,
          "antialiased",
          "bg-white dark:bg-gray-800"
        )}
        suppressHydrationWarning={true}
      >
        <PerformanceMonitor className="fixed right-4 bottom-12" />
        <ThemeToggle
          className="absolute right-4 bottom-4 z-100"
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
