import React, { useContext, useState } from 'react';
import { Button, Container, Form, Modal, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import logo from '../../../asset/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navber.css'
import LogRegFrom from '../Log-Reg-From/LogRegFrom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';

const Navber = () => {
    const { setShow, handleShow, show, user, logOut, setUser, login } = useContext(AuthContext)
    const [loginErr, setLoginErr] = useState('')
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();


    //module close handar
    const handleClose = () => setShow(false);
    // logOut from
    const hendleLogOut = () => {
        logOut().then(result => {
            setUser()
        }).catch(() => { })
    }
    //Login from
    const onSubmitLog = (data) => {
        setLoginErr("")
        login(data.email, data.pass)
            .then(result => {
                toast.success('Login success')
                setShow(false)
                reset();
            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    }
    //    castoms login and register form
    const [lgfom, setLgfom] = useState(true)
    const [newReg, setNewReg] = useState('Buyer')



    //user get ing from server=============================
    //=====================================================
    const { data: userrole = [] } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`, {
                method: 'GET'
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="">
                    <Navbar.Toggle className='ms-3' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Container fluid className='mx-5'>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav>
                                    <Link to='/buy' className='nvbr-btn'>Buy</Link>
                                    <Link to='/sell' className='nvbr-btn'>Sell</Link>
                                    <Link to='/rent' className='nvbr-btn'>Rent</Link>
                                    <Link className='nvbr-btn'>Agent finder</Link>
                                </Nav>
                                <div className='d-lg-block d-none' style={{ width: "80%", textAlign: "center" }}>
                                    <Link to='/'><img style={{ height: "60px" }} src={logo} alt="" /></Link>
                                </div>

                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className='nvbr-btn' href="#action1">Manage Rentals</Link>

                                    {
                                        userrole.role && <Link className='nvbr-btn' to={`/${userrole.role.toLowerCase()}`}>{userrole.role}</Link>
                                    }

                                    {user?.uid ?
                                        <Link className="nvbr-btn" onClick={hendleLogOut}>LogOut</Link>
                                        :
                                        <Link className='nvbr-btn' onClick={handleShow}>Log In</Link>
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <Modal
                show={show}
                onHide={handleClose}
            // backdrop="static"
            // keyboard={false}
            >
                <Modal.Header closeButton className='border-0'>
                    <h2 id='logheader'>Welcome to zoba</h2>

                </Modal.Header>
                <div id='log-btn' className='border-bottom border-2 pb-1'>
                    <Link className={lgfom ? 'active' : ""} onClick={() => setLgfom(true)}>SignIn</Link>
                    <Link className={!lgfom ? 'active' : ""} onClick={() => setLgfom(false)}>New account</Link>
                </div>
                <Modal.Body id='mod-body'>
                    {
                        lgfom ? <div>
                            <h5 className='text-center mt-5'>Sign In</h5>
                            <div className='px-3'>
                                <form onSubmit={handleSubmit(onSubmitLog)}>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input {...register("email", { required: "Please enter your email" })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input {...register("pass", {
                                            required: "Please enter your password...",
                                            minLength: {
                                                value: 8,
                                                message: "password menimum 8 digits"
                                            }
                                        })} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    {errors.pass && <span className='text-danger'>{errors.pass.message}</span>}
                                    <span className='text-danger'>{loginErr}</span>
                                    <button type="submit" className="btn btn-primary w-100 my-3">Sign In</button>
                                </form>
                                <p className='text-center'><strong>Forgot your password?</strong></p>
                                <hr className='my-3' />
                                <p className='text-secondery text-center'>Or contact with:</p>
                                <button type="submit" className="btn btn-outline-secondary w-100 mt-3 mb-5"><FcGoogle /> Continue with google</button>
                            </div>
                        </div> : <div>
                            <Link className={newReg === 'Buyer' && 'active'} onClick={() => setNewReg("Buyer")}>Buyer</Link>
                            <Link className={newReg === 'Seller' && 'active'} onClick={() => setNewReg("Seller")}>Seller</Link>
                            <Link className={newReg === 'Agant' && 'active'} onClick={() => setNewReg("Agant")}>Agant</Link>
                            {
                                newReg === 'Seller' && <LogRegFrom
                                    hederName={"Seller"}
                                ></LogRegFrom>
                            }
                            {
                                newReg === 'Buyer' && <LogRegFrom
                                    hederName={"Buyer"}
                                ></LogRegFrom>
                            }
                            {
                                newReg === 'Agant' && <LogRegFrom
                                    hederName={"Agant"}
                                ></LogRegFrom>
                            }
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Navber;