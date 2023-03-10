import React from 'react';
import banarimg from "../../../asset/sell-img-callaction/banar-img.png";
import './Sellitems.css'

const Sellitems = () => {
    return (
        <div>
            <div className='sellbanar'>
                <img src={banarimg} alt="" />
                <div className='banartext'>
                    <h1>Sell your home with confidence</h1>
                </div>
            </div>
        </div>
    );
};

export default Sellitems;