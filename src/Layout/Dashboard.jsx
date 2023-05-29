import { Link, Outlet } from "react-router-dom";
import { FaHome , FaCalendarAlt, FaShoppingCart, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link to="/dashboard/payment-history"><FaHome /> User Home</Link></li>
                    <li><Link to="/dashboard/payment-history"><FaCalendarAlt /> Reservation</Link></li>
                    <li><Link to="/dashboard/payment-history"><FaWallet /> Payment History</Link></li>
                    <li><Link to="/dashboard/my-cart"><FaShoppingCart />
                    My Cart
                    <span className="badge badge-secondary">+{cart?.length}</span>
                    </Link></li>
                    <div className="border-b-4 my-5"></div>
                    <li><Link to="/"><FaHome />Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;