import Image from "next/image";
import Link from "next/link";
import React from "react";
import Herobg from "../../public/assets/home/desktop/image-hero.jpg";

const HomeBanner = () => {
  return (
    <section className="bg-[#191919]">
      <div className="h-[90vh] max-w-screen-lg m-auto bg-[url('../../public/assets/home/desktop/image-hero.jpg')] bg-blend-multiply bg-no-repeat bg-center bg-cover">
        <div className="w-3/6 h-full flex flex-col items-start justify-center">
          <span className="text-sm font-normal text-[#D87D4A] tracking-[12px]">
            NEW PRODUCT
          </span>
          <h3 className="text-6xl font-bold text-white my-4">
            XX99 MARK II HEADPHONES
          </h3>
          <p className="w-[70%] text-lg text-[#c5c5c5]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="mt-16">
            <Link
              href={"/headphones/xx99-mark-two-headphones"}
              className="p-link my-4"
            >
              SEE PRODUCT
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
