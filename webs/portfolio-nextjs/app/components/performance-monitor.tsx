"use client";

import { useEffect, useState } from "react";
import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from "web-vitals";
import { IoIosSpeedometer } from "react-icons/io";

interface PerformanceMetrics {
  cls?: number;
  inp?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMetric = (metric: Metric) => {
      console.log(metric);
      setMetrics((prev) => ({
        ...prev,
        [metric.name.toLowerCase()]: metric.value,
      }));
    };

    onCLS(updateMetric);
    onINP(updateMetric);
    onFCP(updateMetric);
    onLCP(updateMetric);
    onTTFB(updateMetric);
  }, []);

  const formatMetric = (value: number | undefined, unit: string) => {
    if (value === undefined) return "Loading...";
    return `${value.toFixed(2)}${unit}`;
  };

  const getScoreColor = (metric: string, value: number | undefined) => {
    if (value === undefined) return "text-gray-400";

    switch (metric) {
      case "cls":
        return value <= 0.1
          ? "text-green-400"
          : value <= 0.25
          ? "text-yellow-400"
          : "text-red-400";
      case "inp":
        return value <= 200
          ? "text-green-400"
          : value <= 500
          ? "text-yellow-400"
          : "text-red-400";
      case "fcp":
      case "lcp":
        return value <= 1800
          ? "text-green-400"
          : value <= 3000
          ? "text-yellow-400"
          : "text-red-400";
      case "ttfb":
        return value <= 800
          ? "text-green-400"
          : value <= 1800
          ? "text-yellow-400"
          : "text-red-400";
      default:
        return "text-white";
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white text-xs p-4 rounded-lg font-mono z-50 max-w-sm border border-gray-700"
        title="Toggle Performance Monitor"
      >
        <IoIosSpeedometer />
      </button>

      {/* Metrics Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 bg-black/90 backdrop-blur-sm text-white text-xs p-4 rounded-lg font-mono z-50 max-w-sm border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">CLS:</span>
              <span className={getScoreColor("cls", metrics.cls)}>
                {formatMetric(metrics.cls, "")}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-300">INP:</span>
              <span className={getScoreColor("inp", metrics.inp)}>
                {formatMetric(metrics.inp, "ms")}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-300">FCP:</span>
              <span className={getScoreColor("fcp", metrics.fcp)}>
                {formatMetric(metrics.fcp, "ms")}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-300">LCP:</span>
              <span className={getScoreColor("lcp", metrics.lcp)}>
                {formatMetric(metrics.lcp, "ms")}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-300">TTFB:</span>
              <span className={getScoreColor("ttfb", metrics.ttfb)}>
                {formatMetric(metrics.ttfb, "ms")}
              </span>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-gray-600 text-xs text-gray-400">
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Good
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Needs Work
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Poor
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
