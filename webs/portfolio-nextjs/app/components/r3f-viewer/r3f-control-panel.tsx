"use client";
import { useState } from "react";
import { Drawer, DrawerHeader, DrawerItems, Button, ToggleSwitch, RangeSlider, Select } from "flowbite-react";
import { HiCog } from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";

export interface ModelViewerSettings {
  wireframe: boolean;
  viewportBg: string;
  cameraFov: number;
  gridHelper: boolean;
  axesHelper: boolean;
  shadows: boolean;
  toneMapping: string;
  exposure: number;
  baseColor: string;
  metalness: number;
  roughness: number;
  opacity: number;
  emissive: string;
  showNormals: boolean;
  showBoundingBox: boolean;
  showVertexColors: boolean;
  showUVChecker: boolean;
  showUVOverlay: boolean;
}

export const defaultSettings: ModelViewerSettings = {
  wireframe: false,
  viewportBg: "#e5e7eb",
  cameraFov: 50,
  gridHelper: false,
  axesHelper: false,
  shadows: true,
  toneMapping: "None",
  exposure: 1.5, // Brighter for more pop
  baseColor: "#ffe0b2", // Warm light orange/peach
  metalness: 1.0, // Max for shiny
  roughness: 0.05, // Low for shiny
  opacity: 1.0,
  emissive: "#000000",
  showNormals: false,
  showBoundingBox: false,
  showVertexColors: false,
  showUVChecker: false,
  showUVOverlay: false,
};

export default function ModelViewerControlPanel({
  settings,
  onChange,
}: {
  settings: ModelViewerSettings;
  onChange: (settings: ModelViewerSettings) => void;
}) {

  const [open, setOpen] = useState(false);

  const handleChange = (key: keyof ModelViewerSettings, value: any) => {
    onChange({ ...settings, [key]: value });
  };

  const handleReset = () => {
    onChange({ ...defaultSettings });
  };

  return (
    <>
      <button
        type="button"
        className="fixed top-4 right-4 z-40 bg-gray-200 hover:bg-gray-300 rounded-full p-1.5 shadow focus:outline-none"
        style={{ width: 32, height: 32 }}
        onClick={() => setOpen(true)}
        aria-label="Open 3D Viewer Controls"
      >
        <HiCog className="w-5 h-5 text-gray-700" />
      </button>
      <Drawer open={open} onClose={() => setOpen(false)} position="right" backdrop={false}>
        <DrawerHeader title="3D Model Viewer Controls" />
        <div className="flex justify-end mb-2">
          <Button color="light" size="sm" onClick={handleReset} aria-label="Reset to default">
            <MdRestartAlt className="w-5 h-5 mr-1" /> Reset
          </Button>
        </div>
        <DrawerItems>
          {/* Wireframe */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">Wireframe</h3>
            <ToggleSwitch
              checked={settings.wireframe}
              label="Show Wireframe"
              color="cyan"
              onChange={v => handleChange("wireframe", v)}
            />
          </div>
          {/* Viewport */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">Viewport</h3>
            <label className="block text-sm font-medium mb-1">Background Color</label>
            <input
              type="color"
              className="mb-2"
              value={settings.viewportBg}
              onChange={e => handleChange("viewportBg", e.target.value)}
              aria-label="Background Color"
            />
            <label className="block text-sm font-medium mb-1" htmlFor="camera-fov-slider">Camera FOV</label>
            <RangeSlider
              id="camera-fov-slider"
              min={30}
              max={120}
              value={settings.cameraFov}
              color="cyan"
              onChange={v => handleChange("cameraFov", Number(v.target.value))}
            />
            <ToggleSwitch
              checked={settings.gridHelper}
              label="Show Grid Helper"
              color="cyan"
              onChange={v => handleChange("gridHelper", v)}
            />
            <ToggleSwitch
              checked={settings.axesHelper}
              label="Show Axes Helper"
              color="cyan"
              onChange={v => handleChange("axesHelper", v)}
            />
          </div>
          {/* Render */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">Render</h3>
            <ToggleSwitch
              checked={settings.shadows}
              label="Shadows"
              color="cyan"
              onChange={v => handleChange("shadows", v)}
            />
            <label className="block text-sm font-medium mb-1" htmlFor="tone-mapping-select">Tone Mapping</label>
            <Select
              id="tone-mapping-select"
              value={settings.toneMapping}
              onChange={e => handleChange("toneMapping", e.target.value)}
            >
              <option value="None">None</option>
              <option value="Linear">Linear</option>
              <option value="Reinhard">Reinhard</option>
              <option value="Cineon">Cineon</option>
              <option value="ACES">ACES</option>
            </Select>
            <label className="block text-sm font-medium mb-1 mt-2" htmlFor="exposure-slider">Exposure</label>
            <RangeSlider
              id="exposure-slider"
              min={0.1}
              max={2.0}
              step={0.01}
              value={settings.exposure}
              color="cyan"
              onChange={v => handleChange("exposure", Number(v.target.value))}
            />
          </div>
          {/* Material Channels */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">Material Channels</h3>
            <label className="block text-sm font-medium mb-1">Base Color</label>
            <input
              type="color"
              className="mb-2"
              value={settings.baseColor}
              onChange={e => handleChange("baseColor", e.target.value)}
              aria-label="Base Color"
            />
            <label className="block text-sm font-medium mb-1" htmlFor="metalness-slider">Metalness</label>
            <RangeSlider
              id="metalness-slider"
              min={0}
              max={1}
              step={0.01}
              value={settings.metalness}
              color="cyan"
              onChange={v => handleChange("metalness", Number(v.target.value))}
            />
            <label className="block text-sm font-medium mb-1 mt-2" htmlFor="roughness-slider">Roughness</label>
            <RangeSlider
              id="roughness-slider"
              min={0}
              max={1}
              step={0.01}
              value={settings.roughness}
              color="cyan"
              onChange={v => handleChange("roughness", Number(v.target.value))}
            />
            <label className="block text-sm font-medium mb-1 mt-2" htmlFor="opacity-slider">Opacity</label>
            <RangeSlider
              id="opacity-slider"
              min={0}
              max={1}
              step={0.01}
              value={settings.opacity}
              color="cyan"
              onChange={v => handleChange("opacity", Number(v.target.value))}
            />
            <label className="block text-sm font-medium mb-1">Emissive</label>
            <input
              type="color"
              className="mb-2"
              value={settings.emissive}
              onChange={e => handleChange("emissive", e.target.value)}
              aria-label="Emissive"
            />
          </div>
          {/* Geometry */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">Geometry</h3>
            <ToggleSwitch
              checked={settings.showNormals}
              label="Show Normals"
              color="cyan"
              onChange={v => handleChange("showNormals", v)}
            />
            <ToggleSwitch
              checked={settings.showBoundingBox}
              label="Show Bounding Box"
              color="cyan"
              onChange={v => handleChange("showBoundingBox", v)}
            />
            <ToggleSwitch
              checked={settings.showVertexColors}
              label="Show Vertex Colors"
              color="cyan"
              onChange={v => handleChange("showVertexColors", v)}
            />
          </div>
          {/* UV */}
          <div className="mb-6 space-y-4">
            <h3 className="font-semibold mb-2">UV</h3>
            <ToggleSwitch
              checked={settings.showUVChecker}
              label="Show UV Checker"
              color="cyan"
              onChange={v => handleChange("showUVChecker", v)}
            />
            <ToggleSwitch
              checked={settings.showUVOverlay}
              label="Show UV Overlay"
              color="cyan"
              onChange={v => handleChange("showUVOverlay", v)}
            />
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}
