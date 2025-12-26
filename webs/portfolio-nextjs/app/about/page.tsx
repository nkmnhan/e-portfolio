"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { clsxMerge } from "../components/themes";
import Logo from "./logo";
import Hero from "./hero";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaFacebookF,
} from "react-icons/fa";
import { AdaptiveImage } from "../components/images";
import Cover from "./cover";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  


  return (
    <div
      ref={ref}
      className={clsxMerge(
        "text-[#e4b3a3] bg-[#2f122e]",
        "fixed w-full h-full overflow-auto"
      )}
    >
      <div className="h-fit w-full">
        <Cover />
        <Hero containerRef={ref as RefObject<HTMLElement>} />
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
                    UX/UI Designer and Artistic Director based in
                    Aix-en-Provence, France.
                    <br />
                    <br />
                    Passionate about the design of User Interface, linking
                    interactivity and user experience. I had the privilege of
                    working with major brands, agencies and remarkable people
                    for more than 20 years and thus be able to broaden my skills
                    in different areas of design, digital and print.
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col justify-start items-start"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">
                    Skills
                  </h3>
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
                  <h3 className="mt-0 mb-4 text-xl leading-8 font-bold">
                    Tools
                  </h3>
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
                    always been top notch. A senior designer as we rarely see,
                    and above all very responsive.
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
                    Jerome is a talented designer with whom I have been
                    fortunate enough to work for over 15 years now. Its ability
                    to reinvent itself in a constantly evolving universe, in
                    order to follow new trends, styles, or use new tools, will
                    always continue to amaze me. He's also an efficient and
                    loyal person on who you can count on, in all situation.
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
        <motion.div
          className="relative flex overflow-hidden w-full h-auto mx-auto flex-col justify-between items-center bg-[rgb(2,0,22)] px-16 pb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute z-0 flex w-full h-100 max-w-480 mx-auto flex-col justify-end items-center">
            <AdaptiveImage
              fill
              preload
              src="/about/bg-footer.png"
              sizes="100vw"
              alt=""
              containerClass="relative w-full h-full"
              className="object-cover p-8 sm:p-0"
            />
          </div>
          <div className="z-1 flex w-full h-full max-w-7xl mx-auto pt-8 pb-8 flex-col justify-between items-center text-center">
            <motion.div
              className="flex flex-col justify-start items-center text-center"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-0 text-2xl md:text-4xl leading-8 md:leading-10 font-bold text-white">
                Available for amazing projects!
              </h2>
              <div className="mb-0 text-lg md:text-2xl leading-6 md:leading-8 text-white">
                Contact me and let's talk.
              </div>
              <div className="p-4" />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </div>
          <div className="p-8"></div>
          <motion.div
            className="flex flex-col justify-start items-center text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="z-6 flex flex-row justify-center flex-wrap items-center gap-4">
              <motion.div
                className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.85 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.95 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
