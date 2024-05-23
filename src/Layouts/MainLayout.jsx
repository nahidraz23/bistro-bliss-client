import { Outlet } from 'react-router-dom';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-275px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;