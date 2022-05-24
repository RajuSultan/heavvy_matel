import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { id } = useParams();

    const [purchaseProduct, setPurchaseProduct] = useState({});
    // const [purchaseModal, setPurchasemodal] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchaseProduct(data)
                // setPurchasemodal(data)
            }
            )
    }, []);
    // console.log(purchaseProduct);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={purchaseProduct.img} alt="Shoes" /></figure>
                <div className="card-body">
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
            </div>
            {
                purchaseProduct && <PurchaseModal key={purchaseProduct._id} purchaseProduct={purchaseProduct} ></PurchaseModal>
            }

        </div>
    );
};

export default Purchase;