import React from 'react';
import logo from '../assets/images/logo.svg';

function Logo(props) {
    return (
        <img src={logo} alt="jobster logo" className="logo" />
    );
}

export default Logo;