
"use client";

import {
    Drawer,
    DrawerHeader,
    DrawerItems,
    Sidebar,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    TextInput
} from "flowbite-react";
import { useState } from "react";
import {
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiSearch,
} from "react-icons/hi";
import HamburgerBtn from "../hamburger-btn";

const navLinks = [
    { id: "nav-home", href: "/", label: "Home", navLabel: "Menu" },
    { id: "nav-work", href: "/work", label: "Work", navLabel: "Work" },
    { id: "nav-clients", href: "/clients", label: "Clients", navLabel: "Clients" },
    { id: "nav-about", href: "/about", label: "About Us", navLabel: "About Us" },
    { id: "nav-contact", href: "/contact", label: "Contact", navLabel: "Contact" },
];

export function NavBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [navLabel, setNavLabel] = useState(navLinks[0].label);
    const handleClose = () => setIsOpen(false);

    // Get current path
    if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const currentLink = navLinks.find(link => link.href === currentPath);
        if (!isOpen && currentLink && navLabel !== currentLink.label) {
            setNavLabel(currentLink.label);
        }
    }

    return (
        <>
            {/* Animated Hamburger Button */}
            <div
                className={`fixed z-50 transition-all duration-200 flex items-center gap-2
                    ${isOpen
                        ? "top-6 left-84"
                        : "top-6 left-6"}
                `}
                style={{ position: "fixed" }}
            >
                <HamburgerBtn id="nav-btn" active={isOpen} onClick={() => setIsOpen(!isOpen)} />
                <h5
                    className={`text-l font-bold ${isOpen ? 'text-white dark:text-white' : 'text-gray-900 dark:text-white'}`}
                >
                    {isOpen ? "Close" : navLabel}
                </h5>
            </div>
            <Drawer id="drawer" open={isOpen} onClose={handleClose}>
                <DrawerHeader title="MENU" titleIcon={() => <></>} closeIcon={() => <></>} />
                <DrawerItems>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <form className="pb-3 md:hidden">
                                    <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                </form>
                                <SidebarItems>
                                    <SidebarItemGroup>
                                        {navLinks.map(link => (
                                            <SidebarItem id={link.id} key={link.id} href={link.href}>
                                                {link.label}
                                            </SidebarItem>
                                        ))}
                                    </SidebarItemGroup>
                                    <SidebarItemGroup>
                                        <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                                            Docs
                                        </SidebarItem>
                                        <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                                            Components
                                        </SidebarItem>
                                        <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                                            Help
                                        </SidebarItem>
                                    </SidebarItemGroup>
                                </SidebarItems>
                            </div>
                        </div>
                    </Sidebar>
                </DrawerItems>
            </Drawer>
        </>
    );
}
