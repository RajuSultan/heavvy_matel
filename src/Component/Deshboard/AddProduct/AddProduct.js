import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const stock = event.target.stock.value;
        const ratings = event.target.ratings.value;
        const seller = event.target.seller.value;
        const minimum_order_quantity = event.target.minimum_order_quantity.value;
        const shipping = event.target.shipping.value;
        const img = event.target.img.value;
        const addproduct = { name, price, description, stock, ratings, seller, shipping, minimum_order_quantity, email, img };
        console.log(addproduct, email);
        if (addproduct || email) {
            fetch(`https://quiet-taiga-42147.herokuapp.com/addproduct`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addproduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Product add Successfully!")
                })
        }
    }
    return (
        <div>
            <div className='my-32'>
                <div className=" hero min-h-screen bg-base-200">
                    <div style={{ width: "50%" }} className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className='text-center text-primary text-4xl  font-bold mt-16'>ADD PRODUCT</h1>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name='name' required type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Image</span>
                                        </label>
                                        <input name='img' required type="text" placeholder="url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price' required type="counrty" placeholder="price" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea name='description' required className="textarea textarea-primary" placeholder="Description"></textarea>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Stock </span>
                                        </label>
                                        <input name='stock' required type="text" placeholder="Available Stock" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Ratings</span>
                                        </label>
                                        <input name='ratings' required type="text" placeholder="Ratings Out of 5" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Seller Name</span>
                                        </label>
                                        <input name='seller' required type="text" placeholder="Seller Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Shipping Charge</span>
                                        </label>
                                        <input name='shipping' required type="text" placeholder="Shipping Charge" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">minimum_order_quantity:</span>
                                        </label>
                                        <input name='minimum_order_quantity' required type="text" placeholder="Minimum Order Quantity" className="input input-bordered" />
                                    </div>

                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">ADD PRODUCT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;