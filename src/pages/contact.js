import React, { Fragment, useState } from "react";
import Image from "next/image";
// import { Lightbox, initTE } from "tw-elements";
import Map from "../components/Map";

export default function Contact() {
  //   initTE({ Lightbox });

  return (
    <Fragment>
      <div className="pt-12 flex justify-center">
        <h1 className="typeface-seasons text-7xl m-auto">Contact</h1>
      </div>
      <div className="min-h-screen flex">
        <div className="flex-2 p-12 pl-52 pt-20">
          <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
        </div>
        <div className="flex-1 pl-10 pt-28 pr-60">
          <h1 className="typeface-seasons text-6xl">Silo at Sawyer Studios</h1>
          <p className="text-lg mt-10">Phone: 713-</p>
          <p className="text-lg mt-10">Phone: 713-</p>
        </div>
      </div>
    </Fragment>
  );
}
