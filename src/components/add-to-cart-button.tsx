"use client";

import { useCart } from "../hooks/use-cart";
import { Product } from "../database/products-list";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: Product;
  selectedColor: string;
  selectedSize: string;
}

const AddToCartButton = ({
  product,
  selectedColor,
  selectedSize,
}: AddToCartButtonProps) => {
  const { addItem, removeItem, isInCart } = useCart();

  const cartItem = {
    id: product.id,
    color: selectedColor,
    size: selectedSize,
  };

  const handleClick = () => {
    if (isInCart(cartItem)) {
      removeItem(cartItem);
      toast.success("Produto removido do carrinho");
    } else {
      addItem(cartItem);
      toast.success("Produto adicionado ao carrinho");
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={isInCart(cartItem) ? "destructive" : "default"}
    >
      {isInCart(cartItem) ? "Remover do carrinho" : "Adicionar ao carrinho"}
    </Button>
  );
};

export default AddToCartButton;
