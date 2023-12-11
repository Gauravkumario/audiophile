import Image from "next/image";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Headphone from "../../public/assets/image-category-thumbnail-headphones.png";
import Speakers from "../../public/assets/image-category-thumbnail-speakers.png";
import Earphone from "../../public/assets/image-category-thumbnail-earphones.png";

const Catalouge = () => {
  return (
    <div className="max-w-screen-lg m-auto flex items-center justify-between my-32">
      <div className="bg-[#f1f1f1] flex flex-col items-center justify-around rounded-xl pb-4 w-[30%] h-48">
        <Image src={Headphone} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="text-black font-medium -mt-10">HEADPHONES</h2>
        <Link
          href="/headphones"
          className="flex gap-3 items-center text-[#787878] text-sm font-medium "
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
      <div className="bg-[#f1f1f1] flex flex-col items-center justify-around rounded-xl pb-4 w-[30%] h-48">
        <Image src={Speakers} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="text-black font-medium -mt-10">SPEAKERS</h2>
        <Link
          href="/speakers"
          className="flex gap-3 items-center text-[#787878] text-sm font-medium"
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
      <div className="bg-[#f1f1f1] flex flex-col items-center justify-around rounded-xl pb-4 w-[30%] h-48">
        <Image src={Earphone} alt="product-logo" className="-mt-20 w-52" />
        <h2 className="text-black font-medium -mt-10">EARPHONES</h2>
        <Link
          href="/earphones"
          className="flex gap-3 items-center text-[#787878] text-sm font-medium"
        >
          SHOP <FaChevronRight size={14} color="#d87d4a" />
        </Link>
      </div>
    </div>
  );
};

export default Catalouge;
