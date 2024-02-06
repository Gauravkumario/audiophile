"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import pic from "../../../public/assets/cart/image-zx9-speaker.jpg";
import Image from "next/image";

const CheckoutLP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="mx-auto my-12 max-w-screen-lg">
      <div>
        <div>
          <span>
            <button
              onClick={handleGoBack}
              href={"."}
              className="text-base font-medium text-[#7D7D7D]"
            >
              Go Back
            </button>
          </span>
        </div>
        <div className="flex gap-4 pt-6">
          <div className="w-[70%] rounded-md">
            <form action="">
              <h2 className="text-2xl font-semibold">CHECKOUT</h2>
              <fieldser>
                <legend>BILLING INFO</legend>
                <label htmlFor="name">
                  Name <span className="input-error-msg"></span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Example"
                  />
                </label>
                <label htmlFor="email">
                  Email <span className="input-error-msg"></span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                </label>
                <label htmlFor="phoneNo">
                  Phone Number <span className="input-error-msg"></span>
                  <input
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    placeholder="+91 1234567890"
                  />
                </label>
              </fieldser>
              <fieldser>
                <legend>SHIPPING INFO</legend>
                <label htmlFor="address">
                  Your Address <span className="input-error-msg"></span>
                  <input
                    type="text"
                    id="address"
                    name="adress"
                    placeholder="Example"
                  />
                </label>
                <label htmlFor="zipCode">
                  ZIP Code <span className="input-error-msg"></span>
                  <input
                    type="number"
                    id="zipCode"
                    name="zipCode"
                    placeholder="123456"
                  />
                </label>
                <label htmlFor="city">
                  City <span className="input-error-msg"></span>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New Delhi"
                  />
                </label>
                <label htmlFor="Country">
                  Country <span className="input-error-msg"></span>
                  <input
                    type="Country"
                    id="Country"
                    name="Country"
                    placeholder="India"
                  />
                </label>
              </fieldser>
              <fieldser>
                <legend>PAYMENT DETAILS</legend>
              </fieldser>
            </form>
          </div>
          <div className="flex w-[30%] flex-col gap-y-4 rounded-md">
            <div className="pt-6 text-2xl font-semibold">SUMMARY</div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <Image
                    src={pic}
                    width={48}
                    height={48}
                    alt="product image"
                    className="rounded"
                  />
                  <div className="flex flex-col px-4">
                    <span className="font-medium text-black">ZX7</span>
                    <span className="text-[#979797]">$9898,9</span>
                  </div>
                </div>
                <div>
                  <div className="my-4 flex h-12 items-center justify-end">
                    <span className="font-medium text-[#979797]">x1</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7D7D7D]">TOTAL</span>
              <span className="font-medium">$50</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7D7D7D]">SHIPPING</span>
              <span className="font-medium">$452</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7D7D7D]">VAT (INCLUDED)</span>
              <span className="font-medium">$4851</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7D7D7D]">GRAND TOTAL</span>
              <span className="font-medium text-[#d87d4a]"></span>$4785
            </div>
            <div>
              <button className="p-link w-full">CONTINUE TO PAY</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutLP;
