import Banner from "./Banner";
import BistroBliss from "./BistroBliss";
import Category from "./Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mb-10">
                <Category></Category>
                <BistroBliss></BistroBliss>
            </div>
        </div>
    );
};

export default Home;