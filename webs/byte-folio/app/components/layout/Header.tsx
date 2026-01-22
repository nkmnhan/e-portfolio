"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-glow text-xl font-bold text-[var(--color-neon-cyan)]"
        >
          TONY<span className="text-white">.DEV</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wider text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-neon-cyan)]"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
          <Link href="/contact" className="btn-glow text-sm">
            CONTACT ME
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6 text-[var(--color-text-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md md:hidden">
          <div className="container-custom flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-center text-sm font-medium tracking-wider text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-neon-cyan)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <Link
              href="/contact"
              className="btn-glow mt-2 text-center text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
