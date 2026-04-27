import React from "react";
import { Link } from "react-router-dom";
import { ChevronsUp } from "lucide-react";
import image from "/bag.webp";

const Footer = () => {
  function handleOnClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="h-72 bg-gray-900/90 backdrop-blur shadow-md text-white">
      <button
        onClick={handleOnClick}
        className="h-13 w-full bg-gray-700/90 hover:bg-gray-600 flex justify-center items-center"
      >
        Return to top
        <ChevronsUp className="mt-1" />
      </button>
      <div className="flex justify-around text-gray-300 mt-10 mb-10">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>Supply</li>
          <li>Become an Affiliate</li>
          <li>Advertise</li>
          <li>Merchants</li>
        </ul>
      </div>
      <hr className="text-gray-600" />
      <Link
        to="/"
        onClick={handleOnClick}
        className="flex justify-center items-center h-14 text-xl font-bold italic"
      >
        <img src={image} alt="image" className="h-6 mr-0.5" />
        ShopEasy
      </Link>
    </div>
  );
};

export default Footer;
