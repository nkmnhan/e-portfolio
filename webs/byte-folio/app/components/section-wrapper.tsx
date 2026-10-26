interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-10 md:py-16 px-5 md:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
