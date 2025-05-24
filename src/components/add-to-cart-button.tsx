"use client";

import { useEffect, useState } from "react";
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
  const [isInCart, setIsInCart] = useState(false);
  console.log(selectedColor, selectedSize);

  const cartItem = {
    id: product.id,
    color: selectedColor,
    size: selectedSize,
    quantity: 1,
  };

  // Verifica se esse item específico está no carrinho
  const checkIsInCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || '{"cartItems": []}'
    );
    return cart.cartItems?.some(
      (item: any) =>
        item.id === cartItem.id &&
        item.color === cartItem.color &&
        item.size === cartItem.size
    );
  };

  useEffect(() => {
    setIsInCart(checkIsInCart());
  }, [product.id, selectedColor, selectedSize]);

  const addProductToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || '{"cartItems": []}'
    );
    const updatedCart = {
      cartItems: [...cart.cartItems, cartItem],
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Produto adicionado ao carrinho", {
      position: "bottom-center",
    });
    setIsInCart(true);
  };

  const removeProductFromCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || '{"cartItems": []}'
    );
    const updatedCart = {
      cartItems: cart.cartItems.filter(
        (item: any) =>
          !(
            item.id === cartItem.id &&
            item.color === cartItem.color &&
            item.size === cartItem.size
          )
      ),
    };
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Produto removido do carrinho", {
      position: "bottom-center",
    });
    setIsInCart(false);
  };

  return (
    <Button
      onClick={isInCart ? removeProductFromCart : addProductToCart}
      variant={isInCart ? "destructive" : "default"}
    >
      {isInCart ? "Remover do carrinho" : "Adicionar ao carrinho"}
    </Button>
  );
};

export default AddToCartButton;
