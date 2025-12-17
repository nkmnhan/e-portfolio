"use client";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerItems,
  Button,
  ToggleSwitch,
  RangeSlider,
  Select,
} from "flowbite-react";
import {
  HiOutlineCog,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiQuestionMarkCircle,
  HiVideoCamera,
  HiRefresh,
  HiLockClosed,
  HiLockOpen,
  HiPlay,
} from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";
import { MdOpenInFull, MdCloseFullscreen } from "react-icons/md";
import { clsxMerge } from "../themes/utils";
import { R3fViewerSettings, defaultSettings } from "./r3f-viewer-controller";

export default function R3fViewerControlPanel({
  settings,
  onChange,
  theaterMode,
  setTheaterMode,
  isFullScreen,
  onFullScreenToggle,
}: {
  settings: R3fViewerSettings;
  onChange: (settings: R3fViewerSettings) => void;
  theaterMode: boolean;
  setTheaterMode: (mode: boolean | ((prev: boolean) => boolean)) => void;
  isFullScreen: boolean;
  onFullScreenToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [sectionStates, setSectionStates] = useState({
    wireframe: true,
    viewport: false,
    render: false,
    material: true,
    geometry: false,
    uv: false,
  });


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleChange = (key: keyof R3fViewerSettings, value: any) => {
    onChange({ ...settings, [key]: value });
  };

  const handleReset = () => {
    onChange({ ...defaultSettings });
  };



  const toggleSection = (section: keyof typeof sectionStates) => {
    setSectionStates((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* The gadget bar */}
      <div className="absolute transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 bottom-2 right-2 z-40 bg-black/30 border-t border-white/50 p-2 backdrop-blur-sm rounded-l-lg rounded-r-lg flex justify-start w-fit">
        <button
          type="button"
          className="transition-all hover:bg-white/10 p-2 mr-2 -translate-x-full group-hover:translate-x-0 block group-hover:hidden"
          aria-label="Hover to show controls"
        >
          <HiPlay className="w-6 h-6 rounded-full" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2"
          onClick={onFullScreenToggle}
          aria-label={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
        >
          {isFullScreen ? (
            <MdCloseFullscreen className="w-6 h-6 text-white" />
          ) : (
            <MdOpenInFull className="w-6 h-6 text-white" />
          )}
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2"
          onClick={() => setOpen(true)}
          aria-label="Open 3D Viewer Controls"
        >
          <HiOutlineCog className="w-6 h-6 text-white stroke-2 stroke-white" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2 ml-2"
          onClick={() => setShowHelp(true)}
          aria-label="Show Help"
        >
          <HiQuestionMarkCircle className="w-6 h-6 text-white" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2 ml-2"
          onClick={() => setTheaterMode(!theaterMode)}
          aria-label="Toggle Theater Mode"
        >
          <HiVideoCamera className="w-6 h-6 text-white" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2 ml-2"
          onClick={() => handleChange("autoRotate", !settings.autoRotate)}
          aria-label={
            settings.autoRotate ? "Disable Auto Rotate" : "Enable Auto Rotate"
          }
        >
          <HiRefresh
            className={clsxMerge("w-6 h-6 text-white", settings.autoRotate && "animate-[spin_1s_linear_infinite_reverse]")}
          />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all active:scale-95 hover:bg-white/10 p-2 ml-2"
          onClick={() => handleChange("lockControls", !settings.lockControls)}
          aria-label={
            settings.lockControls ? "Unlock Controls" : "Lock Controls"
          }
        >
          {settings.lockControls ? (
            <HiLockClosed className="w-6 h-6 text-white" />
          ) : (
            <HiLockOpen className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* The control panel */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position={isMobile ? "bottom" : "right"}
        backdrop={true}
        className={clsxMerge("backdrop-blur-sm", isMobile && "h-[80vh] rounded-t-3xl", "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-gray-700/50 shadow-2xl")}
      >
        <DrawerHeader title="3D Controls" titleIcon={HiCog} />
        <div className="flex justify-between items-center mb-3 px-4 md:px-0">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {isMobile ? "Swipe down to close" : "Adjust 3D settings"}
          </span>
          <Button
            color="light"
            size="xs"
            onClick={handleReset}
            aria-label="Reset to default"
            className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 backdrop-blur-sm border border-gray-200 dark:border-gray-600 transition-all shadow-sm"
          >
            <MdRestartAlt className="w-4 h-4 mr-1" /> Reset
          </Button>
        </div>
        <DrawerItems className={isMobile ? "pb-20" : ""}>
          {/* Wireframe */}
          <div className="mb-4 border-b border-white/20 dark:border-gray-700/50 pb-4">
            <button
              onClick={() => toggleSection("wireframe")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>Wireframe</span>
              {sectionStates.wireframe ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.wireframe && (
              <div className="space-y-3 mt-3">
                <ToggleSwitch
                  checked={settings.wireframe}
                  label="Show Wireframe"
                  color="cyan"
                  onChange={(v) => handleChange("wireframe", v)}
                />
              </div>
            )}
          </div>
          {/* Viewport */}
          <div className="mb-4 border-b border-white/20 dark:border-gray-700/50 pb-4">
            <button
              onClick={() => toggleSection("viewport")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>Viewport</span>
              {sectionStates.viewport ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.viewport && (
              <div className="space-y-3 mt-3">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Background
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border border-gray-300 dark:border-gray-600"
                    value={settings.viewportBg}
                    onChange={(e) => handleChange("viewportBg", e.target.value)}
                    aria-label="Background Color"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="camera-fov-slider"
                  >
                    Camera FOV: {settings.cameraFov}°
                  </label>
                  <RangeSlider
                    id="camera-fov-slider"
                    min={30}
                    max={120}
                    value={settings.cameraFov}
                    color="cyan"
                    onChange={(v) =>
                      handleChange("cameraFov", Number(v.target.value))
                    }
                  />
                </div>
                <ToggleSwitch
                  checked={settings.gridHelper}
                  label="Grid Helper"
                  color="cyan"
                  onChange={(v) => handleChange("gridHelper", v)}
                />
                <ToggleSwitch
                  checked={settings.axesHelper}
                  label="Axes Helper"
                  color="cyan"
                  onChange={(v) => handleChange("axesHelper", v)}
                />
              </div>
            )}
          </div>
          {/* Render */}
          <div className="mb-4 border-b border-white/20 dark:border-gray-700/50 pb-4">
            <button
              onClick={() => toggleSection("render")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>Render</span>
              {sectionStates.render ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.render && (
              <div className="space-y-3 mt-3">
                <ToggleSwitch
                  checked={settings.shadows}
                  label="Shadows"
                  color="cyan"
                  onChange={(v) => handleChange("shadows", v)}
                />
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="tone-mapping-select"
                  >
                    Tone Mapping
                  </label>
                  <Select
                    id="tone-mapping-select"
                    value={settings.toneMapping}
                    onChange={(e) =>
                      handleChange("toneMapping", e.target.value)
                    }
                    sizing="sm"
                  >
                    <option value="None">None</option>
                    <option value="Linear">Linear</option>
                    <option value="Reinhard">Reinhard</option>
                    <option value="Cineon">Cineon</option>
                    <option value="ACES">ACES</option>
                  </Select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="exposure-slider"
                  >
                    Exposure: {settings.exposure.toFixed(2)}
                  </label>
                  <RangeSlider
                    id="exposure-slider"
                    min={0.1}
                    max={2.0}
                    step={0.01}
                    value={settings.exposure}
                    color="cyan"
                    onChange={(v) =>
                      handleChange("exposure", Number(v.target.value))
                    }
                  />
                </div>
              </div>
            )}
          </div>
          {/* Material Channels */}
          <div className="mb-4 border-b border-white/20 dark:border-gray-700/50 pb-4">
            <button
              onClick={() => toggleSection("material")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>Material</span>
              {sectionStates.material ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.material && (
              <div className="space-y-3 mt-3">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Base Color
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border border-gray-300 dark:border-gray-600"
                    value={settings.baseColor}
                    onChange={(e) => handleChange("baseColor", e.target.value)}
                    aria-label="Base Color"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="metalness-slider"
                  >
                    Metalness: {settings.metalness.toFixed(2)}
                  </label>
                  <RangeSlider
                    id="metalness-slider"
                    min={0}
                    max={1}
                    step={0.01}
                    value={settings.metalness}
                    color="cyan"
                    onChange={(v) =>
                      handleChange("metalness", Number(v.target.value))
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="roughness-slider"
                  >
                    Roughness: {settings.roughness.toFixed(2)}
                  </label>
                  <RangeSlider
                    id="roughness-slider"
                    min={0}
                    max={1}
                    step={0.01}
                    value={settings.roughness}
                    color="cyan"
                    onChange={(v) =>
                      handleChange("roughness", Number(v.target.value))
                    }
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                    htmlFor="opacity-slider"
                  >
                    Opacity: {settings.opacity.toFixed(2)}
                  </label>
                  <RangeSlider
                    id="opacity-slider"
                    min={0}
                    max={1}
                    step={0.01}
                    value={settings.opacity}
                    color="cyan"
                    onChange={(v) =>
                      handleChange("opacity", Number(v.target.value))
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Emissive
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border border-gray-300 dark:border-gray-600"
                    value={settings.emissive}
                    onChange={(e) => handleChange("emissive", e.target.value)}
                    aria-label="Emissive"
                  />
                </div>
              </div>
            )}
          </div>
          {/* Geometry */}
          <div className="mb-4 border-b border-white/20 dark:border-gray-700/50 pb-4">
            <button
              onClick={() => toggleSection("geometry")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>Geometry</span>
              {sectionStates.geometry ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.geometry && (
              <div className="space-y-3 mt-3">
                <ToggleSwitch
                  checked={settings.showNormals}
                  label="Vertex Normals"
                  color="cyan"
                  onChange={(v) => handleChange("showNormals", v)}
                />
                <ToggleSwitch
                  checked={settings.showBoundingBox}
                  label="Bounding Box"
                  color="cyan"
                  onChange={(v) => handleChange("showBoundingBox", v)}
                />
                <ToggleSwitch
                  checked={settings.showVertexColors}
                  label="Vertex Colors"
                  color="cyan"
                  onChange={(v) => handleChange("showVertexColors", v)}
                />
                <ToggleSwitch
                  checked={settings.showMatcap}
                  label="Matcap"
                  color="cyan"
                  onChange={(v) => {
                    handleChange("showMatcap", v);
                    if (v && settings.showMatcapBlend) handleChange("showMatcapBlend", false);
                  }}
                />
                <ToggleSwitch
                  checked={settings.showMatcapBlend}
                  label="Matcap+Surface"
                  color="cyan"
                  onChange={(v) => {
                    handleChange("showMatcapBlend", v);
                    if (v && settings.showMatcap) handleChange("showMatcap", false);
                  }}
                />
              </div>
            )}
          </div>
          {/* UV */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection("uv")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800/50"
            >
              <span>UV</span>
              {sectionStates.uv ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.uv && (
              <div className="space-y-3 mt-3">
                <ToggleSwitch
                  checked={settings.showUVChecker}
                  label="UV Checker"
                  color="cyan"
                  onChange={(v) => handleChange("showUVChecker", v)}
                />
                <ToggleSwitch
                  checked={settings.showUVOverlay}
                  label="UV Overlay"
                  color="cyan"
                  onChange={(v) => handleChange("showUVOverlay", v)}
                />
              </div>
            )}
          </div>
        </DrawerItems>
      </Drawer>
      {showHelp && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              How to Use R3F Viewer
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Left-click and drag to orbit around the 3D model.</li>
              <li>Mouse wheel to smoothly zoom in/out (FOV adjustment).</li>
              <li>
                Click the gear icon to open the control panel for settings.
              </li>
              <li>Click the expand icon to enter full screen mode.</li>
              <li>
                Click the rotate icon to toggle automatic rotation of the model.
              </li>
              <li>Click the lock icon to lock/unlock the camera controls.</li>
              <li>UV Checker shows a grid texture to visualize UV mapping.</li>
              <li>Matcap applies a spherical material capture for fast preview.</li>
              <li>Matcap+Surface blends matcap with the original surface.</li>
              <li className="text-xs text-gray-500 italic">Note: UV Overlay feature is not yet implemented.</li>
            </ul>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
