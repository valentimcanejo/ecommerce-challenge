import Link from "next/link";
import { Product } from "../database/products-list";
import { colorMap } from "../lib/utils";
import { Button } from "./ui/button";
import CEPSearch from "./cep-search";
import AddToCartButton from "./add-to-cart-button";
import { use } from "react";

interface BuySectionProps {
  product: Product;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const BuySection = ({ product, searchParams }: BuySectionProps) => {
  // const currentColor = (await searchParams).cor || "branco";
  // const currentSize = (await searchParams).tamanho || "M";
  // console.log(await searchParams);
  const { cor: currentColor = "branco", tamanho: currentSize = "M" } =
    use(searchParams);
  console.log(currentColor, currentSize);

  return (
    <div className="flex w-full flex-col justify-between border gap-8 p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h1>

        <AddToCartButton
          product={product}
          selectedColor={currentColor as string}
          selectedSize={currentSize as string}
        />
        <div className="flex flex-col gap-2">
          <span>Escolha a cor:</span>
          <div className="flex gap-2">
            {product.colorList?.map(({ id, hexa, color }) => (
              <Link
                href={`?cor=${color}&tamanho=${currentSize}`}
                key={id}
                className={`w-8 h-8 rounded-md shadow-lg border ${
                  colorMap[hexa]
                } ${currentColor === color ? "border-2 border-primary" : ""}`}
              />
            ))}
          </div>

          <span>Escolha o tamanho:</span>
          <div className="flex gap-2">
            {product.sizeList?.map(({ id, size }) => (
              <Button
                key={id}
                asChild
                variant={currentSize === size ? "outline" : "default"}
              >
                <Link
                  href={`?cor=${currentColor}&tamanho=${size}`}
                  className={`w-8 h-8 rounded-md`}
                >
                  {size}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <CEPSearch />
    </div>
  );
};

export default BuySection;
