import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import coverBG from '../../assets/menu/banner3.jpg'
import dessertBG from '../../assets/menu/dessert-bg.jpeg'
import pizzaBG from '../../assets/menu/pizza-bg.jpg'
import saladBG from '../../assets/menu/salad-bg.jpg'
import soupsBG from '../../assets/menu/soup-bg.jpg'
import MenuItems from "./MenuItems";
import useMenu from "../../hooks/useMenu";


const Menu = () => {

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");

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
            <Cover img={dessertBG} heading={"desserts"}></Cover>
            <MenuItems
                item={desserts}
            ></MenuItems>
            {/* Pizza Section */}
            <Cover img={pizzaBG} heading={"pizza"}></Cover>
            <MenuItems 
                item={pizzas}
            ></MenuItems>
            {/* Salad section*/}
            <Cover
                img={saladBG}
                heading={"salads"}
            ></Cover>
            <MenuItems
                item={salads}
            ></MenuItems>
            {/* Soup section */}
          <Cover
            img={soupsBG}
            heading={"Soups"}
          >
          </Cover>
          <MenuItems
            item={salads}
          ></MenuItems>
        </div>
    );
};

export default Menu;