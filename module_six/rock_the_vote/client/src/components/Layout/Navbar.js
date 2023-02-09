import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider.js';

export default function Navbar() {
    const { logout, user } = useContext(AuthContext);

    // Conditionally render JSX based on whether user is logged in or not. If logged in, display Home, Profile, About, Contact, and Logout links. If not logged in, display Home, Login, and Register links.
    if (user) {
        return (
            <nav className="flex justify-between items-center h-16 bg-white text-black relative font-mono" role="navigation">
                <NavLink to="/home" className="mx-1 p-4 bg-slate-200 w-1/5 shadow-lg">Home</NavLink>
                <NavLink to="/profile" className="mx-1 p-4 bg-slate-200 w-1/5 shadow-lg">Profile</NavLink>
                <NavLink to="/about" className="mx-1 p-4 bg-slate-200 w-1/5 shadow-lg">About</NavLink>
                <NavLink to="/contact" className="mx-1 p-4 bg-slate-200 w-1/5 shadow-lg">Contact</NavLink>
                <NavLink to="/auth/login" className="mx-1 p-4 bg-slate-200 w-1/5 shadow-lg" onClick={logout}>Logout</NavLink>
            </nav>
        )
    } else {
        return (
            <nav className="flex justify-between items-center h-16 bg-white text-black relative font-mono" role="navigation">
                <NavLink to="/home" className="mx-1 p-4 bg-slate-200 w-1/2 shadow-lg">Home</NavLink>
                <NavLink to="/auth/login" className="mx-1 p-4 bg-slate-200 w-1/2 shadow-lg">Login</NavLink>
            </nav>
        )
    }
}