import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <header>
                <h1> Pipe Magic </h1>
                <h4> The plumbing company that works wonders </h4>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/services"> Services </Link>
                    <Link to="/contact"> Contact </Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </>
    )
};