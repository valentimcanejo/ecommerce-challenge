"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "../database/products-list";
import { changeColorLanguage } from "../lib/utils";

interface ProductPhotosProps {
  product: Product;
}

const ProductPhotos = ({ product }: ProductPhotosProps) => {
  const searchParams = useSearchParams();
  const currentColor = searchParams.get("cor") || "branco";

  const [mainImage, setMainImage] = useState(
    product.imageList[changeColorLanguage(currentColor)][0].image || ""
  );

  useEffect(() => {
    console.log(product.imageList[changeColorLanguage(currentColor)]);

    setMainImage(product.imageList[changeColorLanguage(currentColor)][0].image);
  }, [currentColor, product.imageList]);

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="p-2 w-full lg:w-[500px] h-full lg:h-[500px]">
        <Image
          src={mainImage}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex gap-4">
        {product.imageList[changeColorLanguage(currentColor)]?.map((image) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image.image)}
            className="p-2 border-0 shadow-xl rounded-md"
          >
            <Image src={image.image} alt={image.alt} width={100} height={100} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
