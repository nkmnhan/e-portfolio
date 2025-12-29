
import { motion } from "framer-motion";
import { HERO_INFO, HERO_OVERVIEW, SUMMARY_STATS, KEY_HIGHLIGHTS, ABOUT_STORY }  from "./data";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 w-full h-auto">
            <motion.div
              id="w-node-_23bd48a8-76c4-6967-d4f5-c897902a16ca-8fbea82d"
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
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Core Skills</h3>
              <div className="flex w-full h-auto flex-wrap items-center gap-2">
                {ABOUT_STORY.find((s) => s.title === "Skills & Expertise")?.textContent.map((skill, idx) => (
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
              <div className="p-4"></div>
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
              {(() => {
                const journey = ABOUT_STORY.find((s) => s.title === "My Journey");
                if (!journey) return null;
                return (
                  <motion.div
                    className="flex flex-col justify-start items-start bg-[#1a0d1a] rounded-lg p-6 shadow-lg w-full"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-2xl font-bold mb-2 text-[#e4b3a3]">{journey.title}</h4>
                    <p className="mb-4 text-base text-[#f2e5d9]">{journey.description}</p>
                    <ul className="list-none pl-0">
                      {journey.textContent.map((item, idx) => (
                        item.startsWith("━━") ? (
                          <li key={idx} className="my-2 border-b border-[#702d4c] w-full"></li>
                        ) : (
                          <li key={idx} className="mb-1 text-[#e4b3a3] flex items-center">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        )
                      ))}
                    </ul>
                  </motion.div>
                );
              })()}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
