"use client";

import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import MasonryLayout from "../components/masonry-layout";
import Image from "next/image";
import IMAGE_URLS from "./data";
import ImageCard from "../components/image-card";
import { url } from "inspector/promises";

export default function Work() {
  return (
    <div className="fixed inset-0 pl-20 pt-20 pr-20 bg-white dark:bg-gray-800">
      <Tabs aria-label="Default tabs" variant="default" className="mx-auto">
        <TabItem active title="Profile" icon={HiUserCircle}>
          <div className="max-h-[70vh] md:max-h-[80vh] overflow-y-auto pr-2 hide-scrollbar">
            <MasonryLayout>
              {IMAGE_URLS.map((url, idx) => {
                // Randomize image height for testing (between 120px and 320px)
                const randomHeight = 120 + Math.floor(Math.random() * 200);
                return (
                  <ImageCard className="w-full" style={{ height: randomHeight, position: 'relative' }} key={idx} src={url} alt={`Work image ${idx + 1}`} loading="lazy" />
                );
              })}
            </MasonryLayout>
          </div>
        </TabItem>
        <TabItem title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
        <TabItem title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
        <TabItem title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
      </Tabs>
    </div>
  );
}
