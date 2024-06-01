import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    // console.log(paymentHistory)

    return (
        <div>
            <div>
                <SectionHeading
                    heading={"payment history"}
                    subHeading={"At a Glance"}
                ></SectionHeading>
            </div>
            <div className="p-5 my-5">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead className="bg-orange-600 ">
                            <tr className="text-white">
                                <th className="rounded-tl-2xl">
                                    Email
                                </th>
                                <th className="">Transaction Id</th>
                                <th>Total Price</th>
                                <th className="rounded-tr-2xl">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentHistory.map((item) =>
                                    <tr key={item._id}>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td className="">
                                            {item.transactionId}
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold badge badge-outline">${item.price}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold ">{item.date}</div>
                                        </td>
                                        <td>
                                            
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

export default PaymentHistory; 