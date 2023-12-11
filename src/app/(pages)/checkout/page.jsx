"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";

const CheckoutLP = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <section className="max-w-screen-lg mx-auto my-12">
      <div>
        <div>
          <span>
            <button
              onClick={handleGoBack}
              href={"."}
              className="text-[#7D7D7D] text-base font-medium"
            >
              Go Back
            </button>
          </span>
        </div>
        <div className="flex gap-4">
          <div className="w-[70%] bg-[#fff] rounded-md">
            <form action="">ededededededede</form>
          </div>
          <div className="[30%] bg-white rounded-md">
            <div>SUMMARY</div>
            <div></div>
            <div>
              <span>TOTAL</span>
              <span>$50</span>
            </div>
            <div>
              <span>SHIPPING</span>
              <span>$452</span>
            </div>
            <div>
              <span>VAT (INCLUDED)</span>
              <span>$4851</span>
            </div>
            <div>
              <span>GRAND TOTAL</span>
              <span></span>$4785
            </div>
            <div>
              <button className="p-link">CONTINUE TO PAY</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutLP;
