import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
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
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            from My Orders
        </div>
    );
};

export default MyOrders;