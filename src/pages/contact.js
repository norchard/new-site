import React, { Fragment, useState } from "react";
import Map from "../components/Map";
import Link from "next/link";

export default function Contact() {
  return (
    <Fragment>
      <div className="h-xl pt-12 flex justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">
          Visit Us Any Second Saturday!
        </h1>
      </div>
      <div className="min-h-screen grid grid-cols-2">
        <div className="pt-20">
          <Map />
        </div>
        <div className="flex-1 text-xl pl-10 pt-28 pr-60">
          1502 Sawyer St
          <br />
          Studio #136
          <br />
          The Silos at Sawyer Yards
          <br />
          Houston, TX 77007
          <br />
          <br />
          <p>zoyatommy@gmail.com</p>
          <p>(347) 461– 6543</p>
          <br />
          <br />
          <Link
            target="_blank"
            href="https://www.sawyeryards.com/events/second-saturday"
            className="mt-10 pt-2 pb-2 pr-5 pl-5 bg-slate-800 text-base rounded-full text-white hover:bg-slate-700"
          >
            Learn more about Second Saturdays
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
