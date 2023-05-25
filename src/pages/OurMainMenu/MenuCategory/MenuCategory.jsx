import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title }) => {

    return (
        <div className="mb-24 mt-14">
            <div className="grid md:grid-cols-2 gap-6">
                {
                    items.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}>
                    <button className="btn border-b-4 border-0 btn-outline">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;