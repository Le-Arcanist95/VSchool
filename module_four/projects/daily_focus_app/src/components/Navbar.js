import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={"nav-link"} end>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="journal" className={"nav-link"}>
                        Journal
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="tasks" className={"nav-link"}>
                        Tasks
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}