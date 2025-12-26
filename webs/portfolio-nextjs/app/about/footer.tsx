import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AdaptiveImage } from "../components/images";

export default function Footer() {
  return (
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
            href="mailto:tony.nkmnhan@gmail.com"
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
              href="https://www.linkedin.com/in/nhan-nguyen-813494167/"
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
              title="Facebook"
              href="https://www.facebook.com/nkmnhan"
              target="_blank"
              className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
            >
              <FaFacebookF className="absolute z-3 text-[#e4b3a3]" />
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
              title="GitHub"
              href="https://github.com/nkmnhan"
              target="_blank"
              className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
            >
              <FaGithub className="absolute z-3 text-[#e4b3a3]" />
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
              title="Gmail"
              href="mailto:nkmnhan@gmail.com"
              target="_blank"
              className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
            >
              <SiGmail className="absolute z-3 text-[#e4b3a3]" />
              <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
              <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
            </a>
          </motion.div>
        </div>
        <div className="p-2"></div>
        <div className="mb-0 text-sm leading-5 z-6">
          Tony Nguyen -{" "}
          <a
            href="https://github.com/nkmnhan"
            target="_blank"
            className="text-[#e4b3a3] no-underline hover:underline"
          >
            github.com/nkmnhan
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
