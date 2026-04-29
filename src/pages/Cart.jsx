import React from "react";
import { useCartContext } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCartContext();

  const total = cart.reduce(
    (sum, item) => sum + Math.round(item.price) * item.quantity,
    0,
  );

  return (
    <div className="lg:max-w-7xl mx-auto p-1 flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="p-4 min-h-screen w-full">
        <span className="flex items-center mb-4">
          <h1 className="text-xl font-bold mr-1">Your Cart</h1>
          <ShoppingBag />
        </span>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-300 rounded p-2 mb-3 shadow-sm gap-3 bg-gray-300">
              {/* Title */}
              <div className="flex-1">
                <h2 className="font-semibold text-sm md:text-base">
                  {item.title}
                </h2>
              </div>

              {/* Controls */}
              <div className="flex items-center flex-wrap justify-between md:justify-center gap-4 w-full md:w-auto">
                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center bg-gray-50 hover:bg-gray-100 font-semibold rounded-full"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span className="min-w-5 text-center sm:font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center bg-gray-50 hover:bg-gray-100 font-semibold rounded-full"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Remove */}
                <button
                  className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:rounded rounded-2xl hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {total > 0 ? (
          <div className="flex justify-end mt-4">
            <h2 className="text-xl font-bold">Subtotal: ₹{total.toFixed(2)}</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
