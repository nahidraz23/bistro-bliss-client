import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BistroBliss from "./BistroBliss";
import Category from "./Category";
import ChefSpecial from "./ChefSpecial/ChefSpecial";
import Contact from "./Contact";
import PopularItems from "./PopularItems";
import Reviews from "./Reviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Bliss | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <div className="container mx-auto mb-10">
                <Category></Category>
                <BistroBliss></BistroBliss>
                <PopularItems></PopularItems>
                <Contact></Contact>
            </div>
            <ChefSpecial></ChefSpecial>
            <div className="container mx-auto">
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;