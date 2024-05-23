import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import coverBG from '../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Bliss | Menu</title>
            </Helmet>
            <Cover img={coverBG}></Cover>
        </div>
    );
};

export default Menu;