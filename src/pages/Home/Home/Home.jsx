import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import OurMenu from "../OurMenu/OurMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <OurMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;