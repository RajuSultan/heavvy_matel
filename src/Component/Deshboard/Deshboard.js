import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../Share/Hooks/useAdmin';

const Deshboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(admin.admin);
    return (
        <div className='my-32 w-100'>
            <div className="navbar  bg-base-100 justify-center">
                <div className="navbar-center  lg:flex ">
                    <ul className="menu menu-horizontal grid sm:grid-cols-2 lg:grid-cols-5 p-0">
                        <li className='font-bold font-sans'><Link to="/deshboard/myprofile">My Profile</Link></li>
                        <li className='font-bold font-sans'><Link to="/deshboard/myorders">My Orders</Link></li>
                        <li className='font-bold font-sans '><Link to="/deshboard/addreviews">Add Reviews</Link></li>
                        {
                            admin.admin && <li className='font-bold  font-sans'><Link to="/deshboard/alluser">All User</Link></li>
                        }
                        {
                            admin.admin && <li className='font-bold  font-sans'><Link to="/deshboard/addproduct">Add Product</Link></li>
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Deshboard;