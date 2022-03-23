import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function App() {
    return (
        <>
            <header className="header-container">
                <h1> Dungeons & Dragons Online Handbook (5th Edition) </h1>
    {/* Create Nav component with Links for routes */}
                <nav className="nav-container">
                    <ul className="nav--list">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/index"> Resources </Link>
                        </li>
                        <li>
                            <Link to="/about"> About </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    {/* Outlet component to display current route */}
            <Outlet />
            
            <footer className="footer-container">
                <h3> Created and brought to you by - <em> Levi Arcane </em> </h3>
            </footer>
        </>
    )
}