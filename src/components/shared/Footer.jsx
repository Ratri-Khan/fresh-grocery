// import React from 'react';
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "../Home/Testimonial/Testimonial.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-slate-950 text-white py-4 text-center">
      <div className="w-6/12 mx-auto md:flex justify-between items-center">
      <div>
        <h3>Fresh Grocery</h3>
        <p>We provide 24 hours of service</p>
        <p>happy client, happy we</p>
        <button className="gorgeous-button mt-4"><Link to="order/vegetable">Purchase</Link></button>
      </div>
      <div className="my-4">
        <p className="text-2xl"> Contact us</p>
        
        <p className="">5.1/Uttara,Dhaka</p>
        <p>grocery@gmail.com</p>
        <p>+3473647856475</p>
        <ul className="flex justify-center text-3xl">
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
      </div>

      <p className="text-xs font-bold border-t border-white pt-4">
        Copyright © Grocery2024. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
