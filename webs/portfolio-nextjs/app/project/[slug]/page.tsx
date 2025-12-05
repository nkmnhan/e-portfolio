
import IMAGE_URLS from "@/app/work/data";
import Image from "next/image";

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = IMAGE_URLS.find((item) => item.id === slug);

  if (!project) {
    return <div className="p-8 text-center text-gray-500">Project not found.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <Image
        className="w-full max-w-md"
        src={project.poster}
        alt={`Project image ${project.id}`}
        fill
      />
      <div className="mt-6 text-lg font-semibold">Project ID: {project.id}</div>
    </div>
  );
}