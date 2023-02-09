import React, { useState, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import AuthForm from "../Auth/AuthForm.js";

const initInputs = { username: "", password: "", repeatPassword: "", email: "" };

export default function Access() {
    // State for login or register
    const { register } = useContext(AuthContext);
    const [inputData, setInputData] = useState(initInputs);
    const [isLogin, setIsLogin] = useState(false);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData(prevInputs => ({ ...prevInputs, [name]: value }));
    }
    const handleToggle = () => {
        setIsLogin(prevState => !prevState);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("login");
    }
    const handleRegister = (e) => {
        e.preventDefault();
        register(inputData);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Rock the Vote!</h1>
            {isLogin ? (
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputData}
                        isLogin={isLogin}
                        toggle={handleToggle}
                    />
                </>
            ) : (
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleRegister}
                        inputs={inputData}
                        isLogin={isLogin}
                        setIsLogin={setIsLogin}
                        toggle={handleToggle}
                    />
                </>
            )}
        </div>
    );
};