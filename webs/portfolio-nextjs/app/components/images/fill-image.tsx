import clsx from "clsx";
import Image from "next/image";
import { clsxMerge } from "../themes/utils";

interface FillImageProps {
  className?: string;
  src: string;
  alt: string;
}

export default function FillImage({ className, src, alt }: FillImageProps) {
  return <Image src={src} alt={alt} fill className={clsxMerge("object-cover", className)} />;
}
