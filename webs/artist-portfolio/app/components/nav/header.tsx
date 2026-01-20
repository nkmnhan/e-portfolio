import Link from "next/link";
import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { getProfile } from "@/lib/services";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineFolder,
  HiOutlineFilm,
  HiOutlineMail,
  HiArrowRight,
} from "react-icons/hi";
import { Button, NavLink } from "../ui";

const navItems = [
  { href: "/", label: "Home", icon: HiOutlineHome },
  { href: "/about", label: "About", icon: HiOutlineUser },
  { href: "/projects", label: "Projects", icon: HiOutlineFolder },
  { href: "/showreels", label: "Showreels", icon: HiOutlineFilm },
];

export function Header() {
  const profile = getProfile();

  return (
    <header
      className={clsxMerge(
        "sticky top-0 z-50",
        "bg-[var(--color-bg)] backdrop-blur",
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
              <NavLink
                key={item.href}
                href={item.href}
                icon={<item.icon className="w-5 h-5" />}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA + Mobile Nav */}
          <div className="flex items-center gap-3">
            {/* CTA Button - Desktop */}
            <Button
              href="/contact"
              leftIcon={<HiOutlineMail className="w-4 h-4" />}
              withArrow
              className="hidden lg:flex"
            >
              Let&apos;s Talk
            </Button>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  icon={<item.icon className="w-5 h-5" />}
                  iconOnly
                  aria-label={item.label}
                />
              ))}
              {/* Contact icon for mobile */}
              <Button
                href="/contact"
                variant="icon"
                aria-label="Contact"
              >
                <HiOutlineMail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
