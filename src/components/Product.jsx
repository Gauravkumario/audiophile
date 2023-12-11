"use client";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import proimg from "../../public/assets/product-yx1-earphones/desktop/image-product.jpg";
import set1 from "../../public/assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import set2 from "../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import set3 from "../../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import { useState, useEffect } from "react";
import Featured from "./Featured";

const Productpage = () => {
  const param = useParams();
  const router = useRouter();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { item } = param;
  console.log(item);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Gauravkumario/sample/main/Mdata.json"
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
      <div className="text-center my-20 text-4xl font-medium">Loading...</div>
    );
  }

  const { products } = data;
  const productData = products.find((product) => product.slug === item);

  const others = productData.others;
  console.log(others);

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
                    <span className="text-sm font-normal text-[#D87D4A] tracking-[12px]">
                      NEW PRODUCT
                    </span>
                  )}
                </div>
                <h2 className="text-4xl font-bold mt-6 mb-10 tracking-wider">
                  {productData.name.toUpperCase()}
                </h2>
                <p className="text-[#7D7D7D] mb-10">
                  {productData.description}
                </p>
                <div className="font-medium">$203.21</div>
                <button className="p-link my-4">ADD TO CART</button>
              </div>
            </div>
            <div className="my-16 flex">
              <div className="w-[80%] pr-16">
                <div>
                  <span className="text-4xl font-medium mt-6 mb-10">
                    FEATURES
                  </span>
                </div>
                <p className="mt-8 mb-4 text-base font-normal text-[#7D7D7D]">
                  {productData.features}
                </p>
              </div>
              <div className="w-[20%]">
                <div>
                  <span className="text-4xl font-medium mt-6 mb-10">
                    IN THE BOX
                  </span>
                </div>
                <div className="mt-8">
                  {productData.includes.map((Item) => (
                    <>
                      <div key={Item.item} className="mb-6">
                        <span className="text-[#D87D4A] mr-4">
                          {Item.quantity + "x"}
                        </span>
                        <span className="text-[#7d7d7d]">{Item.item}</span>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-16">
              <div className="h-[500px] grid grid-cols-2 grid-rows-2 gap-4">
                <div className="col-span-1 row-span-1 rounded-md overflow-hidden">
                  <Image src={set1} alt="set11" className="w-full h-full" />
                </div>
                <div className="col-span-1 row-span-2 rounded-md overflow-hidden">
                  <Image src={set3} alt="set11" className="w-full h-full" />
                </div>
                <div className="col-span-1 row-span-1 rounded-md overflow-hidden">
                  <Image src={set2} alt="set11" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Featured others={others} />
    </section>
  );
};

export default Productpage;
