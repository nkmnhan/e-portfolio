import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const CONTACTS = [
  {
    key: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nhan-nguyen-813494167/',
    icon: FaLinkedinIn,
    delay: 0.8,
  },
  {
    key: 'github',
    title: 'GitHub',
    href: 'https://github.com/nkmnhan',
    icon: FaGithub,
    delay: 0.9,
  },
  {
    key: 'gmail',
    title: 'Gmail',
    href: 'mailto:nkmnhan@gmail.com',
    icon: SiGmail,
    delay: 0.95,
  },
  {
    key: 'facebook',
    title: 'Facebook',
    href: 'https://www.facebook.com/nkmnhan',
    icon: FaFacebookF,
    delay: 0.85,
  },
];
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
      </div>
      <motion.div
        className="flex flex-col justify-start items-center text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="z-6 flex flex-row justify-center flex-wrap items-center gap-4">
          {CONTACTS.map(({ key, title, href, icon: Icon, delay }) => (
            <motion.div
              key={key}
              className="relative flex justify-center items-center font-['Fa brands 400'] text-[#e4b3a3] text-[1.2rem] leading-none"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay }}
              viewport={{ once: true }}
            >
              <a
                title={title}
                href={href}
                target="_blank"
                className="w-12 h-12 rounded-full no-underline flex justify-center items-center"
              >
                <Icon className="absolute z-3 text-[#e4b3a3]" />
                <div className="absolute z-2 hidden w-12 h-12 rounded-full bg-[#cb7f65]"></div>
                <div className="absolute z-1 w-12 h-12 rounded-full bg-[#531431]"></div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
