// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../assets/category/slide1.jpg";
import img2 from "../../assets/category/slide2.jpg";
import img3 from "../../assets/category/slide3.jpg";
import img4 from "../../assets/category/slide4.jpg";
import img5 from "../../assets/category/slide5.jpg";
import vegCover from "../../assets/category/vegCover.jpg"
import UseCategory from "../../Hooks/UseCategory";

const Category = () => {
  const [category] = UseCategory();
  const vegetables = category.filter(item => item.category === "vegetable");
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            `url(${vegCover})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <div>
              {
                vegetables.map(vegetable => 
                <div key={vegetable.id}>
                  <p>{vegetable.name}</p>
                  <p>{vegetable.price}</p>
                </div>)
              }
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
