
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="mt-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user && isAdmin){
        return children;
    }

    return (
        <div>
            <Navigate state={{ from: location }} to="/" replace />
        </div>
    );
};

export default AdminRoute;