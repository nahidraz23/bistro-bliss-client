import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';

const MainLayout = () => {

    const location = useLocation();
    const noNav = location.pathname.includes('/login') || location.pathname.includes('/register');
    const noFooter = location.pathname.includes('/login') || location.pathname.includes('/register');

    return (
        <div>
            { noNav || <Navbar></Navbar>}
            <div className='min-h-[calc(100vh-275px)]'>
                <Outlet></Outlet>
            </div>
            { noFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;