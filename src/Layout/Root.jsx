import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;