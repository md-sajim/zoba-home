import React, { useState } from 'react';
import Card from '../../Share/Card/Card';
import footer from '../../../asset/footer-art.svg'
import { FaBuilding, FaCalendarAlt, FaChartBar, FaHandPointLeft, FaHeart, FaHospitalUser, FaRegHandPointLeft, FaRegHeart, FaSnowflake, FaTemperatureHigh, FaTruckMonster, FaVectorSquare, IconName } from "react-icons/fa";
import './BuyItems.css'
import buyimg from '../../../asset/cardimg/home-1.jpg'
import Modal from 'react-bootstrap/Modal';
import homeimg from '../../../asset/home-details/home-top.jpg'
import homeimg2 from '../../../asset/home-details/home-insite-1.jpg'
import homeimg3 from '../../../asset/home-details/home-insite-2.jpg'
import homeimg4 from '../../../asset/home-details/home-insite-3.jpg'
import homeimg5 from '../../../asset/home-details/home-insite-4.jpg'
import homeimg6 from '../../../asset/home-details/home-insite-5.jpg'
import homeimg1 from '../../../asset/home-details/home-insite-5.jpg'
import homeimg7 from '../../../asset/home-details/home-insite-6.jpg'
import homeimg8 from '../../../asset/home-details/home-insite-7.jpg'
// import homeimg9 from '../../../asset/home-details/home-insite-8.jpg'
// import homeimg10 from '../../../asset/home-details/home-insite-9.jpg'
// import homeimg1 from '../../../asset/home-details/home-insite-10.jpg'
import logo from '../../../asset/logo.png'
import { Link } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer'
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

