import React, { Fragment, useState, useEffect } from "react";
import ArtistTile from "@/components/ArtistTile";
import Head from "next/head";
import { useRouter } from "next/router";

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
  }, [URL]);

  return (
    <Fragment>
      <Head>
        <title>Artists | Zoya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="xs:mt-10 md:mt-20 pt-12 flex justify-center">
        <h1 className="typeface-seasons xs:text-4xl md:text-7xl m-auto">
          Secondary Market
        </h1>
      </div>
      <div className="xs:p-5 md:p-32 pt-12 grid xs:grid-cols-2 xs:gap-1/2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {artists.map((artist, id) => (
          <ArtistTile key={id} artist={artist.name} image={artist.image} />
        ))}
      </div>
    </Fragment>
  );
}
