import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    let activeStyle = {
        text: "text-gray-500"
    }

    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
            <NavLink to="/" style={({ isActive }) => {
                return isActive ? activeStyle: {"paddingLeft": "8px"}
            }}
            >
                Home
            </NavLink>
            <NavLink to="/about" style={({ isActive }) => {
                return isActive ? activeStyle: {"paddingLeft": "8px"}
            }}
            >
                About
            </NavLink>
            <NavLink to="/contact" style={({ isActive }) => {
                return isActive ? activeStyle: {"paddingLeft": "8px"}
            }}
            >
                Contact
            </NavLink>
            <NavLink to="/profile" style={({ isActive }) => {
                return isActive ? activeStyle: {"paddingLeft": "8px"}
            }}>
                Profile
            </NavLink>
        </nav>
    );
}