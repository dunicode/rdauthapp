import React from 'react';
import { NavLink, useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1>REACT JS</h1>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                            Register
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
