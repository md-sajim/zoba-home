import React from 'react';
import { FaApple, FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import footer_svg from '../../../asset/footer-art.svg'
import logo from '../../../asset/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center py-5'>
                <div>
                    <img style={{ width: "100%" }} src={logo} alt="" />
                    <p><i>Follow us:</i>&nbsp; <span style={{ cursor: "pointer" }} className='text-primary fs-3'><FaFacebook /> <FaInstagram /> <FaTwitter /> </span>&copy; &nbsp; <i>zoba - 2023</i></p>
                </div>
                <div>
                    <a className="btn-one  btn-google btn-googlee" href="#0" title="Get it google Play">Google Play</a>
                    <a className="btn-one  btn-google btn-apple" href="#0" title="Download on the app store">App Store</a>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <img style={{ width: "100%" }} src={footer_svg} alt="" />
            </div>
        </div>
    );
};

export default Footer;