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

import Image from "next/image";
import Galaxy from "../components/galaxy";

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
  // Shuffle icons for random order
  const shuffledIcons = [...ICONS].sort(() => Math.random() - 0.5);

  return (
    <div className="relative min-h-screen flex items-center justify-center font-sans">
      {/* Content above background */}
      <Galaxy className="absolute inset-0" />
      <div
        className="
          relative
          z-10
          max-w-[80vw]
          max-h-[76vh]
          grid
          grid-cols-2
          gap-10
          sm:grid-cols-3
          md:grid-cols-6
          lg:grid-cols-9
          place-items-center
          mx-auto
          overflow-x-hidden
          hide-scrollbar
        "
      >
        {shuffledIcons.map((Icon, idx) => (
          idx === 0 ? (
            <div key={idx} className="flex items-center justify-center relative">
                <Image
                  src="/astronaut.png"
                  alt="Astronaut"
                  width={150}
                  height={200}
                  className="
                  w-20 h-28
                  fixed float-left -translate-x-20 translate-y-4
                  transition-all duration-300 ease-in-out hover:rotate-12
                  sm:w-36
                  sm:h-48
                  sm:-translate-x-32
                  sm:-translate-y-24
                  md:w-36
                  md:h-48
                  md:-translate-x-24
                  md:-translate-y-20
                  "
                  priority
                />
              <Icon className="invert w-12 h-12 md:w-12 md:h-12" />
            </div>
          ) : (
            <div key={idx} className="flex items-center justify-center">
              <Icon className="invert w-12 h-12 md:w-12 md:h-12" />
            </div>
          )
        ))}
      </div>
    </div>
  );
}
