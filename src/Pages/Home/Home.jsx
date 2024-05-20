import Banner from "./Banner";
import BistroBliss from "./BistroBliss";
import Category from "./Category";
import ChefSpecial from "./ChefSpecial/ChefSpecial";
import Contact from "./Contact";
import PopularItems from "./PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mb-10">
                <Category></Category>
                <BistroBliss></BistroBliss>
                <PopularItems></PopularItems>
                <Contact></Contact>
            </div>
            <ChefSpecial></ChefSpecial>
        </div>
    );
};

export default Home;