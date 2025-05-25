"use client";

import { useCart } from "../hooks/use-cart";
import { Product } from "../database/products-list";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { changeColorLanguage } from "../lib/utils";

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
  const { addItem, isInCart } = useCart();

  const cartItem = {
    productId: product.id,
    productName: product.name,
    productColor: selectedColor,
    productSize: selectedSize,
    productImage:
      product.imageList[changeColorLanguage(selectedColor)][0].image,
    productPrice: product.price,
    quantity: 1,
  };

  const isItemInCart = isInCart(cartItem);

  const handleClick = () => {
    if (isItemInCart) return;

    addItem(cartItem);
    toast.success("Produto adicionado ao carrinho", {
      position: "bottom-center",
    });
  };

  return <Button onClick={handleClick}>Adicionar ao carrinho</Button>;
};

export default AddToCartButton;
