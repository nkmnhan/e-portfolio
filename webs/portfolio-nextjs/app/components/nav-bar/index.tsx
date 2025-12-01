"use client";
import { useState } from "react";
import HamburgerBtn from "../hamburger-btn";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/work", label: "Work" },
        { href: "/clients", label: "Clients" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ];
    return (
        <>
            {/* Animated Hamburger Button */}
            <div
                className={`fixed z-50 transition-all duration-300
                    ${open
                        ? "top-6 left-48"
                        : "top-6 left-6"}
                `}
                style={{ position: "fixed" }}
            >
                <HamburgerBtn active={open} onClick={() => setOpen(!open)} />
            </div>
            {/* Drawer */}
            <nav
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} `}
            >
                <div className="flex flex-col h-full p-6 relative">
                    <ul className="space-y-4 text-lg font-semibold mt-12">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`hover:text-blue-500 ${pathname === link.href ? "text-blue-600 underline" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}