import { MidjourneyItem } from "@/types";
import React from "react";

interface Props {
  item: MidjourneyItem;
}
export default function ArtCard({ item }: Props) {
  return (
    <div
      className={`rounded-2xl grid gap-1 grid-cols-${
        item.image_paths.length > 1 ? 2 : 1
      }`}
    >
      {item.image_paths.map((img) => (
        <div style={{ height: 320, width: 300 }}>
          <div className="text-ellipsis text-lg">{img}</div>
        </div>
        // <img
        //   className="rounded-xl overflow-hidden"
        //   alt={img}
        //   src={img}
        //   loading="lazy"
        // />
      ))}
    </div>
  );
}
