import { Skeleton, SkeletonText, SkeletonCard } from '../components/skeletons';
import { ImagePlaceholder } from '../components/skeletons/image-placeholder';
import { VideoPlaceholder } from '../components/skeletons/video-placeholder';
import { TextPlaceholder } from '../components/skeletons/text-placeholder';
import { CardPlaceholder } from '../components/skeletons/card-placeholder';
import { WidgetPlaceholder } from '../components/skeletons/widget-placeholder';
import { ListPlaceholder } from '../components/skeletons/list-placeholder';
import { TestimonialPlaceholder } from '../components/skeletons/testimonial-placeholder';

export default function Test() {
  return (
    <div className="p-40 space-y-12 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Skeleton Components Test</h1>
      
      {/* Basic Skeletons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Basic Skeletons</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Default Skeleton</p>
            <Skeleton className="h-4 w-64" />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Circular Skeleton</p>
            <Skeleton variant="circular" className="w-16 h-16" />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">Rectangular Skeleton</p>
            <Skeleton variant="rectangular" className="w-64 h-32" />
          </div>
        </div>
      </section>

      {/* Text Skeletons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Text Skeletons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">SkeletonText (5 lines)</p>
            <SkeletonText />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">TextPlaceholder (6 lines)</p>
            <TextPlaceholder />
          </div>
        </div>
      </section>

      {/* Image & Video Placeholders */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Media Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">ImagePlaceholder with Text</p>
            <ImagePlaceholder />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">ImagePlaceholder without Text</p>
            <ImagePlaceholder withText={false} />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">VideoPlaceholder</p>
            <VideoPlaceholder />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">SkeletonCard</p>
            <SkeletonCard />
          </div>
        </div>
      </section>

      {/* Card Placeholders */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Card Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardPlaceholder />
          <CardPlaceholder withAvatar={false} />
          <CardPlaceholder imageHeight="h-64" />
        </div>
      </section>

      {/* List Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">List Placeholder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListPlaceholder items={3} />
          <ListPlaceholder items={5} />
        </div>
      </section>

      {/* Widget Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Widget Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WidgetPlaceholder bars={5} />
          <WidgetPlaceholder bars={7} />
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Testimonial Placeholders</h2>
        <div className="space-y-6">
          <TestimonialPlaceholder lines={2} />
          <TestimonialPlaceholder lines={4} />
        </div>
      </section>
    </div>
  );
}