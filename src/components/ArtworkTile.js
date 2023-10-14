import Image from "next/image";
import React from "react";
// import Link from "next/link";

export default function ArtworkTile(props) {
  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <Image
        style={{
          objectFit: "cover",
        }}
        fill
        src={props.imageUrl}
        data-te-img={props.imageUrl}
        alt={`${props.title} | ${props.dimensions} | ${props.medium} | ${props.year}`}
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
