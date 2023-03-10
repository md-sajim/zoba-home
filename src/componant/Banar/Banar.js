import React from 'react';
import banar from '../../asset/banarimg.jpg'
import { FaSearch } from "react-icons/fa";
import './Banar.css'

const Banar = () => {
    return (
        <div id='banar-img-contein'>
            <img id='banar-img' src={banar} alt="" />
            <div id='overlay-centered'>
                <h1>Find it. Own it.</h1>
                <div className="input-group">
                    <input type="text" className="form-control py-3" placeholder="Enter your address, city, or post code." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text fs-4" id="basic-addon2"><FaSearch /></span>
                </div>
            </div>
        </div>
    );
};

export default Banar;