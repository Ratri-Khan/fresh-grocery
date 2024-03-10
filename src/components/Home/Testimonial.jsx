// import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Testimonial.css";

// import required modules
import { EffectCards } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="w-8/12 m-auto mb-16">
      <p className="text-5xl my-10 text-center">Customers Review</p>
      <div className="flex items-center">
        <div className="w-6/12">
            <textarea name="" id="" cols="30" rows="10" className="w-full h">

            </textarea>
            <input type="submit" value="send" className="bg-fuchsia-900 w-full text-white py-2 rounded mx-auto"/>
        </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-4/12"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
      
    </div>
  );
};

export default Testimonial;
