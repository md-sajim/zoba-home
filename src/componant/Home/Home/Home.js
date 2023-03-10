import React from 'react';
import Banar from '../../Banar/Banar';
import Recommendations from '../../Recommendations/Recommendations';
import Servis from '../../Servis/Servis';
import './Home.css'
import ad_img6 from '../../../asset/advertising/adver-1.jfif'
import ad_img1 from '../../../asset/advertising/adver-2.jfif'
import ad_img4 from '../../../asset/advertising/adver-5.jfif'
import ad_img5 from '../../../asset/advertising/adver-6.jfif'
import Advertise from '../../Advartise/Advertise';


const Home = () => {
    return (
        <div id='home-container'>
            <Banar></Banar>
            <Advertise></Advertise>
            <Recommendations></Recommendations>
            <Servis></Servis>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;