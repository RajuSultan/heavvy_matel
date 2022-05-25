import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';



const Order = ({ user: order }) => {


    return (

        <tr>
            <th>1</th>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{
                order?.paid ? <div>
                    <p>Paid</p>
                    <p>TransactionID : {order?.transactionId}</p>
                </div> : <Link to={`/deshboard/payment/${order._id}`}> <button className="btn btn-xs">Payment</button></Link>
            }</td>
        </tr>

    );
};

export default Order;