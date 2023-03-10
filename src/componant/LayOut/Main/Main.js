import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import Footer from '../../Share/Footer/Footer';
import Navber from '../../Share/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;