import React from 'react';

export default function AuthForm(props) {
    const { 
        handleChange, 
        handleSubmit, 
        inputs: {
            username,
            password,
            repeatPassword,
            email
        },
        isLogin,
        toggle
    } = props;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isLogin ? (
                <>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-lg my-2">Login</button>
                    </form>
                    <p className="mt-4">
                        Don't have an account?
                        <span className="text-blue-500 cursor-pointer" onClick={toggle}> Register </span>
                    </p>
                </>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <input
                            type="password"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={handleChange}
                            placeholder="Repeat Password"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border-2 border-gray-300 p-2 rounded-lg my-2"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-lg my-2"> Register </button>
                    </form>
                    <p className="mt-4">
                        Already have an account?{" "}
                        <span className="text-blue-500 cursor-pointer" onClick={toggle}> Login </span>
                    </p>
                </>
            )}
        </div>
    )
}