import Banner from "./Banner";
import BistroBliss from "./BistroBliss";
import Category from "./Category";
import PopularItems from "./PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mb-10">
                <Category></Category>
                <BistroBliss></BistroBliss>
                <PopularItems></PopularItems>
            </div>
        </div>
    );
};

export default Home;