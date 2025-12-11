import Image from "next/image";
import { HR } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import {
  textBody,
  textWhite,
  textPrimary,
  textSecondary,
} from "@/app/components/themes/default-text";

// Types
type Article = {
  title: string;
  description: string;
  image: string;
};

type StatCard = {
  value: string;
  label: string;
  gradient: string;
};

type Highlight = {
  icon: string;
  title: string;
  lines: string[];
  hoverColor: string;
};

// Style Constants
const STYLES = {
  container: "max-w-7xl mx-auto px-6 md:px-12 py-12",
  heroImage: "relative w-full h-[120px] md:h-40 rounded-xl overflow-hidden mb-12 shadow-2xl",
  overviewText: "text-center text-lg md:text-xl leading-relaxed px-4 md:px-16 mb-12",
  statGrid: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12",
  statCard: "text-center p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300",
  statValue: "text-4xl md:text-5xl font-bold mb-2",
  statLabel: "text-sm md:text-base opacity-90",
  sectionTitle: "text-3xl md:text-4xl font-bold mb-8 text-center",
  highlightGrid: "grid md:grid-cols-2 gap-4 md:gap-6",
  highlightCard: "p-6 md:p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 shadow-md hover:shadow-xl",
  highlightTitle: "text-xl md:text-2xl font-semibold mb-3",
  highlightText: "text-sm md:text-base",
  storyGrid: "flex flex-col gap-16 md:gap-24",
  storyRow: "flex flex-col md:flex-row items-center gap-8 md:gap-12",
  storyImageWrapper: "w-full md:w-1/2 flex justify-center",
  storyImage: "relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300",
  storyContent: "w-full md:w-1/2 flex flex-col justify-center items-start px-4 md:px-0",
  storyTitle: "text-3xl md:text-4xl font-bold mb-6",
  storyDescription: "text-base md:text-lg leading-relaxed text-left",
} as const;

// Data
const overviewText = `Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams. With a strong foundation in Agile/Scrum methodologies, I thrive on creating innovative web and mobile applications that solve real-world problems. My journey in tech has been driven by curiosity, continuous learning, and a commitment to clean code and system performance. Let's collaborate to bring your vision to life!`;

const SUMMARY_STATS: StatCard[] = [
  { value: "8+", label: "Years Experience", gradient: "bg-linear-to-br from-blue-500 to-purple-600" },
  { value: "10+", label: "Major Projects", gradient: "bg-linear-to-br from-green-500 to-teal-600" },
  { value: "20+", label: "Technologies", gradient: "bg-linear-to-br from-orange-500 to-red-600" },
  { value: "3", label: "Countries Served", gradient: "bg-linear-to-br from-pink-500 to-purple-600" },
];

const KEY_HIGHLIGHTS: Highlight[] = [
  {
    icon: "🎓",
    title: "Education",
    lines: ["Bachelor of Information Technology", "University of Information Technology"],
    hoverColor: "hover:border-blue-500 dark:hover:border-blue-400",
  },
  {
    icon: "💼",
    title: "Current Role",
    lines: ["Senior Software Engineer", "Orient Software (2019 - Present)"],
    hoverColor: "hover:border-green-500 dark:hover:border-green-400",
  },
  {
    icon: "🏆",
    title: "Specializations",
    lines: ["Microservices Architecture", "Cloud-Native Development"],
    hoverColor: "hover:border-orange-500 dark:hover:border-orange-400",
  },
  {
    icon: "🌏",
    title: "Global Impact",
    lines: ["Singapore, Europe, Vietnam", "Education, E-commerce, Manufacturing"],
    hoverColor: "hover:border-pink-500 dark:hover:border-pink-400",
  },
];

