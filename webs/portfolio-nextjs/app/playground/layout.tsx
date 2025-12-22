import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground | NKM-NHAN Portfolio",
  description: "Explore interactive demos and experiments in NKM-NHAN's playground.",
  keywords: ["playground", "demos", "experiments", "NKM-NHAN"],
  openGraph: {
    title: "NKM-NHAN's Playground",
    description: "Interactive web development playground and experiments.",
    images: ["/astronaut.png"],
  },
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}