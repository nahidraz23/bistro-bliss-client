import { FaEdit, FaTrash } from "react-icons/fa";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useMenu from "../../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const ManageItems = () => {

    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted successfully.`,
                        icon: "success"
                    });
                }
            }
        });
    }

    const handleUpdate = (item) => {
        navigate(`/dashboard/updateItem/${item._id}`)
    }

    return (
        <div className="overflow-y-scroll max-h-[calc(100vh-100px)]">
            <div>
                <SectionHeading
                    subHeading={"Hurry Up"}
                    heading={"manage all items"}
                ></SectionHeading>
            </div>
            <div className="p-5 my-5">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-orange-600 ">
                            <tr className="text-white">
                                <th className="rounded-tl-2xl">
                                    #
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th className="text-right">Update</th>
                                <th className="rounded-tr-2xl">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                menu.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold badge badge-outline">${item.price}</div>
                                        </td>
                                        <td className="text-right">
                                            <button onClick={() => handleUpdate(item)} className="btn btn-outline">
                                                <FaEdit className="text-red-500"></FaEdit>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-outline">
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
    );
};

export default ManageItems;