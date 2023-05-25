

const MenuItem = ({item}) => {
    // console.log(item)
    const {name, image, recipe, price} = item;
    return (
        <div className="flex gap-4 mb-6">
            <img src={image} alt="" className="w-[104px]" style={{borderRadius : "0 200px 200px 200px"}} />
            <div>
                <h3 className="text-xl">{name} -------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;