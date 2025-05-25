import ProductPhotos from "../components/product-photos";
import BuySection from "../components/buy-section";
import ProductDescription from "../components/product-description";
import { productsList } from "../database/products-list";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const product = productsList[0];

  return (
    <div className="flex md:flex-row flex-col gap-4 h-full w-full max-w-6xl mx-auto mt-16 p-4">
      <div>
        <Toaster />
      </div>
      <Suspense>
        <ProductPhotos product={product} />
      </Suspense>
      <ProductDescription product={product} />
      <BuySection product={product} searchParams={searchParams} />
    </div>
  );
}
