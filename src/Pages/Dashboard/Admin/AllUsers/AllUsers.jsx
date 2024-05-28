import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    // TanStack query
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers') 
            return res.data;
        }
    })

    // handle make admin
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make admin"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Sucessfull",
                                text: `${user.name} is admin now.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    // handle delete user
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User deleted successfully.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div>
                <SectionHeading
                    subHeading={"How Many"}
                    heading={"Manage All Users"}
                ></SectionHeading>
            </div>
            <div>
                <div>
                    <h1 className="text-4xl font-bold">Total Users: {users.length}</h1>
                </div>
                <div>
                    <div className="p-5 my-5">
                        <div className="overflow-x-auto">
                            <table className="table ">
                                {/* head */}
                                <thead className="bg-orange-600 ">
                                    <tr className="text-white">
                                        <th className="rounded-tl-2xl">

                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th className="rounded-tr-2xl">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, index) =>
                                            <tr key={user._id}>
                                                <td>
                                                    <h1 className="font-bold">{index + 1}</h1>
                                                </td>
                                                <td>
                                                    <div>
                                                        <h1 className="font-bold">{user.name}</h1>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <div className="font-bold badge badge-outline">{user.email}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {user?.role === 'Admin' ? <span className="text-lg font-bold ">Admin</span> :
                                                    
                                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline">
                                                        <FaUsers className="text-red-500 text-2xl"></FaUsers>
                                                    </button>}
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-outline">
                                                        <FaTrash className="text-red-500"></FaTrash>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;