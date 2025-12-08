import Image from "next/image";
import { clsxMerge } from "../themes/utils";

export default function FillImage({ className, src, alt }: { className?: string; src: string; alt: string }) {
    return <Image className={clsxMerge("object-fill", className)} src={src} alt={alt} fill />;
}