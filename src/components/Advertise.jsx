import Image from "next/image";
import Link from "next/link";
import React from "react";
import zx9 from "../../public/assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
// import ptt from "../../public/assets/home/desktop/pattern-circles.svg";

const Advertise = () => {
  return (
    <section>
      <div className="m-auto max-w-screen-lg py-16">
        <div className="flex bg-[#D87D4A] mb-12 h-[500px] rounded-md bg-[url('../../public/assets/home/desktop/pattern-circles.svg')] bg-[-225px] bg-content bg-no-repeat">
          <div className="w-3/6 flex items-baseline justify-center relative">
            <Image
              src={zx9}
              alt="zx9"
              className="w-[70%] h-[80%] absolute bottom-[0]"
            />
          </div>
          <div className="w-3/6 flex flex-col justify-center px-16">
            <h2 className="text-6xl font-bold text-white">ZX9 SPEAKER</h2>
            <p className="text-[#F2D4C3] my-8">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="w-max py-3 px-5 text-sm text-white font-medium bg-black hover:bg-[#4c4c4c]">
              <Link href={"/speakers/zx7-speaker"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="flex bg-[#D87D4A] mb-12 rounded-md bg-[url('../../public/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat h-[280px]">
          <div className="w-3/6 rounded-md pl-20 flex flex-col justify-center">
            <h2 className="font-medium text-3xl mb-12">ZX7 SPEAKER</h2>
            <button className="border-2 w-max border-black py-3 px-5 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/zx7-earphones"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
        <div className="flex mb-12 gap-4 rounded-md">
          <div className="w-3/6">
            <Image src={yx1} alt="zx9" className="rounded-md" />
          </div>
          <div className="w-3/6 rounded-md bg-[#F1F1F1] pl-20 flex flex-col justify-center">
            <h2 className="font-medium text-3xl mb-12">YX1 EARPHONES</h2>
            <button className="border-2 w-max border-black py-3 px-5 text-sm font-medium hover:bg-black hover:text-white">
              <Link href={"/earphones/yx1-earphones"}>SEE PRODUCT</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
