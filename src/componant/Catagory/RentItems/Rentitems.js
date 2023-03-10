import React, { useState } from 'react';
import Card from '../../Share/Card/Card';
import './Rentitems.css'
import logo from '../../../asset/logo.png'
import rentimg from '../../../asset/cardimg/home-2.jpg'
import Modal from 'react-bootstrap/Modal';
import imgtop from '../../../asset/home-details/home-top.jpg'
import imgdetails1 from '../../../asset/home-details/home-insite-1.jpg'
import imgdetails2 from '../../../asset/home-details/home-insite-2.jpg'
import imgdetails3 from '../../../asset/home-details/home-insite-3.jpg'
import imgdetails4 from '../../../asset/home-details/home-insite-4.jpg'
import imgdetails5 from '../../../asset/home-details/home-insite-5.jpg'
import imgdetails6 from '../../../asset/home-details/home-insite-6.jpg'
import imgdetails7 from '../../../asset/home-details/home-insite-7.jpg'
import imgdetails8 from '../../../asset/home-details/home-insite-1.jpg'
import footer from '../../../asset/footer-art.svg'
import { FaRegHandPointLeft, FaRegHeart } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import rentImg from '../../../asset/recomidation/reco.jpg'
import rentImg1 from '../../../asset/recomidation/reco1.jpg'
import rentImg2 from '../../../asset/recomidation/reco2.jpg'
import rentImg3 from '../../../asset/recomidation/reco3.jpg'
import rentImg4 from '../../../asset/recomidation/reco4.jpg'
import rentImg5 from '../../../asset/recomidation/reco5.jpg'
import rentImg6 from '../../../asset/recomidation/reco6.jpg'
import rentImg7 from '../../../asset/recomidation/reco7.jpg'
import rentImg8 from '../../../asset/recomidation/reco8.jpg'
import rentImg9 from '../../../asset/recomidation/reco9.jpg'
import rentImg10 from '../../../asset/recomidation/reco.jpg'
import rentImg11 from '../../../asset/recomidation/reco1.jpg'
import rentImg12 from '../../../asset/recomidation/reco2.jpg'
import rentImg13 from '../../../asset/recomidation/reco3.jpg'
import rentImg14 from '../../../asset/recomidation/reco4.jpg'
import rentImg15 from '../../../asset/recomidation/reco5.jpg'
import rentImg16 from '../../../asset/recomidation/reco6.jpg'
import rentImg17 from '../../../asset/recomidation/reco7.jpg'
import rentImg18 from '../../../asset/recomidation/reco8.jpg'
import rentImg19 from '../../../asset/recomidation/reco9.jpg'

