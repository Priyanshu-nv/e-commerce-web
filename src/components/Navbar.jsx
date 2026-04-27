import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import image from "/public/bag.webp";

const Navbar = () => {
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
      <span className="flex items-center font-bold text-xl mr-5">
        <Link to="/cart">Cart</Link>
        <Link to="/cart">
          <ShoppingCart className="size-6.5 pl-1 pt-0.5" />
        </Link>
      </span>
    </nav>
  );
};

export default Navbar;
