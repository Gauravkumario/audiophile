"use client";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import proimg from "../public/assets/product-yx1-earphones/desktop/image-product.jpg";
import set1 from "../public/assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import set2 from "../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import set3 from "../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import { useState, useEffect } from "react";
import Featured from "./Featured";

export default function Productpage() {
  const param = useParams();
  const router = useRouter();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { item } = param;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Gauravkumario/sample/main/Mdata.json",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [item]);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return (
      <div className="my-20 text-center text-4xl font-medium">Loading...</div>
    );
  }

  const { products } = data;
  const productData = products.find((product) => product.slug === item);

  const { others } = productData;
  console.log(productData, "popopopoop");

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
        <div>
          <div key={productData.id} className="my-12">
            <div className="flex gap-8">
              <div className="w-3/6">
                <Image
                  src={proimg}
                  alt={productData.name}
                  className="w-54 h-full rounded-xl"
                />
              </div>
              <div className="w-3/6 p-10 pb-10">
                <div>
                  {productData.new && (
                    <span className="text-sm font-normal tracking-[12px] text-[#D87D4A]">
                      NEW PRODUCT
                    </span>
                  )}
                </div>
                <h2 className="mb-10 mt-6 text-4xl font-bold tracking-wider">
                  {productData.name.toUpperCase()}
                </h2>
                <p className="mb-10 text-[#7D7D7D]">
                  {productData.description}
                </p>
                <div className="font-medium">$203.21</div>
                <div className="flex gap-4">
                  <div className="my-4 flex items-center justify-between bg-[#f1f1f1]">
                    <button type="button" className="px-4 hover:text-[#d87d4a]">
                      -
                    </button>
                    <span>1</span>
                    <button type="button" className="px-4 hover:text-[#d87d4a]">
                      +
                    </button>
                  </div>
                  <button className="p-link my-4">ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className="my-16 flex">
              <div className="w-[80%] pr-16">
                <div>
                  <span className="mb-10 mt-6 text-4xl font-medium">
                    FEATURES
                  </span>
                </div>
                <p className="mb-4 mt-8 text-base font-normal text-[#7D7D7D]">
                  {productData.features}
                </p>
              </div>
              <div className="w-[20%]">
                <div>
                  <span className="mb-10 mt-6 text-4xl font-medium">
                    IN THE BOX
                  </span>
                </div>
                <div className="mt-8">
                  {productData.includes.map((Item, index) => (
                    <div key={index} className="mb-6">
                      <span className="mr-4 text-[#D87D4A]">
                        {Item.quantity + "x"}
                      </span>
                      <span className="text-[#7d7d7d]">{Item.item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-16">
              <div className="grid h-[500px] grid-cols-2 grid-rows-2 gap-4">
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md">
                  <Image src={set1} alt="set11" className="h-full w-full" />
                </div>
                <div className="col-span-1 row-span-2 overflow-hidden rounded-md">
                  <Image src={set3} alt="set11" className="h-full w-full" />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-md">
                  <Image src={set2} alt="set11" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured relatedProduct={others} />
    </section>
  );
}
