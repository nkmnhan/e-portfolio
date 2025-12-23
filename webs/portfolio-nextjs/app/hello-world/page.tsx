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
    <div className="fixed inset-0 overflow-y-auto hide-scrollbar bg-white dark:bg-slate-900 cyan700:bg-cyan-700">
      <Galaxy className="absolute inset-0 opacity-30 dark:opacity-50 cyan700:opacity-60" />
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
          <div className="bg-white/80 dark:bg-slate-800/80 cyan700:bg-cyan-500/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-200 dark:border-blue-800 cyan700:border-cyan-400 shadow-xl hover:shadow-2xl transition-shadow">
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
                className="bg-white/85 dark:bg-slate-800/85 cyan700:bg-cyan-500/85 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 cyan700:border-cyan-400"
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
                <div className="bg-blue-600 dark:bg-blue-700 cyan700:bg-cyan-400 text-white dark:text-white cyan700:text-slate-900 px-4 py-2 rounded-lg font-semibold min-w-25 text-center shadow-lg">
                  {item.date}
                </div>
                <div className="flex-1 bg-white/80 dark:bg-slate-800/80 cyan700:bg-cyan-500/80 backdrop-blur-sm rounded-lg p-4 border border-blue-200 dark:border-blue-800 cyan700:border-cyan-400 shadow-md hover:shadow-lg transition-shadow theme-text">
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
                className="bg-green-50/80 dark:bg-green-900/40 cyan700:bg-green-500/80 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200 dark:border-green-700 cyan700:border-green-400"
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
          <div className="bg-purple-50/80 dark:bg-purple-900/40 cyan700:bg-purple-500/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-200 dark:border-purple-800 cyan700:border-purple-400 shadow-xl hover:shadow-2xl transition-shadow">
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
                className="bg-orange-50/80 dark:bg-orange-900/40 cyan700:bg-orange-500/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-orange-500 dark:border-orange-400 cyan700:border-orange-300 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={clsxMerge(
                      "px-3 py-1 rounded-full text-xs font-semibold shadow-md",
                      todo.priority === "High"
                        ? "bg-red-500 text-white dark:bg-red-600 cyan700:bg-red-400 cyan700:text-slate-900"
                        : todo.priority === "Medium"
                        ? "bg-yellow-500 text-black dark:bg-yellow-600 cyan700:bg-yellow-400"
                        : "bg-green-500 text-white dark:bg-green-600 cyan700:bg-green-400 cyan700:text-slate-900"
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
