import React, { Fragment, useState } from "react";
import Image from "next/image";
// import { Lightbox, initTE } from "tw-elements";

export default function Contact() {
  //   initTE({ Lightbox });

  return (
    <Fragment>
      <div
        data-te-lightbox-init
        class="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0"
      >
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
      </div>
    </Fragment>
  );
}
