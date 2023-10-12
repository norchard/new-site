import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <section className="content-baseline">
        <h2 className="text-5xl">
          We&apos;re now at the Silos at Sawyer Yards
        </h2>
        <Image
          src="/zoya-studio.jpg"
          alt="zoya studio"
          width={1200}
          height={800}
        />
      </section>
      <section>
        <h1>Discover our artists</h1>
      </section>
      <section>
        <h1>Wearable art</h1>
      </section>
    </Fragment>
  );
}
