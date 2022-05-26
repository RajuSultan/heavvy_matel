import React, { useEffect, useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import github from '../../../images/github.png';
import google from '../../../images/google.png';
import useTokens from '../../Share/Hooks/useTokens';
import Loading from '../../Share/Loading';

const Resister = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [token] = useTokens(user);




    // // handle resister form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification(email);
        // alert('Sent email for verification');
        await updateProfile({ displayName: name });

        // console.log(name, email, password);

    }


    //Rote set after resister
    useEffect(() => {
        // console.log(verificationError);

        if (user) {
            // console.log(user);
            navigate('/');

        }
    }, [user, verificationError, token]);

    return (
        <div >
            {/* <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <input ref={emailRef} type="email" placeholder="Type here" className="input w-full max-w-xs" />
                <input ref={passwordRef} type="password" placeholder="Type here" className="input w-full max-w-xs" />


                <input type="submit" placeholder="Type here" className="input w-full max-w-xs btn btn-primary" />
            </form> */}


            <div className=" hero  bg-base-200">
                <div style={{ width: "80%" }} className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-16">
                        <h1 className='text-center text-primary text-4xl  font-bold mt-16'>Please Resister!</h1>
                        <div className="card-body ">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input ref={nameRef} name='name' required type="text" placeholder="Your Name" className="input input-bordered" />
                                </div>
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
                                    sending || updating ? <Loading></Loading> : ''
                                }
                                {
                                    error || updateError ? <p>{error}{updateError}</p> : ""
                                }

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">RESISTER</button>
                                </div>
                                <p className='my-5'>Do you have any Account? <Link className='text-amber-500 ' to='/login' >Go for Login!</Link></p>
                            </form>
                        </div>
                    </div>





                </div>



            </div>


            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>

            <div style={{ width: "40%" }} className=' justify-center mx-auto'>
                <button onClick={() => signInWithGoogle()} class="btn btn-block  my-5 text-2xl font-bold normal-case ">Google SignIn <img src={google} alt="" /></button><br />
                <button onClick={() => signInWithGoogle()} class="btn btn-block mb-20 text-2xl font-bold normal-case">Github SignIn <img src={github} alt="" /></button>
            </div>


        </div>
    );
};

export default Resister;