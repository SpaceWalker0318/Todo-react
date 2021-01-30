import React from 'react';
import './NavBar.css'

const navBar = () => {
    return (
        <nav className="NavBar">
            <div className="logo">
                <h4>The NAV</h4>
            </div>
            <ul className="Nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </nav>
    )
}

export default navBar;