"use client";

import {
  DarkThemeToggle,
  Drawer,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { useState, useCallback } from "react";
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
import { NAV_ITEMS } from "./sites";
import NavButton from "./nav-button";
import { NavIcon } from "./sites";
import AdaptiveImage from "../images/adaptive-image";

const SOCIAL_LINKS = [
  { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
  { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  { icon: FaYoutube, url: "https://youtube.com", label: "YouTube" },
  { icon: FaEnvelope, url: "mailto:nkmnhan@gmail.com", label: "Email" },
];

export default function NavBar() {
  const [active, setActive] = useState(false);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const el = e.target as HTMLElement | null;
    if (!el) return;
    // if a link (anchor) was clicked anywhere inside the sidebar, close drawer
    if (el.closest && el.closest("a")) {
      setActive(false);
    }
  }, []);

  return (
    <>
      {/* Nav Button */}
      <NavButton
        className={clsxMerge(
          active ? "top-6 left-1/2 translate-x-2 sm:left-60" : "top-6 left-6"
        )}
        active={active}
        onClick={() => setActive(!active)}
      />
      {/* Sidebar Drawer */}
      <Drawer
        id="drawer"
        open={active}
        onClose={() => setActive(!active)}
        className={clsxMerge("w-1/2 sm:w-60")}
      >
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className={clsxMerge(
              "[&>div]:bg-transparent [&>div]:p-0 text-center w-full"
            )}
          >
            {/* delegate click handling: if any anchor inside is clicked, close drawer */}
            <div
              className="flex h-full flex-col justify-between py-2 md:py-4 overflow-y-auto hide-scrollbar"
              onClick={handleClick}
            >
              <SidebarItems>
                <SidebarItemGroup>
                  {NAV_ITEMS.map((link, index) => (
                    <SidebarItem id={link.id} key={link.id} href={link.href}>
                      {/* keep content simple; the anchor is rendered by SidebarItem */}
                      <span className="flex flex-row items-center gap-2 walt-disney text-xl pl-2">
                        <NavIcon className="w-4 h-4" path={link.href} />
                        {link.label}
                      </span>
                    </SidebarItem>
                  ))}
                </SidebarItemGroup>
                <SidebarItemGroup>
                  {/* Astronaut image */}
                  <div className="flex justify-center my-2 md:my-4 h-56 items-center">
                    <span className="hover:animate-bounce w-full h-full flex items-center justify-center">
                      <AdaptiveImage
                        src="/astronaut.png"
                        alt="Astronaut"
                        className="mx-auto min-w-25 m-4 md:m-8"
                        width={150}
                        height={100}
                      />
                    </span>
                  </div>
                  {/* Social icons row */}
                  <div
                    className={clsxMerge(
                      "flex justify-center gap-2 md:gap-4 my-2 md:my-4"
                    )}
                  >
                    {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center text-xl transition h-12 w-12"
                        style={{ position: "relative" }}
                      >
                        <span className="hover:animate-bounce w-full h-full flex items-center justify-center">
                          <Icon />
                        </span>
                      </a>
                    ))}
                  </div>
                </SidebarItemGroup>
                <SidebarItemGroup>
                  <div className="grid grid-cols-[0.75rem_1fr] gap-x-2 md:gap-x-4 my-2 md:my-4 text-left uppercase text-xs">
                    <FaEnvelope className="w-full h-4" />
                    <span>nkmnhan@gmail.com</span>
                    <FaPhone className="w-full h-4" />
                    <span>+84 978 00 43 19</span>
                    <FaAddressCard className="w-full h-4 self-start" />
                    <span>
                      8/15 Phan Huy Ich Street, Quarter 18, Tan Son Ward, Ho Chi
                      Minh City
                    </span>
                  </div>
                </SidebarItemGroup>
                <SidebarItemGroup>
                  <h1 className="walt-disney text-4xl mt-2">Tony F. Wilson</h1>
                  <div className="flex items-center justify-center gap-2 md:gap-4 mt-2 md:mt-4 text-sm">
                    <FaCopyright />
                    <span>2025 NKMNHAN</span>
                  </div>
                </SidebarItemGroup>
              </SidebarItems>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
