import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import { FaArtstation, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/showreels", label: "Showreels" },
];

const socialLinks = [
  { href: "https://artstation.com", icon: FaArtstation, label: "ArtStation" },
  { href: "https://linkedin.com", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-gradient">
              ArtFolio
            </Link>
            <p className="mt-3 text-[var(--color-text-muted)] text-sm max-w-xs">
              Showcase platform for 3D Artists, Animators, and Concept Artists.
              Your artwork deserves to be seen.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-text-secondary)]">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsxMerge(
                      "text-[var(--color-text-muted)]",
                      "hover:text-[var(--color-primary)]",
                      "transition-colors"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--color-text-secondary)]">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={clsxMerge(
                    "p-2 rounded-lg",
                    "bg-[var(--color-surface)]",
                    "text-[var(--color-text-muted)]",
                    "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-hover)]",
                    "transition-all duration-200"
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <p className="text-center text-[var(--color-text-muted)] text-sm">
            &copy; {new Date().getFullYear()} ArtFolio. Crafted for visual
            storytellers.
          </p>
        </div>
      </div>
    </footer>
  );
}
