"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import pic from "../../../public/assets/cart/image-zx9-speaker.jpg";
import PaymentImg from "@/public/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";

const CheckoutLP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="bg-[#f6f8fd]">
      <section className="mx-auto max-w-screen-lg bg-transparent px-4 py-12">
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
          <div className="flex flex-col gap-4 pt-6 md:flex-row">
            <div className="w-full rounded-md bg-white p-4 md:w-[70%]">
              <form action="" autoComplete="off">
                <h2 className="text-2xl font-semibold">CHECKOUT</h2>
                <fieldset>
                  <legend className="pb-4 pt-8 text-sm font-medium text-[#d87d4a]">
                    BILLING INFO
                  </legend>
                  <div className="block flex-wrap justify-between md:flex">
                    <label
                      htmlFor="name"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">Name</span>
                      <span className="input-error-msg"></span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Example"
                      />
                    </label>
                    <label
                      htmlFor="email"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">Email</span>
                      <span className="input-error-msg"></span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                      />
                    </label>
                    <label
                      htmlFor="phoneNo"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">
                        Phone Number
                      </span>
                      <span className="input-error-msg"></span>
                      <input
                        type="number"
                        id="phoneNo"
                        name="phoneNo"
                        placeholder="+91 1234567890"
                      />
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="pb-4 pt-8 text-sm font-medium text-[#d87d4a]">
                    SHIPPING INFO
                  </legend>
                  <label htmlFor="address" className="flex flex-col">
                    <span className="py-2 text-base font-medium">
                      Your Address
                    </span>{" "}
                    <span className="input-error-msg"></span>
                    <input
                      type="text"
                      id="address"
                      name="adress"
                      placeholder="Example"
                    />
                  </label>
                  <div className="block flex-wrap justify-between md:flex">
                    <label
                      htmlFor="zipCode"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">
                        ZIP Code
                      </span>{" "}
                      <span className="input-error-msg"></span>
                      <input
                        type="number"
                        id="zipCode"
                        name="zipCode"
                        placeholder="123456"
                      />
                    </label>
                    <label
                      htmlFor="city"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">City</span>{" "}
                      <span className="input-error-msg"></span>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New Delhi"
                      />
                    </label>
                    <label
                      htmlFor="Country"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">
                        Country
                      </span>
                      <span className="input-error-msg"></span>
                      <input
                        type="Country"
                        id="Country"
                        name="Country"
                        placeholder="India"
                      />
                    </label>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="pb-4 pt-8 text-sm font-medium text-[#d87d4a]">
                    PAYMENT DETAILS
                  </legend>
                  <div className="block flex-col md:flex md:flex-row">
                    <h3 className="w-full md:w-1/2">Payment Method</h3>
                    <div className="block w-full md:w-1/2">
                      <label htmlFor="eMoney" className="flex items-center">
                        <span className="input-error-msg"></span>
                        <input
                          type="radio"
                          id="eMoney"
                          name="eMoney"
                          placeholder="4561867895"
                        />
                        <span className="py-2 text-base font-medium">
                          e-Money
                        </span>
                      </label>
                      <label htmlFor="ePin" className="flex items-center">
                        <span className="input-error-msg"></span>
                        <input
                          type="radio"
                          id="ePin"
                          name="ePin"
                          placeholder="0000"
                        />
                        <span className="py-2 text-base font-medium">
                          Cash on Delivery
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="block flex-wrap justify-between md:flex">
                    <label
                      htmlFor="eMoney"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">
                        E-Money Number
                      </span>
                      <span className="input-error-msg"></span>
                      <input
                        type="eMoney"
                        id="eMoney"
                        name="eMoney"
                        placeholder="4561867895"
                      />
                    </label>
                    <label
                      htmlFor="ePin"
                      className="flex w-full flex-col md:w-[48%]"
                    >
                      <span className="py-2 text-base font-medium">
                        E-Pin Number
                      </span>{" "}
                      <span className="input-error-msg"></span>
                      <input
                        type="text"
                        id="ePin"
                        name="ePin"
                        placeholder="0000"
                      />
                    </label>
                  </div>
                  <div>
                    <Image
                      src={PaymentImg}
                      alt="payment-logo"
                      width={90}
                      height={50}
                    />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="flex h-fit w-full flex-col gap-y-4 rounded-md bg-white p-4 md:w-[30%]">
              <div className="text-2xl font-semibold">SUMMARY</div>
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
    </div>
  );
};

export default CheckoutLP;
