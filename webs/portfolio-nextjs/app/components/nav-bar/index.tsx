"use client";
import { useState } from "react";
import HamburgerBtn from "../hamburger-btn";

export function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Hamburger Button (shown when menu is closed) */}
            {!open && (
                <HamburgerBtn active={open} onClick={() => setOpen(!open)} />
            )}
            {/* Drawer */}
            <nav
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} `}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Close Button (shown when menu is open) */}
                    {open && (
                        <HamburgerBtn active={open} onClick={() => setOpen(!open)} />
                    )}
                    <ul className="space-y-4 text-lg font-semibold">
                        <li><a href="/" className="hover:text-blue-500">Home</a></li>
                        <li><a href="/work" className="hover:text-blue-500">Work</a></li>
                        <li><a href="/clients" className="hover:text-blue-500">Clients</a></li>
                        <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}