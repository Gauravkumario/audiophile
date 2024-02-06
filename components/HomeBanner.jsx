import Link from "next/link";
import React from "react";

export default function HomeBanner() {
  return (
    <section className="bg-[#191919]">
      <div className="m-auto h-[90vh] max-w-screen-lg bg-[url('../public/assets/home/desktop/image-hero.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="flex h-full w-3/6 flex-col items-start justify-center">
          <span className="text-sm font-normal tracking-[12px] text-[#D87D4A]">
            NEW PRODUCT
          </span>
          <h3 className="my-4 text-6xl font-bold text-white">
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
}
