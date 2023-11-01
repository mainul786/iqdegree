import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Imeges/logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='static'>Static</Link>
            <Link to='blog'>Blog</Link>
        </div>
        </div>
    );
};

export default Header;