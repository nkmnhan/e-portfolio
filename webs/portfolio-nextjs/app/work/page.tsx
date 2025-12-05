"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import MasonryLayout from "../components/masonry-layout";
import IMAGE_URLS from "./data";
import ImageCard from "../components/image-card";
import Link from "next/link";

export default function Work() {
  return (
    <div className="fixed inset-0 pl-20 pt-20 pr-20 bg-white dark:bg-gray-800">
      <Tabs aria-label="Default tabs" variant="default" className="mx-auto">
        <TabItem active title="Profile" icon={HiUserCircle}>
          <div className="max-h-[70vh] md:max-h-[80vh] overflow-y-auto pr-2 hide-scrollbar">
            <MasonryLayout>
              {IMAGE_URLS.map((url) => {
                // Randomize image height for testing (between 320px and 520px)
                const randomHeight = 320 + Math.floor(Math.random() * 200);
                return (
                  <Link
                    href={`/project/${url.id}`}
                    key={url.id}
                    style={{ display: 'block', height: `${randomHeight}px`, position: 'relative' }}
                    className="w-full"
                  >
                    <ImageCard
                      className="w-full"
                      style={{ height: '100%', position: 'relative' }}
                      src={url.poster}
                      alt={`Work image ${url.id}`}
                      loading="lazy"
                      title={`Project number ${url.id}`}
                      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />
                  </Link>
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
