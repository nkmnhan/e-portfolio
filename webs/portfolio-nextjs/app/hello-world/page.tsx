"use client";

import { clsxMerge } from "@/app/components/themes/utils";
import {
  textPrimary,
  textSecondary,
  textMuted,
  textWhite,
} from "@/app/components/themes/default-text";
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
import Galaxy from "../components/galaxy";
import AdaptiveImage from "../components/images/adaptive-image";

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
    <div className="fixed inset-0 overflow-y-auto hide-scrollbar">
      <Galaxy className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Hero Section with Astronaut */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <AdaptiveImage
              src="/astronaut.png"
              alt="Astronaut"
              width={144}
              height={192}
              className={clsxMerge(
                "w-20 h-28 mx-auto transition-all duration-300 ease-in-out hover:rotate-12",
                "sm:w-36 sm:h-48"
              )}
              priority
            />
          </div>
          <h1
            className={clsxMerge(
              "text-4xl md:text-6xl font-bold mb-4",
              textWhite
            )}
          >
            Portfolio Behind the Scenes
          </h1>
          <p
            className={clsxMerge(
              "text-lg md:text-xl max-w-2xl mx-auto",
              textWhite
            )}
          >
            Discover how this portfolio was built, from concept to deployment
          </p>
        </div>

        {/* Purpose Section */}
        <section className="mb-16">
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            Why This Portfolio?
          </h2>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl p-8 md:p-12">
            <p
              className={clsxMerge(
                "text-base md:text-lg leading-relaxed",
                textWhite
              )}
            >
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
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            Technologies Used
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TECHNOLOGIES.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <tech.icon
                  className={clsxMerge("w-12 h-12 mx-auto mb-4", textPrimary)}
                />
                <h3 className={clsxMerge("font-semibold mb-2", textPrimary)}>
                  {tech.name}
                </h3>
                <p className={clsxMerge("text-sm", textMuted)}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            Development Timeline
          </h2>
          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold min-w-[100px] text-center">
                  {item.date}
                </div>
                <div className="flex-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg p-4">
                  <p className={clsxMerge(textSecondary)}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Development Tools Section */}
        <section className="mb-16">
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            Development Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <tool.icon
                  className={clsxMerge("w-12 h-12 mx-auto mb-4", textPrimary)}
                />
                <h3 className={clsxMerge("font-semibold mb-2", textPrimary)}>
                  {tool.name}
                </h3>
                <p className={clsxMerge("text-sm", textMuted)}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CI/CD Section */}
        <section className="mb-16">
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            CI/CD with Vercel
          </h2>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <SiVercel className={clsxMerge("w-16 h-16", textWhite)} />
            </div>
            <h3
              className={clsxMerge(
                "text-xl font-semibold mb-4 text-center",
                textWhite
              )}
            >
              Automated Deployment
            </h3>
            <p
              className={clsxMerge(
                "text-base md:text-lg leading-relaxed text-center",
                textWhite
              )}
            >
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
          <h2
            className={clsxMerge(
              "text-3xl md:text-4xl font-bold mb-8 text-center",
              textWhite
            )}
          >
            Future Development Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {TODO_ACTIONS.map((todo, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 rounded-xl p-6 border-l-4 border-orange-500"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={clsxMerge(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      todo.priority === "High"
                        ? "bg-red-500 text-white"
                        : todo.priority === "Medium"
                        ? "bg-yellow-500 text-black"
                        : "bg-green-500 text-white"
                    )}
                  >
                    {todo.priority}
                  </span>
                </div>
                <p className={clsxMerge("text-base", textWhite)}>
                  {todo.action}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
