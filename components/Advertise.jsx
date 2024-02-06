import Image from "next/image";
import Link from "next/link";
import React from "react";
import zx9 from "../public/assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../public/assets/home/desktop/image-earphones-yx1.jpg";
// import ptt from "../../public/assets/home/desktop/pattern-circles.svg";

export default function Advertise() {
  return (
    <section>
      <div className="m-auto max-w-screen-lg py-16">
        <div className="bg-content mb-12 flex h-[500px] rounded-md bg-[#D87D4A] bg-[url('../public/assets/home/desktop/pattern-circles.svg')] bg-[-225px] bg-no-repeat">
          <div className="relative flex w-3/6 items-baseline justify-center">
            <Image
              src={zx9}
              alt="zx9"
              className="absolute bottom-[0] h-[80%] w-[70%]"
            />
          </div>
          <div className="flex w-3/6 flex-col justify-center px-16">
            <h2 className="text-6xl font-bold text-white">ZX9 SPEAKER</h2>
            <p className="my-8 text-[#F2D4C3]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="w-max bg-black px-5 py-3 text-sm font-medium text-white hover:bg-[#4c4c4c]">
              <Link href={"/speakers/zx7-speaker"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="mb-12 flex h-[280px] rounded-md bg-[#D87D4A] bg-[url('../public/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="flex w-3/6 flex-col justify-center rounded-md pl-20">
            <h2 className="mb-12 text-3xl font-medium">ZX7 SPEAKER</h2>
            <button className="w-max border-2 border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/zx7-speaker"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="mb-12 flex gap-4 rounded-md">
          <div className="w-3/6">
            <Image src={yx1} alt="zx9" className="rounded-md" />
          </div>
          <div className="flex w-3/6 flex-col justify-center rounded-md bg-[#F1F1F1] pl-20">
            <h2 className="mb-12 text-3xl font-medium">YX1 EARPHONES</h2>
            <button className="w-max border-2 border-black px-5 py-3 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/yx1-earphones"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
