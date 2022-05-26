import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { id } = useParams();

    const [purchaseProduct, setPurchaseProduct] = useState({});
    // const [purchaseModal, setPurchasemodal] = useState({});

    useEffect(() => {
        fetch(`https://quiet-taiga-42147.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPurchaseProduct(data)
                // setPurchasemodal(data)
            }
            )
    }, []);
    // console.log(purchaseProduct);
    return (
        <div>
            {/* <div className="card w-96 justify-center bg-base-100 shadow-xl">
                <figure><img src={purchaseProduct.img} alt="Shoes" /></figure>
                <div className="card-body mx-auto">
                    <h2 className="card-title">
                        {purchaseProduct.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <label htmlFor="booking-modal" className="btn   btn-secondary text-white ">Book Appointment</label>
                </div>
            </div> */}
            <div className="hero min-h-screen bg-base-200 my-16">
                <div style={{ width: '80%' }} className="hero-content flex-col lg:flex-row-reverse ">

                    <div className='m-4'>
                        <h1 className="text-5xl font-bold">{purchaseProduct?.name}</h1>
                        <p className="py-6">{purchaseProduct?.description}</p>
                        <div className='grid lg:grid-cols-2 gap-10'>

                            <p><span className='font-bold'>Category :</span> {purchaseProduct?.category}</p>
                            <p><span className='font-bold'>Price :</span> {purchaseProduct?.price}</p>
                            <p><span className='font-bold'>Ratings :</span> {purchaseProduct?.ratings}</p>
                            <p><span className='font-bold'>Seller :</span> {purchaseProduct?.seller}</p>
                            <p><span className='font-bold'>Shipping :</span> {purchaseProduct?.shipping}</p>
                            <p><span className='font-bold'>Stock :</span> {purchaseProduct?.stock}</p>
                            <p><span className='font-bold'>Minimum Order Quantity :</span> {purchaseProduct?.minimum_order_quantity}</p>
                        </div>

                        <label htmlFor="booking-modal" className="btn   btn-primary text-white text-center my-8 ml-20 ">Go for Order</label>
                    </div>
                    <img src={purchaseProduct?.img} className="w-100 rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
            {
                purchaseProduct && <PurchaseModal key={purchaseProduct._id} purchaseProduct={purchaseProduct} id={id}></PurchaseModal>
            }

        </div>
    );
};

export default Purchase;