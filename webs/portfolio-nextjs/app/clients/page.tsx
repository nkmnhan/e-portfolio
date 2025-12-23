import { Metadata } from "next";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaSlack,
  FaDocker,
  FaAws,
  FaWindows,
  FaLinux,
  FaGitlab,
  FaFigma,
  FaTrello,
  FaJira,
  FaVuejs,
  FaAngular,
  FaPython,
  FaJava,
  FaPhp,
  FaSwift,
  FaRust,
  FaRedhat,
  FaBitbucket,
  FaDribbble,
  FaBehance,
  FaStackOverflow,
  FaWordpress,
  FaShopify,
  FaSalesforce,
  FaDropbox,
} from "react-icons/fa";
import { clsxMerge } from "@/app/components/themes/utils";
import AdaptiveImage from "../components/images/adaptive-image";
import { Galaxy } from "../components/galaxy";

export const metadata: Metadata = {
  title: "Clients | Tony Nguyen Portfolio",
  description: "Trusted clients and partners of Tony Nguyen (Nguyễn Khoa Minh Nhân) in software engineering and web development.",
  keywords: ["clients", "partners", "testimonials", "Tony Nguyen", "Nguyễn Khoa Minh Nhân", "Tony Wilson"],
  openGraph: {
    title: "Tony Nguyen's Clients",
    description: "See who trusts Tony Nguyen for their software projects.",
    images: ["/astronaut.png"],
  },
};

const ICONS = [
  FaApple,
  FaAndroid,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaSlack,
  FaDocker,
  FaAws,
  FaWindows,
  FaLinux,
  FaGitlab,
  FaFigma,
  FaTrello,
  FaJira,
  FaVuejs,
  FaAngular,
  FaPython,
  FaJava,
  FaPhp,
  FaSwift,
  FaRust,
  FaRedhat,
  FaBitbucket,
  FaDribbble,
  FaBehance,
  FaStackOverflow,
  FaWordpress,
  FaShopify,
  FaSalesforce,
  FaDropbox,
];

export default function Clients() {
  const shuffledIcons = [...ICONS].sort(() => Math.random() - 0.5);

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans">
      {/* Content above background */}
      <Galaxy className="absolute inset-0" />
      <div
        className={clsxMerge(
          "relative z-10 mx-auto overflow-x-hidden hide-scrollbar",
          "max-w-[80vw] max-h-[76vh]",
          "grid grid-cols-2 gap-4 md:gap-8", // responsive gap
          "sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-10",
          "place-items-center"
        )}
      >
        {shuffledIcons.map((Icon, idx) =>
          idx === 0 ? (
            <div
              key={idx}
              className={clsxMerge("flex items-center justify-center relative")}
            >
              <AdaptiveImage
                src="/astronaut.png"
                alt="Astronaut"
                width={144} // 36*4
                height={192} // 48*4
                className={clsxMerge(
                  "w-20 h-28 fixed float-left -translate-x-20 translate-y-4 transition-all duration-300 ease-in-out hover:rotate-12",
                  "sm:w-36 sm:h-48 sm:-translate-x-32 sm:-translate-y-24",
                  "md:w-36 md:h-48 md:-translate-x-24 md:-translate-y-20"
                )}
                preload
              />
              <Icon className={clsxMerge("invert w-12 h-12 md:w-16 md:h-16")} />
            </div>
          ) : (
            <div
              key={idx}
              className={clsxMerge("flex items-center justify-center")}
            >
              <Icon className={clsxMerge("invert w-12 h-12 md:w-16 md:h-16")} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
