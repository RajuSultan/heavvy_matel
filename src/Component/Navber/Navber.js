import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';

const Navber = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignout = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);


    }

    return (
        <div style={{ borderBotton: "2px solid gray" }} className='shadow-2xl reletive '>
            <div className="navbar bg-primary   fixed top-0 left-0 right-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  font-bold">
                            <li className='text-2xl'><Link to='/'>Home</Link ></li>
                            <li className='text-2xl'><Link to='/about'>About</Link ></li>
                            {
                                user && <li className='text-2xl'><Link to='/deshboard' >Deshboard</Link ></li>
                            }
                            <li className='text-2xl'><Link to='/reviews'>Reviews</Link ></li>
                            <li className='text-2xl'><Link to='/contactus'>Contact Us</Link ></li>
                            {
                                user ? <li className='text-2xl'><Link onClick={() => handleSignout()} to="/">LogOut</Link ></li>
                                    :
                                    <>
                                        <li className='text-2xl'><Link to='/login'>Login</Link ></li>

                                        <li className='text-2xl'><Link to='/resister'>Resister</Link ></li>
                                    </>


                            }


                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case  text-xl text-white font-bold " >Menufacturer</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white font-bold menu-horizontal p-0">
                        <li className=''><Link to='/'>Home</Link ></li>
                        <li className=''><Link to='/about'>About</Link ></li>
                        {
                            user && <li className=''><Link to='/deshboard'>Deshboard</Link ></li>
                        }
                        <li className=''><Link to='/reviews'>Reviews</Link ></li>
                        <li className=''><Link to='/contactus'>Contact Us</Link ></li>
                        {
                            user ? <li className=''><Link onClick={() => handleSignout()} to="/">LogOut</Link ></li>
                                :
                                <>
                                    <li className=''><Link to='/login'>Login</Link ></li>

                                    <li className=''><Link to='/resister'>Resister</Link ></li>
                                </>
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Navber;