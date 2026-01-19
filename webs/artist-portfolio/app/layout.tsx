import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/nav/header";
import { Footer } from "./components/nav/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artist Portfolio | 3D, Animation & Concept Art",
  description:
    "Showcase platform for 3D Artists, Animation Artists, and Concept Artists. Discover stunning character designs, environments, animations, and visual effects.",
  keywords: [
    "3D Artist",
    "Animation",
    "Concept Art",
    "Character Design",
    "Environment Art",
    "VFX",
    "Game Art",
    "Film Animation",
  ],
  openGraph: {
    title: "Artist Portfolio | 3D, Animation & Concept Art",
    description: "Discover stunning artwork from talented visual artists",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-primary)] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
