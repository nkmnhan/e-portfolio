import clsx from "clsx";
import Image from "next/image";
import { clsxMerge } from "../themes/utils";

interface FillImageProps {
  className?: string;
  src: string;
  alt: string;
}

export default function FillImage({ className, src, alt }: FillImageProps) {
  return (
    <div className={clsxMerge("relative", className)}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
