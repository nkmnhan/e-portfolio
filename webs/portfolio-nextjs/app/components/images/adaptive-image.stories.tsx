import type { Meta, StoryObj, StoryFn } from "@storybook/nextjs-vite";
import {
  AdaptiveImage,
  adaptiveImageContainerClass,
  adaptiveImageClass,
  adaptiveImageRatioSquare,
  adaptiveImageRatioPortrait,
  adaptiveImageRatioVideo,
  adaptiveImageRatioLandscape,
  adaptiveImageMaxSquare,
  adaptiveImageMaxPortrait,
  adaptiveImageMaxVideo,
  adaptiveImageMaxLandscape,
} from ".";

const meta: Meta<typeof AdaptiveImage> = {
  component: AdaptiveImage,
  title: "Components/Images/AdaptiveImage",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showSkeleton: { control: "boolean" },
    priority: { control: "boolean" },
    loading: { control: "select", options: ["eager", "lazy"] },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const imageUrl =
  "https://app.requestly.io/delay/5000/https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";

export const Demo: StoryFn = () => (
  <div className="p-4 space-y-6">
    <h3 className="text-lg font-semibold mb-2">AdaptiveImage demo</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="panel">
        <div className="mb-2 font-medium">Video Aspect</div>
        <AdaptiveImage
          src={imageUrl}
          alt="Video aspect"
          showSkeleton
          containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioVideo} ${adaptiveImageMaxVideo} w-[32rem]`}
          className={adaptiveImageClass}
          fill
        />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Square Aspect</div>
        <AdaptiveImage
          src={imageUrl}
          alt="Square"
          showSkeleton
          containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioSquare} ${adaptiveImageMaxSquare} w-[20rem]`}
          className={adaptiveImageClass}
          fill
        />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Portrait Aspect</div>
        <AdaptiveImage
          src={imageUrl}
          alt="Portrait"
          showSkeleton
          containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioPortrait} ${adaptiveImageMaxPortrait} w-[20rem]`}
          className={adaptiveImageClass}
          fill
        />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Landscape Aspect</div>
        <AdaptiveImage
          src={imageUrl}
          alt="Landscape"
          showSkeleton
          containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioLandscape} ${adaptiveImageMaxLandscape} w-[32rem]`}
          className={adaptiveImageClass}
          fill
        />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">With explicit dimensions</div>
        <AdaptiveImage src={imageUrl} alt="With explicit dimensions" width={800} height={600} showSkeleton className={adaptiveImageClass} containerClass={adaptiveImageContainerClass} />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Custom Aspect Ratio</div>
        <AdaptiveImage src={imageUrl} alt="Custom" showSkeleton containerClass={`${adaptiveImageContainerClass} aspect-[1/2] w-48`} className={adaptiveImageClass} fill />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">With custom class</div>
        <AdaptiveImage src={imageUrl} alt="Custom class" showSkeleton containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioVideo} ${adaptiveImageMaxVideo} w-[32rem]`} className={`rounded-lg border-4 border-blue-500 ${adaptiveImageClass}`} fill />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Without skeleton</div>
        <AdaptiveImage src={imageUrl} alt="No skeleton" showSkeleton={false} containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioSquare} ${adaptiveImageMaxSquare} w-[20rem]`} className={adaptiveImageClass} fill />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Eager loading & priority</div>
        <AdaptiveImage src={imageUrl} alt="Eager" loading="eager" priority containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioPortrait} ${adaptiveImageMaxPortrait} w-[20rem]`} className={adaptiveImageClass} fill />
      </div>

      <div className="panel">
        <div className="mb-2 font-medium">Custom placeholder</div>
        <AdaptiveImage src={imageUrl} alt="Custom placeholder" showSkeleton customPlaceholder={<div className="flex items-center justify-center h-full w-full bg-purple-300 dark:bg-purple-700 rounded-lg"><span className="text-white dark:text-gray-200">Loading...</span></div>} containerClass={`${adaptiveImageContainerClass} ${adaptiveImageRatioLandscape} ${adaptiveImageMaxLandscape} w-[32rem]`} className={adaptiveImageClass} fill />
      </div>
    </div>
  </div>
);
