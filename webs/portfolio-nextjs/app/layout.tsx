import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/nav-bar";
import { DarkThemeToggle, ThemeModeScript } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NKM-NHAN Portfolio | Web Developer & Designer",
  description:
    "Portfolio of NKM-NHAN showcasing web development projects, UI/UX design, and creative solutions",
  keywords: ["portfolio", "web developer", "Next.js", "React", "UI/UX"],
  authors: [{ name: "NKM-NHAN" }],
  openGraph: {
    title: "NKM-NHAN Portfolio",
    description: "Web developer portfolio",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/icon"
          type="image/png"
          sizes="32x32"
        />
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <NavBar />
          {/* Theme switcher hidden - light mode only */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
