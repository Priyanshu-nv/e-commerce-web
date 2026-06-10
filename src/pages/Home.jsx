import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";
import { data } from "react-router-dom";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <p className="p-4 h-screen">Loading products...</p>;
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <>
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide md:justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
              selectedCategory === category
                ? "bg-sky-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex md:justify-center bg-gray-100 top-0 pb-6">
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl bg-gray-100">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="text-center mt-5 text-gray-500">No products found</p>
        )}
      </div>
    </>
  );
};

export default Home;
