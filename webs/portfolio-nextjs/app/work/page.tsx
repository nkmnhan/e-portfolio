"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiCode, HiGlobe, HiLightningBolt, HiCollection } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import MasonryLayout from "../components/masonry-layout";
import IMAGE_URLS from "./data";
import ImageCard from "../components/images/image-card";
import Link from "next/link";
import Image from "next/image";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textPrimary, textSecondary, textBody, textWhite } from "@/app/components/themes/default-text";
import { useEffect, useState } from "react";

// Style Constants
const STYLES = {
  pageContainer: "fixed inset-0 overflow-y-auto hide-scrollbar",
  contentWrapper: "max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12",
  profileSection: "flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 p-8 md:p-10 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border-2 border-blue-500/30 dark:border-blue-400/40 shadow-xl",
  avatar: "w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-2xl",
  profileInfo: "flex-1 text-center md:text-left space-y-4",
  profileName: "text-3xl md:text-4xl font-bold mb-3",
  profileBio: "text-base md:text-lg mb-4 opacity-90",
  githubButton: "inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-linear-to-r from-gray-800 to-gray-900 dark:from-blue-600 dark:to-purple-600 hover:from-gray-700 hover:to-gray-800 dark:hover:from-blue-500 dark:hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700 dark:border-blue-500",
  header: "mb-8 text-center",
  title: "text-4xl md:text-5xl font-bold mb-4",
  subtitle: "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12",
  statCard: "text-center p-4 md:p-6 rounded-xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300",
  statValue: "text-3xl md:text-4xl font-bold mb-1",
  statLabel: "text-sm md:text-base opacity-90",
  tabWrapper: "mb-8",
  tabContent: "h-full mb-12",
  categoryHeader: "mb-8 p-6 md:p-8 rounded-xl bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800",
  categoryTitle: "text-2xl md:text-3xl font-bold mb-4",
  categoryDesc: "text-base md:text-lg leading-relaxed",
  emptyState: "text-center py-20",
  emptyIcon: "text-6xl mb-4 opacity-50",
  emptyText: "text-xl font-semibold mb-2",
} as const;

// GitHub Statistics
const PROJECT_STATS = [
  { value: "12", label: "Open Source", gradient: "from-blue-500 to-purple-600" },
  { value: "5", label: "Featured", gradient: "from-green-500 to-teal-600" },
  { value: "8+", label: "Tech Stacks", gradient: "from-orange-500 to-red-600" },
  { value: "5", label: "Stars", gradient: "from-pink-500 to-purple-600" },
];

const PROJECT_CATEGORIES = {
  all: "All Projects",
  enterprise: "Enterprise Solutions",
  education: "Education Platforms",
  ecommerce: "E-Commerce",
  personal: "Personal Projects",
};

