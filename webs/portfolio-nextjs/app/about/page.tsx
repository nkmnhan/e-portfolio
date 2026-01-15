"use client";
import { RefObject, useRef } from "react";
import { clsxMerge } from "../components/themes";
import Hero from "./hero";
import Cover from "./cover";
import Content from "./content";
import Footer from "./footer";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={clsxMerge(
        "text-[#e4b3a3] bg-[#020016]",
        "fixed w-full h-full overflow-auto"
      )}
    >
      <div className="h-fit w-full pb-12">
        <Cover />
        <Hero containerRef={ref as RefObject<HTMLElement>} />        
        <Content />
        <Footer />
      </div>
    </div>
  );
}
