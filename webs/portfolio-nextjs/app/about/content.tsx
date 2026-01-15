import { motion } from "framer-motion";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { ImNewTab } from "react-icons/im";
import { HERO_INFO, HERO_OVERVIEW, KEY_HIGHLIGHTS } from "./data";
import { MasonryLayout } from "../components/masonry-layout";

// Section data constants (raw data, not from ABOUT_STORY)
const SKILLS = [
  "Backend: C#, .NET Core, ASP.NET Core",
  "Frontend: React, Vue.js, Angular, Next.js",
  "Mobile: .NET MAUI, TypeScript",
  "Database: PostgreSQL, MongoDB, Elasticsearch",
  "Cloud: AWS, Azure, Lambda",
  "DevOps: Docker, Kubernetes, GoCD",
  "Testing: Playwright, xUnit",
  "APIs: REST, gRPC, SignalR",
];

const JOURNEY = {
  title: "My Journey",
  description:
    "Starting as a Software Engineer at Hitachi Consulting Vietnam in 2016, I worked on semiconductor manufacturing systems and enterprise solutions. In 2019, I advanced to Senior Software Engineer, leading microservices development for European and Singaporean clients at NASH TECH and Orient Software. My career has evolved from backend systems to building innovative digital learning platforms and mobile applications using .NET MAUI, Angular, and AWS.",
  timeline: [
    {
      period: "2016 - 2018",
      company: "Hitachi Consulting Vietnam",
      description: "Semiconductor Systems",
      title: "Software Engineer",
    },
    {
      period: "2018 - 2024",
      company: "NASH TECH / Orient Software",
      description: "Microservices Leadership",
      title: "Senior Software Engineer",
    },
    {
      period: "2024 - Present",
      company: "Full-Stack Development",
      description: ".NET MAUI, Angular, AWS",
      title: "Full-Stack Developer",
    },
  ],
};

const PROJECTS = {
  title: "Projects",
  description:
    "Led development on MOE platform for Singapore's Ministry of Education (2020-present), building .NET MAUI mobile apps, AWS Lambda functions, and implementing Playwright automation. Architected Lowell microservices system on Azure for European clients. Contributed to Open Create for UK's Open University, transforming static materials into dynamic learning experiences. Built MES systems for semiconductor factories using IBM frameworks.",
  items: [
    {
      name: "MOE Platform - Ministry of Education Singapore",
      technologies: ".NET MAUI, AWS Lambda, Playwright",
    },
    {
      name: "Lowell Microservices - European Clients",
      technologies: "Azure, .NET Core, Event-Driven Architecture",
    },
    {
      name: "Open Create - UK Open University",
      technologies: "Dynamic Learning Platform, Angular, Node.js",
    },
    {
      name: "MES Systems - Semiconductor Manufacturing",
      technologies: "IBM Frameworks, Real-time Monitoring",
    },
  ],
};

const TECHNOLOGIES = {
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
};

