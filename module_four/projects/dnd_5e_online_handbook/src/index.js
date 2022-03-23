import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ResourceIndex from "./pages/ResourceIndex";
import Resource from "./pages/Resource";
import About from "./pages/About";
import "./index.css";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
        {/* Nest Routes inside of App component to maintain layout of page */}
            <Route path="/" element={<App />}>
                <Route path="index" element={<ResourceIndex />}>
        {/* Nest individual calls inside of the ToC element for easy useParams API calls */}
                    <Route path=":resourceName" element={<Resource />}/>
                </Route>
                <Route path="about" element={<About />} />
        {/* Create route for missing content to prevent 404 */}
                <Route
                    path="*"
                    element={
                        <div style={{ padding: "1rem" }}>
                            <p>Woops, it's an empty page!</p>
                        </div>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);