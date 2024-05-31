import { useLoaderData } from "react-router";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, price, recipe, category, _id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            const fooodItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const item = await axiosSecure.patch(`/menu/${_id}`, fooodItem)

            if (item.data.modifiedCount > 0 ) {
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated successfully.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <div>
                <SectionHeading
                    heading={"Update item"}
                ></SectionHeading>
            </div>
            <div className="bg-base-200 rounded-xl p-10 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input defaultValue={name} {...register("name")} type="text" placeholder="Recipe Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control grid md:grid-cols-2 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select defaultValue={category} {...register("category")} className="select select-bordered w-full">
                                    <option disabled selected>Category</option>
                                    <option value={"salad"}>Salad</option>
                                    <option value={"pizza"}>Pizza</option>
                                    <option value={"soup"}>Soup</option>
                                    <option value={"dessert"}>Dessert</option>
                                    <option value={"drinks"}>Drinks</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input defaultValue={price} {...register('price', { valueAsNumber: true })} type="number" placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea defaultValue={recipe} {...register("recipe")} className="textarea textarea-bordered resize-none" rows={10} placeholder="Recipe Details"></textarea>
                        </div>
                        <div>
                            <input required {...register("image")} type="file" className="file-input file-input-bordered w-full mt-5" />
                        </div>
                        <input type="submit" value={"Add Item"} className="btn btn-outline mt-5 bg bg-yellow-600 text-white border-none" />
                    </form>
                </div>
            
        </div>
    );
};

export default UpdateItem;