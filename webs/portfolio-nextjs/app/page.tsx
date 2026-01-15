import type { Metadata } from "next";
import HeroSection from "./components/hero-section";

export const metadata: Metadata = {
  title: "NKM-NHAN | Senior Full-Stack Developer Portfolio",
  description:
    "Portfolio of NKM-NHAN - Senior Full-Stack Developer specializing in .NET, React, Angular, AWS, and enterprise solutions. Building scalable applications for global clients.",
  keywords: [
    "portfolio",
    "full-stack developer",
    "software engineer",
    ".NET",
    "React",
    "Angular",
    "AWS",
    "TypeScript",
  ],
  openGraph: {
    title: "NKM-NHAN | Senior Full-Stack Developer Portfolio",
    description:
      "Portfolio of NKM-NHAN - Senior Full-Stack Developer specializing in .NET, React, Angular, and AWS.",
    type: "website",
  },
};

export default function Home() {
  return <HeroSection />;
}
