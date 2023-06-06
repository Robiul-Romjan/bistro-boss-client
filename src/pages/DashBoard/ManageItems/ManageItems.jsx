import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div className="w-full mt-12">
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} />

            <div className="overflow-x-auto ms-20 w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>ewrty</th>
                            <th>ewrty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, i) => <tr key={item._id}>
                                <td>{i+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Zemlak, Daniel</td>
                                <td>Purple</td>
                                <td>Purple</td>
                                <td>Purple</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageItems;