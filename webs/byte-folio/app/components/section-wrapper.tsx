interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-20 lg:py-24 px-5 md:px-8 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
