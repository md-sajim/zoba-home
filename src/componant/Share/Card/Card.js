import React from 'react';
// import img from '../../../asset/cardimg/home-1.jpg'
import './Card.css'

const Card = ({img,setShow}) => {
    
    return (
        <div onClick={() => setShow(true)} id='card-container'>
            <img style={{ width: "100%",height:"250px" }} src={img} alt="" />
            <div>
                <h4>279,000</h4>
                <p>3bds | 3ba | 2041 sqft - House for sale</p>
                <p><small>Dhaka 1210 | Uttra </small></p>
            </div>
        </div>
    );
};

export default Card;