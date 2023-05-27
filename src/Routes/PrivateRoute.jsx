import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className="mt-24">
            <progress className="progress w-56"></progress>
        </div>
    }

    if(user){
        return children;
    }

    return (
        <div>
            <Navigate state={{ from: location }} to="/login" replace />
        </div>
    );
};

export default PrivateRoute;