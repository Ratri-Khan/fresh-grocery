// import React from 'react';
import onion from '../../assets/categories/onion.jpg';
import fish from '../../assets/categories/fish.jpg';
import dal from '../../assets/categories/dal.jpg';

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
      <div className="grid grid-cols-8 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border-2 text-center">
            <img src={category.pic} alt="" className="h-36 w-full" />
            <div className="h-20">
              <p className="text-xl  font-semibold uppercase py-3">
                {category.name}
              </p>
              <p className="text-xs">{category.serial}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-4 '>
          <img src={onion} alt="" className='w-full h-64' />
          <img src={fish} alt="" className='w-full h-64' />
          <img src={dal} alt=""className='w-full h-64' />
      </div>
    </div>
  );
};

export default Categories;
