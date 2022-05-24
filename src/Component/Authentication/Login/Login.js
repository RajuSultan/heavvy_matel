import React, { useEffect, useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useTokens from '../../Share/Hooks/useTokens';

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
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
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
        // toast("Send password reset Email !");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input ref={emailRef} type="email" placeholder="Type here" className="input w-full max-w-xs" /><br />
                <input ref={passwordRef} type="password" placeholder="Type here" className="input w-full max-w-xs" /><br />
                <input type="submit" placeholder="Type here" className="input w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default Login;