import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Bsummary from './Bsummary/Bsummary';
import Review from './Review/Review';

const Home = () => {
    return (
        <div className='mx-16'>
            <Banner></Banner>
            <Products></Products>
            <Bsummary></Bsummary>
            <Review></Review>
        </div>
    );
};

export default Home;