import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="journal">
                        Journal
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="tasks">
                        Tasks
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}