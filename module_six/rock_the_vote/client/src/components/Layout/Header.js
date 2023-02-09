import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    // Render a header element with the h1 "Rock the Vote!" and the Navbar component. Align the h1 to the left and the Navbar to the right with space between them. On smaller screens, align the h1 in the center above the Navbar and give it a margin of 1rem.

    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-4">
            <h1 className="text-4xl font-bold">Rock the Vote!</h1>
            <Navbar />
        </header>
    );
}
