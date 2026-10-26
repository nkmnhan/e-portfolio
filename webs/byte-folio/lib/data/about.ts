import type { AboutData } from "@/lib/types";
import { yearsOfExperience } from "@/lib/data/site-config";

export const aboutData: AboutData = {
  avatar: "https://avatars.githubusercontent.com/u/49507410?v=4",
  bio: [
    `I'm Tony Nguyen (Nhan), a Senior Fullstack Developer with ${yearsOfExperience} years of experience specializing in .NET Core, Angular, microservices architecture, and cloud-native solutions.`,
    "Today I build Talent Acquisition features for BravoSUITE with .NET 9 and Angular micro-frontends. Before that I spent five years on Singapore's MOE learning platform, leading up to 5 developers across the Search, Course and Learner modules.",
  ],
  stats: [
    { value: yearsOfExperience, label: "Years" },
    { value: "100+", label: "Peak team (MOE)" },
    { value: "5", label: "Devs led" },
    { value: "3", label: "Companies" },
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
