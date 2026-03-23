import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { SectionWrapper } from "@/app/components/section-wrapper";
import { TerminalHeading } from "@/app/components/terminal-heading";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Experience />

      <SectionWrapper id="projects">
        <TerminalHeading command="ls ~/projects --featured" />
        <p className="text-text-secondary">Projects section placeholder</p>
      </SectionWrapper>

      <SectionWrapper id="skills">
        <TerminalHeading command="skills --categorize" />
        <p className="text-text-secondary">Skills section placeholder</p>
      </SectionWrapper>

      <SectionWrapper id="contact">
        <TerminalHeading command="send_transmission --to tony" />
        <p className="text-text-secondary">Contact section placeholder</p>
      </SectionWrapper>
    </main>
  );
}
