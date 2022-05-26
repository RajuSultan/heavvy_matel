import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L3DDVACVr2TsmljfGDYqkdhfWleqnZgU09sAeTsM3Ir8fGlquSdfgZgx2hDfgmhebnkazZhwRzoTGcUVFyCPX1900LNwgJXzX');

const Payment = () => {
    const { id } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        fetch(`https://quiet-taiga-42147.herokuapp.com/payment/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedProduct(data)
                console.log(selectedProduct);

            })
    }, [id])
    return (
        <div className='my-12'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={selectedProduct?.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='pl-10'>
                        <h1 className="text-5xl font-bold">{selectedProduct?.name}</h1>
                        <p className="py-6">Payment is the transfer of money, goods, or services in exchange for goods and services in acceptable proportions that have been previously agreed upon by all parties involved. A payment can be made in the form of services exchanged, cash, check, wire transfer, credit card, debit card, or cryptocurrencies.</p>
                        <div className='grid grid-cols-2 gap-10 font-bold'>
                            <p>{
                                selectedProduct.name ? <span>
                                    Name : {selectedProduct?.email}
                                </span>
                                    :
                                    ""
                            }</p>
                            <p>Email : {selectedProduct?.email}</p>
                            <p>Price : {selectedProduct?.price} $</p>
                            <p>Quantity : {selectedProduct?.quantity}</p>
                            <p>Your Number : {selectedProduct?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-16'>
                <h1 className='text-primary text-center text-5xl my-10 font-bold'>Payment Method</h1>
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${selectedProduct?.img})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Payment is the transfer of money, goods, or services in exchange for goods and services in acceptable proportions that have been previously agreed upon by all parties involved. Payment Safely with stripe</p>


                            <Elements stripe={stripePromise}>
                                <CheckoutForm price={selectedProduct?.price} name={selectedProduct?.name} id={id} />
                            </Elements>

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Payment;