import { Star } from "lucide-react";
import { Product } from "../database/products-list";

interface ProductPhotosProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductPhotosProps) => {
  return (
    <div className="flex flex-col  gap-8  w-full">
      <p className="text-2xl">{product.name}</p>
      <div className="flex gap-2 items-center">
        <p>{product.price}</p>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="w-5 h-5" />
        ))}
      </div>
      <span>{product.price}</span>

      <p className="text-lg">{product.description}</p>
    </div>
  );
};

export default ProductDescription;
