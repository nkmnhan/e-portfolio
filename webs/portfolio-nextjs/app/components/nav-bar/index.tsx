"use client";

import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import HamburgerBtn from "../hamburger-btn";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { id: "nav-home", href: "/", label: "Home", navLabel: "Menu" },
  { id: "nav-work", href: "/work", label: "Work", navLabel: "Work" },
  {
    id: "nav-clients",
    href: "/clients",
    label: "Clients",
    navLabel: "Clients",
  },
  { id: "nav-about", href: "/about", label: "About Us", navLabel: "About Us" },
  {
    id: "nav-contact",
    href: "/contact",
    label: "Contact",
    navLabel: "Contact",
  },
];

const SOCIAL_LINKS = [
  { icon: FaFacebook, url: "https://facebook.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaYoutube, url: "https://youtube.com" },
  { icon: FaEnvelope, url: "mailto:your@email.com" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navLabel, setNavLabel] = useState(navLinks[0].label);
  const handleClose = () => setIsOpen(false);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  // Get current path
  const currentLink = navLinks.find((link) => link.href === currentPath);
  if (!isOpen && currentLink && navLabel !== currentLink.label) {
    setNavLabel(currentLink.label);
  }

  return (
    <>
      {/* Animated Hamburger Button */}
      <div
        className={`fixed z-50 transition-all duration-200 flex items-center gap-2
                    ${
                      isOpen
                        ? "top-6 left-1/2 translate-x-2 sm:left-60"
                        : "top-6 left-6"
                    }
                `}
        style={{ position: "fixed" }}
      >
        <HamburgerBtn
          id="nav-btn"
          active={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <h5
          className={`text-l font-bold ${
            isOpen
              ? "text-white dark:text-white"
              : currentPath === "/"
              ? "text-white"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {isOpen ? "Close" : navLabel}
        </h5>
      </div>
      <Drawer
        id="drawer"
        open={isOpen}
        onClose={handleClose}
        className="w-1/2 sm:w-60"
      >
        <DrawerHeader
          title=""
          titleIcon={() => <></>}
          closeIcon={() => <></>}
        />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 text-center w-full"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    {navLinks.map((link) => (
                      <SidebarItem id={link.id} key={link.id} href={link.href}>
                        {link.label}
                      </SidebarItem>
                    ))}
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    {/* Astronaut image */}
                    <div className="flex justify-center my-2">
                      <Image
                        src="/astronaut.png"
                        alt="Astronaut"
                        className="mx-auto min-w-[100px]"
                        width={150}
                        height={100}
                      />
                    </div>
                    {/* Social icons row */}
                    <div className="flex justify-center gap-4 my-2">
                      {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                        <a
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center text-xl text-gray-600 hover:text-blue-500 transition h-12 w-12" // fixed size
                          style={{ position: "relative" }}
                        >
                          <span className="hover-bounce block w-full h-full flex items-center justify-center">
                            <Icon />
                          </span>
                        </a>
                      ))}
                    </div>
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