const ABOUT_STORY: Article[] = [
  {
    title: "My Journey",
    description:
      "Starting as a Software Engineer at Hitachi Consulting Vietnam in 2016, I worked on semiconductor manufacturing systems and enterprise solutions. In 2019, I advanced to Senior Software Engineer, leading microservices development for European and Singaporean clients at NASH TECH and Orient Software. My career has evolved from backend systems to building innovative digital learning platforms and mobile applications using .NET MAUI, Angular, and AWS.",
    image: "/home/journey.svg?v=2",
  },
  {
    title: "Skills & Expertise",
    description:
      "Core expertise in C# (.NET Core 8, ASP.NET Core), JavaScript/TypeScript (Angular 19, Vue.js, React, Next.js), and microservices architecture. Proficient in databases (PostgreSQL, SQL Server, MongoDB, Elasticsearch), cloud platforms (AWS, Azure), DevOps (Docker, Kubernetes, GoCD), and testing (Playwright). Specialized in REST APIs, gRPC, serverless functions, and mobile development with .NET MAUI.",
    image: "/home/skills.svg?v=2",
  },
  {
    title: "Projects & Creations",
    description:
      "Led development on MOE platform for Singapore's Ministry of Education (2020-present), building .NET MAUI mobile apps, AWS Lambda functions, and implementing Playwright automation. Architected Lowell microservices system on Azure for European clients. Contributed to Open Create for UK's Open University, transforming static materials into dynamic learning experiences. Built MES systems for semiconductor factories using IBM frameworks.",
    image: "/home/projects.svg?v=2",
  },
  {
    title: "Technologies I Love",
    description:
      "Passionate about the .NET ecosystem (.NET Core, C#, MAUI), modern JavaScript frameworks (Angular, React, Vue), cloud-native architecture (AWS Lambda, Azure Service Bus), containerization (Docker, Kubernetes), message queuing (RabbitMQ), and identity management (IdentityServer 4). Always exploring cutting-edge tools to deliver high-performance, scalable solutions.",
    image: "/home/tech.svg?v=2",
  },
];

// Component Helper Functions
const StatCardComponent = ({ stat }: { stat: StatCard }) => (
  <div className={clsxMerge(STYLES.statCard, stat.gradient)}>
    <div className={clsxMerge(STYLES.statValue, textWhite)}>{stat.value}</div>
    <div className={clsxMerge(STYLES.statLabel, textWhite)}>{stat.label}</div>
  </div>
);

const HighlightCard = ({ highlight }: { highlight: Highlight }) => (
  <div className={clsxMerge(STYLES.highlightCard, highlight.hoverColor)}>
    <h3 className={clsxMerge(STYLES.highlightTitle, textPrimary)}>
      {highlight.icon} {highlight.title}
    </h3>
    {highlight.lines.map((line, i) => (
      <p key={i} className={clsxMerge(STYLES.highlightText, textSecondary)}>
        {line}
      </p>
    ))}
  </div>
);

const StoryArticle = ({ article, index }: { article: Article; index: number }) => (
  <div
    className={clsxMerge(
      STYLES.storyRow,
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    )}
  >
    <div className={STYLES.storyImageWrapper}>
      <div className={STYLES.storyImage}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-contain p-6 md:p-8"
          unoptimized
        />
      </div>
    </div>
    <div className={STYLES.storyContent}>
      <h3 className={clsxMerge(STYLES.storyTitle, textPrimary)}>
        {article.title}
      </h3>
      <p className={clsxMerge(STYLES.storyDescription, textBody)}>
        {article.description}
      </p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className={clsxMerge("fixed inset-0", bgPrimary)}>
      <div className={clsxMerge("overflow-y-auto h-full w-full hide-scrollbar")}>
        <div className={STYLES.container}>
          {/* Hero Image */}
          <div className={STYLES.heroImage}>
            <Image
              src="/home/about-hero.svg?v=2"
              alt="About Me Hero Image"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <HR />

          {/* Overview */}
          <div className={clsxMerge(STYLES.overviewText, textBody)}>
            {overviewText}
          </div>

          {/* Summary Stats */}
          <div className={STYLES.statGrid}>
            {SUMMARY_STATS.map((stat, idx) => (
              <StatCardComponent key={idx} stat={stat} />
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h2 className={clsxMerge(STYLES.sectionTitle, textPrimary)}>
              Key Highlights
            </h2>
            <div className={STYLES.highlightGrid}>
              {KEY_HIGHLIGHTS.map((highlight, idx) => (
                <HighlightCard key={idx} highlight={highlight} />
              ))}
            </div>
          </div>

          <HR />

          {/* Story Articles */}
          <div className={STYLES.storyGrid}>
            {ABOUT_STORY.map((article, idx) => (
              <StoryArticle key={idx} article={article} index={idx} />
            ))}
          </div>
          <div className={clsxMerge("h-12")}></div>
        </div>
      </div>
    </div>
  );
}
