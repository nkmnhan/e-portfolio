import Image from "next/image";
import { HR } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textBody, textWhite, textPrimary } from "@/app/components/themes/default-text";

const overviewText = `At Mindbender, we specialize in delivering cutting-edge web development solutions that empower businesses to thrive in the digital landscape. Our team of experienced professionals is dedicated to crafting innovative, user-centric websites and applications that not only meet but exceed our clients' expectations. From responsive design to seamless functionality, we leverage the latest technologies to create digital experiences that captivate audiences and drive results. Partner with us to transform your online presence and achieve your business goals with confidence.`;

const ABOUT_STORY = [
  {
    title: "Services We Offer",
    description:
      "Discover our comprehensive range of web development, design, and consulting services tailored to help your business thrive in the digital world.",
    image:
      "https://mindbender.com/static/img/about-us-illustration-services.png",
  },
  {
    title: "Story Behind Us",
    description:
      "Learn how our journey began, the values that drive us, and our commitment to delivering innovative solutions for our clients.",
    image:
      "https://mindbender.com/static/img/about-us-illustration-storytelling.png",
  },
  {
    title: "Animated Solutions",
    description:
      "Experience the power of engaging animations and interactive features that bring your ideas to life and captivate your audience.",
    image:
      "https://mindbender.com/static/img/about-us-illustration-commercials.jpg",
  },
  {
    title: "Techinologies We Use",
    description:
      "We leverage the latest technologies and frameworks to build robust, scalable, and future-proof digital products for our clients.",
    image:
      "https://mindbender.com/static/img/about-us-illustration-technology.png",
  },
];

export default function About() {
  return (
    <div className={clsxMerge("fixed inset-0 p-20", bgPrimary)}>
      <div className={clsxMerge("overflow-y-auto h-full w-full hide-scrollbar")}>
        {/* Top Image */}
        <div className={clsxMerge("relative w-full h-[96px] rounded-lg overflow-hidden mb-8")}>
          <Image
            src="https://mindbender.com/static/img/about-us-top-image.jpg"
            alt="About Top Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <HR />
        {/* Overview Text */}
        <div className={clsxMerge("text-center text-lg px-8 mb-8", textBody)}>
          {overviewText}
        </div>
        <HR />
        {/* ABOUT_STORY Section */}
        <div className={clsxMerge("flex flex-col gap-24")}>
          {ABOUT_STORY.map((story, idx) => (
            <div
              key={idx}
              className={clsxMerge(
                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image */}
              <div className={clsxMerge("w-full md:w-1/2 flex justify-center")}>
                <div className={clsxMerge("relative w-full h-[200px] md:h-[448px]")}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Text */}
              <div className={clsxMerge("w-full md:w-1/2 flex flex-col justify-center items-center text-center")}>
                <h3 className={clsxMerge("text-2xl font-bold mb-4", textPrimary)}>
                  {story.title}
                </h3>
                <p className={clsxMerge("text-base mb-2", textBody)}>
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}