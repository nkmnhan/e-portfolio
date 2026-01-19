import Link from "next/link";
import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { profile } from "@/lib/data";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineFolder,
  HiOutlineFilm,
  HiOutlineMail,
  HiArrowRight,
} from "react-icons/hi";

const navItems = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/about", label: "About", icon: HiOutlineUser },
  { href: "/projects", label: "Projects", icon: HiOutlineFolder },
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
          {/* Logo with Avatar */}
          <Link
            href="/"
            className={clsxMerge(
              "flex items-center gap-3",
              "hover:opacity-80 transition-opacity"
            )}
          >
            {/* Avatar with availability indicator */}
            <div className="relative">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={36}
                height={36}
                className="rounded-full ring-2 ring-[var(--color-primary)]/30"
              />
              {profile.availableForWork && (
                <span
                  className={clsxMerge(
                    "absolute -bottom-0.5 -right-0.5",
                    "w-3 h-3 rounded-full",
                    "bg-[var(--color-success)]",
                    "ring-2 ring-[var(--color-bg)]"
                  )}
                  title="Available for Work"
                />
              )}
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gradient">
                {profile.name}
              </span>
            </div>
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

          {/* CTA + Mobile Nav */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className={clsxMerge(
                "hidden lg:flex items-center gap-2",
                "px-5 py-2 rounded-lg",
                "bg-[var(--color-primary)] text-white",
                "hover:bg-[var(--color-primary-hover)]",
                "transition-colors font-medium text-sm group"
              )}
            >
              <HiOutlineMail className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

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
              {/* Contact icon for mobile */}
              <Link
                href="/contact"
                className={clsxMerge(
                  "p-3 rounded-lg",
                  "bg-[var(--color-primary)] text-white",
                  "transition-all duration-200"
                )}
                aria-label="Contact"
              >
                <HiOutlineMail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
