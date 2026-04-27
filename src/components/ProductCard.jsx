import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-3 rounded shadow sm:hover:scale-105 transition flex flex-col justify-between">
      <div className="flex flex-col">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
        <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">₹{Math.round(product.price)}</p>

        <Link to={`/product/${product.id}`}>
          <button className="bg-sky-600 rounded-md text-white px-3 py-1 mt-2 w-full">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
