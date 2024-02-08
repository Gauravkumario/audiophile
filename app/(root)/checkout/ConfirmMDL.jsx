import Link from "next/link";
import Image from "next/image";
import React from "react";
import pic from "../public/assets/cart/image-xx59-headphones.jpg";

export default function ConfirmMDL() {
  return (
    <div>
      <div className="flex flex-col gap-y-8 rounded bg-white px-4 py-6">
        <div className="item-center flex justify-between">
          <span className="text-black">CART(9)</span>
          <span className="cursor-pointer text-[#979797] underline">
            Remove all
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <Image
              src={pic}
              width={48}
              height={48}
              alt="product image"
              className="rounded"
            />
            <div className="flex flex-col px-4 py-1">
              <span className="text-black">ZX7</span>
              <span className="text-[#979797]">$9898,9</span>
            </div>
          </div>
          <div>
            <div className="my-4 flex h-12 items-center justify-between bg-[#f1f1f1]">
              <button
                type="button"
                className="px-4 text-[#979797] hover:text-[#d87d4a]"
              >
                -
              </button>
              <span className="text-black">1</span>
              <button
                type="button"
                className="px-4 text-[#979797] hover:text-[#d87d4a]"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="item-center flex justify-between">
          <span className="text-[#979797]">TOTAL</span>
          <span className="text-black">$98,908</span>
        </div>
        <Link
          href={"/checkout"}
          className="text-l w-full bg-[#D87D4A] py-3 text-center font-semibold"
        >
          CHECKOUT
        </Link>
      </div>
    </div>
  );
}
