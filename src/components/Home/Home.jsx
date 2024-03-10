// import React from 'react';

import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;