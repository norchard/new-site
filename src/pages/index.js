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
      <section className="content-baseline bg-studio-space bg-cover h-screen top-0 -mt-32">
        <div className="h-screen flex items-center justify-center">
          <div className="backdrop-blur-md bg-black/30 p-16 rounded-xl">
            <h2 className="text-center text-7xl text-white item-center">
              We&apos;re now at the Silos at Sawyer Yards
            </h2>
            <Link className="text-center m-auto" href="/contact">
              <button className="pt-2 pb-2 pr-5 pl-5 bg-black text-xl rounded-full text-white">
                Come Visit Us
              </button>
            </Link>
          </div>
        </div>
        {/* <Image
          src="/zoya-studio.jpg"
          alt="zoya studio"
          width={1200}
          height={800}
        /> */}
      </section>
    </Fragment>
  );
}
