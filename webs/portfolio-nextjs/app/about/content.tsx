
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
import { HERO_INFO, HERO_OVERVIEW, SUMMARY_STATS, KEY_HIGHLIGHTS, ABOUT_STORY }  from "./data";

export default function Content() {
  // All sections as an array of render functions
  const sections = [
    // About Overview
    () => (
      <motion.div
        key="about-overview"
        className="flex flex-col justify-start items-start text-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="mb-0 text-lg leading-6">
          {HERO_INFO.title}.<br /><br />
          {HERO_OVERVIEW}
        </p>
      </motion.div>
    ),
    // Core Skills
    () => (
      <motion.div
        key="core-skills"
        className="flex flex-col justify-start items-start"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Core Skills</h3>
        <div className="flex w-full h-auto flex-wrap items-center gap-2">
          {(ABOUT_STORY.find((s) => s.title === "Skills & Expertise")?.textContent ?? []).map((skill, idx) => (
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
    ),
    // Keys
    () => (
      <motion.div
        key="keys"
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
                <span className="font-bold uppercase text-[#f2e5d9]">{highlight.title}</span>
              </div>
              <ul className="list-disc pl-5">
                {highlight.lines.map((line, lidx) => (
                  <li key={lidx} className="mb-0.5 text-[#e4b3a3]">{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
    // My Journey Timeline
    () => {
      const journey = ABOUT_STORY.find((s) => s.title === "My Journey");
      if (!journey || !Array.isArray(journey.timeline)) return null;
      const reversedTimeline = [...journey.timeline].reverse();
      return (
        <motion.div
          key="my-journey"
          className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">{journey.title}</h4>
          <p className="mb-4 text-base text-[#f2e5d9]">{journey.description}</p>
          <Timeline>
            {reversedTimeline.map((entry, idx) => (
              <TimelineItem key={idx}>
                <TimelinePoint />
                <TimelineContent>
                  <TimelineTime className="text-[#e4b3a3] font-bold">{entry.period}</TimelineTime>
                  <TimelineTitle className="font-semibold text-[#f2e5d9]">{entry.title}</TimelineTitle>
                  <TimelineBody>
                    <div className="text-[#e4b3a3]">{entry.company}</div>
                    <div className="text-[#e4b3a3] italic">{entry.description}</div>
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      );
    },
    // Projects & Creations
    () => {
      const projects = ABOUT_STORY.find((s) => s.title === "Projects & Creations");
      if (!projects || !Array.isArray(projects.textContent)) return null;
      return (
        <motion.div
          key="projects-creations"
          className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">{projects.title}</h4>
          <p className="mb-4 text-base text-[#f2e5d9]">{projects.description}</p>
          <ul className="list-none w-full">
            {projects.textContent.map((item, idx) => {
              if (item.startsWith("━━")) {
                return <li key={idx} className="my-3 border-b border-[#702d4c] w-full"></li>;
              }
              if (/^([\u{1F300}-\u{1FAFF}]).*/u.test(item)) {
                return <li key={idx} className="font-bold text-[#f2e5d9] mt-2 mb-1 flex items-center text-lg">{item}</li>;
              }
              return <li key={idx} className="text-[#e4b3a3] ml-4 mb-1">{item}</li>;
            })}
          </ul>
        </motion.div>
      );
    },
    // Technologies I Love
    () => {
      const tech = ABOUT_STORY.find((s) => s.title === "Technologies I Love");
      if (!tech || !Array.isArray(tech.textContent)) return null;
      return (
        <motion.div
          key="technologies-love"
          className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">{tech.title}</h4>
          <p className="mb-4 text-base text-[#f2e5d9]">{tech.description}</p>
          <div className="flex w-full h-auto flex-wrap items-center gap-2">
            {tech.textContent.map((item, idx) => (
              <span
                key={item}
                className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9] mb-1"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      );
    },
    // My Github
    () => (
      <motion.div
        key="my-github"
        className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">Github</h4>
        <p className="text-[#f2e5d9] text-base mb-4">
          Explore my open-source projects, code samples, and technical experiments on GitHub. I regularly share personal, enterprise, and experimental repositories covering .NET, JavaScript, cloud, DevOps, and more. Connect with me or check out my latest work at <span className="underline text-[#e4b3a3]">github.com/nkmnhan</span>.
        </p>
        <a
          href="https://github.com/nkmnhan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 rounded bg-[#531431] text-[#e4b3a3] text-lg leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9] transition-colors duration-200"
          style={{ textDecoration: 'none' }}
          aria-label="Visit my Github"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 align-middle">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
        </a>
      </motion.div>
    ),
  ];

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
          <h1 className="mb-0 text-4xl md:text-6xl leading-12 md:leading-16 ">{HERO_INFO.name}</h1>
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
        <div className="p-8"></div>
        <motion.div
          className="flex flex-col justify-start items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full h-auto">
            {sections.map((Section, idx) => (
              <div key={idx} className="break-inside-avoid">
                <Section />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
