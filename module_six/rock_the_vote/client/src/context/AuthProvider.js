import { createContext, useState } from "react";
import { axiosClient } from "../hooks/useAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || null,
        accessToken: localStorage.getItem("accessToken") || "",
    }
    const [userState, setUserState] = useState(initState);

    const register = (credentials) => {
        axiosClient.post("/auth/register", credentials)
            .then(res => {
                console.log(res.data);
                const { user, accessToken } = res.data;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("accessToken", accessToken);
                setUserState({...userState, user, accessToken});
            })
            .catch(err => console.log(err.response));
    };

    const login = (credentials) => {
       axiosClient.post("/auth/login", credentials)
            .then(res => {
                const { user, accessToken } = res.data;
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("accessToken", accessToken);
                setUserState({...userState, user, accessToken});
            })
            .catch(err => console.log(err.response));
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setUserState({...userState, user: null, accessToken: ""});
    };

    return (
        <AuthContext.Provider value={{
            ...userState,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;