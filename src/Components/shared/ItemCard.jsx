const ItemCard = ({ item }) => {

    const { price, name, recipe, image } = item
    return (
        <div className="flex flex-col md:flex-row  gap-2">
                <div>
                    <img src={image} alt="" style={{ width: "120px", borderRadius: '0 200px 200px 200px' }} />
                </div>
                <div className="flex flex-col justify-center w-full space-y-2">
                    <h2 className="text-xl uppercase">{name} ------------------------</h2>
                    <h2>{recipe}</h2>
                </div>
                <div className="flex w-1/2 justify-end">
                    <p className="text-yellow-600 text-lg">${price}</p>
                </div>
        </div>
    );
};

export default ItemCard;