"use client"; // Remove this line if not needed
import Image from "next/image";
import { useState, useEffect } from "react";
import immg from "../../../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";
import Catalouge from "@/components/Catalouge";
import Bestgear from "@/components/Bestgear";

export default function Categorypage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { slug } = useParams();

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
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return (
      <div className="my-20 text-center text-4xl font-medium">Loading...</div>
    );
  }

  return (
    <div>
      <div className="bg-black">
        {slug === "headphones" ||
        slug === "earphones" ||
        slug === "speakers" ? (
          <div className="m-auto max-w-screen-lg py-16 text-white">
            <h1 className="text-center text-4xl font-bold">
              {slug.toUpperCase()}
            </h1>
          </div>
        ) : null}
      </div>
      <section className="m-auto max-w-screen-lg">
        <div className="mb-48 mt-36">
          {data.products
            .filter((product) => product.category === slug)
            .map((product) => (
              <div key={product.id} className="mb-16">
                <div className="flex gap-8">
                  <div className="w-3/6">
                    <Image
                      src={immg}
                      alt={product.name}
                      className="w-54 h-full rounded-xl"
                    />
                  </div>
                  <div className="w-3/6 p-10 pb-10">
                    <div>
                      {product.new && (
                        <span className="text-sm font-normal tracking-[12px] text-[#D87D4A]">
                          NEW PRODUCT
                        </span>
                      )}
                    </div>
                    <h2 className="mb-10 mt-6 text-4xl font-bold">
                      {product.name.toUpperCase()}
                    </h2>
                    <p className="mb-12 tracking-widest text-[#7D7D7D]">
                      {product.description}
                    </p>
                    <Link
                      href={`/${product.category + "/" + product.slug}`}
                      className="p-link"
                    >
                      SEE PRODUCT
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Catalouge />
        <Bestgear />
      </section>
    </div>
  );
}
