import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaEllipsisH, FaProductHunt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Seller.css'

const Seller = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='seller-container container-lg'>
                <div className='sel-con-1'>
                    <FaEllipsisH variant="primary" className="d-lg-none" onClick={handleShow}>
                    </FaEllipsisH>
                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <h3>Seller Deshboard</h3>
                                <ul>
                                    <li><FaProductHunt /> <Link to='/seller'>My property</Link></li>
                                    <li><FaProductHunt /> <Link to="/seller/sellproperty">Sell property</Link></li>
                                    <li><FaProductHunt /> <Link to='/seller/addproperty'>Add property</Link></li>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='sel-con-2'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Seller;