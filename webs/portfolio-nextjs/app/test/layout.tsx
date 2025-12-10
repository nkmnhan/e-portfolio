"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import HamburgerBtn from "../components/hamburger-btn";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";

const components = [
  { slug: "skeletons", name: "Skeleton Components", icon: "💀" },
  { slug: "model-viewer", name: "3D Model Viewer", icon: "🎨" },
  { slug: "brand-gallery", name: "Brand Gallery", icon: "🏢" },
  { slug: "galaxy", name: "Galaxy Animation", icon: "🌌" },
  { slug: "masonry-layout", name: "Masonry Layout", icon: "📱" },
  { slug: "image-placeholder", name: "Image Placeholder", icon: "🖼️" },
  { slug: "video-placeholder", name: "Video Placeholder", icon: "🎥" },
  { slug: "testimonial", name: "Testimonial", icon: "💬" },
];

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Drawer Button */}
      <div
        className={clsxMerge(
          "fixed z-50 transition-all duration-200 flex items-center gap-4",
          isDrawerOpen
            ? "top-6 right-1/2 -translate-x-2 sm:right-60"
            : "top-6 right-6"
        )}
      >
        <h5 className="text-lg font-bold text-gray-900 dark:text-white">
          {isDrawerOpen ? "Close" : "Components"}
        </h5>
        <HamburgerBtn
          id="test-nav-btn"
          active={isDrawerOpen}
          mode="transparent"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        />
      </div>

      {/* Drawer */}
      <Drawer
        id="test-drawer"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="right"
        className={clsxMerge("w-1/2 sm:w-60", bgPrimary)}
      >
        <DrawerHeader title="" titleIcon={() => <></>} closeIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Component navigation"
            className={clsxMerge(
              "[&>div]:bg-transparent [&>div]:p-0 text-center w-full"
            )}
          >
            <div className="flex h-full flex-col justify-between py-4">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    {components.map((component) => (
                      <SidebarItem
                        id={`test-${component.slug}`}
                        key={component.slug}
                        href={`/test/${component.slug}`}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{component.icon}</span>
                          <span>{component.name}</span>
                        </div>
                      </SidebarItem>
                    ))}
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>

      {/* Main Content */}
      {children}
    </div>
  );
}
