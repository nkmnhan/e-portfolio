import {
  useScroll,
  motion,
  useTransform,
  Transition,
  VariantLabels,
  TargetAndTransition,
  MotionStyle,
} from "framer-motion";
import Image from "next/image";
import { RefObject } from "react";

interface HeroProps {
  containerRef?: RefObject<HTMLElement>;
}

interface Layer {
  src: string;
  alt: string;
  zIndex: number;
  motion: {
    animate?: TargetAndTransition | VariantLabels | boolean;
    transition?: Transition;
    style: MotionStyle;
  };
}

export default function Hero({ containerRef: containerRef }: HeroProps) {
  const { scrollYProgress } = useScroll({ container: containerRef });

  const layers: Layer[] = [
    {
      src: "/about/hero-11.png",
      alt: "",
      zIndex: 19,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-10.png",
      alt: "",
      zIndex: 18,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "4.3516%", "9.9969%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-09.png",
      alt: "",
      zIndex: 17,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "6.5274%", "14.9954%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-08.png",
      alt: "",
      zIndex: 16,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "8.7032%", "19.9938%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-07.png",
      alt: "",
      zIndex: 15,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "10.879%", "24.9922%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud8.png",
      alt: "",
      zIndex: 14,
      motion: {
        animate: { x: ["0%", "-30%", "0%"] },
        transition: { duration: 120, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "21.758%", "49.9845%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud7.png",
      alt: "",
      zIndex: 13,
      motion: {
        animate: { x: ["0%", "-25%", "0%"] },
        transition: { duration: 140, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "21.758%", "49.9845%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud6.png",
      alt: "",
      zIndex: 12,
      motion: {
        animate: { x: ["0%", "-25%", "0%"] },
        transition: { duration: 140, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "19.5822%", "44.986%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud5.png",
      alt: "",
      zIndex: 11,
      motion: {
        animate: { x: ["0%", "-20%", "0%"] },
        transition: { duration: 160, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "17.4064%", "39.9876%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud4.png",
      alt: "",
      zIndex: 10,
      motion: {
        animate: { x: ["0%", "-20%", "0%"] },
        transition: { duration: 160, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "15.2306%", "34.9892%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud3.png",
      alt: "",
      zIndex: 9,
      motion: {
        animate: { x: ["0%", "-30%", "0%"] },
        transition: { duration: 120, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "13.0548%", "29.9907%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud2.png",
      alt: "",
      zIndex: 8,
      motion: {
        animate: { x: ["0%", "-30%", "0%"] },
        transition: { duration: 120, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            ["0%", "10.879%", "24.9922%"]
          ),
        },
      },
    },
    {
      src: "/about/hero-cloud1.png",
      alt: "",
      zIndex: 7,
      motion: {
        animate: { x: ["0%", "-20%", "0%"] },
        transition: { duration: 160, repeat: Infinity, ease: "easeInOut" },
        style: {
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-06.png",
      alt: "",
      zIndex: 6,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-05.png",
      alt: "",
      zIndex: 5,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-04.png",
      alt: "",
      zIndex: 4,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-03.png",
      alt: "",
      zIndex: 3,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-02.png",
      alt: "",
      zIndex: 2,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
    {
      src: "/about/hero-01.png",
      alt: "",
      zIndex: 1,
      motion: {
        animate: undefined,
        transition: undefined,
        style: {
          x: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
          y: useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "0%"]),
        },
      },
    },
  ];

  return (
    <div className="relative w-full aspect-video flex items-center overflow-hidden">
      {layers.map((layer) => (
        <motion.div
          key={layer.zIndex}
          animate={layer.motion.animate}
          transition={layer.motion.transition as Transition}
          style={{ ...layer.motion.style, zIndex: layer.zIndex }}
          className="absolute inset-0"
        >
          <Image
            fill
            preload
            src={layer.src}
            alt={layer.alt}
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
