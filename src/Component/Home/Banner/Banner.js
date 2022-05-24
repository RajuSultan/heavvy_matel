import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdQjnDMBGcSQfx23TgrbV1pzgRynpnuQISRIDvSlvzHYjlY6YyI33dogeblay9-MIV8g&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl w-full ml-10" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;