import React, { useState, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import AuthForm from "../Auth/AuthForm.js";

const initInputs = { username: "", password: "", repeatPassword: "", email: "" };

export default function Access() {
    // State for login or register
    const { register, login } = useContext(AuthContext);
    const [inputData, setInputData] = useState(initInputs);
    const [isLogin, setIsLogin] = useState(false);

    // Handle input change    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevInputs => ({ ...prevInputs, [name]: value }));
    }
    // Toggle between login and register -- handles setting state for nested ternary.
    const handleToggle = () => {
        setIsLogin(prevState => !prevState);
    };
    // Handle submit for login and register 
    const handleLogin = (e) => {
        e.preventDefault();
        login(inputData);
    }
    const handleRegister = (e) => {
        e.preventDefault();
        register(inputData);
    }

    // Render JSX with ternary for AuthForm component to handle login and register forms.
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <AuthForm
                handleChange={handleChange}
                handleSubmit={isLogin ? handleLogin : handleRegister}
                inputs={inputData}
                toggleVal={isLogin}
                handleToggle={handleToggle}
            />
        </div>
    );
};