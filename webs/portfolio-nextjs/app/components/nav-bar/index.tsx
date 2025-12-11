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
import { clsxMerge } from "@/app/components/themes/utils";
import { textWhite, textPrimary } from "@/app/components/themes/default-text";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { NAV_ITEMS } from "./sites";

const SOCIAL_LINKS = [
  { icon: FaFacebook, url: "https://facebook.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaYoutube, url: "https://youtube.com" },
  { icon: FaEnvelope, url: "mailto:your@email.com" },
];

const navBtnContainer =
  "fixed z-50 transition-all duration-200 flex items-center gap-4 p-3 rounded";

const navBtnOpen = "top-6 left-1/2 translate-x-2 sm:left-60";
const navBtnClosed = "top-6 left-6";

const socialIconClass = clsxMerge(
  "flex items-center justify-center text-xl text-gray-600 hover:text-blue-500 transition h-12 w-12"
);

const astronautClass = clsxMerge(
  "mx-auto min-w-[100px] m-8" // m-8 = 32px
);

const sidebarContactClass = clsxMerge(
  "grid grid-cols-[0.75rem_1fr] gap-x-4 text-[12px] text-gray-500 my-4 text-left"
);

const copyrightClass = clsxMerge(
  "flex items-center justify-center gap-4 text-gray-500 mt-4 text-sm"
);

const emptyFunc = () => {
  return <></>;
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  // Add a function to get dynamic className
  function getLabelClass(path: string | undefined): string {
    switch (path) {
      case "/":
      case "/clients":
        return clsxMerge("text-lg font-bold", textWhite);
      case "/contact":
        return isOpen
          ? clsxMerge("text-lg font-bold", textWhite)
          : clsxMerge("text-lg font-bold", textPrimary);
      default:
        return isOpen
          ? clsxMerge("text-lg font-bold", textWhite)
          : clsxMerge("text-lg font-bold", textPrimary, "dark:text-white");
    }
  }

  function getNavLabel(path: string | undefined): string {
    if (isOpen) {
      return "Close";
    }

    const currentLink = NAV_ITEMS.find((link) => link.href === path);
    if (currentLink) {
      return currentLink.label;
    }

    return "";
  }

  return (
    <>
      {/* Animated Hamburger Button */}
      <div
        className={clsxMerge(
          navBtnContainer,
          isOpen ? navBtnOpen : navBtnClosed,
          isOpen && "bg-[#0000000a]"
        )}
        style={{ position: "fixed" }}
      >
        <HamburgerBtn
          id="nav-btn"
          active={isOpen}
          mode="light"
          onClick={() => setIsOpen(!isOpen)}
        />
        <h5 className={getLabelClass(currentPath)}>
          {getNavLabel(currentPath)}
        </h5>
      </div>
      {/* Sidebar Drawer */}
      {currentPath && (
        <Drawer
          id="drawer"
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
          className={clsxMerge("w-1/2 sm:w-60", bgPrimary)}
        >
          <DrawerHeader title="" titleIcon={emptyFunc} closeIcon={emptyFunc} />
          <DrawerItems>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className={clsxMerge(
                "[&>div]:bg-transparent [&>div]:p-0 text-center w-full"
              )}
            >
              <div className="flex h-full flex-col justify-between py-4">
                <div>
                  <SidebarItems>
                    <SidebarItemGroup>
                      {NAV_ITEMS.map((link) => (
                        <SidebarItem
                          id={link.id}
                          key={link.id}
                          href={link.href}
                        >
                          {link.label}
                        </SidebarItem>
                      ))}
                    </SidebarItemGroup>
                    <SidebarItemGroup>
                      {/* Astronaut image */}
                      <div className="flex justify-center my-4 h-56 items-center">
                        <span className="hover:animate-bounce w-full h-full flex items-center justify-center">
                          <Image
                            src="/astronaut.png"
                            alt="Astronaut"
                            className={astronautClass}
                            width={150}
                            height={100}
                          />
                        </span>
                      </div>
                      {/* Social icons row */}
                      <div className="flex justify-center gap-4 my-4">
                        {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={socialIconClass}
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
                      <div className={sidebarContactClass}>
                        <FaEnvelope className="w-full h-4 mt-1" />
                        <span className="uppercase">nkmnhan@gmail.com</span>
                        <FaPhone className="w-full h-4 mt-1" />
                        <span className="uppercase">+84 978 00 43 19</span>
                        <FaAddressCard className="w-full h-4 self-start mt-1" />
                        <span className="uppercase">
                          8/15 Phan Huy Ich Street, Quarter 18, Tan Son Ward, Ho
                          Chi Minh City
                        </span>
                      </div>
                    </SidebarItemGroup>
                    <SidebarItemGroup>
                      <div className={copyrightClass}>
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
      )}
    </>
  );
}
