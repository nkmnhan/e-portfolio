import {
  Skeleton,
  SkeletonText,
  TextPlaceholder,
  CardPlaceholder,
  ListPlaceholder,
  WidgetPlaceholder,
  ImagePlaceholder,
  VideoPlaceholder,
  TestimonialPlaceholder,
} from "@/app/components/skeletons";

export default function SkeletonDemo() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Basic Skeletons
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              Default Skeleton
            </p>
            <Skeleton className="h-4 w-64" />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              Circular Skeleton
            </p>
            <Skeleton variant="circular" className="w-16 h-16" />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              Rectangular Skeleton
            </p>
            <Skeleton variant="rectangular" className="w-64 h-32" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Text Skeletons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              SkeletonText (5 lines)
            </p>
            <SkeletonText />
          </div>
          <div>
            <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
              TextPlaceholder (6 lines)
            </p>
            <TextPlaceholder />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Card Placeholders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardPlaceholder />
          <CardPlaceholder withAvatar={false} />
          <CardPlaceholder imageHeight="h-64" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          List & Widget
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListPlaceholder items={3} />
          <WidgetPlaceholder bars={5} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Image Placeholder
        </h2>
        <div className="space-y-6">
          <ImagePlaceholder />
          <ImagePlaceholder withText={false} />
          <ImagePlaceholder orientation="vertical" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Video Placeholder
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoPlaceholder />
          <VideoPlaceholder className="h-96" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Testimonial Placeholder
        </h2>
        <div className="space-y-6">
          <TestimonialPlaceholder lines={2} />
          <TestimonialPlaceholder lines={4} />
        </div>
      </section>
    </div>
  );
}
