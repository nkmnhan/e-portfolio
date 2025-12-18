import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { clsxMerge } from "../../components/themes/utils";

const SkeletonDemo = dynamic(() => import("./skeleton-demo"));
const R3fViewerDemo = dynamic(() => import("./model-viewer-demo"));
const BrandGalleryDemo = dynamic(() => import("./brand-gallery-demo"));
const GalaxyDemo = dynamic(() => import("./galaxy-demo"));
const MasonryLayoutDemo = dynamic(() => import("./masonry-demo"));
const SnapEdgeDemo = dynamic(() => import("./snapedge-demo"));

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
    component: <R3fViewerDemo />,
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

export default async function PlaygroundDetailPage({
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
    <div className={clsxMerge("p-32 min-h-screen")}>
      <h1 className={clsxMerge("text-3xl font-bold mb-8")}>
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
