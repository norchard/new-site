import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ArtistTile(props) {
  return (
    <div className="bg-red-300">
      <Image alt={props.artist.name} src={props.artist.image} />
      <h1>{props.artist.name}</h1>
    </div>
  );
}
