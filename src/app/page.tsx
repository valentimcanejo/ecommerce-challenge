import ProductPhotos from "../components/ProductPhotos";
import BuySection from "../components/BuySection";
import ProductDescription from "../components/ProductDescription";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col gap-4 h-full w-full max-w-6xl mx-auto mt-16 p-4">
      <ProductPhotos />
      <ProductDescription />
      <BuySection />
    </div>
  );
}
