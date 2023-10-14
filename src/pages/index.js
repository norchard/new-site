import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
import { Fragment } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <section className="bg-studio-space bg-cover h-screen top-0 -mt-32">
        <div className="w-screen h-4/5 flex items-center justify-center">
          <div className="-mt-32 w-4/5 flex flex-col items-center backdrop-blur-lg transition duration-300 ease-in-out hover:backdrop-blur-none hover:bg-black/0 bg-black/10 p-16 rounded-xl">
            <h2 className="typeface-seasons text-center text-8xl text-white item-center drop-shadow-md">
              We&apos;re now at the Silos at Sawyer Yards
            </h2>
            <Link className="text-center m-auto" href="/contact">
              <button className="mt-10 pt-4 pb-4 pr-10 pl-10 bg-slate-800 text-xl rounded-full text-white hover:bg-slate-700">
                Come Visit Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
