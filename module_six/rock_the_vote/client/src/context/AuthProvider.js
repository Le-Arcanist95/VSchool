import { createContext, useEffect, useState } from "react";
import axiosClient from "../hooks/useAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initState = {
        user: {},
        token: ""
    }
    const [userState, setUserState] = useState(initState);

    function register(credentials) {
        axiosClient.post("/auth/register", credentials)
            .then(res => {
                setUserState({...userState, user: res.data.user});
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        console.log(userState);
    }, [userState]);

    return (
        <AuthContext.Provider value={{
            ...userState,
            register
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;