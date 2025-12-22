import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | NKM-NHAN Portfolio",
  description: "Explore NKM-NHAN's portfolio of web development projects, featuring innovative designs and technologies.",
  keywords: ["work", "portfolio", "projects", "web development", "NKM-NHAN"],
  openGraph: {
    title: "NKM-NHAN's Work",
    description: "Showcase of web development and design projects.",
    images: ["/astronaut.png"],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}