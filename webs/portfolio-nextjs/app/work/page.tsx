"use client";

import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import MasonryLayout from "../components/masonry-layout";
// List of image URLs
const IMAGE_URLS = [
  "https://mindbender.com/content/thumbnails/thumb-mindbender-showreel-2024.jpg",
  "https://mindbender.com/content/thumbnails/thumb-marble-run-game.jpg",
  "https://mindbender.com/content/thumbnails/thumb-mindbender-showreel-2018.jpg",
  "https://mindbender.com/content/thumbnails/thumb-evolution-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-pia-lac.jpg",
  "https://mindbender.com/content/thumbnails/thumb-the-pirate.jpg",
  "https://mindbender.com/content/thumbnails/thumb-brod-elsker-kaergarden.jpg",
  "https://mindbender.com/content/thumbnails/thumb-nextel-trailer.jpg",
  "https://mindbender.com/content/thumbnails/thumb-bubble-witch-saga-3.jpg",
  "https://mindbender.com/content/thumbnails/thumb-push-the-button-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-emoji-campaign-stripes.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-trailer.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-gameplay.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-plum.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-tomato.jpg",
  "https://mindbender.com/content/thumbnails/thumb-emoji-campaign-cinema.jpg",
  "https://mindbender.com/content/thumbnails/thumb-emoji-campaign-chocolate.jpg",
  "https://mindbender.com/content/thumbnails/thumb-hvorfar-tar-det-sa-lang-tid.jpg",
  "https://mindbender.com/content/thumbnails/thumb-unibet.jpg",
  "https://mindbender.com/content/thumbnails/thumb-stir-tine.jpg",
  "https://mindbender.com/content/thumbnails/thumb-rubberboy.jpg",
  "https://mindbender.com/content/thumbnails/thumb-mindbender-showreel-2010.jpg",
  "https://mindbender.com/content/thumbnails/thumb-justice-league-burger-king.jpg",
  "https://mindbender.com/content/thumbnails/thumb-crayola-burger-king.jpg",
  "https://mindbender.com/content/thumbnails/thumb-feisty-pets-burger-king.jpg",
  "https://mindbender.com/content/thumbnails/thumb-food-thief-teaser-shot.jpg",
  "https://mindbender.com/content/thumbnails/thumb-emoji-movie.jpg",
  "https://mindbender.com/content/thumbnails/thumb-nextel-short.jpg",
  "https://mindbender.com/content/thumbnails/thumb-kimmy-goes-fishing.jpg",
  "https://mindbender.com/content/thumbnails/thumb-ufcece.jpg",
  "https://mindbender.com/content/thumbnails/thumb-ford-natal.jpg",
  "https://mindbender.com/content/thumbnails/thumb-scrubby-dubby-saga.jpg",
  "https://mindbender.com/content/thumbnails/thumb-the-duplicators-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-freederm-horse.jpg",
  "https://mindbender.com/content/thumbnails/thumb-freederm-goose.jpg",
  "https://mindbender.com/content/thumbnails/thumb-gifts-for-greta-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-pear.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-water.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-carrot.jpg",
  "https://mindbender.com/content/thumbnails/thumb-farm-hero-super-saga-banana.jpg",
  "https://mindbender.com/content/thumbnails/thumb-its-magic-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-nextel-titanium.jpg",
  "https://mindbender.com/content/thumbnails/thumb-chicken-pox.jpg",
  "https://mindbender.com/content/thumbnails/thumb-audition-cn.jpg",
  "https://mindbender.com/content/thumbnails/thumb-wolf-girl.jpg",
  "https://mindbender.com/content/thumbnails/thumb-football-vs-rabbit.jpg",
];

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
                  <img
                    key={idx}
                    src={url}
                    alt={`Work image ${idx + 1}`}
                    className="w-full rounded-lg shadow mb-2"
                    style={{ height: randomHeight, objectFit: 'cover' }}
                    loading="lazy"
                  />
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
