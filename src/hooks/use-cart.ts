"use client";

import { create } from "zustand";

export interface ConvertedCartItems {
  productId: string;
  productName: string;
  productColor: string;
  productSize: string;
  productImage: string;
  productPrice: number;
  quantity: number;
}

interface CartStore {
  cartItems: ConvertedCartItems[];
  addItem: (item: Omit<ConvertedCartItems, "quantity">) => void;
  increaseQuantity: (item: Omit<ConvertedCartItems, "quantity">) => void;
  decreaseItem: (item: ConvertedCartItems) => void;
  removeItem: (item: Omit<ConvertedCartItems, "quantity">) => void;
  isInCart: (item: Omit<ConvertedCartItems, "quantity">) => boolean;
  buyCart: () => void;
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

export const useCart = create<CartStore>((set, get) => ({
  cartItems: getCart(),

  addItem: (item) => {
    const { cartItems } = get();
    const existingItem = cartItems.find(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
    );

    if (existingItem) {
      get().increaseQuantity(item);
    } else {
      const newItem: ConvertedCartItems = { ...item, quantity: 1 };
      const updatedCart = [...cartItems, newItem];
      set({ cartItems: updatedCart });
      setCart(updatedCart);
    }
  },

  increaseQuantity: (item) => {
    const { cartItems } = get();
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.productId === item.productId &&
      cartItem.productColor === item.productColor &&
      cartItem.productSize === item.productSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    set({ cartItems: updatedCart });
    setCart(updatedCart);
  },

  decreaseItem: (item) => {
    const { cartItems } = get();
    const updatedCart = cartItems
      .map((cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);

    set({ cartItems: updatedCart });
    setCart(updatedCart);
  },

  removeItem: (item) => {
    const { cartItems } = get();
    const updatedCart = cartItems.filter(
      (cartItem) =>
        !(
          cartItem.productId === item.productId &&
          cartItem.productColor === item.productColor &&
          cartItem.productSize === item.productSize
        )
    );
    set({ cartItems: updatedCart });
    setCart(updatedCart);
  },

  isInCart: (item) => {
    const { cartItems } = get();
    return cartItems.some(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.productColor === item.productColor &&
        cartItem.productSize === item.productSize
    );
  },

  buyCart: () => {
    set({ cartItems: [] });
    setCart([]);
  },
}));
