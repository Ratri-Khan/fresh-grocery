// import React from 'react';
import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";

import discount from "../../../assets/home/discount.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import './Banner.css'

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto flex gap-3">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ width: "75%", height: "600px" }}
      >
        <SwiperSlide>
          <img src={img1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt=""/>
        </SwiperSlide>
      </Swiper>

      <div className="w-3/12 h-[600px]">
        <video
          width="100%"
          style={{ height: "600px", backgroundColor: "rgb(170,7,7)" }}
          autoPlay
          muted
          loop
        >
          <source src={discount} type="video/mp4" style={{ height: "600px" }} />
        </video>
      </div>
    </div>
  );
};

export default Banner;
