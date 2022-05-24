import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const User = ({ user }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Faild to Make an abmin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Successfully made an admin');
                }
            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        </tr>

    );
};

export default User;