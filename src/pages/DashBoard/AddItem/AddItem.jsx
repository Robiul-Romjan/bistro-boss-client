import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success){
                    const imgUrl = imgResponse.data.display_url;
                    const {name, recipe, category, price} = data;
                    const newItem = {name, recipe, category, price: parseFloat(price), image: imgUrl };
                    
                    axiosSecure.post("/menu", newItem)
                    .then(data => {
                        console.log(data.data)
                       if(data.data.insertedId){
                        reset();
                       alert("Item added")
                       }
                    })
                }
            })
    };

    // console.log(errors);



    return (
        <div className="w-full mt-12">
            <SectionTitle heading={"Whats new"} subHeading={"Add an Item"} />

            <form onSubmit={handleSubmit(onSubmit)} className="p-12 bg-gray-200 me-12 rounded-lg">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 80 })}
                        className="input input-bordered w-full" />
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Select Category" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Select Category</option>
                            <option>Salad</option>
                            <option>Pizza</option>
                            <option>Soups</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"></textarea>
                </div>

                <div className="form-control w-full max-w-xs mt-5">
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <input className="btn btn-active btn-accent mt-5" type="submit" value="Add Item" />

            </form>

        </div>
    );
};

export default AddItem;