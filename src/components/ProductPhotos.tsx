import Image from "next/image";

const ProductPhotos = () => {
  const imagesList = [
    {
      id: 1,
      image: "/images/shirt.jpg",
      alt: "Product",
    },
    {
      id: 2,
      image: "/images/shirt.jpg",
      alt: "Product",
    },
    {
      id: 3,
      image: "/images/shirt.jpg",
      alt: "Product",
    },
    {
      id: 4,
      image: "/images/shirt.jpg",
      alt: "Product",
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full ">
      <div className="p-2">
        <Image src="/images/shirt.jpg" alt="Product" width={500} height={500} />
      </div>
      <div className="flex gap-4">
        {imagesList?.map((image) => (
          <button
            key={image.id}
            className="p-2 border-0 shadow-xl rounded-md cursor-pointer"
          >
            <Image src={image.image} alt={image.alt} width={100} height={100} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductPhotos;
