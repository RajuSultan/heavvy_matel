import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div className="card w-100 bg-base-100 shadow-xl">
                <figure><img src={product.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{product.description}</p>
                    <p>Minimum order Quantity :{product.minimum_order_quantity}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price : {product.price}</div>
                        <div className="badge badge-outline">Ratings : {product.ratings}</div>
                        <div className="badge badge-outline">Stock : {product.stock}</div>
                    </div>
                    <Link to={`/purchase/${product._id}`}>
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-primary">Perchese</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;