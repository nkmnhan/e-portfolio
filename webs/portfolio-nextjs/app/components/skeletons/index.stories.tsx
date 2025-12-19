import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CardPlaceholder from "./card-placeholder";
import ImagePlaceholder from "./image-placeholder";
import ListPlaceholder from "./list-placeholder";
import TestimonialPlaceholder from "./testimonial-placeholder";
import TextPlaceholder from "./text-placeholder";
import VideoPlaceholder from "./video-placeholder";
import WidgetPlaceholder from "./widget-placeholder";
import { Skeleton, SkeletonText, SkeletonCard } from "./skeletons";

const meta: Meta = {
  title: "Components/Skeletons",
  parameters: {
    layout: "centered",
  },
};

export default meta;

// All Skeletons Test
export const AllSkeletons: StoryObj = {
  render: () => (
    <div className="w-full max-w-7xl p-8 space-y-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b-2 border-gray-200 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Skeleton Components
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          All skeleton loaders with light/dark theme support
        </p>
      </div>

      {/* Skeleton Components Grid */}
      <div className="grid grid-cols-[400px_1fr] gap-8">
        {/* Card Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Card (Portrait)
          </h3>
          <CardPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160"
            imageHeight="h-3/4"
          />
        </div>

        {/* Card Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Card (Landscape)
          </h3>
          <CardPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80"
            imageHeight="h-1/2"
          />
        </div>

        {/* Image Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Image (Portrait)
          </h3>
          <ImagePlaceholder
            orientation="vertical"
            imageClassName="h-1/2"
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160"
          />
        </div>

        {/* Image Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Image (Landscape)
          </h3>
          <ImagePlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80"
            imageClassName="w-full h-full"
          />
        </div>
        {/* Video Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Video (Portrait)
          </h3>
          <VideoPlaceholder className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160" />
        </div>

        {/* Video Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Video (Landscape)
          </h3>
          <VideoPlaceholder className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80" />
        </div>

        {/* List Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            List (Portrait)
          </h3>
          <ListPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160 overflow-hidden"
            items={12}
          />
        </div>

        {/* List Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            List (Landscape)
          </h3>
          <ListPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80 overflow-hidden"
            items={5}
          />
        </div>

        {/* Testimonial Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Testimonial (Portrait)
          </h3>
          <TestimonialPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160 overflow-hidden"
            lines={8}
          />
        </div>

        {/* Testimonial Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Testimonial (Landscape)
          </h3>
          <TestimonialPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80 overflow-hidden"
            lines={4}
          />
        </div>

        {/* Text Placeholder - Portrait */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Text (Portrait)
          </h3>
          <TextPlaceholder
            lines={15}
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-160 overflow-hidden"
          />
        </div>

        {/* Text Placeholder - Landscape */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Text (Landscape)
          </h3>
          <TextPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-160 h-80 overflow-hidden"
            lines={8}
          />
        </div>

        {/* Widget Placeholder */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Widget (Portrait)
          </h3>
          <WidgetPlaceholder
            className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 w-80 h-120"
            bars={10}
          />
        </div>
      </div>

      {/* Base Skeleton Components */}
      <div className="space-y-4 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Base Skeleton Variants
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Skeleton Default */}
          <div className="space-y-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Default (Circular)
            </p>
            <Skeleton className="w-12 h-12" />
          </div>

          {/* Skeleton Text */}
          <div className="space-y-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Text Variant
            </p>
            <div className="space-y-2">
              <Skeleton variant="text" className="w-full" />
              <Skeleton variant="text" className="w-4/5" />
              <Skeleton variant="text" className="w-3/5" />
            </div>
          </div>

          {/* Skeleton Rectangular */}
          <div className="space-y-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Rectangular
            </p>
            <Skeleton variant="rectangular" className="w-full h-32" />
          </div>

          {/* Skeleton Card */}
          <div className="space-y-2 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Card
            </p>
            <SkeletonCard className="h-32" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    viewport: { defaultViewport: "responsive" },
  },
};
