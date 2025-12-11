import Image from "next/image";
import { HR } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textBody, textWhite, textPrimary, textSecondary } from "@/app/components/themes/default-text";

const overviewText = `Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams. With a strong foundation in Agile/Scrum methodologies, I thrive on creating innovative web and mobile applications that solve real-world problems. My journey in tech has been driven by curiosity, continuous learning, and a commitment to clean code and system performance. Let's collaborate to bring your vision to life!`;

const ABOUT_STORY = [
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

export default function About() {
  return (
    <div className={clsxMerge("fixed inset-0 p-20", bgPrimary)}>
      <div className={clsxMerge("overflow-y-auto h-full w-full hide-scrollbar")}>
        {/* Top Image */}
        <div className={clsxMerge("relative w-full h-[96px] rounded-lg overflow-hidden mb-8")}>
          <Image
            src="/home/about-hero.svg?v=2"
            alt="About Me Hero Image"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <HR />
        {/* Overview Text */}
        <div className={clsxMerge("text-center text-lg px-8 mb-8", textBody)}>
          {overviewText}
        </div>
        
        {/* Summary Stats */}
        <div className={clsxMerge("grid grid-cols-2 md:grid-cols-4 gap-6 px-8 mb-8")}>
          <div className={clsxMerge("text-center p-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600")}>
            <div className={clsxMerge("text-4xl font-bold mb-2", textWhite)}>8+</div>
            <div className={clsxMerge("text-sm", textWhite, "opacity-90")}>Years Experience</div>
          </div>
          <div className={clsxMerge("text-center p-6 rounded-lg bg-gradient-to-br from-green-500 to-teal-600")}>
            <div className={clsxMerge("text-4xl font-bold mb-2", textWhite)}>10+</div>
            <div className={clsxMerge("text-sm", textWhite, "opacity-90")}>Major Projects</div>
          </div>
          <div className={clsxMerge("text-center p-6 rounded-lg bg-gradient-to-br from-orange-500 to-red-600")}>
            <div className={clsxMerge("text-4xl font-bold mb-2", textWhite)}>20+</div>
            <div className={clsxMerge("text-sm", textWhite, "opacity-90")}>Technologies</div>
          </div>
          <div className={clsxMerge("text-center p-6 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600")}>
            <div className={clsxMerge("text-4xl font-bold mb-2", textWhite)}>3</div>
            <div className={clsxMerge("text-sm", textWhite, "opacity-90")}>Countries Served</div>
          </div>
        </div>
        
        {/* Key Highlights */}
        <div className={clsxMerge("px-8 mb-8")}>
          <h2 className={clsxMerge("text-2xl font-bold mb-6 text-center", textPrimary)}>Key Highlights</h2>
          <div className={clsxMerge("grid md:grid-cols-2 gap-6")}>
            <div className={clsxMerge("p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700")}>
              <h3 className={clsxMerge("text-lg font-semibold mb-2", textPrimary)}>🎓 Education</h3>
              <p className={clsxMerge("text-sm", textSecondary)}>Bachelor of Information Technology</p>
              <p className={clsxMerge("text-sm", textSecondary)}>University of Information Technology</p>
            </div>
            <div className={clsxMerge("p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700")}>
              <h3 className={clsxMerge("text-lg font-semibold mb-2", textPrimary)}>💼 Current Role</h3>
              <p className={clsxMerge("text-sm", textSecondary)}>Senior Software Engineer</p>
              <p className={clsxMerge("text-sm", textSecondary)}>Orient Software (2019 - Present)</p>
            </div>
            <div className={clsxMerge("p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700")}>
              <h3 className={clsxMerge("text-lg font-semibold mb-2", textPrimary)}>🏆 Specializations</h3>
              <p className={clsxMerge("text-sm", textSecondary)}>Microservices Architecture</p>
              <p className={clsxMerge("text-sm", textSecondary)}>Cloud-Native Development</p>
            </div>
            <div className={clsxMerge("p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700")}>
              <h3 className={clsxMerge("text-lg font-semibold mb-2", textPrimary)}>🌏 Global Impact</h3>
              <p className={clsxMerge("text-sm", textSecondary)}>Singapore, Europe, Vietnam</p>
              <p className={clsxMerge("text-sm", textSecondary)}>Education, E-commerce, Manufacturing</p>
            </div>
          </div>
        </div>
        
        <HR />
        {/* ABOUT_STORY Section */}
        <div className={clsxMerge("flex flex-col gap-24")}>
          {ABOUT_STORY.map((story, idx) => (
            <div
              key={idx}
              className={clsxMerge(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className={clsxMerge("w-full md:w-1/2 flex justify-center")}>
                <div className={clsxMerge("relative w-full h-[200px] md:h-[448px]")}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </div>
              {/* Text */}
              <div className={clsxMerge("w-full md:w-1/2 flex flex-col justify-center items-center text-center")}>
                <h3 className={clsxMerge("text-2xl font-bold mb-4", textPrimary)}>
                  {story.title}
                </h3>
                <p className={clsxMerge("text-base mb-2", textBody)}>
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}