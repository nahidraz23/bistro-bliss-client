import SectionHeading from "../../Components/shared/SectionHeading";
import ItemCard from "../../Components/shared/ItemCard";
import useMenu from "../../hooks/useMenu";

const PopularItems = () => {

    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === "popular");

    return (
        <div className="my-10">
            <div>
                <SectionHeading
                    heading={"Our Popular Items"}
                    subHeading={"Check it out"}
                ></SectionHeading>
            </div>
            
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popularItems.map((item, index) => <ItemCard key={index} item={item}></ItemCard>)
                }
            </div>
            <div className="flex justify-center my-5">
                <button className="btn btn-ghost border-b-4 border-b-black">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularItems;