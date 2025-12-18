import { HR } from "flowbite-react";
import AdaptiveImage from "../components/images/adaptive-image";

// Types
type Article = {
  title: string;
  description: string;
  image?: string;
  textContent?: string[];
  bgColor?: string;
  textColor?: string;
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
  borderColor: string;
};

// Data
const overviewText = `Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams. With a strong foundation in Agile/Scrum methodologies, I thrive on creating innovative web and mobile applications that solve real-world problems. My journey in tech has been driven by curiosity, continuous learning, and a commitment to clean code and system performance. Let's collaborate to bring your vision to life!`;

const SUMMARY_STATS: StatCard[] = [
  {
    value: "8+",
    label: "Years Experience",
    gradient: "bg-linear-to-br from-blue-500 to-purple-600",
  },
  {
    value: "10+",
    label: "Major Projects",
    gradient: "bg-linear-to-br from-green-500 to-teal-600",
  },
  {
    value: "20+",
    label: "Technologies",
    gradient: "bg-linear-to-br from-orange-500 to-red-600",
  },
  {
    value: "3",
    label: "Countries Served",
    gradient: "bg-linear-to-br from-pink-500 to-purple-600",
  },
];

const KEY_HIGHLIGHTS: Highlight[] = [
  {
    icon: "🎓",
    title: "Education",
    lines: [
      "Bachelor of Information Technology",
      "University of Information Technology",
    ],
    borderColor:
      "border-blue-300 dark:border-blue-600 cyan700:border-cyan-400 hover:border-blue-500 dark:hover:border-blue-400 cyan700:hover:border-cyan-300",
  },
  {
    icon: "💼",
    title: "Current Role",
    lines: ["Senior Software Engineer", "Orient Software (2019 - Present)"],
    borderColor:
      "border-green-300 dark:border-green-600 cyan700:border-cyan-400 hover:border-green-500 dark:hover:border-green-400 cyan700:hover:border-cyan-300",
  },
  {
    icon: "🏆",
    title: "Specializations",
    lines: ["Microservices Architecture", "Cloud-Native Development"],
    borderColor:
      "border-orange-300 dark:border-orange-600 cyan700:border-cyan-400 hover:border-orange-500 dark:hover:border-orange-400 cyan700:hover:border-cyan-300",
  },
  {
    icon: "🌏",
    title: "Global Impact",
    lines: [
      "Singapore, Europe, Vietnam",
      "Education, E-commerce, Manufacturing",
    ],
    borderColor:
      "border-pink-300 dark:border-pink-600 cyan700:border-cyan-400 hover:border-pink-500 dark:hover:border-pink-400 cyan700:hover:border-cyan-300",
  },
];

const ABOUT_STORY: Article[] = [
  {
    title: "My Journey",
    description:
      "Starting as a Software Engineer at Hitachi Consulting Vietnam in 2016, I worked on semiconductor manufacturing systems and enterprise solutions. In 2019, I advanced to Senior Software Engineer, leading microservices development for European and Singaporean clients at NASH TECH and Orient Software. My career has evolved from backend systems to building innovative digital learning platforms and mobile applications using .NET MAUI, Angular, and AWS.",
    textContent: [
      "2016 - Software Engineer",
      "Hitachi Consulting Vietnam",
      "Semiconductor Systems",
      "━━━━━━━━━━",
      "2018 - Senior Software Engineer",
      "NASH TECH / Orient Software",
      "Microservices Leadership",
      "━━━━━━━━━━",
      "2024 - Present",
      "Full-Stack Development",
      ".NET MAUI, Angular, AWS",
    ],
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/40 dark:to-indigo-950/40 cyan700:from-cyan-600/40 cyan700:to-blue-600/40",
    textColor: "text-blue-900 dark:text-blue-100 cyan700:text-cyan-50",
  },
  {
    title: "Skills & Expertise",
    description:
      "Core expertise in C# (.NET Core 8, ASP.NET Core), JavaScript/TypeScript (Angular 19, Vue.js, React, Next.js), and microservices architecture. Proficient in databases (PostgreSQL, SQL Server, MongoDB, Elasticsearch), cloud platforms (AWS, Azure), DevOps (Docker, Kubernetes, GoCD), and testing (Playwright). Specialized in REST APIs, gRPC, serverless functions, and mobile development with .NET MAUI.",
    textContent: [
      "💻 Backend: C#, .NET Core, ASP.NET Core",
      "🎨 Frontend: React, Vue.js, Angular, Next.js",
      "📱 Mobile: .NET MAUI, TypeScript",
      "🗄️ Database: PostgreSQL, MongoDB, Elasticsearch",
      "☁️ Cloud: AWS, Azure, Lambda",
      "🐳 DevOps: Docker, Kubernetes, GoCD",
      "🧪 Testing: Playwright, xUnit",
      "🔌 APIs: REST, gRPC, SignalR",
    ],
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/40 dark:to-emerald-950/40 cyan700:from-cyan-600/40 cyan700:to-green-600/40",
    textColor: "text-green-900 dark:text-green-100 cyan700:text-cyan-50",
  },
  {
    title: "Projects & Creations",
    description:
      "Led development on MOE platform for Singapore's Ministry of Education (2020-present), building .NET MAUI mobile apps, AWS Lambda functions, and implementing Playwright automation. Architected Lowell microservices system on Azure for European clients. Contributed to Open Create for UK's Open University, transforming static materials into dynamic learning experiences. Built MES systems for semiconductor factories using IBM frameworks.",
    textContent: [
      "🏆 MOE Platform - Ministry of Education Singapore",
      ".NET MAUI, AWS Lambda, Playwright",
      "━━━━━━━━━━",
      "🏛️ Lowell Microservices - European Clients",
      "Azure, .NET Core, Event-Driven Architecture",
      "━━━━━━━━━━",
      "📚 Open Create - UK Open University",
      "Dynamic Learning Platform, Angular, Node.js",
      "━━━━━━━━━━",
      "🏭 MES Systems - Semiconductor Manufacturing",
      "IBM Frameworks, Real-time Monitoring",
    ],
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/40 dark:to-amber-950/40 cyan700:from-cyan-600/40 cyan700:to-orange-600/40",
    textColor: "text-orange-900 dark:text-orange-100 cyan700:text-cyan-50",
  },
  {
    title: "Technologies I Love",
    description:
      "Passionate about the .NET ecosystem (.NET Core, C#, MAUI), modern JavaScript frameworks (Angular, React, Vue), cloud-native architecture (AWS Lambda, Azure Service Bus), containerization (Docker, Kubernetes), message queuing (RabbitMQ), and identity management (IdentityServer 4). Always exploring cutting-edge tools to deliver high-performance, scalable solutions.",
    textContent: [
      ".NET ecosystem: Core, C#, MAUI, Entity Framework",
      "JavaScript: React, Vue.js, Angular, TypeScript",
      "Cloud-Native: Lambda, Service Bus, DynamoDB",
      "Message Queuing: RabbitMQ, Azure Service Bus",
      "Identity: IdentityServer 4, OAuth 2.0, OpenID",
      "Databases: PostgreSQL, SQL Server, MongoDB",
      "Containerization: Docker, Kubernetes, Helm",
      "DevOps: CI/CD, GoCD, GitHub Actions, IaC",
    ],
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40 cyan700:from-cyan-600/40 cyan700:to-purple-600/40",
    textColor: "text-purple-900 dark:text-purple-100 cyan700:text-cyan-50",
  },
];

