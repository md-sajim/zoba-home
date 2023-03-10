import React, { useContext, useState } from 'react';
import './LogRegFrom.css'
import { FcGoogle, IconName } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const LogRegFrom = ({ hederName }) => {
    const { createAccout, setCreatedUserEmail, setShow } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loginErr, setLoginErr] = useState('')

    const onSubmit = data => {
        createAccout(data.email, data.pass)
            .then(result => {
                createUserDatabase(data.name, data.email)
                setShow(false)

            })
            .catch(err => {
                setLoginErr(err.code.slice(5,))
            })
    }
    const createUserDatabase = (name, email) => {
        const user = {
            name,
            email,
            role: hederName
        }
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setCreatedUserEmail(email)
                    toast.success("usre create success")
                    reset();

                }
            })
            .catch(err => toast.error(err))
    }
    return (
        <div>
            <h5 className='text-center mt-5'>Register {hederName}</h5>
            <div className='px-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input {...register("email", { required: "Please enter your email" })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input {...register("pass", {
                            required: "Please enter your password...",
                            minLength: {
                                value: 8,
                                message: "password menimum 8 digits"
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Plese give me strong password"
                            }
                        })} type="password" className="form-control" id="exampleInputPassword1" />
                        {errors.pass && <span className='text-danger'>{errors.pass.message}</span>}
                        <span className='text-danger'>{loginErr}</span>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">I accept zoba terms and condition.</label>
                    </div>
                    <div id='folling-text'>
                        <p><small>
                            At least 8 characters
                        </small></p>
                        <p><small>
                            Mix of letters and numbers
                        </small></p>
                        <p><small>
                            At least 1 special character
                        </small></p>
                        <p><small>
                            At least 1 lowercase letter and 1 uppercase letter
                        </small></p>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-3">Sign In</button>
                    <p className='text-center'><strong>Forgot your password?</strong></p>
                    <hr className='my-3' />
                    <p className='text-secondery text-center'>Or contact with:</p>
                </form>
                <button type="submit" className="btn btn-outline-secondary w-100 mt-3 mb-5"><FcGoogle /> Continue with google</button>
            </div>
        </div>
    );
};

export default LogRegFrom;