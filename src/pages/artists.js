import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import ArtistTile from "@/components/ArtistTile";
import Footer from "@/components/Footer";

export default function Artists() {
  const artists = [
    { name: "Guus Kemp" },
    { name: "Lindsey Nobel" },
    { name: "Julon Pinkston" },
    { name: "Zoya Tommy" },
    { name: "Gaby Tommy" },
    { name: "Kenny Nkosi" },
    { name: "Ushio Shinohara" },
    { name: "Leo Vroegindeweij" },
    { name: "Sofya Tatarinova" },
    { name: "Mike Hollis" },
    { name: "César Martínez" },
    { name: "Peter Zelle" },
  ];
  return (
    <Fragment>
      <div className="pt-12 flex justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">Our Artists</h1>
      </div>
      <div class="p-32 pt-12 grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {artists.map((artist, id) => (
          <ArtistTile key={id} artist={artist} />
        ))}
      </div>
    </Fragment>
  );
}
