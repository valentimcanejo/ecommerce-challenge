import ProductPhotos from "../components/product-photos";
import BuySection from "../components/buy-section";
import ProductDescription from "../components/product-description";
import { productsList } from "../database/products-list";
import { Toaster } from "react-hot-toast";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const product = productsList[0];

  return (
    <div className="flex md:flex-row flex-col gap-4 h-full w-full max-w-6xl mx-auto mt-16 p-4">
      <div>
        <Toaster />
      </div>
      <ProductPhotos product={product} />
      <ProductDescription product={product} />
      <BuySection product={product} searchParams={searchParams} />
    </div>
  );
}