export default function Work() {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    setHeights(IMAGE_URLS.map(() => 320 + Math.floor(Math.random() * 52) * 4));
  }, []);

  const featuredProjects = IMAGE_URLS.filter(p => p.featured);
  const enterpriseProjects = IMAGE_URLS.filter(p => p.type === "enterprise");
  const toolsProjects = IMAGE_URLS.filter(p => p.type === "tools");
  const personalProjects = IMAGE_URLS.filter(p => p.type === "personal" || p.type === "ecommerce");

  const renderProjectGrid = (projects: typeof IMAGE_URLS) => {
    if (projects.length === 0) {
      return (
        <div className={STYLES.emptyState}>
          <div className={clsxMerge(STYLES.emptyIcon, textSecondary)}>📁</div>
          <h3 className={clsxMerge(STYLES.emptyText, textPrimary)}>No projects found</h3>
          <p className={clsxMerge(textSecondary)}>Try selecting a different category</p>
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
          const shortDesc = project.description.length > 120 
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
    <div className={clsxMerge(STYLES.pageContainer, bgPrimary)}>
      <div className={STYLES.contentWrapper}>
        {/* GitHub Profile Section */}
        <div className={STYLES.profileSection}>
          <Image
            src="https://avatars.githubusercontent.com/u/49507410?v=4"
            alt="nkmnhan GitHub Avatar"
            width={128}
            height={128}
            className={STYLES.avatar}
            priority
          />
          <div className={STYLES.profileInfo}>
            <h2 className={clsxMerge(STYLES.profileName, textPrimary)}>
              Tony Nguyen (nkmnhan)
            </h2>
            <p className={clsxMerge(STYLES.profileBio, textSecondary)}>
              Senior Software Engineer • 12 Open Source Projects • 5 GitHub Stars
            </p>
            <Link
              href="https://github.com/nkmnhan"
              target="_blank"
              rel="noopener noreferrer"
              className={STYLES.githubButton}
            >
              <FaGithub className="text-2xl bg-white rounded-full" />
              <span className={clsxMerge("font-semibold", textWhite)}>View on GitHub</span>
            </Link>
          </div>
        </div>

        {/* Header Section */}
        <div className={STYLES.header}>
          <h1 className={clsxMerge(STYLES.title, textPrimary)}>
            My Work &amp; Projects
          </h1>
          <p className={clsxMerge(STYLES.subtitle, textBody)}>
            Explore my open-source contributions on GitHub featuring .NET, Vue.js, React, 
            IdentityServer4, Elasticsearch, Docker, and innovative developer tools.
          </p>
        </div>

        {/* Stats Section */}
        <div className={STYLES.statsGrid}>
          {PROJECT_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={clsxMerge(
                STYLES.statCard,
                `bg-linear-to-br ${stat.gradient}`
              )}
            >
              <div className={clsxMerge(STYLES.statValue, textWhite)}>
                {stat.value}
              </div>
              <div className={clsxMerge(STYLES.statLabel, textWhite)}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs Section */}
        <div className={STYLES.tabWrapper}>
          <Tabs aria-label="Project categories" variant="underline">
            <TabItem active title="Featured" icon={HiLightningBolt}>
              <div className={STYLES.tabContent}>
                <div className={STYLES.categoryHeader}>
                  <h3 className={clsxMerge(STYLES.categoryTitle, textPrimary)}>
                    ⭐ Featured Projects
                  </h3>
                  <p className={clsxMerge(STYLES.categoryDesc, textSecondary)}>
                    Highlighted open-source projects showcasing my expertise in .NET MAUI, 
                    Vue.js, IdentityServer4, Elasticsearch, and modern web development.
                  </p>
                </div>
                {renderProjectGrid(featuredProjects)}
              </div>
            </TabItem>
            
            <TabItem title="All Projects" icon={HiCollection}>
              <div className={STYLES.tabContent}>
                {renderProjectGrid(IMAGE_URLS)}
              </div>
            </TabItem>
            
            <TabItem title="Enterprise" icon={MdWork}>
              <div className={STYLES.tabContent}>
                <div className={STYLES.categoryHeader}>
                  <h3 className={clsxMerge(STYLES.categoryTitle, textPrimary)}>
                    🏢 Enterprise Solutions
                  </h3>
                  <p className={clsxMerge(STYLES.categoryDesc, textSecondary)}>
                    Authentication & authorization with IdentityServer4, full-text search with 
                    Elasticsearch NEST, and enterprise-grade security implementations.
                  </p>
                </div>
                {renderProjectGrid(enterpriseProjects)}
              </div>
            </TabItem>
            
            <TabItem title="Developer Tools" icon={HiCode}>
              <div className={STYLES.tabContent}>
                <div className={STYLES.categoryHeader}>
                  <h3 className={clsxMerge(STYLES.categoryTitle, textPrimary)}>
                    🛠️ Developer Tools
                  </h3>
                  <p className={clsxMerge(STYLES.categoryDesc, textSecondary)}>
                    Productivity tools including SQL Converter, Resource Manager for localization, 
                    Docker hot-reload setup for Vue.js, and development utilities.
                  </p>
                </div>
                {renderProjectGrid(toolsProjects)}
              </div>
            </TabItem>
            
            <TabItem title="Personal" icon={HiGlobe}>
              <div className={STYLES.tabContent}>
                <div className={STYLES.categoryHeader}>
                  <h3 className={clsxMerge(STYLES.categoryTitle, textPrimary)}>
                    💡 Personal Projects
                  </h3>
                  <p className={clsxMerge(STYLES.categoryDesc, textSecondary)}>
                    Innovative projects including this portfolio, E-Shop platform, MAUI apps with MediatR, 
                    Firebase push notifications, calendar components, and hybrid WebView experiments.
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
