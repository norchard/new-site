import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex">
      <Link className="mr-6 text-gray-500 hover:text-gray-800" href="/">
        Home
      </Link>
      <Link className="mr-6 text-gray-500 hover:text-gray-800" href="/about">
        About
      </Link>
      <Link className="mr-6 text-gray-500 hover:text-gray-800" href="/artists">
        Artists
      </Link>
    </nav>
  );
}
