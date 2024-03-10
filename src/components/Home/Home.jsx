// import React from 'react';

import Footer from "../shared/Footer";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Discount from "./Discount";
import Featured from "./Featured/Featured";
import Header from "./Header";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Header></Header>
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Discount></Discount>
            <Footer></Footer>
        </div>
    );
};

export default Home;