import { FaCalendar, FaCalendarDay, FaCartPlus, FaComment, FaEnvelope, FaHome, FaList, FaMailBulk, FaShoppingBag, FaStreetView, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbaord = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="grid col-span-3 bg-black text-white min-h-screen p-5">
                <ul>
                    <NavLink to={'/dashboard/userHome'}>
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
                    <NavLink to={'/dashboard/mycart'} className={(isActive) => isActive ? 'text-white' : 'text-black'}>
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

                    <hr className="my-5"/>

                    <NavLink to={'/'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaHome></FaHome>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to={'/menu'}>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaList></FaList>
                            Menu
                        </li>
                    </NavLink>
                    <NavLink>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaShoppingBag></FaShoppingBag>
                            Shop
                        </li>
                    </NavLink>
                    <NavLink>
                        <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="grid col-span-9 bg-gray-700">
                <div className="text-center">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbaord;