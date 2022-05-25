import React from 'react';

const View = ({ view }) => {
    console.log(view)
    return (
        <div className='drop-shadow-xl'>
            <div className='flex flex-col p-5 shadow-xl rounded-md'>
                <img style={{ width: "120px", height: "100px" }} className='rounded-full mx-auto' src={view?.url} alt="" />
                <div className='text-center mt-5'>
                    <h1 className='text-2xl'>{view?.name}</h1>
                    <p>{view?.opinion}</p>
                    <p>Ratings : {view?.ratings}/5</p>
                </div>
            </div>
        </div>
    );
};

export default View;