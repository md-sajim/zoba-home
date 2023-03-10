import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './PrivateRoute.css'

const PribateRoute = ({ children }) => {
    const { handleShow, user, loding } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loding) {
        return <p>Loding...</p>
    }
    if (user) {
        return children;
    }

    return (
        <>
            {
                navigate('/')
            }
            {
                handleShow()
            }

        </>
    );
};

export default PribateRoute;