import React from 'react';

const Fortfolio = () => {
    return (
        <div>
            <div style={{ borderBottom: '1px solid black' }} className="  bg-base-200  py-16">
                <div style={{ margin: '8% 20%' }} className="flex flex-col lg:flex-row ">
                    <img style={{ width: '200px', height: '200px' }} src='https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/71286568_2334079913587900_2055806604699238400_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n-4F7Sx4ZzcAX9ZvsPJ&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9fF7VDXl164v8jqRdQaZA_CFs3kGp9hi_MODZ2I1z8CA&oe=62B6D596' className="max-w-sm mr-16 rounded-lg shadow-2xl  " alt='' />
                    <div className='h-100 '>
                        <h1 className="text-5xl font-bold">MD Sultan</h1>
                        <p className="py-6">As a student of Computer sciences, my ambition is to set my mark as a web development through the incorporation of my own creativity, innovative ideas, skills and personal traits based on my achieved knowledge, effort and education. </p>
                        <p className="py-6"> Student of World University of Bangladesh in Computer Science and Engineering eleventh Semester.</p>
                        <p className="py-6">E-mail : rajusultan12@gmail.com</p>
                        <p className="py-6">Country : Bangladeah</p>
                        <p className="py-6"></p>
                        <p className="py-6">Religion : Islam</p>
                        <h1 className='font-bold text-xl text-primary mb-5'>Skills as a Web Developer :</h1>
                        <div className='grid lg:grid-cols-2 gap-7 '>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                            <p>REACT</p>
                            <p>NODE.JS</p>
                            <p>MONGODB</p>
                            <p>TAILWIND CSS </p>
                            <p>BOOTSTRAP CSS</p>
                            <p>FIREBASE AUTHENTICATION</p>
                            <p>STRIPE PAYMENT SYSTEM</p>
                            <p>GITHUB MANAGEMENT</p>
                            <p>EXPRESS.JS</p>
                            <p>So no...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fortfolio;