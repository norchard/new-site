import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 p-5 text-white flex items-center justify-center -mt-14 grid ">
      <p>
        Zoya Tommy Home Gallery | 421 Jackson Hill, Houston, TX 77007 | +1
        347-461-6543 | zoyatommy@gmail.com
      </p>
      <Link href="/">About</Link>
    </footer>
  );
}
