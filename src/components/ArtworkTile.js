import Image from "next/image";
import React from "react";
// import Link from "next/link";

export default function ArtworkTile({
  title,
  dimensions,
  medium,
  year,
  imageUrl,
}) {
  const info = [title, dimensions, medium, year].filter((x) => x).join(" | ");

  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <Image
        style={{
          objectFit: "cover",
        }}
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        src={imageUrl}
        data-te-img={imageUrl}
        alt={info}
        className=" cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
      />
    </div>
  );
}

{
  /* <img
        src={props.imageUrl}
        data-te-img={props.imageUrl}
        alt={`${props.title} | ${props.dimensions} | ${props.medium} | ${props.year}`}
        className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
      /> */
}
