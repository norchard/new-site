import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import ArtistTile from "@/components/ArtistTile";
import Footer from "@/components/Footer";

export default function Artists() {
  const artists = [
    { name: "Gus Kemp" },
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
    <main className="">
      <h1>Artists</h1>
      <div className="grid">
        {artists.map((artist, id) => (
          <ArtistTile key={id} artist={artist} />
        ))}
      </div>
    </main>
  );
}
