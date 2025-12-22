import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World | NKM-NHAN Portfolio",
  description: "Welcome to NKM-NHAN's digital space - exploring technology and creativity.",
  keywords: ["hello world", "introduction", "NKM-NHAN"],
  openGraph: {
    title: "Hello World - NKM-NHAN",
    description: "An introduction to NKM-NHAN's world of web development.",
    images: ["/astronaut.png"],
  },
};

export default function HelloWorldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}