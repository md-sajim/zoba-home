import React from 'react';
import './Recommendations.css'
import img1 from '../../asset/home-top-img/top-img-1.jpg'
import img2 from '../../asset/home-top-img/top-img-2.jpg'
import img3 from '../../asset/home-top-img/top-img-3.jpg'


const Recommendations = () => {

    return (
        <div className='container py-5 my-5'>
            <div id='reco-card-container'>
                <div className='text-center pt-4'>
                    <div>
                        <h5>Get home recommendations</h5>
                        <p className='text-secondary'>Sign in for a more personalized experience.</p>
                        <button className='btn btn-outline-primary'>Sign Up</button>
                    </div>
                </div>
                <div className='reco-img-conten'>
                    <img style={{ width: "100%" }} src={img1} alt="" />
                    <div className='reco-overlay'>
                    </div>
                </div>
                <div className='reco-img-conten'>
                    <img style={{ width: "100%" }} src={img2} alt="" />
                    <div className='reco-overlay'></div>
                </div>
                <div className='reco-img-conten'>
                    <img style={{ width: "100%" }} src={img3} alt="" />
                    <div className='reco-overlay'></div>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;