import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="p-11 pb-20 relative">
      <Link href="/">
        <Image
          className="float-left"
          src="/Zoya_logo.png"
          alt="zoya logo"
          width={200}
          height={20}
        />
      </Link>
      <nav className="flex float-right">
        <Link
          className="text-xl mt-5 mr-6 text-gray-500 hover:text-gray-800"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-xl mt-5 mr-6 text-gray-500 hover:text-gray-800"
          href="/artists"
        >
          Artists
        </Link>
        {/* <Link
          className="text-xl mt-5 mr-6 text-gray-500 hover:text-gray-800"
          href="/handbags"
        >
          Handbags
        </Link> */}
        <Link
          className="text-xl mt-5 mr-6 text-gray-500 hover:text-gray-800"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
