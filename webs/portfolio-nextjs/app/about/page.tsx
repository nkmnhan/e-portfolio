"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsxMerge } from "../components/themes";
import AboutLogo from "./about-logo";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { AdaptiveImage } from "../components/images";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const speeds = {
    19: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-11
    18: { x: ["0%", "0%", "0%"], y: ["0%", "4.3516%", "9.9969%"] }, // hero-10
    17: { x: ["0%", "0%", "0%"], y: ["0%", "6.5274%", "14.9954%"] }, // hero-09
    16: { x: ["0%", "0%", "0%"], y: ["0%", "8.7032%", "19.9938%"] }, // hero-08
    15: { x: ["0%", "0%", "0%"], y: ["0%", "10.879%", "24.9922%"] }, // hero-07
    14: { x: ["0%", "6.0752%", "11.7174%"], y: ["0%", "21.758%", "49.9845%"] }, // cloud8
    13: { x: ["0%", "5.3158%", "10.2528%"], y: ["0%", "21.758%", "49.9845%"] }, // cloud7
    12: { x: ["0%", "4.5564%", "8.78808%"], y: ["0%", "19.5822%", "44.986%"] }, // cloud6
    11: { x: ["0%", "3.797%", "7.3234%"], y: ["0%", "17.4064%", "39.9876%"] }, // cloud5
    10: { x: ["0%", "3.0376%", "5.85872%"], y: ["0%", "15.2306%", "34.9892%"] }, // cloud4
    9: { x: ["0%", "2.2782%", "4.39404%"], y: ["0%", "13.0548%", "29.9907%"] }, // cloud3
    8: { x: ["0%", "1.5188%", "2.92936%"], y: ["0%", "10.879%", "24.9922%"] }, // cloud2
    7: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // cloud1, assume 0
    6: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-06, assume 0
    5: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-05
    4: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-04
    3: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-03
    2: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-02
    1: { x: ["0%", "0%", "0%"], y: ["0%", "0%", "0%"] }, // hero-01
  };

  return (
    <div
      className={clsxMerge(
        "flex flex-col items-center",
        "text-[#e4b3a3] bg-[#2f122e]"
      )}
    >
      {/* Loading content */}
      {isLoading && (
        <div
          className={clsxMerge(
            "bg-[#020016]",
            "fixed w-full h-full z-400",
            "animate-shrink-out origin-top animation-delay-2000 [animation-fill-mode:forwards] pointer-events-none"
          )}
        >
          <div
            className={clsxMerge(
              "absolute inset-0 flex items-center justify-center",
              "animate-fade-out animation-delay-1750 [animation-fill-mode:forwards]"
            )}
          >
            <div className="w-60 flex flex-col items-center gap-6">
              <AboutLogo />
              <div className="w-full">
                <div className="relative h-1 w-full overflow-hidden rounded bg-gray-200">
                  <div
                    className={clsxMerge(
                      "absolute left-0 top-0 h-1 w-1/3",
                      "bg-[#cb7f65]",
                      "animate-loading-bar"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative flex overflow-hidden w-full h-auto mx-auto flex-row justify-center items-start text-center">
        <div className="relative flex overflow-hidden w-full h-screen mx-auto justify-center items-center">
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[19].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[19].y)
            }}
            className="absolute inset-0 z-19 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-11.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto translate-y-0.5 object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[18].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[18].y)
            }}
            className="absolute inset-0 z-18 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-10.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[17].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[17].y)
            }}
            className="absolute inset-0 z-17 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-09.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[16].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[16].y)
            }}
            className="absolute inset-0 z-16 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-08.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[15].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[15].y)
            }}
            className="absolute inset-0 z-15 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-07.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-30%", "0%"] }}
            transition={{ duration: 120, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[14].y)
            }}
            className="absolute inset-0 z-14 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud8.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-25%", "0%"] }}
            transition={{ duration: 140, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[13].y)
            }}
            className="absolute inset-0 z-13 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud7.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-25%", "0%"] }}
            transition={{ duration: 140, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[12].y)
            }}
            className="absolute inset-0 z-12 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud6.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-20%", "0%"] }}
            transition={{ duration: 160, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[11].y)
            }}
            className="absolute inset-0 z-11 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud5.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-20%", "0%"] }}
            transition={{ duration: 160, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[10].y)
            }}
            className="absolute inset-0 z-10 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud4.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-30%", "0%"] }}
            transition={{ duration: 120, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[9].y)
            }}
            className="absolute inset-0 z-9 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud3.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-30%", "0%"] }}
            transition={{ duration: 120, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[8].y)
            }}
            className="absolute inset-0 z-8 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud2.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            animate={{ x: ["0%", "-20%", "0%"] }}
            transition={{ duration: 160, repeat: Infinity, ease: "easeInOut" }}
            style={{
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[7].y)
            }}
            className="absolute inset-0 z-7 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-cloud1.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[6].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[6].y)
            }}
            className="absolute inset-0 z-6 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-06.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[5].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[5].y)
            }}
            className="absolute inset-0 z-5 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-05.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[4].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[4].y)
            }}
            className="absolute inset-0 z-4 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-04.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[3].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[3].y)
            }}
            className="absolute inset-0 z-3 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-03.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[2].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[2].y)
            }}
            className="absolute inset-0 z-2 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-02.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 0.5, 1], speeds[1].x),
              y: useTransform(scrollYProgress, [0, 0.5, 1], speeds[1].y)
            }}
            className="absolute inset-0 z-1 w-full h-auto"
          >
            <AdaptiveImage fill
              preload
              src="/about/hero-01.png"
              sizes="100vw"
              alt=""
              className="w-full h-auto object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
      <div className="z-1 flex w-full h-auto pt-16 pb-16 flex-col justify-start items-center bg-linear-to-b from-[#2f122e] to-[#020016]">
        <div className="w-full h-auto max-w-7xl mx-auto px-8 flex flex-col justify-start items-center">
          <div className="flex flex-col justify-start items-center text-center uppercase">
            <h1 className="mb-0 text-4xl md:text-6xl leading-12 md:leading-16 ">Jerome bergamaschi</h1>
            <h2
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
            >
              web designer
              <br />
              freelance
            </h2>
          </div>
          <div className="p-8"></div>
          <div className="flex flex-col justify-start items-start text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 w-full h-auto">
              <div
                id="w-node-_23bd48a8-76c4-6967-d4f5-c897902a16ca-8fbea82d"
                className="flex flex-col justify-start items-start text-left"
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
              </div>
              <div className="flex flex-col justify-start items-start">
                <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">
                  Skills
                </h3>
                <div className="flex w-full h-auto flex-wrap items-center gap-2">
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    art direction
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    ui
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    ux
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    webdesign
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    prototyping
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    brand identity
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    display
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    crm
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    2d animations
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    print
                  </div>
                </div>
                <div className="p-4"></div>
                <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">Tools</h3>
                <div className="flex w-full h-auto flex-wrap items-center gap-2">
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    figma
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    adobe xd
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    photoshop
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    illustrator
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    after effect
                  </div>
                  <div className="px-2 py-1 rounded bg-[#531431] text-[#e4b3a3] text-sm leading-5 font-medium tracking-wider uppercase cursor-pointer hover:bg-[#702d4c] hover:text-[#f2e5d9]">
                    webflow
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
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
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="mb-0 text-sm leading-5 italic">
                  Jerome is a talented designer with whom I have been fortunate
                  enough to work for over 15 years now. Its ability to reinvent
                  itself in a constantly evolving universe, in order to follow
                  new trends, styles, or use new tools, will always continue to
                  amaze me. He's also an efficient and loyal person on who you
                  can count on, in all situation.
                </p>
                <div className="p-2"></div>
                <p className="mb-0 text-sm leading-5">
                  <span className="font-semibold">
                    Romain Braban
                    <br />
                  </span>
                  Founder &amp; CEO - SEO Buddy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex overflow-hidden w-full h-auto mx-auto flex-col justify-between items-center bg-[rgb(2,0,22)] px-16 pb-24">
        <div className="absolute z-0 flex w-full h-100 max-w-480 mx-auto flex-col justify-end items-center">
          <AdaptiveImage fill
            preload
            src="/about/bg-footer.png"
            sizes="100vw"
            alt=""
            className="object-scale-down"
          />
        </div>
        <div className="z-1 flex w-full h-full max-w-7xl mx-auto pt-8 pb-8 flex-col justify-between items-center text-center">
          <div className="flex flex-col justify-start items-center text-center">
            <h2 className="mb-0 text-2xl md:text-4xl leading-8 md:leading-10 font-bold text-white">
              Available for amazing projects!
            </h2>
            <div className="mb-0 text-lg md:text-2xl leading-6 md:leading-8 text-white">
              Contact me and let's talk.
            </div>
            <div className="p-4" />
          </div>
          <div className="relative">
            <a
              href="mailto:contact@bgsprod.com"
              className="relative z-100 overflow-hidden border-0 rounded-full text-[#333] no-underline inline-block"
            >
              <div className="flex min-h-16 px-16 justify-center items-center bg-[#531431] text-[#e4b3a3] text-base font-semibold uppercase">
                <div>contact me</div>
              </div>
            </a>
            <div className="absolute inset-0 z-90 m-px rounded-4xl bg-[#d26066] opacity-50"></div>
            <div className="absolute inset-0 z-80 m-px rounded-4xl bg-[#d26066] opacity-50"></div>
            <div className="absolute inset-0 z-70 m-px rounded-4xl bg-[#d26066] opacity-50"></div>
          </div>
        </div>
        <div className="p-8"></div>
        <div className="flex flex-col justify-start items-center text-center">
          <div className="z-6 flex flex-row justify-center flex-wrap items-center gap-4">
            <div className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none">
              <a
                title="LinkedIn"
                href="https://www.linkedin.com/in/jbergamaschi/"
                target="_blank"
                className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
              >
                <FaLinkedinIn className="absolute z-3 text-[#e4b3a3]" />
                <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
                <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
              </a>
            </div>
            <div className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none">
              <a
                title="Behance"
                href="https://www.behance.net/jbergamaschi"
                target="_blank"
                className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
              >
                <FaBehance className="absolute z-3 text-[#e4b3a3]" />
                <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
                <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
              </a>
            </div>
            <div className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none">
              <a
                title="Dribbble"
                href="https://dribbble.com/jbergamaschi"
                target="_blank"
                className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
              >
                <FaDribbble className="absolute z-3 text-[#e4b3a3]" />
                <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
                <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
              </a>
            </div>
            <div className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none">
              <a
                title="Facebook"
                href="https://www.facebook.com/bgsprod"
                target="_blank"
                className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
              >
                <FaFacebookF className="absolute z-3 text-[#e4b3a3]" />
                <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
                <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
              </a>
            </div>
          </div>
          <div className="p-2"></div>
          <div className="mb-0 text-sm leading-5">
            Jerome Bergamaschi -{" "}
            <a
              href="https://bgsprod.com"
              target="_blank"
              className="text-[#e4b3a3] no-underline hover:underline"
            >
              www.bgsprod.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
