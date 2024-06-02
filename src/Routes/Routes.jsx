import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/Order/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashbaord from "../Layouts/Dashbaord";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import MyCart from "../Pages/Dashboard/RegularUser/MyCart/MyCart";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/RegularUser/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/RegularUser/PaymentHistory/PaymentHistory";
import RegularDashboard from "../Pages/Dashboard/RegularUser/RegularDashboard/RegularDashboard";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/orderfood/:category',
                element: <PrivateRoute>
                    <OrderFood></OrderFood>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashbaord></Dashbaord>,
        children: [
            // normal users routes
            {
                path: '/dashboard/userHome',
                element: <RegularDashboard></RegularDashboard>
            },

            {
                path: '/dashboard/mycart',
                element: <MyCart></MyCart>
            },
            {
                path: '/dashboard/reservation',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory></PaymentHistory>,
            },

            // Admin routes
            {
                path: '/dashboard/adminHome',
                element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "/dashboard/manageItems",
                element: <ManageItems></ManageItems>
            },
            {
                path: '/dashboard/updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5300/menu/${params.id}`)
            }
        ]
    }
])