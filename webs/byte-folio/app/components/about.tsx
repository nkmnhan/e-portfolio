"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { aboutData } from "@/lib/data/about";
import { TerminalHeading } from "./terminal-heading";
import { SectionWrapper } from "./section-wrapper";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseInt(value);
  const suffix = value.replace(/\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, numericPart, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, numericPart]);

  return (
    <div ref={ref} className="glass rounded-xl p-4 text-center">
      <motion.span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-primary">
        {isNaN(numericPart) ? value : (<><motion.span>{rounded}</motion.span>{suffix}</>)}
      </motion.span>
      <p className="text-text-muted text-sm mt-1">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <TerminalHeading command="about --verbose" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="shrink-0">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/50" style={{ animation: "breathe 3s ease-in-out infinite" }}>
            <Image src={aboutData.avatar} alt="Tony Nguyen — Senior Fullstack Developer" width={192} height={192} className="object-cover w-full h-full" priority />
          </div>
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          {aboutData.bio.map((paragraph, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {aboutData.stats.map((stat) => (
          <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 text-text-muted text-sm">
        <span>🎓 {aboutData.education}</span>
        <span>📍 {aboutData.availability}</span>
      </motion.div>
    </SectionWrapper>
  );
}
