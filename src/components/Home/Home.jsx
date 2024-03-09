// import React from 'react';

import Footer from "../shared/Footer";
import Banner from "./Banner";
import Categories from "./Categories";
import Featured from "./Featured";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="bg-fuchsia-100">
            <Banner></Banner>
            <Categories></Categories>
            {/* <Featured></Featured> */}
            {/* <Testimonial></Testimonial> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;