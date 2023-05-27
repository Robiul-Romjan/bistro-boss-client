import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [disable, setDisable] = useState(true);
    const {signInUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully login',
                icon: 'success',
                confirmButtonText: 'Ok'
              });

            navigate(from, { replace: true }) || "/"
        })
        .catch(error => {
            console.log(error.message)
        })
        form.reset();
    };

    const handleCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(value)
        if(validateCaptcha(user_captcha_value)== true){
            setDisable(false)
        }else{
            setDisable(true)
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type captcha" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <Link to="/register">Do not have an Account? Please Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;