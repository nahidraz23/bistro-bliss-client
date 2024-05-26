import { FaCalendar, FaCalendarDay, FaCartPlus, FaComment, FaHome, FaStreetView, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbaord = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="grid col-span-3 bg-orange-400 min-h-screen">
                <ul>
                    <NavLink>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaHome></FaHome>
                            User Home
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/reservation'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaCalendar></FaCalendar>
                            Reservation
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/payment'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaWallet></FaWallet>
                            Payment History
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/mycart'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaCartPlus></FaCartPlus>
                            My Cart
                        </li>
                    </NavLink>
                    <NavLink to={'/dashboard/review'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaComment></FaComment>
                            Add Review
                        </li>
                    </NavLink>
                    <NavLink>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaCalendarDay></FaCalendarDay>
                            My Booking
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="grid col-span-9 bg-[#F6DCAC]">
                <div className="text-center">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbaord;