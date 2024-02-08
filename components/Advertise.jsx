import Image from "next/image";
import Link from "next/link";
import React from "react";
import zx9 from "../public/assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../public/assets/home/desktop/image-earphones-yx1.jpg";
// import ptt from "../../public/assets/home/desktop/pattern-circles.svg";

export default function Advertise() {
  return (
    <section>
      <div className="m-auto max-w-screen-lg px-4">
        <div className="bg-content h-max-content mb-12 flex flex-col rounded-md bg-[#D87D4A] bg-[url('../public/assets/home/desktop/pattern-circles.svg')] bg-[-225px] bg-no-repeat sm:h-[500px] sm:flex-row">
          <div className="relative flex h-[275px] w-full items-baseline justify-center sm:h-auto sm:w-3/6">
            <Image
              src={zx9}
              alt="zx9"
              className="absolute bottom-[0] h-[80%] w-[70%]"
            />
          </div>
          <div className="my-4 flex w-full flex-col px-0 sm:w-3/6 sm:justify-center sm:px-16">
            <h2 className="text-center text-6xl font-bold text-white sm:text-left">
              ZX9 SPEAKER
            </h2>
            <p className="my-8 px-2 text-center text-[#F2D4C3] sm:px-2 sm:text-left">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="m-auto w-max bg-black px-5 py-3 text-sm font-medium text-white hover:bg-[#4c4c4c] sm:m-0">
              <Link href={"/speakers/zx7-speaker"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="mb-12 flex h-[280px] rounded-md bg-[#D87D4A] bg-[url('../public/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex w-full flex-col justify-center rounded-md pl-5 sm:w-3/6 sm:pl-20">
            <h2 className="mb-12 text-3xl font-medium">ZX7 SPEAKER</h2>
            <button className="w-max border-2 border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/zx7-speaker"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="mb-12 block gap-4 rounded-md sm:flex">
          <div className="mb-4 w-full sm:mb-0 sm:w-3/6">
            <Image src={yx1} alt="zx9" className="rounded-md" />
          </div>
          <div className="flex w-full flex-col justify-center rounded-md bg-[#F1F1F1] p-0 px-4 py-8 sm:w-3/6 sm:pl-20">
            <h2 className="mb-4 text-3xl font-medium sm:mb-12">
              YX1 EARPHONES
            </h2>
            <button className="w-max border-2 border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/yx1-earphones"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
