import Image from "next/image";
import React from "react";
import Bigpic from "../public/assets/image-best-gear.jpg";

export default function Bestgear() {
  return (
    <div className="item-center m-auto my-16 flex max-w-screen-lg flex-col-reverse gap-8 px-4 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center md:w-3/6">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-left md:text-5xl">
          BRINGING YOU THE{" "}
          <mark className="bg-transparent text-[#d87d4a]">BEST</mark> AUDIO GEAR
        </h2>
        <p className="text-center text-[#7D7D7D] md:text-left">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-xl md:w-3/6">
        <Image
          src={Bigpic}
          alt="big-pic"
          priority={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