export default function Content() {
  return (
    <motion.div
      className="overflow-hidden z-1 flex w-full h-auto pt-16 pb-16 flex-col justify-start items-center bg-linear-to-b from-[#2f122e] to-[#020016]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full h-auto max-w-7xl mx-auto px-8 flex flex-col justify-start items-center">
        <motion.div
          className="flex flex-col justify-start items-center text-center uppercase"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-0 text-4xl md:text-6xl leading-12 md:leading-16 ">
            {HERO_INFO.name}
          </h1>
          <motion.h2
            className="mb-0 text-4xl md:text-8xl leading-14 md:leading-24 font-bold"
            style={{
              backgroundImage: "url(/about/bg.png)",
              backgroundPosition: "50% 0%",
              backgroundSize: "cover",
              backgroundAttachment: "scroll",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {HERO_INFO.title}
          </motion.h2>
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start text-left mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <MasonryLayout className="w-full h-auto gap-8 md:gap-10 lg:columns-2 xl:columns-2 2xl:columns-2">
            {/* About Overview */}
            <motion.div
              className="flex flex-col justify-start items-start text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {HERO_OVERVIEW}
            </motion.div>

            {/* Core Skills */}
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">
                Core Skills
              </h3>
              <div className="flex w-full h-auto flex-wrap items-center gap-2">
                {SKILLS.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Keys */}
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Keys</h3>
              <div className="flex w-full h-auto flex-wrap items-center gap-2">
                {KEY_HIGHLIGHTS.map((highlight, idx) => (
                  <motion.div
                    key={highlight.title}
                    className="flex flex-col items-start px-3 py-2 rounded bg-[#2f122e] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider mb-2 shadow-md min-w-[220px]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{highlight.icon}</span>
                      <span className="font-bold uppercase text-[#f2e5d9]">
                        {highlight.title}
                      </span>
                    </div>
                    <ul className="list-disc pl-5">
                      {highlight.lines.map((line, lidx) => (
                        <li key={lidx} className="mb-0.5 text-[#e4b3a3]">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* My Journey Timeline */}
            {JOURNEY && Array.isArray(JOURNEY.timeline) && (
              <motion.div
                className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">
                  {JOURNEY.title}
                </h4>
                <p className="mb-4 text-base text-[#f2e5d9]">
                  {JOURNEY.description}
                </p>
                <Timeline>
                  {[...JOURNEY.timeline].reverse().map((entry, idx) => (
                    <TimelineItem key={idx}>
                      <TimelinePoint />
                      <TimelineContent>
                        <TimelineTime className="text-[#e4b3a3] font-bold">
                          {entry.period}
                        </TimelineTime>
                        <TimelineTitle className="font-semibold text-[#f2e5d9]">
                          {entry.title}
                        </TimelineTitle>
                        <TimelineBody>
                          <div className="text-[#e4b3a3]">{entry.company}</div>
                          <div className="text-[#e4b3a3] italic">
                            {entry.description}
                          </div>
                        </TimelineBody>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </motion.div>
            )}

            {/* Projects & Creations */}
            {PROJECTS && Array.isArray(PROJECTS.items) && (
              <motion.div
                className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">
                  {PROJECTS.title}
                </h4>
                <p className="mb-4 text-base text-[#f2e5d9]">
                  {PROJECTS.description}
                </p>
                <div className="grid grid-cols-1 gap-4 w-full">
                  {PROJECTS.items.map((proj, idx) => (
                    <div
                      key={proj.name}
                      className="bg-[#2f122e] rounded-lg p-4 shadow flex flex-col gap-2 border border-[#702d4c]"
                    >
                      <div className="font-bold text-lg text-[#f2e5d9]">
                        {proj.name}
                      </div>
                      <div className="text-[#e4b3a3] text-base">
                        {proj.technologies}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technologies I Love */}
            {TECHNOLOGIES && Array.isArray(TECHNOLOGIES.textContent) && (
              <motion.div
                className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">
                  {TECHNOLOGIES.title}
                </h4>
                <p className="mb-4 text-base text-[#f2e5d9]">
                  {TECHNOLOGIES.description}
                </p>
                <div className="flex w-full h-auto flex-wrap items-center gap-2">
                  {TECHNOLOGIES.textContent.map((item, idx) => (
                    <span
                      key={item}
                      className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9] mb-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* My Github */}
            <motion.div
              className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">Github</h4>
              <p className="text-[#f2e5d9] text-base mb-4">
                Explore my open-source projects, code samples, and technical
                experiments on GitHub. I regularly share personal, enterprise,
                and experimental repositories covering .NET, JavaScript, cloud,
                DevOps, and more. Connect with me or check out my latest work at{" "}
                <a
                  href="https://github.com/nkmnhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center underline text-[#e4b3a3] hover:text-[#f2e5d9] transition-colors duration-200"
                  style={{ textDecoration: "underline" }}
                  aria-label="Visit my Github"
                >
                  github.com/nkmnhan
                  <ImNewTab className="ml-1" />
                </a>
                .
              </p>
            </motion.div>
          </MasonryLayout>
        </motion.div>
      </div>
    </motion.div>
  );
}
