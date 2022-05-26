import React, { useEffect, useState } from 'react';
import Product from './Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://quiet-taiga-42147.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <div>
            <h1 className='text-center text-primary font-bold text-4xl my-16'>Available Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>





        </div>
    );
};

export default Products;