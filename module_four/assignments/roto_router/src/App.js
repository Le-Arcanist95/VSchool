import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <header>
                <h1> Pipe Magic </h1>
                <nav>
                    <Link to="/"/>
                    <Link to="/about"/>
                    <Link to="/contact"/>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </>
    )
};