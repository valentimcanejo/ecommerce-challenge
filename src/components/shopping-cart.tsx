import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <aside className="w-lg right-0 bg-primary h-screen fixed p-4 z-20 text-white flex flex-col gap-4">
      <h1 className="text-xl">Lista de produtos</h1>
      <div className="flex gap-2 items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-md">
            <Image
              src="/images/shirt.jpg"
              alt="Product"
              width={60}
              height={60}
            />
          </div>
          <span>Camiseta Lisa da Montink</span>
        </div>

        <div className="flex items-center gap-2 border p-2 rounded-md">
          <button onClick={() => setQuantity(quantity - 1)}>
            <Minus size={24} />
          </button>
          <span className="text-lg">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>
            <Plus size={24} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShoppingCart;
