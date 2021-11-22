import React from 'react';
import './Header.css'
import Avatar from './img/avatar.png'
import Logo from './img/logo.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={Avatar} alt="" />
                </a>
            </div>
        </header>
    );
}