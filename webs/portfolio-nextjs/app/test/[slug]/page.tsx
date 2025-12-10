import { notFound } from 'next/navigation';
import { Skeleton, SkeletonText, SkeletonCard } from '../../components/skeletons';
import { ImagePlaceholder } from '../../components/skeletons/image-placeholder';
import { VideoPlaceholder } from '../../components/skeletons/video-placeholder';
import { TextPlaceholder } from '../../components/skeletons/text-placeholder';
import { CardPlaceholder } from '../../components/skeletons/card-placeholder';
import { WidgetPlaceholder } from '../../components/skeletons/widget-placeholder';
import { ListPlaceholder } from '../../components/skeletons/list-placeholder';
import { TestimonialPlaceholder } from '../../components/skeletons/testimonial-placeholder';
import ModelViewer from '../../components/model-viewer';
import BrandGallery from '../../components/brand-gallery';
import Galaxy from '../../components/galaxy';
import MasonryLayout from '../../components/masonry-layout';
import SnapEdgeMenu from '../../components/snap-edge';

const components: Record<string, { title: string; component: React.ReactNode }> = {
  'skeletons': {
    title: 'Skeleton Components',
    component: (
      <div className="space-y-12">
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

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Card Placeholders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardPlaceholder />
            <CardPlaceholder withAvatar={false} />
            <CardPlaceholder imageHeight="h-64" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">List & Widget</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ListPlaceholder items={3} />
            <WidgetPlaceholder bars={5} />
          </div>
        </section>
      </div>
    ),
  },
  'model-viewer': {
    title: '3D Model Viewer',
    component: <ModelViewer />,
  },
  'brand-gallery': {
    title: 'Brand Gallery',
    component: (
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Example brand gallery component</p>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          Brand Gallery Component (requires src prop)
        </div>
      </div>
    ),
  },
  'galaxy': {
    title: 'Galaxy Animation',
    component: <Galaxy />,
  },
  'masonry-layout': {
    title: 'Masonry Layout',
    component: (
      <MasonryLayout>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 1</div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 2</div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 3</div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 4</div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 5</div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">Item 6</div>
      </MasonryLayout>
    ),
  },
  'image-placeholder': {
    title: 'Image Placeholder',
    component: (
      <div className="space-y-6">
        <ImagePlaceholder />
        <ImagePlaceholder withText={false} />
        <ImagePlaceholder orientation="vertical" />
      </div>
    ),
  },
  'video-placeholder': {
    title: 'Video Placeholder',
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoPlaceholder />
        <VideoPlaceholder className="h-96" />
      </div>
    ),
  },
  'testimonial': {
    title: 'Testimonial Placeholder',
    component: (
      <div className="space-y-6">
        <TestimonialPlaceholder lines={2} />
        <TestimonialPlaceholder lines={4} />
      </div>
    ),
  },
  'snap-edge': {
    title: 'Snap Edge Menu',
    component: (
      <div className="relative h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Draggable Floating Menu
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Drag the floating bubble around. When you release it, it will snap to the nearest edge.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
            <li>Drag the bubble to move it</li>
            <li>Release to snap to nearest edge</li>
            <li>Tap for action (customizable)</li>
            <li>Smooth spring animations</li>
          </ul>
        </div>
        <SnapEdgeMenu 
          onTap={() => alert('Bubble tapped!')}
        />
      </div>
    ),
  },
};

export default async function TestSlug({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const component = components[slug];

  if (!component) {
    notFound();
  }

  return (
    <div className="p-8 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {component.title}
      </h1>
      {component.component}
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(components).map((slug) => ({
    slug,
  }));
}
