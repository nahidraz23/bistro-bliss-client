import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mb-10">
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;