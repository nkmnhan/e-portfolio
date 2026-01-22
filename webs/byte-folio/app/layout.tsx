import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { Header } from "@/app/components/layout/Header";
import { ScrollObserver } from "@/app/components/ui/ScrollObserver";
import { SpaceBackground } from "@/app/components/background/SpaceBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Export metadata from SEO config
export const metadata: Metadata = defaultMetadata;

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0d0618" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0618" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-neon-cyan)] focus:text-[var(--color-space-dark)] focus:rounded"
        >
          Skip to main content
        </a>

        {/* Space Background - CSS-only stars and cosmic elements */}
        <SpaceBackground />

        {/* Header - Client Component for scroll state */}
        <Header />

        {/* ScrollObserver - Client Component for fade-in animations */}
        <ScrollObserver />

        {/* Main content */}
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
