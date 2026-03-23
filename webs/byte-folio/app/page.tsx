import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";
import { Skills } from "@/app/components/skills";
import { Contact } from "@/app/components/contact";
import { NavDots } from "@/app/components/nav-dots";
import { NavMobile } from "@/app/components/nav-mobile";
import { SocialFloat } from "@/app/components/social-float";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <NavDots />
      <NavMobile />
      <SocialFloat />
    </main>
  );
}
