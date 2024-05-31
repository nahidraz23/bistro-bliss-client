import { FaEdit, FaTrash } from "react-icons/fa";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useMenu from "../../../../hooks/useMenu";

const ManageItems = () => {

    const [menu] = useMenu();

    const handleDelete = id => {

    }

    const handleUpdate = id => {

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
                                <th></th>
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
                                        <td>
                                            <button onClick={() => handleUpdate(item._id)} className="btn btn-outline">
                                                <FaEdit className="text-red-500"></FaEdit>
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-outline">
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