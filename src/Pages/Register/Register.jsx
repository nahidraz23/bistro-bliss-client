import { data } from "autoprefixer";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser, upddateCurrentUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const name = data.name;
        const photoURL = data.photoURL;
        const email = data.email;
        const password = data.password;

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                upddateCurrentUserProfile(name, photoURL)
                    .then(() => console.log("Profile updated successfully."))
                    .catch(err => console.log(err.message))
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Bliss || Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "minLength" && <p className="text-red-500 text-center">Password length must be 6 charecter or more.</p>}
                                {errors.password?.type === "maxLength" && <p className="text-red-500 text-center">Password length must be 6 charecter or more.</p>}
                                {errors.password?.type === "pattern" && <p className="text-red-500 text-center">Password should contain 1 uppercase, 1 lowercase, 1 number and a special charecter.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;