import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCart from '../shared/OrderCart';
import UseCategory from "../../Hooks/UseCategory";
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ["vegetable", "fish", "dal", "fruits"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [product] =UseCategory();
    const vegetables = product.filter((item) => item.category === "vegetable");
    const fishes = product.filter((item) => item.category === "fish");
    const dal = product.filter((item) => item.category === "dal");
    const fruits = product.filter((item) => item.category === "fruits");
  return (
    <div className='pt-16 w-10/12 mx-auto bg-slate-100'>
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
  );
};

export default Order;
