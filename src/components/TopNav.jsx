import React from "react";
import './TopNav.css';
import {
    Link
} from 'react-router-dom'

const TopNav = () => {
    return(
        <nav className="navbar">
             <span className="navbar-brand">Welcome to Weather App</span>
        </nav>

    );

};

export default TopNav;