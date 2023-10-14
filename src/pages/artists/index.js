import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import ArtistTile from "@/components/ArtistTile";
import Footer from "@/components/Footer";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  let PROJECT_ID = "5a2xr1ig";
  let DATASET = "production";
  let QUERY = encodeURIComponent(
    '*[_type == "artist"]{ name, "imageUrl": thumbnail.asset->url}'
  );

  // Compose the URL for your project's endpoint and add the query
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        const artists = res.result.map((entry) => {
          // console.log(entry.imageUrl);
          return { name: entry.name, image: entry.imageUrl };
        });
        setArtists(artists);
      });
  }, []);

  return (
    <Fragment>
      <div className="pt-12 flex justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">Our Artists</h1>
      </div>
      <div class="p-32 pt-12 grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {artists.map((artist, id) => (
          <ArtistTile key={id} artist={artist.name} image={artist.image} />
        ))}
      </div>
    </Fragment>
  );
}
