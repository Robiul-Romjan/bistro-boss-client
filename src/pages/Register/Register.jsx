import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/authentication1.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialSignIn from '../../components/SocialSignIn/SocialSignIn';


const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                updateUser(name, photo)
                    .then(() => {
                        const saveUser = {name, email};
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'Success!',
                                        text: 'You have successfully registered',
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                    });

                                    navigate('/login')
                                }
                            })
                    })
                    .catch(error => console.log(error.message));
                    
            })
            .catch(error => {
                console.log(error.message)
            })
        form.reset();
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
                        </div>
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
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        
                        <Link to="/login">Have an Account? Please Login</Link>
                    </form>
                    <SocialSignIn />
                </div>
            </div>
        </div>
    );
};

export default Register;