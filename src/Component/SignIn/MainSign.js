import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';
// import google from '../../../images/google.png';
import { toast } from 'react-toastify';
// import UseToken from '../../Hooks/UseToken';
// import Loading from '../../Shared/Loading/Loading';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MainSign = () => {
    const [showpass, setShowpass] = useState(false);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    // const [token] = UseToken(user || gUser);
    const EmailRef = useRef('');
    const navigate = useNavigate()
    let location = useLocation();
    let signInerror;
    let from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     if (user || gUser) {
    //         navigate(from, { replace: true });
    //     }
    // }, [token, from, navigate])


    if (gLoading || loading) {
        return <Loading />
    }

    if (gError || error) {
        signInerror = <p className="text-red"><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    const hendelForgetPssword = async () => {
        // const email = EmailRef.current.value;
        const email = getValues("email");
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email Sent");
        }
        else {
            toast('Enter your Email')
        }

    }
    return (
        <div className='style={{ background:"#eef0f0" }} className="py-5"'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-orange-400 text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-base font-semibold">Password</span>
                            </label>
                            <input
                                type={showpass ? "text" : "password"}
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <input type="checkbox" name="" id="" onClick={() => setShowpass(!showpass)} /> <span>See Password</span>

                        {signInerror}

                        <div className="flex flex-col w-full border-opacity-50 mt-3">
                            <input type="submit" value="Loing" className="grid btn bg-orange-400 rounded-box place-items-center input input-bordered w-full max-w-xs" />
                            <p className='text-warning mt-2 mb-1 cursor-pointer text-center' onClick={hendelForgetPssword}>Forgotten password?</p>

                            <p className='m-3'>You are new User?
                                <span><Link to="/signup" className='ps-1 text-error text-sm cursor-pointer'>Create New Account</Link></span></p>


                        </div>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-outline hover:bg-orange-400'><span><img src="" alt="" /></span> CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default MainSign;