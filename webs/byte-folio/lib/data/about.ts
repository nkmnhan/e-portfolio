import type { AboutData } from "@/lib/types";

export const aboutData: AboutData = {
  avatar: "https://avatars.githubusercontent.com/u/49507410?v=4",
  bio: [
    "I'm Tony Nguyen (Nhan), a Senior Fullstack Developer with 10+ years of experience specializing in .NET Core, Angular, microservices architecture, and cloud-native solutions.",
    "Currently building enterprise HR & Talent Management features on BravoSUITE. Previously led a module team on Singapore's MOE platform and worked on European financial microservices and UK education systems.",
  ],
  stats: [
    { value: "10+", label: "Years" },
    { value: "14", label: "Projects" },
    { value: "20+", label: "Technologies" },
    { value: "3", label: "Countries" },
  ],
  education: "Bachelor of Information Technology, University of Information Technology (2012-2017)",
  assessments: "Passed LinkedIn Skill Assessments: C#, JavaScript",
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
  ],
};
