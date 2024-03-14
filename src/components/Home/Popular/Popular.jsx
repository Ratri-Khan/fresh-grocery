// import React from 'react';

import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import '../Testimonial/Testimonial.css'

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto text-center">
      <h1 className="text-2xl font-bold my-12">Most Popular</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popular.map((info) => (
          <div key={info.id}>
            <div className="card bg-base-100 shadow-xl border-2 shadow-blue-500/60">
            <figure className="p-3 bg-slate-900">
              <img src={info.pic} alt="image" className="px-0 rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center pt-0 text-slate-400 ">
              <h2 className="card-title">{info.name}</h2>
              <p>Price: {info.price}</p>
              <p>Condition: {info.condition}</p>
              <p>
                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 100 }}
                  value={info.rating}
                  readOnly
                />
              </p>
              <div className="card-actions">
                <button className="gorgeous-button rounded">Add To Cart</button>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
