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
import vegCover from "../../assets/category/vegCover.jpg";
import fishCover from "../../assets/category/fishCover.jpg";
import dalCover from "../../assets/category/dalCover.jpg";
import fruitsCover from "../../assets/category/fruitsCover.jpg";
import UseCategory from "../../Hooks/UseCategory";
import CategoryCover from "../shared/CategoryCover";

const Category = () => {
  const [category] = UseCategory();
  const vegetables = category.filter((item) => item.category === "vegetable");
  const fishes = category.filter((item) => item.category === "fish");
  const dal = category.filter((item) => item.category === "dal");
  const fruits = category.filter((item) => item.category === "vegetable");
  return (
    <div>
      <div className=" py-20">
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
      </div>
      <div>
        <CategoryCover data={vegetables} img={vegCover} title="vegetable"></CategoryCover>
      </div>
      <div>
        <CategoryCover data={fishes} img={fishCover} title="fish"></CategoryCover>
      </div>
      <div>
        <CategoryCover data={dal} img={dalCover} title="Dal"></CategoryCover>
      </div>
      <div>
        <CategoryCover data={fruits} img={fruitsCover} title="fruits"></CategoryCover>
      </div>
    </div>
  );
};

export default Category;
