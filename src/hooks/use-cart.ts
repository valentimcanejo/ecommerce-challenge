"use client";

import { useEffect, useState } from "react";

export interface ConvertedCartItems {
  productId: string;
  productName: string;
  productColor: string;
  productSize: string;
  productImage: string;
  productPrice: number;
  quantity: number;
}

const getCart = (): ConvertedCartItems[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  if (cart) {
    try {
      const parsed = JSON.parse(cart);

      return parsed.cartItems || [];
    } catch {
      return [];
    }
  }
  return [];
};

const setCart = (cartItems: ConvertedCartItems[]) => {
  localStorage.setItem("cart", JSON.stringify({ cartItems }));
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState<ConvertedCartItems[]>([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const addItem = (item: Omit<ConvertedCartItems, "quantity">) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
    );

    if (existingItem) {
      increaseQuantity(item);
    } else {
      const newItem: ConvertedCartItems = { ...item, quantity: 1 };
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
      setCart(updatedCart);
    }
  };

  const increaseQuantity = (item: Omit<ConvertedCartItems, "quantity">) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.productId === item.productId &&
      cartItem.productColor === item.productColor &&
      cartItem.productSize === item.productSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const decreaseItem = (item: ConvertedCartItems) => {
    if (item.quantity === 1) {
      return;
    }

    const updatedCart = cartItems
      .map((cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const removeItem = (item: Omit<ConvertedCartItems, "quantity">) => {
    const updatedCart = cartItems.filter(
      (cartItem) =>
        !(
          cartItem.productId === item.productId &&
          cartItem.productColor === item.productColor &&
          cartItem.productSize === item.productSize
        )
    );

    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const isInCart = (item: Omit<ConvertedCartItems, "quantity">) => {
    console.log(item);
    return cartItems.some(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
    );
  };

  const buyCart = () => {
    setCartItems([]);
    setCart([]);
    localStorage.removeItem("cart");
  };

  const clearCart = () => {
    setCartItems([]);
    setCart([]);
  };

  return {
    cartItems,
    addItem,
    increaseQuantity,
    decreaseItem,
    removeItem,
    isInCart,
    clearCart,
    buyCart,
  };
};
