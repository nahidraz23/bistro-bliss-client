import { FaTrash } from "react-icons/fa";
import SectionHeading from "../../../Components/shared/SectionHeading";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleDelete = id => {
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

                axiosSecure.delete(`/mycart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted successfully.",
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
                    subHeading={'My Cart'}
                    heading={'Wanna Add More?'}
                ></SectionHeading>
            </div>
            <div>
                <div className="flex justify-evenly items-center">
                    <h1 className="text-3xl font-bold uppercase">Total Orders: {cart.length}</h1>
                    <h1 className="text-3xl font-bold uppercase">Total Price: ${totalPrice}</h1>
                    <button className="btn bg-orange-600 text-white hover:text-orange-600">Pay</button>
                </div>
                <div className="p-5 my-5">
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead className="bg-orange-600 ">
                                <tr className="text-white">
                                    <th className="rounded-tl-2xl">

                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th className="rounded-tr-2xl">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item =>
                                        <tr key={item._id}>
                                            <td>

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
        </div>
    );
};

export default MyCart;