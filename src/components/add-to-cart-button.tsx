"use client";

import { useCart } from "../hooks/use-cart";
import { Product, productsList } from "../database/products-list";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { changeColorLanguage } from "../lib/utils";
import { useEffect, useState } from "react";

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
    if (isItemInCart) {
      removeItem(cartItem);
      toast.success("Produto removido do carrinho", {
        position: "bottom-center",
      });
    } else {
      addItem(cartItem);
      toast.success("Produto adicionado ao carrinho", {
        position: "bottom-center",
      });
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={isItemInCart ? "destructive" : "default"}
    >
      {isItemInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
    </Button>
  );
};

export default AddToCartButton;
