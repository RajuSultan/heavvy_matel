import React, { useState } from 'react';
import View from './View';

const Review = () => {
    const [review, setReview] = useState([]);
    fetch('https://quiet-taiga-42147.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    return (
        <div className='my-16'>
            <h1 className='text-center text-primary font-bold text-4xl my-16'>Customar Review</h1>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    review?.map(view => <View key={view._id} view={view}></View>)
                }

            </div>

        </div>
    );
};

export default Review;