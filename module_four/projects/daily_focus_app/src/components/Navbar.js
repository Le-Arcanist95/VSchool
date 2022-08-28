import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const listStyle = {
        listStyleType: "none",

    }

    return (
        <nav style={{padding: "1rem"}}>
            <ul style={listStyle}>
                <li>
                    <NavLink to="/" exact={true}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="journal">
                        Journal
                    </NavLink>
                </li>
                <li>
                    <NavLink to="tasks">
                        Tasks
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}