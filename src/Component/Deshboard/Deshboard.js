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
        <div>
            <div className="navbar bg-base-100 justify-center">
                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/deshboard/myprofile">My Profile</Link></li>
                        <li><Link to="/deshboard/myorders">My Orders</Link></li>
                        <li><Link to="/deshboard/addreviews">Add Reviews</Link></li>
                        {
                            admin.admin && <li><Link to="/deshboard/alluser">All User</Link></li>
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Deshboard;