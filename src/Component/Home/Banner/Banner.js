import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBMgziSw1Bj7OGpbyVkbD1Hl8EXUUJT8X-g&usqp=CAU" className="max-w-sm rounded-lg shadow-2xl w-full ml-10" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold mb-5">WELLCOME...</h1>
                        <h1 className="text-4xl font-bold text-primary">Heavvy Metal</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <Link to='/login'>
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;