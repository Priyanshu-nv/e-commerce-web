import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Menu, X } from "lucide-react";
import image from "/bag.webp";
import { useCartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ search, setSearch }) => {
  const { cart } = useCartContext();
  const { user, logout } = useAuth();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    // <nav className="flex justify-between gap-5 items-center p-3 fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur shadow-md text-white z-100">
    //   <Link to="/">
    //     <div className="flex justify-center font-bold text-xl items-center ">
    //       <img
    //         src={image}
    //         alt="img"
    //         className="object-contain h-5.5 m-1 inline-block ml-4"
    //       />
    //       ShopEasy
    //     </div>
    //   </Link>

    //   <div className="flex gap-5 md:w-full max-w-2xl ">
    //     <input
    //       type="text"
    //       placeholder="Search products..."
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //       className="hidden md:block w-full px-4 py-2 border border-white rounded-md text-slate-800 bg-white"
    //     />
    //     <span className="relative flex items-center font-bold text-xl">
    //       <Link to="/cart" className="flex items-center">
    //         Cart
    //         <ShoppingCart className="size-6 ml-1" />
    //       </Link>

    //       {totalItems > 0 && (
    //         <span
    //           className={`absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 mt-1 mr-0.5 rounded-full ${animate ? "scale-110" : ""} transition`}
    //         >
    //           {totalItems}
    //         </span>
    //       )}
    //     </span>

    //     {user ? (
    //       <button
    //         onClick={logout}
    //         className="ml-2 bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
    //       >
    //         Logout
    //       </button>
    //     ) : (
    //       <Link
    //         to="/login"
    //         className="ml-2 bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded"
    //       >
    //         Login
    //       </Link>
    //     )}
    //   </div>
    // </nav>
    <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur shadow-md text-white z-50">
      <div className="px-4 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center font-bold text-xl mr-10">
              <img src={image} alt="logo" className="h-6 object-contain mr-1" />
              ShopEasy
            </div>
          </Link>

          <div className="flex items-center gap-4 w-full justify-end">
            {/* Search - Desktop */}
            <div className="hidden md:block w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 border border-white rounded-md bg-white text-slate-800"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-5">
              <div className="relative">
                <Link to="/cart" className="flex items-center font-semibold">
                  Cart
                  <ShoppingCart className="size-6 ml-1" />
                </Link>

                {totalItems > 0 && (
                  <span
                    className={`absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-1.5 rounded-full ${
                      animate ? "scale-110" : ""
                    } transition`}
                  >
                    {totalItems}
                  </span>
                )}
              </div>

              {user ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-300 max-w-32 truncate">
                    👤 {user.name}
                  </span>

                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-sky-600 hover:bg-sky-700 px-3 py-1 rounded"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Search - Mobile */}
        <div className="mt-3 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-white rounded-md bg-white text-slate-800"
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-500 rounded-lg p-4 flex flex-col gap-3">
            {user ? (
              <>
                <div className="text-sm text-gray-300">👤 {user.name}</div>

                <Link
                  to="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-600"
                >
                  <span>Cart</span>

                  {totalItems > 0 && (
                    <span className="bg-red-500 text-white px-2 rounded-full text-sm">
                      {totalItems}
                    </span>
                  )}
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-sky-600 hover:bg-sky-700 px-3 py-2 rounded text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
