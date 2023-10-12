import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <div className="min-h-screen flex">
        <div className="flex-2 p-12 pl-52 pt-20">
          <Image width="500" height="200" src="/zoya-tommy.webp" />
        </div>
        <div className="flex-1 pl-10 pt-28 pr-60">
          <h1 className="typeface-seasons text-6xl">
            Zoya Tommy is a RISD-trained painter and gallerist.
          </h1>
          <p className="text-lg mt-10">
            For the past decade, Zoya Tommy Kemp has been dedicated to
            representing contemporary artists from diverse cultural traditions.
            Originally from Trinidad, she completed her BA at the Rhode Island
            School of Design and then moved to Houston, Texas to pursue an MFA
            at the University of Houston. Zoya first opened her gallery in 2009
            at a location on Milam Street in Midtown and eventually moved to a
            space at 4411 Montrose. In 2013, she and her husband designed a
            beautiful new gallery space on Fannin Street. They did business
            there for 3 years, until Zoya’s life took an unexpected turn. In
            2017, she had two twin girls and she became a private art dealer
            based out of her art studio on the 4th floor of her home. In
            addition to honing her own artistic practice, she also sells works
            by artists from all over the US and manages her late husband’s
            estate. Today, Zoya continues to enjoy working with clients and
            collectors to help them find pieces that suit their needs for art in
            their lives.
          </p>
        </div>
      </div>
      {/* <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14">
        <div className="snap-center shrink-0">
          <Image
            width="320"
            height="160"
            alt=""
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center shrink-0">
          <img src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div> */}
    </Fragment>
  );
}
