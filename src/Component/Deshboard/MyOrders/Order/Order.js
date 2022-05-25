import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Order = ({ user: order }) => {


    return (

        <tr>
            <th>1</th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.role !== 'admin' && <button className="btn btn-xs">Payment</button>}</td>
        </tr>

    );
};

export default Order;