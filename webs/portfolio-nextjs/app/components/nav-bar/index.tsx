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
import { useState, useEffect } from "react";
import HamburgerBtn from "../hamburger-btn";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaCopyright,
  FaPhone,
  FaAddressCard,
} from "react-icons/fa";

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
  const [navLabel, setNavLabel] = useState(""); // Start hidden
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentPath(path);
      const currentLink = navLinks.find((link) => link.href === path);
      if (currentLink) {
        setNavLabel(currentLink.label);
      }
    }
  }, []);

  function handleNavButton() {
    setIsOpen(!isOpen);
    handleNavLabel();
  }

  function handleNavLabel() {
    // Get current path
    const currentLink = navLinks.find((link) => link.href === currentPath);
    if (!isOpen && currentLink && navLabel !== currentLink.label) {
      setNavLabel(currentLink.label);
    }
  }

  // Add a function to get dynamic className
  function getLabelClass(path: string) {
    switch (path) {
      case "/":
      case "/clients":
        return "text-l font-bold text-white";
      case "/contact":
        return isOpen
          ? "text-l font-bold text-white"
          : "text-l font-bold text-dark";
      default:
        return isOpen
          ? "text-l font-bold text-white"
          : "text-l font-bold text-dark dark:text-white";
    }
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
        <HamburgerBtn id="nav-btn" active={isOpen} onClick={handleNavButton} />
        {navLabel && (
          <h5 className={getLabelClass(currentPath)}>
            {isOpen ? "Close" : navLabel}
          </h5>
        )}
      </div>
      <Drawer
        id="drawer"
        open={isOpen}
        onClose={handleNavButton}
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
                    <div className="flex justify-center my-2 h-54 items-center">
                      <span className="hover:animate-bounce block w-full h-full flex items-center justify-center">
                        <Image
                          src="/astronaut.png"
                          alt="Astronaut"
                          className="mx-auto min-w-[100px] m-6"
                          width={150}
                          height={100}
                        />
                      </span>
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
                          <span className="hover:animate-bounce block w-full h-full flex items-center justify-center">
                            <Icon />
                          </span>
                        </a>
                      ))}
                    </div>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 text-[12px] text-gray-500 my-1 text-left">
                      <FaEnvelope className="w-full h-3 mt-0.5" />
                      <span className="uppercase">nkmnhan@gmail.com</span>
                      <FaPhone className="w-full h-3 mt-0.5" />
                      <span className="uppercase">+84 978 00 43 19</span>
                      <FaAddressCard className="w-full h-3 self-start mt-0.5" />
                      <span className="uppercase">
                        8/15 Phan Huy Ich Street, Quarter 18, Tan Son Ward, Ho
                        Chi Minh City
                      </span>
                    </div>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <div className="flex items-center justify-center gap-2 text-gray-500 mt-4 text-sm">
                      <FaCopyright />
                      <span>2025 NKMNHAN</span>
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
