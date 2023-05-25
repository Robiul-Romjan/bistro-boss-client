import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ["salad", "pizza", "soup", "dessert", "drink"];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
   
    const [menu] = useMenu();
    const drinks = menu.filter(offer => offer.category === "drinks");
    const dessert = menu.filter(offer => offer.category === "dessert");
    const pizza = menu.filter(offer => offer.category === "pizza");
    const salad = menu.filter(offer => offer.category === "salad");
    const soup = menu.filter(offer => offer.category === "soup");



    return (
        <div>
            <Cover img={orderImg} coverHeight={"600px"} coverHeading={"My Shop"} coverTitle={"Would you like to try a dish?"} />
            <div className="text-center mt-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            {
                                soup.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3">
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;