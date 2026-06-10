import React from "react";
import { Link } from "react-router-dom";
import { ChevronsUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "/bag.webp";

const Footer = () => {
  function handleOnClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <footer className="bg-gray-900/95 text-white">
        <button
          onClick={handleOnClick}
          className="h-13 w-full bg-gray-700/90 hover:bg-gray-600 flex justify-center items-center"
        >
          Return to top
          <ChevronsUp className="mt-1" />
        </button>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold">ShopEasy</h2>
              <p className="text-gray-400 mt-2 max-w-sm">
                A modern React e-commerce application built with React,
                TailwindCSS, Context API, and React Router.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="flex flex-col space-y-1 text-gray-400">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/priyanshu-nv"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="hover:text-sky-400 transition" />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="hover:text-sky-400 transition" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <Link to="/" onClick={handleOnClick}>
              ShopEasy
            </Link>{" "}
            All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
