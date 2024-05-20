import { useEffect, useState } from "react";
import SectionHeading from "../../Components/shared/SectionHeading";
import ItemCard from "../../Components/shared/ItemCard";

const PopularItems = () => {

    const [menu , setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems);
        })
    }, [])

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
                    menu.map((item, index) => <ItemCard key={index} item={item}></ItemCard>)
                }
            </div>
            <div className="flex justify-center my-5">
                <button className="btn btn-ghost border-b-4 border-b-black">View Full Menu</button>
            </div>
        </div>
    );
};

export default PopularItems;