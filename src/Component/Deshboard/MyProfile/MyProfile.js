import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [profileData, setProfileData] = useState({});
    const [user] = useAuthState(auth);
    const email = user.email;
    if (email) {
        fetch(`http://localhost:5000/profile/${email}`)
            .then(res => res.json())
            .then(data => setProfileData(data))
    }
    return (
        <div>
            <div class="  bg-base-200 px-32 py-16">
                <div class="flex flex-col lg:flex-row">
                    <img style={{ width: '200px', height: '200px' }} src={profileData?.yourimage} class="max-w-sm rounded-lg shadow-2xl mr-16 " alt='' />
                    <div className='h-100'>
                        <h1 class="text-5xl font-bold">{
                            user?.displayName ? <span className='uppercase'>{user?.displayName}</span> : <span>
                                {
                                    profileData?.name ? <span>{profileData?.name}</span> : 'Add Your Name!'
                                }
                            </span>
                        }</h1>
                        <p class="py-6">{
                            profileData?.self ? <span>{profileData?.self}</span> : "Add your self!"
                        }</p>
                        <p class="py-6">E-mail : {
                            profileData?.email ? <span>{profileData?.email}</span> : "Add your email!"
                        }</p>
                        <p class="py-6">Country : {
                            profileData?.counrty ? <span>{profileData?.counrty}</span> : "Add your counrty!"
                        }</p>
                        <p class="py-6">House : {
                            profileData?.house ? <span>{profileData?.house}</span> : "Add your house!"
                        }</p>
                        <p class="py-6">Religion : {
                            profileData?.religion ? <span>{profileData?.religion}</span> : "Add your religion!"
                        }</p>
                        <p class="py-6"> Gender : {
                            profileData?.gender ? <span>{profileData?.gender}</span> : "Add your gender!"
                        }</p>
                        <p class="py-6">Social Link : {
                            profileData?.social ? <span>{profileData?.social}</span> : "Add your social!"
                        }</p>
                        <Link to='/edit'><button class="btn btn-primary">Edit Profile</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;