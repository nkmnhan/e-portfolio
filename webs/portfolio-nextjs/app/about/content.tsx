import { motion } from "framer-motion";

// Personal info (from HERO_INFO and overviewText)
const HERO_INFO = {
  name: "Tony Nguyen",
  title: "Senior Software Engineer",
  experience: "8+ Years Experience",
  technologies: [".NET Core", "Microservices", "Cloud Architecture"],
};
const overviewText = `Hi, I'm Tony Nguyen (Nhan), a Senior Software Engineer with 8+ years of experience specializing in .NET Core, JavaScript frameworks, and microservices architecture. I'm passionate about building scalable, maintainable solutions and driving technical excellence in cross-functional teams. With a strong foundation in Agile/Scrum methodologies, I thrive on creating innovative web and mobile applications that solve real-world problems. My journey in tech has been driven by curiosity, continuous learning, and a commitment to clean code and system performance. Let's collaborate to bring your vision to life!`;

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
            Jerome bergamaschi
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
            web designer
            <br />
            freelance
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
                UX/UI Designer and Artistic Director based in Aix-en-Provence,
                France.
                <br />
                <br />
                Passionate about the design of User Interface, linking
                interactivity and user experience. I had the privilege of
                working with major brands, agencies and remarkable people for
                more than 20 years and thus be able to broaden my skills in
                different areas of design, digital and print.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Skills</h3>
              <div className="flex w-full h-auto flex-wrap items-center gap-2">
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  art direction
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.25 }}
                  viewport={{ once: true }}
                >
                  ui
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  ux
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.35 }}
                  viewport={{ once: true }}
                >
                  webdesign
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  viewport={{ once: true }}
                >
                  prototyping
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.45 }}
                  viewport={{ once: true }}
                >
                  brand identity
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  viewport={{ once: true }}
                >
                  display
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.55 }}
                  viewport={{ once: true }}
                >
                  crm
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  viewport={{ once: true }}
                >
                  2d animations
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.65 }}
                  viewport={{ once: true }}
                >
                  print
                </motion.div>
              </div>
              <div className="p-4"></div>
              <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Tools</h3>
              <div className="flex w-full h-auto flex-wrap items-center gap-2">
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  figma
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.75 }}
                  viewport={{ once: true }}
                >
                  adobe xd
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  viewport={{ once: true }}
                >
                  photoshop
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.85 }}
                  viewport={{ once: true }}
                >
                  illustrator
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  viewport={{ once: true }}
                >
                  after effect
                </motion.div>
                <motion.div
                  className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.95 }}
                  viewport={{ once: true }}
                >
                  webflow
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              viewport={{ once: true }}
            >
              <p className="mb-0 text-sm leading-5 italic">
                I have known Jerome for over 20 years and the results have
                always been top notch. A senior designer as we rarely see, and
                above all very responsive.
              </p>
              <div className="p-2"></div>
              <p className="mb-0 text-sm leading-5">
                <span className="font-semibold">
                  David Sitbon
                  <br />
                </span>
                CMO - Leia Inc.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col justify-start items-start"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-0 text-sm leading-5 italic">
                Jerome is a talented designer with whom I have been fortunate
                enough to work for over 15 years now. Its ability to reinvent
                itself in a constantly evolving universe, in order to follow new
                trends, styles, or use new tools, will always continue to amaze
                me. He's also an efficient and loyal person on who you can count
                on, in all situation.
              </p>
              <div className="p-2"></div>
              <p className="mb-0 text-sm leading-5">
                <span className="font-semibold">
                  Romain Braban
                  <br />
                </span>
                Founder &amp; CEO - SEO Buddy
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
