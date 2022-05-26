import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    // console.log(user.displayName);

    const handlaSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const url = event.target.url.value;
        const opinion = event.target.opinion.value;
        const ratings = event.target.ratings.value;
        const review = { name, url, opinion, ratings };
        console.log(name, url, opinion, ratings);

        fetch('https://quiet-taiga-42147.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success("Review add Successfully!")
            })

    }
    return (
        <div>
            <div className="hero w-100 min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold">Add a Review!</h1>
                        <p className="py-6">A review is an evaluation of a publication, product, service, or company or a critical take on current affairs in literature, politics or culture. In addition to a critical evaluation, the review's author may assign the work a rating to indicate its relative merit.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlaSubmit} className='p- m-10'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input name='name' defaultValue={user.displayName} type="text" placeholder="Name" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input name='url' type="text" placeholder="url" className="input input-bordered " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Opinion</span>
                                </label>
                                <textarea name='opinion' className="textarea" placeholder="Opinion"></textarea>
                                <label className="Ratings mt-5">
                                    Ratings
                                </label>
                                <input name='ratings' type="number" placeholder="Ratings Out of 5" className="input input-bordered mb-5 " />
                                {/* <div className="rating my-5">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div> */}

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;