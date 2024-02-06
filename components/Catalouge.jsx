import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Headphone from "../public/assets/image-category-thumbnail-headphones.png";
import Speakers from "../public/assets/image-category-thumbnail-speakers.png";
import Earphone from "../public/assets/image-category-thumbnail-earphones.png";

export default function Catalouge() {
  return (
    <div className="m-auto mb-16 mt-32 flex max-w-screen-lg items-center justify-between">
      <div className="flex h-48 w-[30%] flex-col items-center justify-around rounded-xl bg-[#f1f1f1] pb-4">
        <Image src={Headphone} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="-mt-10 font-medium text-black">HEADPHONES</h2>
        <Link
          href="/headphones"
          className="flex items-center gap-3 text-sm font-medium text-[#787878] "
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
      <div className="flex h-48 w-[30%] flex-col items-center justify-around rounded-xl bg-[#f1f1f1] pb-4">
        <Image src={Speakers} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="-mt-10 font-medium text-black">SPEAKERS</h2>
        <Link
          href="/speakers"
          className="flex items-center gap-3 text-sm font-medium text-[#787878]"
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
      <div className="flex h-48 w-[30%] flex-col items-center justify-around rounded-xl bg-[#f1f1f1] pb-4">
        <Image src={Earphone} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="-mt-10 font-medium text-black">EARPHONES</h2>
        <Link
          href="/earphones"
          className="flex items-center gap-3 text-sm font-medium text-[#787878]"
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
    </div>
  );
}
