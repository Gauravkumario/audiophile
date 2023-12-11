"use client"; // Remove this line if not needed
import Image from "next/image";
import { useState, useEffect } from "react";
import immg from "../../../../public/assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";

const Categorypage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { slug } = useParams();

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
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  if (!data) {
    return (
      <div className="text-center my-20 text-4xl font-medium">Loading...</div>
    );
  }

  return (
    <section className="max-w-screen-lg m-auto">
      <div className="mt-36 mb-48">
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
                      <span className="text-sm font-normal text-[#D87D4A] tracking-[12px]">
                        NEW PRODUCT
                      </span>
                    )}
                  </div>
                  <h2 className="text-4xl font-bold mt-6 mb-10">
                    {product.name.toUpperCase()}
                  </h2>
                  <p className="text-[#7D7D7D] mb-12 tracking-widest">
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
    </section>
  );
};

export default Categorypage;
