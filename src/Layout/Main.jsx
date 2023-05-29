import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("/login") ||
        location.pathname.includes("/register")
        ;

    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            <ToastContainer />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;