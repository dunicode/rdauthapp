import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from '../contexts/AuthContext.jsx';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1>REACT JS</h1>
                <ul className="nav-links">
                    {!isAuthenticated && (
                        <>
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
                        </>
                    )}
                    {isAuthenticated && (
                        <>
                            <li>
                                <NavLink to="/home" className={location.pathname === '/home' ? 'active' : ''}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <a onClick={handleLogout} className="nav-btn" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
                                    Logout
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};
