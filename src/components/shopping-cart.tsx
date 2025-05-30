import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { ConvertedCartItems, useCart } from "../hooks/use-cart";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { useCepStore } from "../hooks/use-cep-finder";
import CEPSearch from "./cep-search";

const ShoppingCart = () => {
  const { increaseQuantity, decreaseItem, cartItems, buyCart } = useCart();
  const { address, clearAddress } = useCepStore();

  const handleAddProduct = (item: Omit<ConvertedCartItems, "quantity">) =>
    increaseQuantity(item);

  const handleRemoveProduct = (item: ConvertedCartItems) => decreaseItem(item);

  const handleBuyCart = () => {
    buyCart();
    clearAddress();
    toast.success("Compra realizada com sucesso");
  };

  return (
    <aside className="w-full md:w-lg right-0 bg-primary h-full fixed p-4 z-20 text-white flex flex-col ">
      <h1 className="text-2xl mb-4">Lista de produtos</h1>

      {cartItems.length === 0 ? (
        <span>Seu carrinho está vazio</span>
      ) : (
        <>
          {/* Lista de produtos com scroll interno */}
          <div className="h-1/3  flex flex-col gap-4 pr-1 overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                className="flex gap-2 items-center w-full justify-between"
                key={index}
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-md">
                    <Image
                      src={item.productImage}
                      alt="Product"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>{`${item.productName} (${item.productSize})`}</span>
                    <span>
                      {item.productPrice.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border p-2 rounded-md">
                  <button onClick={() => handleRemoveProduct(item)}>
                    <Minus size={24} />
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button onClick={() => handleAddProduct(item)}>
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé fixo dentro do aside */}
          <div className="pt-2 mt-2 border-t border-white flex flex-col gap-4 bg-primary ">
            <div className="flex justify-end">
              <span className="text-lg">
                Total:{" "}
                {cartItems
                  .reduce(
                    (acc, item) => acc + item.productPrice * item.quantity,
                    0
                  )
                  .toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </span>
            </div>

            <CEPSearch />

            <Button
              variant={"secondary"}
              disabled={!address}
              onClick={handleBuyCart}
            >
              Finalizar Compra
            </Button>
          </div>
        </>
      )}
    </aside>
  );
};

export default ShoppingCart;
