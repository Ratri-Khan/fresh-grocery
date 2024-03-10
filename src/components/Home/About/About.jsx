// import React from 'react';
import siteBar from "../../../assets/home/siteBar.jpg"

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <p className="text-2xl text-center font-bold my-16">About Our Product</p>
      <div>
          <img src={siteBar} alt="" />
      </div>
    </div>
  );
};

export default About;