const Rentitems = () => {
    const [show, setShow] = useState(false);
    const imgData = [imgdetails1, imgdetails2, imgdetails3, imgdetails4, imgdetails5, imgdetails6, imgdetails7, imgdetails8]
    const [showSm, setShowSm] = useState(false);
    const handleClose = () => setShowSm(false);

    const handleShow = () => setShowSm(true);
    const rentarry = [rentImg, rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6, rentImg7, rentImg8, rentImg9, rentImg10, rentImg11, rentImg12, rentImg13, rentImg14, rentImg15, rentImg16, rentImg17, rentImg18, rentImg19]
    return (
        <>
            <div>
                <div className='border-top border-bottom border border-2'>

                    <h1 className='text-white text-center'>not infliment</h1>
                </div>
                <div id='rent-section'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29376.60404909138!2d90.7629087!3d23.0209997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1677867920225!5m2!1sen!2sbd" style={{ border: "0", height: "90vh", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='p-2'>
                        <div>
                            <h3>Rental Listings</h3>
                            <div className='mb-4 btn-scroling'>
                                <button className='btn btn-outline-primary'>Single-Family</button>
                                <button className='btn btn-outline-primary'>Condominium</button>
                                <button className='btn btn-outline-primary'>Apartment</button>
                                <button className='btn btn-outline-primary'>Co-op</button>
                                <button className='btn btn-outline-primary'>Townhome</button>
                                <button className='btn btn-outline-primary'>Bungalow</button>
                                <button className='btn btn-outline-primary'>Ranch</button>
                                <button className='btn btn-outline-primary'>Cottage</button>
                                <button className='btn btn-outline-primary'>Cabin</button>
                                <button className='btn btn-outline-primary'>Chalet</button>
                                <button className='btn btn-outline-primary'>Multi-Family</button>
                            </div>
                            <div id='rent-card'>
                                {
                                    rentarry.map((rimg, i) => <Card
                                        key={i}
                                        img={rimg} setShow={setShow}></Card>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                className="modal-xl"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body className='m-0 p-0'>
                    <div id='rent-grid'>
                        <div id='rent-grid-container'>
                            <img style={{ marginBottom: "3px" }} src={imgtop} alt="" />
                            <div id='rent-img-grid'>
                                {imgData.map((data, i) => <img
                                    key={i}
                                    src={data} alt="" />)}
                            </div>
                            <img src={imgtop} alt="" />
                        </div>
                        <div>
                            <div className='border-bottom border-2 py-2'>

                                <div className='d-flex justify-content-between align-items-center mx-2'>
                                    <img style={{ width: "120px" }} src={logo} alt="" />
                                    <div id='module-icon'>
                                        <FaRegHeart /><span>Save</span><FaRegHandPointLeft /><span>Like</span>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom border-2 py-3'>
                                <div className='ps-2 sell-price'>
                                    <h4>Elison Assisted Living of Oxford</h4>
                                    <p><b>4</b> bd | <b>3</b> ba | 2280 sqft</p>
                                    <p>Rd No. 20, Block L, Dhaka</p>
                                    <button onClick={handleShow} type="button" className="btn btn-outline-primary me-1">Apply</button>
                                    < div className="btn btn-primary">
                                        <h6>Request a tour</h6>

                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom border-2 py-2 short-link'>
                                <a href="#unit">Units</a>
                                <a href="#map">Map</a>
                                <a href="#overviw">Overviw</a>
                                <a href="#faq">FAQ</a>
                                <a href="#schools">Nearby schools</a>
                                <a href="#heighborhood">Neighborhood</a>
                                <a href="#contact">Contact</a>

                            </div>
                            <div className='border-bottom border-2 py-2 details-scrol-container'>
                                <div id='unit' className='rent-details-section'>
                                    <h4>Unit Sction</h4>
                                </div>
                                <div id='map' className='rent-details-section'>
                                    <h4>Map section</h4>
                                </div>
                                <div id='overviw' className='rent-details-section'>
                                    <h4>Overviw section</h4>
                                </div>
                                <div id='faq' className='rent-details-section'>
                                    <h4>FAQ section</h4>
                                </div>
                                <div id='school' className='rent-details-section'>
                                    <h4>School section</h4>
                                </div>
                                <div id='heighborhood' className='rent-details-section'>
                                    <h4>Heighorhood section</h4>
                                </div>
                                <div id='contact' className='rent-details-section'>
                                    <h4>Contat section</h4>
                                </div>
                                <div>
                                    <img src={footer} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div>
                <Modal show={showSm} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Give you information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Phone number"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" onClick={handleClose}>
                            Agree
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque culpa expedita quisquam laboriosam, illo commodi odit nisi perferendis sed reiciendis maiores dicta enim animi voluptatibus reprehenderit repellendus velit assumenda ullam. Cumque, quas animi blanditiis accusamus repellat vero eveniet eos qui nostrum temporibus aperiam quia corrupti architecto voluptate facere magni ullam? Vitae eius aspernatur fugiat et eos officiis ducimus quibusdam veniam quas animi quia sint, nisi iusto blanditiis, voluptas asperiores expedita dicta sequi doloribus unde commodi soluta, fugit modi? Ipsam laborum dolores perferendis molestiae molestias delectus nemo neque, facere culpa veniam, minus voluptate commodi provident veritatis in quaerat earum ducimus?</small>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
};

export default Rentitems;