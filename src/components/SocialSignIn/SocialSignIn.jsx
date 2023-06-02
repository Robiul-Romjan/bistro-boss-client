import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const saveUser = { name: result.user.displayName, email: result.user.email }
                // console.log(saveUser)
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true }) || "/"
                    })
            })
    }

    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialSignIn;