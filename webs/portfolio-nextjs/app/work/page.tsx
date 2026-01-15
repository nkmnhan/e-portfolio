import type { Metadata } from "next";
import WorkGallery from "./work-gallery";

export const metadata: Metadata = {
  title: "Work & Projects | NKM-NHAN - Open Source Portfolio",
  description:
    "Explore 12+ open-source projects by NKM-NHAN featuring .NET, Vue.js, React, IdentityServer4, Elasticsearch, Docker, and innovative developer tools.",
  keywords: [
    "open source",
    "github projects",
    ".NET",
    "Vue.js",
    "React",
    "IdentityServer4",
    "Elasticsearch",
    "Docker",
    "developer tools",
  ],
  openGraph: {
    title: "Work & Projects | NKM-NHAN - Open Source Portfolio",
    description:
      "12+ open-source projects featuring .NET, Vue.js, React, and enterprise solutions.",
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkGallery />;
}
