// import React from 'react';
import { useEffect, useState } from "react";
import discount from "../../../assets/home/discount.mp4";
import { IoMdStarHalf ,IoMdStar } from "react-icons/io";
const Discount = () => {
  const [discounts, setDiscounts] = useState([]);
  useEffect(() => {
    fetch("https://fresh-grocery-server.vercel.app/discount")
      .then((res) => res.json())
      .then((data) => setDiscounts(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-16">
      <p className="text-2xl text-center font-bold mt-28 mb-6">Discount Price</p>
      <div className="md:flex items-center">
        <div className="md:w-3/12">
          <video
            width="100%"
            // style={{ height: "600px", backgroundColor: "black" }}
            autoPlay
            muted
            loop
          >
            <source
              src={discount}
              type="video/mp4"
              style={{ height: "600px" }}
            />
          </video>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ml-8 lg:w-9/12">
          {discounts.map((discount) => (
            <div key={discount.id}>
              <div className="flex items-center border border-slate-300 rounded ">
                <img
                  src={discount.pic}
                  alt=""
                  className="border-r border-slate-300 h-[90px] w-[90px]"
                />
                <div className="p-3 ">
                  <p className="text-slate-500 text-sm uppercase">{discount.available}</p>
                  <p className="flex text-yellow-500">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStarHalf />
                  </p>
                  <p className="text-sm font-bold py-2">{discount.name}</p>
                  <p><del className="text-red-600">pre price</del> ${discount.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discount;
