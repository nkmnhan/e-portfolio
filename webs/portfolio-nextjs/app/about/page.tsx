import Image from "next/image";
import { HR } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textBody, textWhite, textPrimary } from "@/app/components/themes/default-text";

const overviewText = `Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams. With a strong foundation in Agile/Scrum methodologies, I thrive on creating innovative web and mobile applications that solve real-world problems. My journey in tech has been driven by curiosity, continuous learning, and a commitment to clean code and system performance. Let's collaborate to bring your vision to life!`;

const ABOUT_STORY = [
  {
    title: "My Journey",
    description:
      "Starting as a Software Engineer at Hitachi Consulting Vietnam in 2016, I worked on semiconductor manufacturing systems and enterprise solutions. In 2019, I advanced to Senior Software Engineer, leading microservices development for European and Singaporean clients at NASH TECH and Orient Software. My career has evolved from backend systems to building innovative digital learning platforms and mobile applications using .NET MAUI, Angular, and AWS.",
    image: "/home/journey.svg",
  },
  {
    title: "Skills & Expertise",
    description:
      "Core expertise in C# (.NET Core 8, ASP.NET Core), JavaScript/TypeScript (Angular 19, Vue.js, React, Next.js), and microservices architecture. Proficient in databases (PostgreSQL, SQL Server, MongoDB, Elasticsearch), cloud platforms (AWS, Azure), DevOps (Docker, Kubernetes, GoCD), and testing (Playwright). Specialized in REST APIs, gRPC, serverless functions, and mobile development with .NET MAUI.",
    image: "/home/skills.svg",
  },
  {
    title: "Projects & Creations",
    description:
      "Led development on MOE platform for Singapore's Ministry of Education (2020-present), building .NET MAUI mobile apps, AWS Lambda functions, and implementing Playwright automation. Architected Lowell microservices system on Azure for European clients. Contributed to Open Create for UK's Open University, transforming static materials into dynamic learning experiences. Built MES systems for semiconductor factories using IBM frameworks.",
    image: "/home/projects.svg",
  },
  {
    title: "Technologies I Love",
    description:
      "Passionate about the .NET ecosystem (.NET Core, C#, MAUI), modern JavaScript frameworks (Angular, React, Vue), cloud-native architecture (AWS Lambda, Azure Service Bus), containerization (Docker, Kubernetes), message queuing (RabbitMQ), and identity management (IdentityServer 4). Always exploring cutting-edge tools to deliver high-performance, scalable solutions.",
    image: "/home/tech.svg",
  },
];

export default function About() {
  return (
    <div className={clsxMerge("fixed inset-0 p-20", bgPrimary)}>
      <div className={clsxMerge("overflow-y-auto h-full w-full hide-scrollbar")}>
        {/* Top Image */}
        <div className={clsxMerge("relative w-full h-[96px] rounded-lg overflow-hidden mb-8")}>
          <Image
            src="/home/about-hero.svg"
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