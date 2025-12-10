import Galaxy from "../../components/galaxy";

export default function GalaxyDemo() {
  return (
    <div className="relative min-h-screen z-0">
      <h1 className="absolute top-8 text-3xl font-bold text-white">
        Galaxy Demo
      </h1>
      <Galaxy className="absolute inset-0" />
    </div>
  );
}
