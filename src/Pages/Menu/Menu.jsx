import { Helmet } from "react-helmet-async";
import MenuItems from "./MenuItems";
import coverBG from '../../assets/menu/banner3.jpg'
import dessertBG from '../../assets/menu/dessert-bg.jpeg'
import pizzaBG from '../../assets/menu/pizza-bg.jpg'
import saladBG from '../../assets/menu/salad-bg.jpg'
import soupsBG from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import Cover from "./Shared/Cover";


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Bliss | Menu</title>
            </Helmet>
            <Cover img={coverBG} heading={"Our Menu"} subHeading={"would you like to try a dish?"}></Cover>
            <MenuItems
                item={offered}
                subHeading={"Do not miss"}
                heading={"Today's Offer"}
            ></MenuItems>
            {/* Dessert Section */}
            <MenuItems
                item={desserts}
                img={dessertBG}
                heading={"dessert"}
            ></MenuItems>
            {/* Pizza Section */}
            <MenuItems 
                item={pizzas}
                img={pizzaBG}
                heading={"pizza"}
            ></MenuItems>
            {/* Salad section*/}
            <MenuItems
                item={salads}
                img={saladBG}
                heading={"salad"}
            ></MenuItems>
            {/* Soup section */}
          <MenuItems
            item={soups}
            img={soupsBG}
            heading={"soup"}
          ></MenuItems>
        </div>
    );
};

export default Menu;