import Image from "next/image";
import React from "react";
import Bigpic from "../../public/assets/image-best-gear.jpg";

const Bestgear = () => {
  return (
    <div className="max-w-screen-lg m-auto flex item-center gap-8 my-16">
      <div className="w-3/6 flex items-center justify-center flex-col">
        <h2 className="text-5xl font-bold mb-8">
          BRINGING YOU THE{" "}
          <mark className="text-[#d87d4a] bg-transparent">BEST</mark> AUDIO GEAR
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
      <div className="w-3/6 rounded-xl overflow-hidden">
        <Image src={Bigpic} alt="big-pic" priority={true} />
      </div>
    </div>
  );
};

export default Bestgear;
