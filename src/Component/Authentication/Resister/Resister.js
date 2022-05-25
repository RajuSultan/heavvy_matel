import React, { useEffect, useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import github from '../../../images/github.png';
import google from '../../../images/google.png';
import useTokens from '../../Share/Hooks/useTokens';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" placeholder="Type here" className="input w-full max-w-xs" />
                <input ref={emailRef} type="email" placeholder="Type here" className="input w-full max-w-xs" />
                <input ref={passwordRef} type="password" placeholder="Type here" className="input w-full max-w-xs" />


                <input type="submit" placeholder="Type here" className="input w-full max-w-xs btn btn-primary" />
            </form>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-block">Google SignIn</button>
                <br />
                <button className="btn btn-block">block</button>
            </div>

        </div>
    );
};

export default Resister;