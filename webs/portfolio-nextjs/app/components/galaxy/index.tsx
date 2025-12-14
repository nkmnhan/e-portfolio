import AdaptiveImage from "../images/adaptive-image";
import { clsxMerge } from "../themes/utils";
import "./galaxy.css";

export default function Galaxy({ className }: { className?: string }) {
  return (
    <>
      <div className={clsxMerge("galaxy", className)}>
        <AdaptiveImage
          src="/galaxy.jpg"
          alt="Galaxy background"
          fill
          preload
        />
      </div>
      <div className="star-field">
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
        <div className="layer" />
      </div>
    </>
  );
}
