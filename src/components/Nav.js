import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" pb-20 relative">
      {menuOpen && (
        <div className="w-full text-center bg-white menu md:flex float-right">
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl mt-5 mb-5 mr-6 text-gray-500 hover:text-gray-800"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl mt-5 mb-5 mr-6 text-gray-500 hover:text-gray-800"
            href="/artists"
          >
            Artists
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="text-xl mt-5 mb-5 mr-6 text-gray-500 hover:text-gray-800"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      )}
      <Link href="/">
        <Image
          className="m-11 float-left"
          src="/Zoya_logo.png"
          alt="zoya logo"
          width={200}
          height={20}
          priority={true}
        />
      </Link>
      <div className="xs:hidden menu md:menu-horizontal md:flex float-right">
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
        <Link
          className="text-xl mt-5 mr-6 text-gray-500 hover:text-gray-800"
          href="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="xs:flex float-right md:hidden">
        <button
          class="m-14 navbar-burger flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            class="block h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
