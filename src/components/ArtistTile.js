import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ArtistTile(props) {
  const thumbnail =
    "/images/thumbnails/" +
    props.artist.name.toLowerCase().split(" ").join("-") +
    "-thumbnail.jpg";
  console.log(thumbnail);
  return (
    <Link
      href="/"
      className="rounded-lg bg-slate-200 w-200 grid m-5 p-5 justify-center content-center hover:shadow-md"
    >
      <Image
        className="block"
        width="400"
        height="400"
        alt={props.artist.name}
        src={thumbnail}
      />
      <h1 className="pt-4 text-black text-xl text-center">
        {props.artist.name}
      </h1>
    </Link>
  );
}
