import type { AboutData } from "@/lib/types";

export const aboutData: AboutData = {
  avatar: "https://avatars.githubusercontent.com/u/49507410?v=4",
  bio: [
    "I'm Tony Nguyen (Nhan), a Senior Software Engineer with 9+ years of experience specializing in .NET Core, Angular, microservices architecture, and cloud-native solutions.",
    "Currently building enterprise HR & Talent Management features on BravoSUITE. Previously led development on Singapore's MOE platform, European microservices, and UK education systems.",
  ],
  stats: [
    { value: "9+", label: "Years" },
    { value: "14", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "3", label: "Countries" },
  ],
  education: "BSc IT — University of Information Technology",
  availability: "Based in Vietnam · Open to remote worldwide",
  githubBadges: [
    {
      id: "pull-shark",
      label: "Pull Shark x2",
      description: "Merged 128+ pull requests",
      colorVar: "--color-primary",
    },
    {
      id: "pair-extraordinaire",
      label: "Pair Extraordinaire",
      description: "Co-authored commits with others",
      colorVar: "--color-secondary",
    },
    {
      id: "yolo",
      label: "YOLO",
      description: "Merged without code review",
      colorVar: "--color-accent",
    },
  ],
};
