import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [ , refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();

    const handleCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        refetch();
                       toast("successfully added your cart");
                    }
                })
        }else{
            Swal.fire({
                title: 'Please Login to add your cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: {from: location}})
                }
              })
        }
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mb-8 relative">
                <p className="absolute text-white bg-black p-2 right-0 m-6 font-semibold">${price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl">{name}</h2>
                    <p>{recipe}</p>
                    <div>
                        <button onClick={() => handleCart(item)} className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;