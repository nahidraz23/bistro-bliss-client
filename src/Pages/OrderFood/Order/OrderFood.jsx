import Cover from "../../Menu/Shared/Cover";
import orderCoverBG from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './OrderFood.css'
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/shared/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === "drinks");
    const soups = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Bliss | Order Food</title>
            </Helmet>
            <div>
                <Cover img={orderCoverBG} heading={"Order Food"} subHeading={"would you like to try a dish?"}></Cover>
            </div>
            <div className="my-32 container mx-auto">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={`text-center `}>
                    <TabList className={`space-x-32 text-center}`}>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <FoodCard items={salads}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={pizzas}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={soups}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={desserts}></FoodCard>
                    </TabPanel>
                    <TabPanel>
                        <FoodCard items={drinks}></FoodCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;