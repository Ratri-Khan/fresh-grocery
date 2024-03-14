import { useState } from "react";
import { useEffect } from "react";
import pngImg from "../../../assets/home/offer.png";
// import Discount from "../Discount/Discount";
import './Testimonial.css'
import Popular from "../Popular/Popular";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const review = "../../../../public/review.json";
    fetch(review)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="testimonial relative bg-green-100 mb-20">
      <img src={pngImg} alt="" className="right-0 top-0 absolute" />
      <p className="text-2xl text-center font-bold pt-16 pb-8 w-10/12 mx-auto">
        Share Your Review
      </p>
      <div className="w-10/12 mx-auto grid lg:grid-cols-4 gap-4">
      
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-2 bg-slate-800/70 text-slate-300 p-4  z-10"
          >
            <h3 className="text-xl font-bold">{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <div className="flex py-10">
        <input type="text" name="" id="" placeholder="Type Your Comment" className="border border-slate-950 lg:w-96"/>
        <input
          type="submit"
          value="send"
          className=" gorgeous-button"
        />
      </div>      
      </div>
      <Popular></Popular>
    </div>
  );
};

export default Testimonial;
