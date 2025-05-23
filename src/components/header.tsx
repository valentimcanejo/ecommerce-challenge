"use client";

import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import ShoppingCart from "./shopping-cart";

const Header = () => {
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  return (
    <>
      <header className="w-full p-2 bg-primary flex justify-between items-center sticky top-0">
        <h1 className="text-white">Home</h1>
        <Button onClick={() => setShowShoppingCart(!showShoppingCart)}>
          <ShoppingCartIcon />
          Carrinho
        </Button>
      </header>
      {showShoppingCart ? <ShoppingCart /> : null}
    </>
  );
};

export default Header;
