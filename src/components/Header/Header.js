import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='statistics'>statistics</Link>
            <Link to='blog'>Blog</Link>
        </div>
        </div>
    );
};

export default Header;