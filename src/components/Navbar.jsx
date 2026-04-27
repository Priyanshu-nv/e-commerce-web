import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import image from "/public/bag.webp";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="flex justify-between p-4 fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur shadow-md text-white z-100">
      <Link to="/">
        <div className="flex justify-center font-bold text-xl items-center">
          <img
            src={image}
            alt="img"
            className="object-contain h-5.5 m-1 inline-block ml-4"
          />
          ShopEasy
        </div>
      </Link>

      <span className="relative flex items-center font-bold text-xl mr-5">
        <Link to="/cart" className="flex items-center">
          Cart
          <ShoppingCart className="size-6 ml-1" />
        </Link>

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-1.5 py-0 mt-1 mr-1 rounded-full">
            {totalItems}
          </span>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
