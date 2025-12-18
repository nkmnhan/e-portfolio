import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar, AirNav } from "./components/nav-bar";
import { ThemeModeScript } from "flowbite-react";
import PerformanceMonitor from "./components/performance-monitor";
import { clsxMerge } from "./components/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  openGraph: {
    title: "NKM-NHAN Portfolio",
    description: "Web developer portfolio",
    images: ["/astronaut.png", "/baby-astronaut.jpeg"],
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
      </head>
      <body
        className={clsxMerge(
          geistSans.variable,
          geistMono.variable,
          "antialiased"
        )}
        suppressHydrationWarning={true}
      >
        <PerformanceMonitor />
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
