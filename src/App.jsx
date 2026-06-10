import { useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [search, setSearch] = useState("");

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar search={search} setSearch={setSearch} />
      <main className="md:pt-20 pt-30 px-3 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home search={search} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
