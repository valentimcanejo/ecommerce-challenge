import { Star } from "lucide-react";

const ProductDescription = () => {
  return (
    <div className="flex flex-col  gap-8  w-full">
      <p className="text-2xl">Camiseta Lisa da Montink</p>
      <div className="flex gap-2 items-center">
        <p>0,0</p>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="w-5 h-5" />
        ))}
      </div>
      <span>R$ 99,90</span>

      <p className="text-lg">Camiseta Lisa da Montink</p>
    </div>
  );
};

export default ProductDescription;
