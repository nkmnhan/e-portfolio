"use client";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import MasonryLayout from "../components/masonry-layout";
import IMAGE_URLS from "./data";
import ImageCard from "../components/images/image-card";
import Link from "next/link";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textPrimary, textWhite } from "@/app/components/themes/default-text";
import { useEffect, useState } from "react";
import { url } from "inspector/promises";

const pagePadding = "pl-20 pt-20 pr-20";
const tabContentWrapper = "max-h-[320px] md:max-h-[640px] overflow-y-auto pr-2 hide-scrollbar";
const tabText = clsxMerge("font-medium", textPrimary);

export default function Work() {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // Only run on client
    setHeights(
      IMAGE_URLS.map(() => 320 + Math.floor(Math.random() * 48) * 4)
    );
  }, []);

  return (
    <div className={clsxMerge("fixed inset-0", pagePadding, bgPrimary)}>
      <Tabs aria-label="Default tabs" variant="default" className="mx-auto">
        <TabItem active title="Profile" icon={HiUserCircle}>
          <div className={clsxMerge(tabContentWrapper)}>
            <MasonryLayout>
              {IMAGE_URLS.map((url, idx) => {
                const randomHeight = 320 + Math.floor(Math.random() * 200);
                return (
                  <Link
                    href={`/project/${url.id}`}
                    key={url.id}
                    style={{
                      display: 'block',
                      height: randomHeight,
                      position: 'relative',
                    }}
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
                  </Link>)
              })}
            </MasonryLayout>
          </div>
        </TabItem>
        <TabItem title="Dashboard" icon={MdDashboard}>
          This is{" "}
          <span className={tabText}>
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
        <TabItem title="Settings" icon={HiAdjustments}>
          This is{" "}
          <span className={tabText}>
            Settings tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </TabItem>
        <TabItem title="Contacts" icon={HiClipboardList}>
          This is{" "}
          <span className={tabText}>
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
