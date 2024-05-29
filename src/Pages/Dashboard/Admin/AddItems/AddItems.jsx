import SectionHeading from "../../../../Components/shared/SectionHeading";
import { useForm } from "react-hook-form"

const AddItems = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <div>
                <div>
                    <SectionHeading
                        subHeading={"What's new?"}
                        heading={"Add an item"}
                    ></SectionHeading>
                </div>
                <div className="bg-base-200 rounded-xl p-10 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input type="text" placeholder="Recipe Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control grid md:grid-cols-2 gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Recipe Name*</span>
                                </label>
                                <select className="select select-bordered w-full">
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
                                <input type="number" placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea className="textarea textarea-bordered resize-none" rows={10} placeholder="Recipe Details"></textarea>
                        </div>

                        <input type="submit" value={"Add Item"} className="btn btn-outline mt-5" />
                    </form>
                </div>
            </div >
        </div >
    );
};

export default AddItems;