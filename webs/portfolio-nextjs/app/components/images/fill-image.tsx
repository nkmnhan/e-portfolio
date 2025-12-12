import clsx from "clsx";
import Image from "next/image";
import { clsxMerge } from "../themes/utils";

interface FillImageProps {
  className?: string;
  src: string;
  alt: string;
  loading?: "eager" | "lazy";
}

export default function FillImage({ className, src, alt, loading = "lazy" }: FillImageProps) {
  return <Image src={src} alt={alt} fill className={clsxMerge("object-cover", className)} loading={loading} />;
}
