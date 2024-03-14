import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderCart from "../shared/OrderCart";
import UseCategory from "../../Hooks/UseCategory";
import { useParams } from "react-router-dom";
import banner from "../../assets/banner/banner4.jpg";
import '../Home/Testimonial/Testimonial.css'

const Order = () => {
  const categories = ["vegetable", "fish", "dal", "fruits"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [product] = UseCategory();
  const vegetables = product.filter((item) => item.category === "vegetable");
  const fishes = product.filter((item) => item.category === "fish");
  const dal = product.filter((item) => item.category === "dal");
  const fruits = product.filter((item) => item.category === "fruits");
  return (
    <div className="pt-16 bg-slate-100">
      <div
        className="hero h-[550px]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-8/12">
            <h1 className="mb-5 text-4xl font-bold text-white/60">We Are Available For 24 Hours</h1>
            <p className="mb-5 text-yellow-500">
              Happy client, happy we
            </p>
            <button className="gorgeous-button">Get Started
            </button>
          </div>
        </div>
      </div>
      <div className=" w-10/12 mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>vegetable</Tab>
            <Tab>fish</Tab>
            <Tab>dal</Tab>
            <Tab>fruits</Tab>
          </TabList>
          <TabPanel>
            <OrderCart data={vegetables}></OrderCart>
          </TabPanel>
          <TabPanel>
            <OrderCart data={fishes}></OrderCart>
          </TabPanel>
          <TabPanel>
            <OrderCart data={dal}></OrderCart>
          </TabPanel>
          <TabPanel>
            <OrderCart data={fruits}></OrderCart>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
