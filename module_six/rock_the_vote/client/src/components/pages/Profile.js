import React, { useContext } from 'react';
import AuthContext from "../../context/AuthProvider.js";

export default function Profile(props) {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Rock the Vote!</h1>
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
            <p className="text-xl font-bold mb-4">Your email is: {user.email}</p>
        </div>
    );
}