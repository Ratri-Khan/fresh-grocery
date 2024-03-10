// import React from 'react';
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-center bg-black opacity-90 text-white py-4 mt-4">
      <button className="bg-red-900 text-white p-3 rounded">
        Purchase Now
      </button>
      <div className="flex justify-center my-4 text-3xl">
      <ul className="flex">
        <li className="mr-6">
          <FaFacebook />
        </li>
        <li className="mr-6">
          <FaSquareXTwitter />
        </li>
        <li className="mr-6">
          <FaInstagramSquare />
        </li>
        <li className="">
          <FaYoutube />
        </li>
      </ul>
      </div>
      
      <p className="text-xs font-bold">
        {" "}
        Copyright © Grocery2024. All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
