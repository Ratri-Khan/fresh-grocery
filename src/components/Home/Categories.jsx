// import React from 'react';
import onion from "../../assets/categories/onion.jpg";
import fish from "../../assets/categories/fish.jpg";
import rice from "../../assets/categories/rice.jpg";
import { IoMdStarHalf ,IoMdStar ,IoIosStarOutline } from "react-icons/io";

import "./Featured.css";

import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-xl py-8">Shop by Categories</h3>
      <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-9 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border border-green-700 text-center">
            <img src={category.pic} alt="" className="h-28 w-full" />
            <div className="h-20">
              <p className=" uppercase py-1">
                {category.name}
              </p>
              <p className="text-xs">{category.serial}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="grid lg:grid-cols-3 sm:grid-cols-3 gap-4 my-4  text-green-600 text-xl uppercase font-bold">
        <div className="relative ">
          <div className="linear-gradient"></div>
          <img src={onion} alt="" className="w-full h-64" />
          <div className="absolute top-4 left-4 right-0 bottom-0 ">
            <p>Fresh Fish</p>
            <p className="text-sm">6 categories</p>
            <p className="flex text-yellow-500">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="linear-gradient"></div>
          <img src={fish} alt="" className="w-full h-64" />
          <div className="absolute top-4 left-4 right-0 bottom-0">
            <p>Fresh Fish</p>
            <p className="text-sm">6 categories</p>
            <p className="flex text-yellow-500">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoIosStarOutline />
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="linear-gradient"></div>
          <img src={rice} alt="" className="w-full h-64" />
          <div className="absolute top-4 left-4 right-0 bottom-0">
            <p>Fresh Fish</p>
            <p className="text-sm">6 categories</p>
            <p className="flex text-yellow-500">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
