interface TerminalHeadingProps {
  command: string;
  /** Plain section title for screen readers and search engines */
  label: string;
  className?: string;
}

export function TerminalHeading({ command, label, className = "" }: TerminalHeadingProps) {
  return (
    <h2 className={`font-[family-name:var(--font-mono)] text-lg md:text-xl text-text-muted mb-5 md:mb-8 ${className}`}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true">
        <span className="text-primary">{">"}</span> {command}
      </span>
    </h2>
  );
}
