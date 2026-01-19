import type { Metadata } from "next";
import AboutLayout from "./about-layout";

export const metadata: Metadata = {
  title: "About | NKM-NHAN - Senior Full-Stack Developer",
  description:
    "Learn about NKM-NHAN, a Senior Full-Stack Developer with 8+ years of experience in .NET, React, Angular, AWS, and enterprise solutions for clients in Singapore, Europe, and UK.",
  keywords: [
    "full-stack developer",
    "senior software engineer",
    ".NET developer",
    "React developer",
    "Angular developer",
    "AWS",
    "microservices",
    "Singapore",
    "Vietnam",
  ],
  openGraph: {
    title: "About | NKM-NHAN - Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer with 8+ years of experience building enterprise solutions.",
    type: "profile",
  },
};

export default function AboutPage() {
  return <AboutLayout />;
}
