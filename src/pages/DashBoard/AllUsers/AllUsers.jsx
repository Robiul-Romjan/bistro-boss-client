import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is now Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    };

    const handleDelete= (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className="w-full mt-12">
            <h2 className="text-3xl font-semibold py-6">Total Users: {users.length} </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th className="font-bold">{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role == "admin" ? "Admin" :
                                        <button onClick={()=>handleMakeAdmin(user)} className="btn btn-secondary text-white btn-sm"><FaUserShield /></button>
                                    }
                                </td>
                                <td>
                                <button onClick={() => handleDelete(user._id)} className="btn btn-error text-white btn-sm"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;