import { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // Handle sign in using registered email and password
    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleValidateCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;

        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    // handle google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Bliss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <button onClick={handleGoogleLogin} className="flex gap-1 text-2xl items-center btn mt-5 mb-3 mx-auto">
                                <FcGoogle></FcGoogle>
                                <h1>Google</h1>
                            </button>
                        </div>
                        <hr />
                        <div>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Captcha Code</span>
                                    </label>
                                    <div className='flex justify-center'>
                                        <LoadCanvasTemplate />
                                    </div>
                                    <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" />
                                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate Captcha</button>
                                </div>
                                <div className="form-control mt-6">
                                    <input disabled={false} type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                        <div className='mx-auto my-2'>
                            <p><small>Do not have account? <Link to={'/register'}><span className='hover:underline'>Register</span></Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;