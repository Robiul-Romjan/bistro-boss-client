import Cover from "../../Shared/Cover/Cover"
import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const MainMenu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(offer => offer.category === "offered");
    const dessert = menu.filter(offer => offer.category === "dessert");
    const pizza = menu.filter(offer => offer.category === "pizza");
    const salad = menu.filter(offer => offer.category === "salad");
    const soup = menu.filter(offer => offer.category === "soup");

    return (
        <div>
            {/* Main menu cover section */}
            <Cover img={coverImg} coverHeight={"600px"} coverHeading={"Our Menu"} coverTitle={"Would you like to try a Dish?"} />
            {/* Todays offer menu */}
            <div className="todays-offer-section mt-24">
                <SectionTitle subHeading={"Don't miss"} heading={"Todays Offer"} />
                <MenuCategory items={offered} title={"offered"} />
            </div>
            {/* desserts offer menu */}
            <div>
                <Cover img={dessertImg} coverHeight={"500px"} coverHeading={"Desserts"} coverTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <MenuCategory items={dessert} title={"dessert"} />
            </div>
            {/* pizza offer menu */}
            <div>
                <Cover img={pizzaImg} coverHeight={"500px"} coverHeading={"Pizza"} coverTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <MenuCategory items={pizza} title={"pizza"} />
            </div>
            {/* salad offer menu */}
            <div>
                <Cover img={saladImg} coverHeight={"500px"} coverHeading={"Salad"} coverTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <MenuCategory items={salad} title={"salad"} />
            </div>
            {/* soup offer menu */}
            <div>
                <Cover img={soupImg} coverHeight={"500px"} coverHeading={"Soup"} coverTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <MenuCategory items={soup} title={"soup"} />
            </div>
        </div>
    );
};

export default MainMenu;