import React from "react";
import { render } from "react-dom"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import TableOfContents from "./pages/TableOfContents";
import "./index.css";

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="about" element={<About />} />
                <Route path="table-of-contents" element={<TableOfContents />} />
                <Route 
                    path="*" 
                    element={
                        <main>
                            <h2>Oops! Looks like there is nothing to be displayed here</h2>
                            <Link to={"/"}> Back to Home </Link>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
)