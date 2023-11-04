import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-200 w-full mx-auto p-4 xs:text-center md:text-left md:flex md:items-top md:justify-between">
      <div className=" md:col-span-2 text-slate-900 px-5">
        <Link href="/">
          <Image
            className="xs:mx-auto md:mx-0 xs:pt-5 md:pt-0"
            src="/Zoya_logo.png"
            alt="zoya logo"
            width={150}
            height={10}
          />
        </Link>
        <div>
          <p>zoyatommy@gmail.com</p>
          <p>(347) 461– 6543</p>
        </div>
        <br />
      </div>
      <div className="col-span-2 text-slate-900 px-5">
        <p>
          1502 Sawyer St
          <br />
          Studio #136
          <br />
          The Silos at Sawyer Yards
          <br />
          Houston, TX 77007
        </p>
      </div>
      <div className="col-span-1 text-slate-900 px-5 xs:pt-5 md:pt-0">
        <nav>
          <Link href="/about">About</Link>
          <br />
          <Link href="/artists">Artists</Link>
          <br />
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="text-slate-900 flex lg:float-right xs:pt-10 md:pt-0 xs:justify-center md:justify-right mx-auto">
        <Link href="/">
          <Image
            src="/icons8-facebook.svg"
            alt="zoya logo"
            width={50}
            height={20}
          />
        </Link>
        <Link href="https://instagram.com/zoyapkemp">
          <Image
            src="/icons8-instagram.svg"
            alt="zoya logo"
            width={50}
            height={20}
          />
        </Link>
      </div>
    </footer>
    // <footer className="bg-slate-200 p-10 text-white grid md:grid-cols-6 lg:grid-cols-12">
    //   <div className=" md:col-span-2 text-slate-900">
    //     <Link href="/">
    //       <Image
    //         className="float-left"
    //         src="/Zoya_logo.png"
    //         alt="zoya logo"
    //         width={150}
    //         height={10}
    //       />
    //     </Link>
    //     <br />
    //     <p>zoyatommy@gmail.com</p>
    //     <p>(347) 461– 6543</p>
    //     <br />
    //   </div>
    //   <div className="col-span-2 text-slate-900">
    //     <p>
    //       1502 Sawyer St
    //       <br />
    //       Studio #136
    //       <br />
    //       The Silos at Sawyer Yards
    //       <br />
    //       Houston, TX 77007
    //     </p>
    //   </div>
    //   <div className="col-span-1 text-slate-900">
    //     <nav>
    //       <Link href="/about">About</Link>
    //       <br />
    //       <Link href="/artists">Artists</Link>
    //       <br />
    //       <Link href="/contact">Contact</Link>
    //     </nav>
    //   </div>
    //   <div className="col-span-6 text-slate-900"></div>
    //   <div className="col-span-1 text-slate-900">
    //     <Link href="/">
    //       <Image
    //         className="float-left"
    //         src="/icons8-facebook.svg"
    //         alt="zoya logo"
    //         width={50}
    //         height={20}
    //       />
    //     </Link>
    //     <Link href="https://instagram.com/zoyapkemp">
    //       <Image
    //         className="float-left"
    //         src="/icons8-instagram.svg"
    //         alt="zoya logo"
    //         width={50}
    //         height={20}
    //       />
    //     </Link>
    //   </div>
    // </footer>
  );
}
