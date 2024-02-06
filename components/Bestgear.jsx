import Image from "next/image";
import React from "react";
import Bigpic from "../public/assets/image-best-gear.jpg";

export default function Bestgear() {
  return (
    <div className="item-center m-auto my-16 flex max-w-screen-lg gap-8">
      <div className="flex w-3/6 flex-col items-center justify-center">
        <h2 className="mb-8 text-5xl font-bold">
          BRINGING YOU THE{" "}
          <mark className="bg-transparent text-[#d87d4a]">BEST</mark> AUDIO GEAR
        </h2>
        <p className="text-[#7D7D7D]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-3/6 overflow-hidden rounded-xl">
        <Image src={Bigpic} alt="big-pic" priority={true} />
      </div>
    </div>
  );
}
