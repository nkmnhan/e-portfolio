import { notFound } from "next/navigation";
import SkeletonDemo from "./skeleton-demo";
import ModelViewerDemo from "./model-viewer-demo";
import BrandGalleryDemo from "./brand-gallery-demo";
import GalaxyDemo from "./galaxy-demo";
import MasonryLayoutDemo from "./masonry-demo";
import SnapEdgeDemo from "./snapedge-demo";

const components: Record<
  string,
  { title: string; component: React.ReactNode }
> = {
  skeletons: {
    title: "Skeleton Components",
    component: <SkeletonDemo />,
  },
  "model-viewer": {
    title: "3D Model Viewer",
    component: <ModelViewerDemo />,
  },
  "brand-gallery": {
    title: "Brand Gallery",
    component: <BrandGalleryDemo />,
  },
  galaxy: {
    title: "Galaxy Animation",
    component: <GalaxyDemo />,
  },
  "masonry-layout": {
    title: "Masonry Layout",
    component: <MasonryLayoutDemo />,
  },
  "snap-edge": {
    title: "Snap Edge Menu",
    component: <SnapEdgeDemo />,
  },
};

export default async function TestSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
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
