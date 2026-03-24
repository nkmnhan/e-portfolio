export function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
      {label}
    </span>
  );
}
