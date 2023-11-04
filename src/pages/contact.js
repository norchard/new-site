import React, { Fragment, useState } from "react";
import Map from "../components/Map";
import Link from "next/link";
import Head from "next/head";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact | Zoya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <div className="h-xl pt-12 flex justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">
          Visit Us Any Second Saturday!
        </h1>
      </div> */}
      <div className="flex flex-wrap flex-col-reverse lg:flex-row mt-12 lg:mt-28">
        <div className="mb-32 sm:w-full lg:w-1/2">
          {/* <div className="flex-1 w-full pt-20"> */}
          <Map />
        </div>
        <div className="xs:w-full md:w-1/2 text-center lg:text-left lg:pt-10">
          {/* <div className="w-full flex-1 text-xl pl-10 pt-28 pr-60"> */}
          <h1 className="typeface-seasons xs:text-4xl md:text-6xl lg:text-7xl m-auto pb-8">
            Visit Us Any <br />
            Second Saturday!
          </h1>
          <Link
            target="_blank"
            href="https://www.sawyeryards.com/events/second-saturday"
            className="mt-10 pt-2 pb-2 pr-5 pl-5 bg-slate-800 text-base rounded-full text-white hover:bg-slate-700"
          >
            Learn more about Second Saturdays
          </Link>
          <p className="pt-5">
            <br />
            1502 Sawyer St
            <br />
            Studio #136
            <br />
            The Silos at Sawyer Yards
            <br />
            Houston, TX 77007
            <br />
            <br />
          </p>
          <p>zoyatommy@gmail.com</p>
          <p>(347) 461– 6543</p>
          <br />
          <br />
        </div>
      </div>
    </Fragment>
  );
}
