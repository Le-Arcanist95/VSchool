import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.js';
import Auth from './components/pages/Auth.js';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}