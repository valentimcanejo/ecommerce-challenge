"use client";

import { useEffect, useState } from "react";

export interface CartItem {
  id: string;
  color: string;
  size: string;
  quantity: number;
}

const getCart = (): CartItem[] => {
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

const setCart = (cartItems: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify({ cartItems }));
};

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );

    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const removeItem = (item: Omit<CartItem, "quantity">) => {
    const updatedCart = cartItems.filter(
      (cartItem) =>
        !(
          cartItem.id === item.id &&
          cartItem.color === item.color &&
          cartItem.size === item.size
        )
    );
    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const decreaseItem = (item: Omit<CartItem, "quantity">) => {
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );

    if (!existingItem) return;

    let updatedCart;
    if (existingItem.quantity === 1) {
      // Remove o item se a quantidade for 1
      updatedCart = cartItems.filter(
        (cartItem) =>
          !(
            cartItem.id === item.id &&
            cartItem.color === item.color &&
            cartItem.size === item.size
          )
      );
    } else {
      // Diminui a quantidade
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }

    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const isInCart = (item: Omit<CartItem, "quantity">) => {
    return cartItems.some(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.color === item.color &&
        cartItem.size === item.size
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCart([]);
  };

  return {
    cartItems,
    addItem,
    removeItem,
    decreaseItem,
    isInCart,
    clearCart,
  };
};
