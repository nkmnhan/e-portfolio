import { SectionWrapper } from "@/app/components/section-wrapper";
import { TerminalHeading } from "@/app/components/terminal-heading";

export default function Home() {
  return (
    <main id="main-content">
      <section id="hero" className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <p className="text-text-muted text-sm font-[family-name:var(--font-mono)]">Hi, I&apos;m</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mt-2 glow-cyan-text">
            Tony Nguyen
          </h1>
          <p className="text-text-secondary mt-4 font-[family-name:var(--font-mono)]">
            &gt; Senior Fullstack Developer
          </p>
        </div>
      </section>

      <SectionWrapper id="about">
        <TerminalHeading command="about --verbose" />
        <p className="text-text-secondary">About section placeholder</p>
      </SectionWrapper>

      <SectionWrapper id="experience">
        <TerminalHeading command="career --timeline" />
        <p className="text-text-secondary">Experience section placeholder</p>
      </SectionWrapper>

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
