import Image from "next/image";
import { Product } from "../database/products-list";

interface ProductPhotosProps {
  product: Product;
}

const ProductPhotos = ({ product }: ProductPhotosProps) => {
  return (
    <div className="flex flex-col gap-8 w-full ">
      <div className="p-2">
        <Image
          src={product.mainImage}
          alt={product.name}
          width={500}
          height={500}
        />
      </div>
      <div className="flex gap-4">
        {product?.secondaryImages?.map((image) => (
          <button key={image.id} className="p-2 border-0 shadow-xl rounded-md">
            <Image src={image.image} alt={image.alt} width={100} height={100} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
