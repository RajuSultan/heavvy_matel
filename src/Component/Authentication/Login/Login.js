import React, { useEffect, useRef, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useTokens from '../../Share/Hooks/useTokens';
import Loading from '../../Share/Loading'

const Login = () => {
    const [userA] = useAuthState(auth);
    const [token] = useTokens(userA);
    // console.log("raju")
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(error);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (token) {
        // console.log(token);
    }
    // handle login
    const [errori, setErrori] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email && password) {
            signInWithEmailAndPassword(email, password);
            setErrori('');
        } else {
            setErrori("Give your right email & password")
        }
        // console.log( email, password);
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    // send reset password
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast.success("Send password reset Email !");
    }
    return (
        <div className=' '>
            {/* <div className="mx-auto">
                <h1 className='text-center my-16 text-4xl text-primary font-bold'>Please Login!</h1>
                <div style={{ width: '60%' }}>
                    <form className='justify-center' onSubmit={handleSubmit}>


                        <input style={{ width: '80%' }} ref={emailRef} type="email" placeholder="Enter Your Email!" class="input input-bordered input-primary w-full  my-10 mx-auto" /><br />
                        <input style={{ width: '80%' }} ref={passwordRef} type="email" placeholder="Enter Your Email!" class="input input-bordered input-primary w-full mb-5 mx-auto" />

                        <br />
                        <input style={{ width: '80%' }} type="submit" placeholder="Type here" className="input w-full mb-5 btn btn-primary mx-auto" />
                    </form>
                </div>
            </div> */}
            <div style={{ borderBottom: "1px solid black" }} className=''>
                <div className=" hero min-h-screen bg-base-200 py-32 ">
                    <div style={{ width: "80%" }} className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-center text-primary text-4xl  font-bold mt-16'>Please Login!</h1>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input ref={emailRef} name='name' required type="text" placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input ref={passwordRef} name='img' required type="text" placeholder="Password" className="input input-bordered" />
                                    </div>
                                    {
                                        loading || sending ? <Loading></Loading> : ''
                                    }
                                    {
                                        error ? <p>{error}</p> : ''
                                    }
                                    {
                                        errori ? <p>{errori}</p> : ''
                                    }

                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">LOGIN</button>
                                    </div>
                                    <p className='my-5'>Forget your Password? <Link className='text-amber-500 ' to='/login' onClick={handleResetPassword}>Reset Password</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;