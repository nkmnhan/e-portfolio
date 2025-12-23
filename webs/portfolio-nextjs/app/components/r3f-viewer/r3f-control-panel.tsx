"use client";
import { useState, useEffect } from "react";
import {
  ToggleSwitch,
  RangeSlider,
  Select,
  ThemeProvider,
} from "flowbite-react";
import {
  HiOutlineCog,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiQuestionMarkCircle,
  HiRefresh,
  HiLockClosed,
  HiLockOpen,
} from "react-icons/hi";
import { MdRestartAlt } from "react-icons/md";
import { MdOpenInFull, MdCloseFullscreen } from "react-icons/md";
import { clsxMerge } from "../themes/utils";
import { R3fViewerSettings, defaultSettings } from "./r3f-viewer-controller";

import { useRef } from "react";
import { r3fViewerTheme } from "./r3f-viewer-theme";

export default function R3fViewerControlPanel({
  settings,
  onChange,
  isFullScreen,
  onFullScreenToggle,
}: {
  settings: R3fViewerSettings;
  onChange: (settings: R3fViewerSettings) => void;
  isFullScreen: boolean;
  onFullScreenToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [sectionStates, setSectionStates] = useState({
    wireframe: true,
    viewport: false,
    render: false,
    material: true,
    geometry: false,
    uv: false,
  });

  const panelRef = useRef<HTMLDivElement>(null);
  const gadgetBarRef = useRef<HTMLDivElement>(null);

  const handleChange = (key: keyof R3fViewerSettings, value: any) => {
    onChange({ ...settings, [key]: value });
  };

  const handleReset = () => {
    onChange({ ...defaultSettings });
  };

  const toggleSection = (section: keyof typeof sectionStates) => {
    setSectionStates((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        panelRef.current &&
        gadgetBarRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !gadgetBarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <ThemeProvider theme={r3fViewerTheme}>
      {/* Always visible gadget bar */}
      <div
        ref={gadgetBarRef}
        className={clsxMerge(
          "absolute bottom-4 right-4 z-1 flex flex-row-reverse items-center gap-1.5 p-1.5 bg-gray-900/80 border border-cyan-700/50 rounded-lg shadow-xl backdrop-blur-md",
          "w-fit"
        )}
        style={{ touchAction: "manipulation" }}
      >
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-700/70 active:scale-95 hover:bg-cyan-700/30 p-1.5 bg-gray-800/60 transition-all"
          onClick={() => setOpen(true)}
          aria-label="Open 3D Viewer Controls"
        >
          <HiOutlineCog className="w-5 h-5 text-cyan-400 stroke-2" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-700/70 active:scale-95 hover:bg-cyan-700/30 p-1.5 transition-all"
          onClick={() => handleChange("lockControls", !settings.lockControls)}
          aria-label={
            settings.lockControls ? "Unlock Controls" : "Lock Controls"
          }
        >
          {settings.lockControls ? (
            <HiLockClosed className="w-5 h-5 text-cyan-400" />
          ) : (
            <HiLockOpen className="w-5 h-5 text-cyan-400" />
          )}
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-700/70 active:scale-95 hover:bg-cyan-700/30 p-1.5 transition-all"
          onClick={() => handleChange("autoRotate", !settings.autoRotate)}
          aria-label={
            settings.autoRotate ? "Disable Auto Rotate" : "Enable Auto Rotate"
          }
        >
          <HiRefresh
            className={clsxMerge(
              "w-5 h-5 text-cyan-400",
              settings.autoRotate && "animate-[spin_1s_linear_infinite_reverse]"
            )}
          />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-700/70 active:scale-95 hover:bg-cyan-700/30 p-1.5 transition-all"
          onClick={() => setShowHelp(true)}
          aria-label="Show Help"
        >
          <HiQuestionMarkCircle className="w-5 h-5 text-cyan-400" />
        </button>
        <button
          type="button"
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-700/70 active:scale-95 hover:bg-cyan-700/30 p-1.5 transition-all"
          onClick={onFullScreenToggle}
          aria-label={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
        >
          {isFullScreen ? (
            <MdCloseFullscreen className="w-5 h-5 text-cyan-400" />
          ) : (
            <MdOpenInFull className="w-5 h-5 text-cyan-400" />
          )}
        </button>
      </div>

      {/* The control panel - Absolute sidebar */}
      <div
        ref={panelRef}
        className={clsxMerge(
          "absolute top-0 right-0 h-full w-80 bg-gray-900/90 backdrop-blur-xl border-l-2 border-cyan-700/50 shadow-2xl z-2 transition-transform duration-300 ease-in-out overflow-y-auto",
          open ? "translate-x-0" : "translate-x-full",
          "max-md:w-full max-md:h-[85vh] max-md:top-auto max-md:bottom-0 max-md:rounded-t-3xl max-md:border-l-0 max-md:border-t-2"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-md border-b-2 border-cyan-700/40 p-4 z-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <HiCog className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold text-cyan-50">3D Controls</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-cyan-700/20 transition-colors"
              aria-label="Close panel"
            >
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-cyan-300/80 font-medium">
              Adjust 3D settings
            </span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-cyan-700/20 hover:bg-cyan-700/40 border-2 border-cyan-700/50 rounded-lg transition-all text-cyan-300"
            >
              <MdRestartAlt className="w-4 h-4" /> Reset
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-20 space-y-3">
          {/* Wireframe */}
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("wireframe")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>Wireframe</span>
              {sectionStates.wireframe ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.wireframe && (
              <div className="space-y-2 mt-3">
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
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("viewport")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>Viewport</span>
              {sectionStates.viewport ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.viewport && (
              <div className="space-y-2 mt-3">
                <div>
                  <label className="block text-xs font-semibold mb-2 text-cyan-200">
                    Background
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border-2 border-cyan-700/60"
                    value={settings.viewportBg}
                    onChange={(e) => handleChange("viewportBg", e.target.value)}
                    aria-label="Background Color"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("render")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>Render</span>
              {sectionStates.render ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.render && (
              <div className="space-y-2 mt-3">
                <ToggleSwitch
                  checked={settings.shadows}
                  label="Shadows"
                  color="cyan"
                  onChange={(v) => handleChange("shadows", v)}
                />
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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

          {/* Material */}
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("material")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>Material</span>
              {sectionStates.material ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.material && (
              <div className="space-y-2 mt-3">
                <div>
                  <label className="block text-xs font-semibold mb-2 text-cyan-200">
                    Base Color
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border-2 border-cyan-700/60"
                    value={settings.baseColor}
                    onChange={(e) => handleChange("baseColor", e.target.value)}
                    aria-label="Base Color"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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
                    className="block text-xs font-semibold mb-2 text-cyan-200"
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
                  <label className="block text-xs font-semibold mb-2 text-cyan-200">
                    Emissive
                  </label>
                  <input
                    type="color"
                    className="w-full h-10 rounded cursor-pointer border-2 border-cyan-700/60"
                    value={settings.emissive}
                    onChange={(e) => handleChange("emissive", e.target.value)}
                    aria-label="Emissive"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Geometry */}
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("geometry")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>Geometry</span>
              {sectionStates.geometry ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.geometry && (
              <div className="space-y-2 mt-3">
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
                    if (v && settings.showMatcapBlend)
                      handleChange("showMatcapBlend", false);
                  }}
                />
                <ToggleSwitch
                  checked={settings.showMatcapBlend}
                  label="Matcap+Surface"
                  color="cyan"
                  onChange={(v) => {
                    handleChange("showMatcapBlend", v);
                    if (v && settings.showMatcap)
                      handleChange("showMatcap", false);
                  }}
                />
              </div>
            )}
          </div>

          {/* UV */}
          <div className="bg-gray-800/50 border-2 border-cyan-700/30 rounded-lg p-3">
            <button
              onClick={() => toggleSection("uv")}
              className="flex justify-between items-center w-full text-left font-semibold mb-2 text-cyan-100 hover:text-cyan-300 transition-all duration-300 rounded-lg px-2 py-1 hover:bg-cyan-700/20"
            >
              <span>UV</span>
              {sectionStates.uv ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            {sectionStates.uv && (
              <div className="space-y-2 mt-3">
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
        </div>
      </div>

      {/* Help Modal */}
      {showHelp && (
        <div
          className="absolute inset-0 z-2 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-md p-6 rounded-lg max-w-md mx-4 border-2 border-cyan-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-4">
              <HiQuestionMarkCircle className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-cyan-50">
                How to Use R3F Viewer
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-cyan-200">
              <li>Left-click and drag to orbit around the 3D model.</li>
              <li>Mouse wheel to smoothly zoom in/out (FOV adjustment).</li>
              <li>
                Click the gear icon to open the control panel for settings.
              </li>
              <li>Click the lock icon to lock/unlock the camera controls.</li>
              <li>
                Click the rotate icon to toggle automatic rotation of the model.
              </li>
              <li>Click the expand icon to enter full screen mode.</li>
              <li>UV Checker shows a grid texture to visualize UV mapping.</li>
              <li>
                UV Overlay colors the model by its UV coordinates for live UV
                debugging.
              </li>
              <li>
                Matcap applies a spherical material capture for fast preview.
              </li>
              <li>Matcap+Surface blends matcap with the original surface.</li>
            </ul>
            <button
              onClick={() => setShowHelp(false)}
              className="mt-4 w-full px-4 py-2 bg-cyan-700 hover:bg-cyan-600 text-cyan-50 rounded-lg transition-all font-medium shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