const BuyItems = () => {
    const [show, setShow] = useState(false);
    const homeimgData = [homeimg1, homeimg2, homeimg3, homeimg4, homeimg5, homeimg6, homeimg7, homeimg8]

    const [showSm, setShowSm] = useState(false);
    const handleClose = () => setShowSm(false);

    const handleShow = () => setShowSm(true);
    const buyarry = [rentImg, rentImg1, rentImg2, rentImg3, rentImg4, rentImg5, rentImg6, rentImg7, rentImg8, rentImg9, rentImg10, rentImg11, rentImg12, rentImg13, rentImg14, rentImg15, rentImg16, rentImg17, rentImg18, rentImg19]


    return (
        <>
            <div>
                <div className='border-top border-bottom border border-2'>

                    <h1 className='text-white text-center'>not infliment</h1>
                </div>
                <div id='sele-section'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29376.60404909138!2d90.7629087!3d23.0209997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1677867920225!5m2!1sen!2sbd" style={{ border: "0", height: "90vh", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='p-2'>
                        <div>
                            <h3>Real Estate & Homes For Sale</h3>
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
                            <div className='sell-card'>
                                {
                                    buyarry.map((byimg, i) => <Card
                                        key={i}
                                        img={byimg}
                                        setShow={setShow}></Card>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                className="modal-xl rounded-0"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body className='p-0 m-0'>
                    <div id='modal-body' >
                        <div className='sell-img'>
                            <img style={{ width: "100%", marginBottom: "3px" }} src={homeimg} alt="" />
                            <div id='grid-img'>
                                {
                                    homeimgData.map((imgdata, id) => <img
                                        key={id}
                                        style={{ width: "100%", height: "100%" }} src={imgdata} alt="" />)
                                }
                            </div>
                            <img style={{ width: "100%", marginBottom: "3px" }} src={homeimg} alt="" />
                        </div>
                        <div >
                            <div className='border-bottom border-2 py-2'>

                                <div className='d-flex justify-content-between align-items-center mx-2'>
                                    <img style={{ width: "120px" }} src={logo} alt="" />
                                    <div id='module-icon'>
                                        <FaRegHeart /><span>Save</span><FaRegHandPointLeft /><span>Like</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='ps-2 sell-price'>
                                    <h1>$32,04,900</h1>
                                    <p><b>4</b> bd | <b>3</b> ba | 2280 sqft</p>
                                    <p>Rd No. 20, Block L, Dhaka</p>
                                    <button onClick={handleShow} type="button" className="btn btn-outline-primary py-3 me-1">Contact Agent</button>
                                    < div className="btn btn-primary">
                                        <h6>Request a tour</h6>
                                        <p><small>as early as today at 12:00 pm</small></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='scroll'>
                                    <a href="#overview">Overview | </a>
                                    <a href="#features">Fects and features | </a>
                                    <a href="#price">Price and tex history | </a>
                                    <a href="#cost">Munthly cost | </a>
                                    <a href="#payment">Down Payment assistance | </a>
                                    <a href="#nearby">Nearby School | </a>
                                    <a href="#similar">Similar homes | </a>
                                    <a href="#neighor">Neighborhood | </a>
                                    <a href="#protection">Local legel protections | </a>
                                    <a href="#homefor">Home for you</a>
                                </div>
                                <div className='sell-details-scroll'>
                                    <div className='scroll-section'>

                                        <li><span><FaBuilding /></span>Single family residence</li>
                                        <li><span><FaCalendarAlt /></span>Built in 2009</li>
                                        <li><span><FaTemperatureHigh /></span>Central, electric</li>
                                        <li><span><FaSnowflake /></span>Ceiling fan(s), central air, electric</li>
                                        <li><span><FaTruckMonster /></span>2 Attached garage spaces</li>
                                        <li><span><FaVectorSquare /></span>3 Acres</li>
                                        <li><span><FaChartBar /></span>$143 price/sqft</li>

                                    </div>
                                    <div className='scroll-section' id='overview'>
                                        <h5>Overview</h5>
                                        <div>
                                            <p><span>RAISED CEILING</span><span>RECESSED LIGHTING</span><span>HALF- BATH</span><span>LARGE KITCHEN</span><span>GREAT ROOM</span><span>GRANITE COUNTER TOPS</span><span>WOOD FLOORS</span></p>
                                        </div>
                                        <p>EAST OF OXFORD NICE FOUR BEDROOMS, TWO FULL BATHS, HALF BATH, TWO CAR GARAGE, ON THREE ACRES, GREAT ROOM HAS RAISED CEILING W/FAN, FIREPLACE, DOOR TO PATIO, LARGE KITCHEN WITH NEW CABINETS, STAINLESS UNDERMOUNT SINK, GRANITE COUNTER TOPS, RECESSED LIGHTING, SPACIOUS PRIMARY BEDROOM HAS TRAY CEILING W/ FAN, RECESSED LIGHTING, DOOR TO PAITO, PRIMARY BATH HAS JETTED TUB, TWO SINK VANITY, TWO WALK IN CLOSETS, SEPARATE SHOWER W/ SEAT, LARGE LAUNDRY ROOM WITH SINK, HALF BATH FOR GUEST, WOOD FLOORS IN ALL BEDROOMS, GREAT ROOM & ENTRY, CERAMIC TILE IN BATHS, KITCHEN, & LAUNDRY ROOM, 32X9 COVERED PATIO, TWO CAR GARAGE WITH STORAGE ROOM</p>
                                        <p className='text-center'><b>50</b> day on <b>zoba</b> | <b>2000</b> views | <b>65</b> saves</p>
                                    </div>
                                    <div className='scroll-section tast-style' id='features'>
                                        <h1>Facts and fratures</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='price'>
                                        <h1>Price and tex historo</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='cost'>
                                        <h1>Munthly cost</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='payment'>
                                        <h1>Down Payment Assistance</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='nearby'>
                                        <h1>Nearby School</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='similar'>
                                        <h1>Similar</h1>
                                    </div>
                                    <div className='scroll-section tast-style' id='neighor'>
                                        <h1>Neighborhood</h1>
                                    </div>
                                    <div className='tast-style' id='homefor'>
                                        <h1>Home for you</h1>
                                    </div>
                                    <div>
                                        <img style={{ width: "100%" }} src={footer} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div>
                <Modal show={showSm} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Agent</Modal.Title>
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
                            Contact agant
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>

                        <input type="checkbox" name="" id="" />
                        <Form.Label>I want financing information</Form.Label>

                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque culpa expedita quisquam laboriosam, illo commodi odit nisi perferendis sed reiciendis maiores dicta enim animi voluptatibus reprehenderit repellendus velit assumenda ullam. Cumque, quas animi blanditiis accusamus repellat vero eveniet eos qui nostrum temporibus aperiam quia corrupti architecto voluptate facere magni ullam? Vitae eius aspernatur fugiat et eos officiis ducimus quibusdam veniam quas animi quia sint, nisi iusto blanditiis, voluptas asperiores expedita dicta sequi doloribus unde commodi soluta, fugit modi? Ipsam laborum dolores perferendis molestiae molestias delectus nemo neque, facere culpa veniam, minus voluptate commodi provident veritatis in quaerat earum ducimus?</small>
                    </Modal.Footer>
                </Modal>
            </div>

        </>
    );
};

export default BuyItems;