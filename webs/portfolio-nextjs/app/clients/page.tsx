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
    <div className="flex min-h-screen items-center justify-center font-sans">
      <Image
        src="https://mindbender.com/static/img/clients-bg.jpg"
        alt="Clients Background"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      <main>
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-6
            lg:grid-cols-9
            gap-15
            w-full
            max-w-5xl
          "
        >
          {shuffledIcons.map((Icon, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Icon className="invert w-20 h-20" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
