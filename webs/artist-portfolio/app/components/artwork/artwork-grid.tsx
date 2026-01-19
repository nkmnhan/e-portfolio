import { clsxMerge } from "@/lib/utils";
import { ArtworkCard } from "./artwork-card";
import type { Artwork } from "@/lib/data";
import { artists } from "@/lib/data";

interface ArtworkGridProps {
  artworks: Artwork[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ArtworkGrid({
  artworks,
  columns = 3,
  className,
}: ArtworkGridProps) {
  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div
      className={clsxMerge(
        "grid gap-4 md:gap-6",
        columnClasses[columns],
        className
      )}
    >
      {artworks.map((artwork, index) => {
        const artist = artists.find((a) => a.id === artwork.artistId);
        return (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            artistSlug={artist?.slug || ""}
            priority={index < 4}
          />
        );
      })}
    </div>
  );
}
