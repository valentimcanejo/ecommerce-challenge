"use client";

import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";
import ShoppingCart from "./shopping-cart";
import { useCart } from "../hooks/use-cart";

const Header = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const { cartItems } = useCart();

  const cartRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;

      if (
        cartRef.current &&
        !cartRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setShowShoppingCart(false);
      }
    };

    if (showShoppingCart) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showShoppingCart]);

  return (
    <>
      <header className="w-full p-2 bg-primary flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-white">Loja</h1>
        <Button
          ref={buttonRef}
          onClick={() => setShowShoppingCart(!showShoppingCart)}
        >
          {cartItems?.length > 0 && (
            <span className="border rounded-full px-2 border-green-400">
              {cartItems?.length}
            </span>
          )}
          <ShoppingCartIcon size={20} />
          Carrinho
        </Button>
      </header>

      {showShoppingCart && (
        <div
          ref={cartRef}
          className="absolute right-2 top-8 z-50 shadow-md h-full rounded p-4"
        >
          <ShoppingCart />
        </div>
      )}
    </>
  );
};

export default Header;
