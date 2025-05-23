import ProductPhotos from "../components/ProductPhotos";
import BuySection from "../components/BuySection";
import ProductDescription from "../components/ProductDescription";
import ShoppingList from "../components/shopping-list";
import { productsList } from "../database/products-list";

export default function Home() {
  const product = productsList[0];

  return (
    <div className="flex md:flex-row flex-col gap-4 h-full w-full max-w-6xl mx-auto mt-16 p-4">
      <ProductPhotos product={product} />
      <ProductDescription product={product} />
      <BuySection product={product} />
    </div>
  );
}
