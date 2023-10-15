import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ArtworkTile from "@/components/ArtworkTile";
import { Lightbox, initTE } from "tw-elements";
import Head from "next/head";

export default function Page() {
  const [artist, setArtist] = useState("");
  const [bio, setBio] = useState("");
  const [collection, setCollection] = useState([]);
  const router = useRouter();
  initTE({ Lightbox });

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  useEffect(() => {
    if (router.isReady) {
      const artist = router.query.artist
        .split("-")
        .map((name) => toTitleCase(name))
        .join(" ");
      setArtist(artist);

      let PROJECT_ID = "5a2xr1ig";
      let DATASET = "production";
      let QUERY_COLLECTION = encodeURIComponent(
        `*[_type == "art" &&  artist._ref in *[_type=="artist" && name=="${artist}"]._id]{_id, title, dimensions, medium, year, "artist": artist->name, "imageUrl": image.asset->url}`
      );
      let QUERY_BIO = encodeURIComponent(
        `*[_type == "artist" && name == "${artist}"].bio`
      );

      // Compose the URL for your project's endpoint and add the query
      let URL_COLLECTION = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_COLLECTION}`;
      let URL_BIO = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY_BIO}`;

      fetch(URL_COLLECTION)
        .then((res) => res.json())
        .then((res) => {
          // const collection = res.result.filter((art) => art.artist == artist);
          setCollection(res.result);
          console.log("artwork: ", res.result);
        });

      fetch(URL_BIO)
        .then((res) => res.json())
        .then((res) => {
          console.log("bio: ", res.result[0]);
          setBio(res.result[0]);
        });
    }
  }, [router.isReady, router.query.artist]);

  return (
    <>
      <Head>
        <title>{artist} | Zoya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="pt-12 grid justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">{artist}</h1>
        {bio &&
          bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="pt-5 max-w-4xl">
              {paragraph}
            </p>
          ))}
      </div>
      <div
        data-te-lightbox-init
        className="pt-20 pb-20 m-auto max-w-7xl grid grid-cols-4 gap-6"
      >
        {collection.map((artwork) => (
          <ArtworkTile
            key={artwork._id}
            title={artwork.title}
            imageUrl={artwork.imageUrl}
            year={artwork.year}
            dimensions={artwork.dimensions}
            medium={artwork.medium}
          />
        ))}
      </div>

      {/* <div data-te-lightbox-init class="grid grid-cols-3 gap-10">
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
            alt="Table Full of Spices"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/2.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp"
            alt="Winter Landscape"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
            alt="View of the City in the Mountains"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
            alt="View of the City in the Mountains"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
            alt="View of the City in the Mountains"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
        <div class="h-full w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/3.webp"
            data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/3.webp"
            alt="View of the City in the Mountains"
            class="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto"
          />
        </div>
      </div> */}
    </>
  );
}
