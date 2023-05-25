

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mb-8 relative">
                <p className="absolute text-white bg-black p-2 right-0 m-6 font-semibold">${price}</p>
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-3xl">{name}</h2>
                    <p>{recipe}</p>
                    <div>
                        <button className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCard;