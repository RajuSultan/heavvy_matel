import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ price, name, id }) => {
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    console.log(price);
    const raju = 12;

    useEffect(() => {
        fetch('https://quiet-taiga-42147.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    if (cardError) {
        console.log(cardError.message);
    }

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError("");
        }
        setSuccess('');
        setProcessing(true);

        // confirm cardpayment
        const { paymentIntent, intendError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );
        if (intendError) {
            setCardError(intendError.message);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! Your payment is completed');
            toast.success('Congrats! Your payment is completed');
            setProcessing(false);
            const payment = {
                productId: id,
                transactionId: paymentIntent.id
            }
            fetch(`https://quiet-taiga-42147.herokuapp.com/cart/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    };
    return (<div>

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        {
            cardError.message ? <p className='text-yellow-500'>{cardError.message}</p> : ""
        }
        {
            transactionId && <div>Your Transaction Id :<span className='text-orange-500 font-bold'>{transactionId}</span></div>
        }
    </div>
    );
};

export default CheckoutForm;