import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const OurMenu = () => {
    
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular")
   
    return (
        <div className="mb-24">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularMenu.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <button className="btn border-b-4 border-0 btn-outline">ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

export default OurMenu;