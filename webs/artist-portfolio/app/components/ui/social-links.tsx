import { clsxMerge } from "@/lib/utils";
import type { SocialLinks as SocialLinksType } from "@/lib/types";
import {
  SiArtstation,
  SiLinkedin,
  SiInstagram,
  SiYoutube,
  SiVimeo,
} from "react-icons/si";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> =
  {
    artstation: SiArtstation,
    linkedin: SiLinkedin,
    instagram: SiInstagram,
    youtube: SiYoutube,
    vimeo: SiVimeo,
  };

const socialNames: Record<string, string> = {
  artstation: "ArtStation",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  youtube: "YouTube",
  vimeo: "Vimeo",
};

export interface SocialLinksProps {
  links: SocialLinksType;
  variant?: "icon" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: { icon: "w-4 h-4", padding: "p-2" },
  md: { icon: "w-5 h-5", padding: "p-2.5" },
  lg: { icon: "w-6 h-6", padding: "p-5" },
};

export function SocialLinks({
  links,
  variant = "icon",
  size = "md",
  className,
}: SocialLinksProps) {
  const filteredLinks = Object.entries(links).filter(
    (entry): entry is [string, string] => Boolean(entry[1])
  );

  if (filteredLinks.length === 0) return null;

  return (
    <div
      className={clsxMerge(
        "flex items-center",
        variant === "icon" ? "gap-3" : "flex-col gap-4 w-full",
        className
      )}
    >
      {filteredLinks.map(([platform, url]) => {
        const Icon = socialIcons[platform];
        if (!Icon) return null;

        if (variant === "full") {
          return (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsxMerge(
                "flex items-center gap-4 p-4 rounded-lg w-full",
                "bg-[var(--color-bg)] border border-[var(--color-border)]",
                "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                "transition-colors"
              )}
            >
              <Icon className={sizeStyles[size].icon} />
              <span className="font-medium">
                {socialNames[platform] || platform}
              </span>
            </a>
          );
        }

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsxMerge(
              "rounded-lg",
              sizeStyles[size].padding,
              "bg-[var(--color-surface)]",
              "text-[var(--color-text-secondary)]",
              "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)]",
              "transition-all duration-200"
            )}
            aria-label={platform}
          >
            <Icon className={sizeStyles[size].icon} />
          </a>
        );
      })}
    </div>
  );
}
