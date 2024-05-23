import ItemCard from "../../Components/shared/ItemCard";
import SectionHeading from "../../Components/shared/SectionHeading";

const MenuItems = ({ item, heading, subHeading }) => {

    return (
        <div className="container mx-auto">
            <div className="my-10">
                {
                    heading &&
                    <SectionHeading
                        subHeading={subHeading}
                        heading={heading}
                    ></SectionHeading>
                }
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    item.map((foodItem, index) => <ItemCard key={index} item={foodItem}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default MenuItems;