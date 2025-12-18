"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiCode, HiGlobe, HiLightningBolt, HiCollection } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MasonryLayout } from "../components/masonry-layout";
import IMAGE_URLS from "./data";
import ImageCard from "../components/images/image-card";
import Link from "next/link";
// theme tokens removed
import { useEffect, useState } from "react";
import AdaptiveImage from "../components/images/adaptive-image";


// GitHub Statistics
const PROJECT_STATS = [
  {
    value: "12",
    label: "Open Source",
    gradient: "from-blue-500 to-purple-600",
  },
  { value: "5", label: "Featured", gradient: "from-green-500 to-teal-600" },
  { value: "8+", label: "Tech Stacks", gradient: "from-orange-500 to-red-600" },
  { value: "5", label: "Stars", gradient: "from-pink-500 to-purple-600" },
];



export default function Work() {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    setHeights(IMAGE_URLS.map(() => 320 + Math.floor(Math.random() * 52) * 4));
  }, []);

  const featuredProjects = IMAGE_URLS.filter((p) => p.featured);
  const enterpriseProjects = IMAGE_URLS.filter((p) => p.type === "enterprise");
  const toolsProjects = IMAGE_URLS.filter((p) => p.type === "tools");
  const personalProjects = IMAGE_URLS.filter(
    (p) => p.type === "personal" || p.type === "ecommerce"
  );

  const renderProjectGrid = (projects: typeof IMAGE_URLS) => {
    if (projects.length === 0) {
      return (
        <div className="text-center py-20">
          <div className="text-6xl mb-4 opacity-50">📁</div>
          <h3 className="text-xl font-semibold mb-2">No projects found</h3>
          <p>Try selecting a different category</p>
        </div>
      );
    }

    return (
      <MasonryLayout>
        {projects.map((project, idx) => {
          const techBadges = project.technologies?.slice(0, 2).join(", ") || "";
          const stars = project.stars ? `⭐${project.stars}` : "";
          const badge = [stars, techBadges].filter(Boolean).join(" • ");

          // Truncate description to max 120 characters
          const shortDesc =
            project.description.length > 120
              ? project.description.substring(0, 120) + "..."
              : project.description;

          return (
            <Link
              href={project.githubUrl || `/project/${project.id}`}
              key={project.id}
              target={project.githubUrl ? "_blank" : "_self"}
              rel={project.githubUrl ? "noopener noreferrer" : undefined}
              style={{
                display: "block",
                height: heights[idx],
                position: "relative",
              }}
              className="w-full group"
            >
              <ImageCard
                className="w-full h-full"
                style={{ height: "100%", position: "relative" }}
                src={project.poster}
                alt={project.title}
                loading="lazy"
                title={`${project.title}${badge ? ` | ${badge}` : ""}`}
                description={shortDesc}
              />
            </Link>
          );
        })}
      </MasonryLayout>
    );
  };

  return (
    <div className="fixed inset-0 overflow-y-auto hide-scrollbar">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* GitHub Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 p-8 md:p-10 rounded-2xl border-2 shadow-xl">
          <AdaptiveImage
            src="https://avatars.githubusercontent.com/u/49507410?v=4"
            alt="nkmnhan GitHub Avatar"
            width={128}
            height={128}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 shadow-2xl"
            preload
          />
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Tony Nguyen (nkmnhan)</h2>
            <p className="text-base md:text-lg mb-4 opacity-90">Senior Software Engineer • 12 Open Source Projects • 5 GitHub Stars</p>
            <Link
              href="https://github.com/nkmnhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border"
            >
              <FaGithub className="text-2xl" />
              <span className="font-semibold">View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Work &amp; Projects</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my open-source contributions on GitHub featuring .NET, Vue.js, React, IdentityServer4, Elasticsearch, Docker, and innovative developer tools.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12">
          {PROJECT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className="mb-8">
          <Tabs aria-label="Project categories" variant="underline">
            <TabItem active title="Featured" icon={HiLightningBolt}>
              <div className="h-full mb-12">
                <div className="mb-8 p-6 md:p-8 rounded-xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">⭐ Featured Projects</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Highlighted open-source projects showcasing my expertise in .NET MAUI, Vue.js, IdentityServer4, Elasticsearch, and modern web development.
                  </p>
                </div>
                {renderProjectGrid(featuredProjects)}
              </div>
            </TabItem>

            <TabItem title="All Projects" icon={HiCollection}>
              <div className="h-full mb-12">
                {renderProjectGrid(IMAGE_URLS)}
              </div>
            </TabItem>

            <TabItem title="Enterprise" icon={MdWork}>
              <div className="h-full mb-12">
                <div className="mb-8 p-6 md:p-8 rounded-xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">🏢 Enterprise Solutions</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Authentication & authorization with IdentityServer4, full-text search with Elasticsearch NEST, and enterprise-grade security implementations.
                  </p>
                </div>
                {renderProjectGrid(enterpriseProjects)}
              </div>
            </TabItem>

            <TabItem title="Developer Tools" icon={HiCode}>
              <div className="h-full mb-12">
                <div className="mb-8 p-6 md:p-8 rounded-xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">🛠️ Developer Tools</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Productivity tools including SQL Converter, Resource Manager for localization, Docker hot-reload setup for Vue.js, and development utilities.
                  </p>
                </div>
                {renderProjectGrid(toolsProjects)}
              </div>
            </TabItem>

            <TabItem title="Personal" icon={HiGlobe}>
              <div className="h-full mb-12">
                <div className="mb-8 p-6 md:p-8 rounded-xl border">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">💡 Personal Projects</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Innovative projects including this portfolio, E-Shop platform, MAUI apps with MediatR, Firebase push notifications, calendar components, and hybrid WebView experiments.
                  </p>
                </div>
                {renderProjectGrid(personalProjects)}
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
