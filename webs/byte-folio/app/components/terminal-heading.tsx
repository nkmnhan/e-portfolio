interface TerminalHeadingProps {
  command: string;
  className?: string;
}

export function TerminalHeading({ command, className = "" }: TerminalHeadingProps) {
  return (
    <h2 className={`font-[family-name:var(--font-mono)] text-lg md:text-xl text-text-muted mb-8 ${className}`}>
      <span className="text-primary">{">"}</span> {command}
    </h2>
  );
}
