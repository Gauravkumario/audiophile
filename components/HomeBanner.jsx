import Link from "next/link";
import React from "react";

export default function HomeBanner() {
  return (
    <section className="bg-[#191919]">
      <div className="m-auto h-[90vh] w-full max-w-screen-lg bg-[url('../public/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="m-auto flex  h-full w-full flex-col items-center justify-center md:m-0 md:w-3/6 lg:items-start">
          <span className="text-sm font-normal tracking-[12px] text-[#D87D4A]">
            NEW PRODUCT
          </span>
          <h3 className="my-4 text-center text-4xl font-bold text-white sm:text-left sm:text-6xl">
            XX99 MARK II HEADPHONES
          </h3>
          <p className="w-full px-4 text-center text-lg text-[#c5c5c5] sm:p-0 sm:text-left lg:w-[70%]">
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
}
