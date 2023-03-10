import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import adimg from '../../asset/recomidation/reco.jpg'
import adimg1 from '../../asset/recomidation/reco1.jpg'
import adimg2 from '../../asset/recomidation/reco2.jpg'
import adimg3 from '../../asset/recomidation/reco3.jpg'
import adimg4 from '../../asset/recomidation/reco4.jpg'
import adimg5 from '../../asset/recomidation/reco5.jpg'
import adimg6 from '../../asset/recomidation/reco6.jpg'
import adimg7 from '../../asset/recomidation/reco7.jpg'
import adimg8 from '../../asset/recomidation/reco8.jpg'
import adimg9 from '../../asset/recomidation/reco9.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Advertise.css'
import Card from '../Share/Card/Card';

const Advertise = () => {
    const adarry = [adimg,adimg1,adimg2,adimg3,adimg4,adimg5,adimg6,adimg7,adimg8,adimg9]
    return (

        <div id='body' className='container mx-auto mt-5 pt-5'>
            <h4 style={{ fontWeight: "600", lineHeight: "12px", color: "#323131" }}>Homes For You</h4>
            <p className='text-secondary'>Based on your view history</p>
            <Swiper

                slidesPerView={3}
                // centeredSlides={true}
                spaceBetween={20}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {
                    adarry.map((advimg, i) => <SwiperSlide
                    key={i}
                    >
                        <div>
                            <Card img={advimg}></Card>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Advertise;