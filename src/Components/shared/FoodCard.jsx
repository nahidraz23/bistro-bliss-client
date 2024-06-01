import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ items }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    // Handle add food to cart
    const handleAddCart = (foodId, name, image, price) => {
        const cartItem = {
            menuId: foodId,
            email: user?.email,
            name,
            image,
            price
        }

        axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: `${name} is successfully added to cart.`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    refetch();
                }
            })
    }

    return (
        <div className="grid md:grid-cols-3 gap-10 my-10">
            {
                items.map(item =>
                    <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={item.image} alt="Shoes" />
                                <p className="absolute right-6 top-6 bg-black text-white font-semibold p-2 rounded-lg">${item.price}</p>
                            </figure>
                            <div className="card-body flex items-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.recipe}</p>
                                <div className="card-actions justify-center">
                                    <button onClick={() => handleAddCart(item._id, item.name, item.image, item.price)} className="btn btn-ghost border-b-4 border-b-yellow-600 uppercase text-yellow-600 hover:text-black">Order Now</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default FoodCard;