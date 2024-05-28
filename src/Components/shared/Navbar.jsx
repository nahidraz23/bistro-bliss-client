import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    // Theme controll
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'cupcake');
    const toggleTheme = e => {
        if (e.target.checked) {
            setTheme("forest");
        }
        else {
            setTheme("cupcake");
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    // Handle sign out 
    const handleSignOut = () => {
        signOutUser()
    }

    // Navbar items
    const navLinks = (
        <div className="flex gap-5 flex-col md:flex-row items-center ">
            <NavLink to={'/'}><li>Home</li></NavLink>
            <NavLink><li>Contact Us</li></NavLink>
            <NavLink to={'/dashboard'}><li>Dashboard</li></NavLink>
            <NavLink to={'/menu'}><li>Our Menu</li></NavLink>
            <NavLink to={'/orderfood/salad'}><li>Order Food</li></NavLink>
            {
                user &&
                <NavLink to={'/dashboard/mycart'} className={'indicator'}>
                    <li className="">
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                            <h1 className="indicator-item badge badge-secondary">{cart.length}</h1>
                        </div>
                    </li>
                </NavLink>
            }
        </div>
    )

    return (
        <div className="navbar fixed z-10 bg-opacity-50 text-white bg-black">
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
                <div>
                    <h1 className="text-4xl uppercase">Bistro Bliss</h1>
                    <h2 className="text-center uppercase">Restaurant</h2>
                </div>
            </div>
            <div className="navbar-end flex gap-4">
                <ul className="menu menu-horizontal px-1 hidden md:inline">
                    {
                        navLinks
                    }
                </ul>
                {
                    user ?
                        <div className="flex items-center border-2 px-2 rounded-full">
                            <h1>{user?.displayName}</h1>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0} role="button" className="ml-2"><img src={user?.photoURL} alt="" className="w-12 rounded-full" /></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 text-black rounded-box shadow mx-auto w-32 text-center">
                                    <li><button onClick={handleSignOut}>Sign Out</button></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <>
                            <Link to={'/login'}>
                                <button className="btn">Sign In</button>
                            </Link>
                        </>
                }
                <div>
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;