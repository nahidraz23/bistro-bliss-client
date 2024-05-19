import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = (
        <div className="flex gap-5">
            <NavLink><li>Home</li></NavLink>
            <NavLink><li>Contact Us</li></NavLink>
            <NavLink><li>Dashboard</li></NavLink>
            <NavLink><li>Our Menu</li></NavLink>
            <NavLink><li>Our Shop</li></NavLink>
        </div>
    )

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="text-xl">Bistro Bliss</a>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end flex gap-4">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
                <a className="btn">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;