import Image from "next/image";

interface ImageCardProps {
  key: React.Key;
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'eager' | 'lazy';
}

export default function ImageCard({ key, src, alt, className, style, loading }: ImageCardProps) {

  return (
    <div className={className} style={style}>
      <Image
        key={key}
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg shadow mb-2"
        loading={loading}
      /></div>
  )
}