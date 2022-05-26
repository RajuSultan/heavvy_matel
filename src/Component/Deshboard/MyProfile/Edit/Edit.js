import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const Edit = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const counrty = event.target.counrty.value;
        const self = event.target.self.value;
        const house = event.target.house.value;
        const gender = event.target.gender.value;
        const religion = event.target.religion.value;
        const social = event.target.social.value;
        const married = event.target.married.value;
        const yourimage = event.target.yourimage.value;
        const profile = { name, counrty, self, house, gender, religion, married, social, email, yourimage };
        console.log(profile, email);
        if (profile || email) {
            fetch(`https://quiet-taiga-42147.herokuapp.com/profile/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(profile)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    toast.success("Profile  Edit Successfully!")
                })
        }


    }
    return (
        <div className='my-32'>
            <div className=" hero min-h-screen bg-base-200">
                <div style={{ width: "50%" }} className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-primary text-4xl  font-bold mt-16'>Edit Profile</h1>
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
                                        <span className="label-text">Your Image</span>
                                    </label>
                                    <input name='yourimage' required type="text" placeholder="url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Counrty</span>
                                    </label>
                                    <input name='counrty' required type="counrty" placeholder="Country" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your self</span>
                                    </label>
                                    <textarea name='self' required className="textarea textarea-primary" placeholder="Your self"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">House No</span>
                                    </label>
                                    <input name='house' required type="text" placeholder="House" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <input name='gender' required type="text" placeholder="Gender" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Religion</span>
                                    </label>
                                    <input name='religion' required type="text" placeholder="Religion" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Married or unmarried</span>
                                    </label>
                                    <input name='married' required type="text" placeholder="Married or unmarried" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Social Media Account</span>
                                    </label>
                                    <input name='social' required type="text" placeholder="url" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Edit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;