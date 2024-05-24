import { Link } from "react-router-dom";
import ItemCard from "../../Components/shared/ItemCard";
import SectionHeading from "../../Components/shared/SectionHeading";
import Cover from "./Shared/Cover";

const MenuItems = ({ item, heading, subHeading, img }) => {
    return (
        <div>
            <div className="">
                <div className="">
                    {
                        subHeading &&
                        <SectionHeading
                            subHeading={subHeading}
                            heading={heading}
                        ></SectionHeading>
                    }
                </div>
                <div className="my-10">
                    {
                       ( heading !== "Today's Offer") &&
                        <Cover
                            img={img}
                            heading={heading}
                        >
                        </Cover>
                    }
                </div>
                <div className="grid md:grid-cols-2 gap-5 container mx-auto">
                    {
                        item.map((foodItem, index) =>
                            <>
                                <ItemCard key={index} item={foodItem}></ItemCard>
                            </>
                        )
                    }
                </div>
                <div className="flex justify-center my-10">
                    <Link to={`/orderfood/${heading}`}><button className='btn btn-ghost border-b-4 border-b-black uppercase'>Order your favourite food</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuItems;