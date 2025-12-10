import Galaxy from "../../components/galaxy";

export default function GalaxyDemo() {
  return (
    <div className="relative min-h-screen z-0">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Galaxy Demo
      </h1>
      <Galaxy className="absolute inset-0" />
    </div>
  );
}
