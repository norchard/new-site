import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="content-center">
      <Nav />
      <h1>Zoya</h1>
      <Image src="/Zoya-logo.png" alt="zoya logo" width={300} height={100} />
      <div>
        <Image
          src="/zoya-studio.jpg"
          alt="zoya studio"
          width={1200}
          height={800}
        />
        <h2 className="text-5xl">We're now at the Silos at Sawyer Yards</h2>{" "}
      </div>
    </main>
  );
}
