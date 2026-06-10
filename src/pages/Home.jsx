import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ search }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <p className="p-4 h-screen">Loading products...</p>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="flex md:justify-center bg-gray-100 top-0 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 max-w-7xl bg-gray-100">
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
