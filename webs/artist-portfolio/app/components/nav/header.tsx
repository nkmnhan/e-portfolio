import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlinePhotograph,
  HiOutlineFilm,
} from "react-icons/hi";

const navItems = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/artists", label: "Artists", icon: HiOutlineUserGroup },
  { href: "/gallery", label: "Gallery", icon: HiOutlinePhotograph },
  { href: "/showreels", label: "Showreels", icon: HiOutlineFilm },
];

export function Header() {
  return (
    <header
      className={clsxMerge(
        "sticky top-0 z-50",
        "bg-[var(--color-bg)]/80 backdrop-blur-md",
        "border-b border-[var(--color-border)]"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={clsxMerge(
              "flex items-center gap-2",
              "text-xl font-bold",
              "hover:text-[var(--color-primary)] transition-colors"
            )}
          >
            <span className="text-gradient">ArtFolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsxMerge(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]",
                  "transition-all duration-200"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsxMerge(
                  "p-3 rounded-lg",
                  "text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]",
                  "transition-all duration-200"
                )}
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
