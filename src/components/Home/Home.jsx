// import React from 'react';
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;