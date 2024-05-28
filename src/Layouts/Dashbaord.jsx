import { FaBook, FaCalendar, FaCalendarDay, FaCartPlus, FaComment, FaEnvelope, FaHome, FaList, FaShoppingBag, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbaord = () => {

    // TODO: get admin info from the database
    const isAdmin = true;

    return (
        <div className="grid grid-cols-12">
            <div className="grid col-span-3 bg-yellow-600 min-h-screen p-5">
                <ul>
                    {
                        isAdmin ?
                            <>
                                <NavLink to={'/dashboard/adminHome'}>
                                    <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                                        <FaHome></FaHome>
                                        Admin Home
                                    </li>
                                </NavLink>
                                <NavLink to={'/dashboard/addItems'}>
                                    <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </li>
                                </NavLink>
                                <NavLink to={'/dashboard/manageItems'}>
                                    <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                                        <FaList></FaList>
                                        Manage Items
                                    </li>
                                </NavLink>
                                <NavLink to={'/dashboard/manageBookings'} className={({isActive}) => isActive ? 'text-white' : 'text-black'}>
                                    <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                                        <FaBook></FaBook>
                                        Manage Bookings
                                    </li>
                                </NavLink>
                                <NavLink to={'/dashboard/allUsers'} className={({isActive}) => isActive ? 'text-white' : 'text-black'}>
                                    <li className="flex gap-2 p-4 items-center text-2xl hover:bg-white">
                                        <FaUsers></FaUsers>
                                        All Users
                                    </li>
                                </NavLink>
                            </>
                            :
                            <>
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
                            </>
                    }

                    <hr className="my-5" />

                    {/* Shared  */}
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
            <div className="grid col-span-9 bg-orange-100">
                <div className="text-center">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashbaord;