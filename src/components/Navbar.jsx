import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import image from "/bag.webp";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCartContext();
  const { user, logout } = useAuth();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    return () => {
      clearTimeout();
    };
  }, [totalItems]);

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

      <div className="flex">
        <span className="relative flex items-center font-bold text-xl mr-5">
          <Link to="/cart" className="flex items-center">
            Cart
            <ShoppingCart className="size-6 ml-1" />
          </Link>

          {totalItems > 0 && (
            <span
              className={`absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 mt-1 mr-0.5 rounded-full ${animate ? "scale-110" : ""} transition`}
            >
              {totalItems}
            </span>
          )}
        </span>

        {user ? (
          <button
            onClick={logout}
            className="ml-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="ml-2 bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
