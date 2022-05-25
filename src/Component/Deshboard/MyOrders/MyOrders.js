import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import User from '../Alluser/User/User';
import Order from './Order/Order';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user.email}`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate('/');

                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [])
    return (
        <div className='mx-16 my-20' >
            <div style={{ borderBottom: "1px solid black" }} className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Payment Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(user => <Order key={user._id} user={user}></Order>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;