import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        <>
            <header>
                <h1> Dungeons and Dragons Online Handbook for 5th Edition </h1>
                <Navbar />
            </header>
        </>
    )
}