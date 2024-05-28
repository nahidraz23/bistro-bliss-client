import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    // TanStack query
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers')
            return res.data;
        }
    })

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
                                                    {/* <div className="font-bold badge badge-outline">{user.price}</div> */}
                                                </td>
                                                <td>
                                                    <button className="btn btn-outline">
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