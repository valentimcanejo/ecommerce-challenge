import Image from "next/image";
import SecaoProduto from "../components/ProductPhotos";
import ProductPhotos from "../components/ProductPhotos";
import BuySection from "../components/BuySection";
import ProductDescription from "../components/ProductDescription";

export default function Home() {
  return (
    <div className="flex h-screen w-screen max-w-6xl mx-auto mt-16">
      <ProductPhotos />
      <ProductDescription />
      <BuySection />
    </div>
  );
}
