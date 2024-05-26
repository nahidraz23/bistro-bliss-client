import { FaTrash } from "react-icons/fa";
import SectionHeading from "../../../Components/shared/SectionHeading";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

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
                    <h1 className="text-3xl font-semibold uppercase">Total Orders: {cart.length}</h1>
                    <h1 className="text-3xl font-semibold uppercase">Total Price: ${totalPrice}</h1>
                    <button className="btn bg-orange-400 text-white">Pay</button>
                </div>
                <div className="p-5 my-5">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-orange-600 rounded-t-xl">
                                <tr>
                                    <th>

                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Item Price</th>
                                    <th>Action</th>
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
                                                <div>{item.price}</div>
                                            </td>
                                            <td>
                                                <button className="btn">
                                                    <FaTrash></FaTrash>
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