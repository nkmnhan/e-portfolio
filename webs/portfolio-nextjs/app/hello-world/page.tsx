"use client";

import { clsxMerge } from "@/app/components/themes/utils";
// import theme tokens removed
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import AdaptiveImage from "../components/images/adaptive-image";
import { Galaxy } from "../components/galaxy";

// Data for the page
const TECHNOLOGIES = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    desc: "React framework for production",
  },
  { icon: SiTypescript, name: "TypeScript", desc: "Type-safe JavaScript" },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework",
  },
  { icon: FaReact, name: "React", desc: "UI library" },
  { icon: FaNodeJs, name: "Node.js", desc: "Runtime environment" },
  { icon: FaDocker, name: "Docker", desc: "Containerization" },
  { icon: FaAws, name: "AWS", desc: "Cloud services" },
  { icon: FaGithub, name: "GitHub", desc: "Version control" },
];

const TIMELINE = [
  { date: "Jan 2024", event: "Project ideation and planning" },
  { date: "Feb 2024", event: "Setup Next.js with TypeScript" },
  { date: "Mar 2024", event: "UI/UX design with Figma" },
  { date: "Apr 2024", event: "Development of core components" },
  { date: "May 2024", event: "Integration and testing" },
  { date: "Jun 2024", event: "Deployment to Vercel" },
  { date: "Jul 2024", event: "Performance optimization and SEO" },
  { date: "Aug 2024", event: "Added dark mode and theme system" },
  { date: "Sep 2024", event: "Integrated GitHub API for projects" },
  { date: "Oct 2024", event: "Created custom SVG illustrations" },
  { date: "Nov 2024", event: "Enhanced UX/UI with animations" },
  { date: "Dec 2024", event: "Added contact forms and validation" },
  { date: "Jan 2025", event: "Implemented advanced image galleries" },
  { date: "Present", event: "Continuous maintenance and updates" },
];

const TODO_ACTIONS = [
  { action: "Add blog section for technical articles", priority: "High" },
  { action: "Implement contact form with email integration", priority: "High" },
  {
    action: "Add project case studies with detailed breakdowns",
    priority: "Medium",
  },
  { action: "Create testimonials section from clients", priority: "Medium" },
  { action: "Add analytics and performance monitoring", priority: "Low" },
  {
    action: "Implement PWA features for mobile app experience",
    priority: "Low",
  },
];

const TOOLS = [
  { icon: VscCode, name: "VS Code", desc: "Code editor" },
  { icon: FaGitAlt, name: "Git", desc: "Version control" },
  { icon: FaGithub, name: "GitHub", desc: "Repository hosting" },
  { icon: SiVercel, name: "Vercel", desc: "Deployment platform" },
];

export default function HelloWorld() {
  return (
    <div className="fixed inset-0 overflow-y-auto hide-scrollbar bg-[var(--color-bg)] dark:bg-[var(--color-bg)]">
      <Galaxy className="absolute inset-0 opacity-30 dark:opacity-50" />
      <div className="relative z-1 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Hero Section with Astronaut */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <AdaptiveImage
              src="/astronaut.png"
              alt="Astronaut"
              width={144}
              height={192}
              className={clsxMerge(
                "w-20 h-28 mx-auto transition-all duration-300 ease-in-out hover:rotate-12 drop-shadow-lg",
                "sm:w-36 sm:h-48"
              )}
              priority
            />
          </div>
          <h1 className={clsxMerge("text-4xl md:text-6xl font-bold mb-4 theme-text drop-shadow-md")}>
            Portfolio Behind the Scenes
          </h1>
          <p className={clsxMerge("text-lg md:text-xl max-w-2xl mx-auto theme-text opacity-90 drop-shadow-sm")}>
            Discover how this portfolio was built, from concept to deployment
          </p>
        </div>

        {/* Purpose Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            Why This Portfolio?
          </h2>
          <div className="bg-[var(--color-surface)]/80 dark:bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[var(--color-border)] shadow-xl hover:shadow-2xl transition-shadow">
            <p className={clsxMerge("text-base md:text-lg leading-relaxed theme-text")}>
              This portfolio serves as a showcase of my skills in modern web
              development, demonstrating proficiency in Next.js, TypeScript, and
              responsive design. It was created to attract potential clients and
              employers while providing an interactive experience that reflects
              my passion for clean, efficient code and beautiful user
              interfaces.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TECHNOLOGIES.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-surface)]/85 dark:bg-[var(--color-surface)]/85 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[var(--color-border)]"
              >
                <tech.icon className={clsxMerge("w-12 h-12 mx-auto mb-4 theme-text")} />
                <h3 className={clsxMerge("font-semibold mb-2 theme-text")}>{tech.name}</h3>
                <p className={clsxMerge("text-sm theme-text opacity-80")}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            Development Timeline
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-semibold min-w-25 text-center shadow-lg">
                  {item.date}
                </div>
                <div className="flex-1 bg-[var(--color-surface)]/80 dark:bg-[var(--color-surface)]/80 backdrop-blur-sm rounded-lg p-4 border border-[var(--color-border)] shadow-md hover:shadow-lg transition-shadow theme-text">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Tools Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            Development Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-success-light)]/80 dark:bg-[var(--color-success)]/20 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[var(--color-success)]/30"
              >
                <tool.icon className={clsxMerge("w-12 h-12 mx-auto mb-4 theme-text")} />
                <h3 className={clsxMerge("font-semibold mb-2 theme-text")}>{tool.name}</h3>
                <p className={clsxMerge("text-sm theme-text opacity-80")}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CI/CD Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            CI/CD with Vercel
          </h2>
          <div className="bg-[var(--color-accent-light)]/80 dark:bg-[var(--color-accent)]/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[var(--color-accent)]/30 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <SiVercel className={clsxMerge("w-16 h-16 theme-text")} />
            </div>
            <h3 className={clsxMerge("text-xl font-semibold mb-4 text-center theme-text")}>
              Automated Deployment
            </h3>
            <p className={clsxMerge("text-base md:text-lg leading-relaxed text-center theme-text opacity-90")}>
              This portfolio is deployed using Vercel's platform, which provides
              automatic deployments from GitHub, preview deployments for pull
              requests, and global CDN for optimal performance. The CI/CD
              pipeline ensures that every code change is automatically tested
              and deployed.
            </p>
          </div>
        </section>

        {/* Future Development Section */}
        <section className="mb-16">
          <h2 className={clsxMerge("text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md")}>
            Future Development Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {TODO_ACTIONS.map((todo, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-warning-light)]/80 dark:bg-[var(--color-warning)]/20 backdrop-blur-sm rounded-xl p-6 border-l-4 border-[var(--color-warning)] shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={clsxMerge(
                      "px-3 py-1 rounded-full text-xs font-semibold shadow-md",
                      todo.priority === "High"
                        ? "bg-[var(--color-error)] text-white"
                        : todo.priority === "Medium"
                        ? "bg-[var(--color-warning)] text-black"
                        : "bg-[var(--color-success)] text-white"
                    )}
                  >
                    {todo.priority}
                  </span>
                </div>
                <p className={clsxMerge("text-base theme-text")}>{todo.action}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
