/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import share from "../../public/assets/shared/desktop/image-zx7-speaker.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";

const Featured = ({ others }) => {
  const { slug } = useParams();
  return (
    <div className="max-w-screen-lg m-auto mb-48">
      <div>
        <h2 className="text-4xl font-semibold text-center my-12">
          YOU MAY ALSO LIKE
        </h2>
      </div>
      <div className="flex gap-8">
        {console.log(others)}
        {others.map((rpData) => (
          <div
            key={rpData.name}
            className="w-2/6 flex flex-col items-center justify-between"
          >
            <Image
              src={share}
              alt="poopopp"
              width={280}
              height={280}
              className="rounded-lg"
            />
            {/* {"/public" + rpData.image.desktop} */}
            <h2 className="my-8 text-2xl font-medium">{rpData.name}</h2>
            <button className="w-max-content">
              <Link href={`/${slug}/${rpData.slug}`} className="p-link">
                SEE PRODUCT
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
