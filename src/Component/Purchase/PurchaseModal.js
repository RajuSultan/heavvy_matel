import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';


const PurchaseModal = ({ purchaseProduct, id }) => {
    // console.log(purchaseProduct);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    // console.log(user)
    // console.log(user?.email)
    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        const email = user.email;
        const name = purchaseProduct.name;
        const userName = user.displayName;
        const price = purchaseProduct.price;
        const img = purchaseProduct.img

        const cartItem = { phone, quantity, email, name, userName, price, img }
        // console.log(cartItem);


        fetch('https://quiet-taiga-42147.herokuapp.com/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success("Product add Successfully")
                navigate(`/purchase/${id}`)

            })

    };
    return (
        <div className='mx-auto'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-10">{purchaseProduct.name}</h3>


                    <div className="justify-center">
                        <form onSubmit={handleSubmit} className=' grid grid-cols-1 gap-3 ' >
                            <input name='productName' defaultValue={purchaseProduct.name} type="text" placeholder="Type here" className="input input-bordered input-primary  w-full max-w-xs " />
                            <input name='email' defaultValue={user.email} type="email" placeholder="Type here" className="input input-bordered input-primary  w-full max-w-xs " />
                            <select name='quantity' className="select select-primary w-full max-w-xs">
                                <option disabled value>How maney pices you went?</option>

                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>



                            </select>
                            <input name='name' defaultValue={user.displayName} type="text" placeholder="Type here" className="input input-bordered input-primary  w-full max-w-xs" />

                            <input name='phone' type="phone" placeholder="Enter Your Number" className="input input-bordered input-primary  w-full max-w-xs" />
                            <button type="submit" className='w-full max-w-xs btn btn-primary' >Add to Cart</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;