// Component Helper Functions
const StatCardComponent = ({ stat }: { stat: StatCard }) => (
  <div
    className={`${stat.gradient} text-center p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white`}
  >
    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
    <div className="text-sm md:text-base opacity-90">{stat.label}</div>
  </div>
);

const HighlightCard = ({ highlight }: { highlight: Highlight }) => (
  <div
    className={`p-6 md:p-8 rounded-xl border-2 ${highlight.borderColor} bg-white/85 dark:bg-slate-800/85 cyan700:bg-cyan-500/85 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300`}
  >
    <h3 className="text-xl md:text-2xl font-semibold mb-3 theme-text">
      {highlight.icon} {highlight.title}
    </h3>
    {highlight.lines.map((line, i) => (
      <p key={i} className="text-sm md:text-base theme-text opacity-90">
        {line}
      </p>
    ))}
  </div>
);

const StoryArticle = ({
  article,
  index,
}: {
  article: Article;
  index: number;
}) => (
  <div
    className={`flex flex-col ${
      index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center gap-8 md:gap-12`}
  >
    <div className="w-full md:w-1/2 flex justify-center">
      {article.image ? (
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <AdaptiveImage
            src={article.image}
            alt={article.title}
            fill
            className="object-contain p-6 md:p-8"
            preload
          />
        </div>
      ) : (
        <div
          className={`w-full ${article.bgColor} rounded-2xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300 backdrop-blur-sm border border-white/20 dark:border-white/10`}
        >
          <div
            className={`space-y-3 ${article.textColor} font-mono text-sm md:text-base leading-relaxed`}
          >
            {article.textContent?.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 md:px-0">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 theme-text drop-shadow-md">
        {article.title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-left theme-text drop-shadow-md">
        {article.description}
      </p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="fixed inset-0">
      <div className="overflow-y-auto h-full w-full hide-scrollbar">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Hero Section - Text Based */}
          <div className="relative w-full bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 cyan700:from-cyan-600 cyan700:to-cyan-700 rounded-2xl overflow-hidden shadow-2xl mb-4">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-20 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 theme-text drop-shadow-md">
                Tony Nguyen
              </h1>
              <p className="text-xl md:text-2xl font-semibold theme-text drop-shadow-md mb-4">
                Senior Software Engineer · 8+ Years Experience
              </p>
              <p className="text-lg md:text-xl theme-text drop-shadow-md opacity-90">
                .NET Core · Microservices · Cloud Architecture
              </p>
            </div>
          </div>
          <HR />

          {/* Overview */}
          <div className="text-center text-lg md:text-xl leading-relaxed px-4 md:px-16 mb-12 theme-text drop-shadow-sm">
            {overviewText}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            {SUMMARY_STATS.map((stat, idx) => (
              <StatCardComponent key={idx} stat={stat} />
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center theme-text drop-shadow-md">
              Key Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {KEY_HIGHLIGHTS.map((highlight, idx) => (
                <HighlightCard key={idx} highlight={highlight} />
              ))}
            </div>
          </div>

          <HR />

          {/* Story Articles */}
          <div className="flex flex-col gap-16 md:gap-24">
            {ABOUT_STORY.map((article, idx) => (
              <StoryArticle key={idx} article={article} index={idx} />
            ))}
          </div>
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
}
