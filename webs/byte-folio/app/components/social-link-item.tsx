import type { SocialLink } from "@/lib/types";
import { socialIcons } from "./social-icons";

interface SocialLinkItemProps {
  link: SocialLink;
  className?: string;
  iconClassName?: string;
}

export function SocialLinkItem({
  link,
  className = "p-2 text-text-muted hover:text-primary transition-colors",
  iconClassName = "w-5 h-5",
}: SocialLinkItemProps) {
  const Icon = socialIcons[link.platform];
  if (!Icon) return null;

  return (
    <a
      href={link.url}
      target={link.platform !== "email" ? "_blank" : undefined}
      rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
      aria-label={link.label}
      className={className}
    >
      <Icon className={iconClassName} />
    </a>
  );
}
