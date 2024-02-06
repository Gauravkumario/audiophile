/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import share from "../public/assets/shared/desktop/image-zx7-speaker.jpg";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Featured({ relatedProduct }) {
  const { slug } = useParams();
  return (
    <div className="m-auto mb-48 max-w-screen-lg">
      <div>
        <h2 className="my-12 text-center text-4xl font-semibold">
          YOU MAY ALSO LIKE
        </h2>
      </div>
      <div className="flex gap-8">
        {relatedProduct.map((rpData) => (
          <div
            key={rpData.name}
            className="flex w-2/6 flex-col items-center justify-between"
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
}
