import React, { useState } from 'react';
import { Alert, Button, Offcanvas } from 'react-bootstrap';
import { FaFlipboard, FaGg, FaPenFancy, FaPeopleArrows } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Admine.css'

const Admine = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='admine-container container-lg'>
            <div className='ad-con-1'>
                <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                    Launch
                </Button>
                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div id='admin-btn'>
                            <h3 className='ms-3 mb-5'>Admine Dashboard</h3>
                            <ul>
                                <li><FaFlipboard /> <Link to=''>Dashbord</Link></li>
                                <li><FaGg /> <Link to='/admin'>All Seller</Link></li>
                                <li><FaGg /> <Link to='/admin/allbuyer'>All Buyers</Link></li>
                                <li><FaGg /> <Link to='/admin/allagant'>All Agant</Link></li>
                                <li><FaGg /> <Link to=''>Add Agant</Link></li>
                                <li><FaGg /> <Link to=''>Add Product</Link></li>
                                <li><FaGg /> <Link to=''>Propertis</Link></li>

                            </ul>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className='ad-con-2'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Admine;