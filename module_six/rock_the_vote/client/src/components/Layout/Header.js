import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="banner">
            <div className="flex justify-between items-center">
                <h1 className="pl-8">Rock the Vote!</h1>
                <Navbar />
            </div>
        </header>
    )
}