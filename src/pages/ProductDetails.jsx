import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6 animate-pulse">
        <div className="h-60 w-full md:w-1/2 bg-gray-300 rounded"></div>
        <div className="flex-1 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 object-contain mx-auto md:mx-0"
        />
        <div className="flex flex-col justify-start">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-semibold mt-2">
            ₹{Math.round(product.price)}
          </p>
          <button
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            className="bg-sky-500 hover:bg-sky-600 rounded-3xl text-black max-w-48 px-7 py-2 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
