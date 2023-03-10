import React from 'react';
import './Servis.css'
import img1 from '../../asset/service-img/Buy_a_home.webp'
import img2 from '../../asset/service-img/Rent_a_home.webp'
import img3 from '../../asset/service-img/Sell_a_home.webp'
import { Link } from 'react-router-dom';

const Servis = () => {
    return (
        <div className='py-5 my-5' style={{ backgroundColor: "#F9F9FB" }}>
            <div className='container p-5'>
                <div id='sevice-grid'>
                    <div className='service-card'>
                        <div className='pt-5'>
                            <img src={img1} alt="" />
                            <div className='px-lg-5'>
                                <h4>Buy a home</h4>
                                <p>Find your place with an immersive photo<br />experience and the most listing, including<br />things you won't find anywher else.</p>
                            </div>
                            <div className='text-center my-5'>
                                <Link to='/buy' className='btn btn-outline-primary'>Browse homes</Link>
                            </div>
                        </div>
                    </div>
                    <div className='service-card'>
                        <div className='pt-5'>
                            <img src={img2} alt="" />
                            <div className='px-lg-5'>
                                <h4>Sell a home</h4>
                                <p>No matter what path you take to sell<br />your home, we can help you navigate a<br />successful sele.</p>
                            </div>
                            <div className='text-center my-5'>
                                <Link to='/sell' className='btn btn-outline-primary'>See your options</Link>
                            </div>
                        </div>
                    </div>
                    <div className='service-card'>
                        <div className='pt-5'>
                            <img src={img3} alt="" />
                            <div className='px-lg-5'>
                                <h4>Rent a home</h4>
                                <p>We're creating a seamless online<br />experience from shopping on the largest<br />rental network, to applyin, to paying rent.</p>
                            </div>
                            <div className='text-center my-5'>
                                <Link to='/rent' className='btn btn-outline-primary'>Find rentals</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servis;