import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-200 p-10 text-white grid grid-cols-12">
      <div className="col-span-2 text-slate-900">
        <Link href="/">
          <Image
            className="float-left"
            src="/Zoya_logo.png"
            alt="zoya logo"
            width={150}
            height={10}
          />
        </Link>
        <br />
        <p>zoyatommy@gmail.com</p>
        <p>(347) 461– 6543</p>
        <br />
      </div>
      <div className="col-span-2 text-slate-900">
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
      <div className="col-span-1 text-slate-900">
        <nav>
          <Link href="/">About</Link>
          <br />
          <Link href="/">Artists</Link>
          <br />
          <Link href="/">Contact</Link>
        </nav>
      </div>
      <div className="col-span-6 text-slate-900"></div>
      <div className="col-span-1 text-slate-900">
        <Link href="/">
          <Image
            className="float-left"
            src="/icons8-facebook.svg"
            alt="zoya logo"
            width={50}
            height={20}
          />
        </Link>
        <Link href="https://instagram.com/zoyapkemp">
          <Image
            className="float-left"
            src="/icons8-instagram.svg"
            alt="zoya logo"
            width={50}
            height={20}
          />
        </Link>
      </div>
    </footer>
  );
}
