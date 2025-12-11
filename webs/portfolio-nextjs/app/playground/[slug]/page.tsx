import { notFound } from "next/navigation";
import SkeletonDemo from "./skeleton-demo";
import ModelViewerDemo from "./model-viewer-demo";
import BrandGalleryDemo from "./brand-gallery-demo";
import GalaxyDemo from "./galaxy-demo";
import MasonryLayoutDemo from "./masonry-demo";
import SnapEdgeDemo from "./snapedge-demo";
import { clsxMerge } from "../../components/themes/utils";
import { bgPrimary } from "../../components/themes/default-bg";
import { textPrimary } from "../../components/themes/default-text";

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
    <div className={clsxMerge("p-32 min-h-screen", bgPrimary)}>
      <h1 className={clsxMerge("text-3xl font-bold mb-8", textPrimary)}>
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
