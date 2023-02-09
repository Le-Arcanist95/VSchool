import { createContext, useState } from "react";
import axiosClient from "../hooks/useAxios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initState = {
        user: {},
        token: ""
    }
    const [userState, setUserState] = useState(initState);

    const register = (credentials) => {
        axiosClient.post("/auth/register", credentials)
            .then(res => {
                setUserState({...userState, user: res.data.user});
            })
            .catch(err => console.dir(err));
    };

    const login = (credentials) => {
       axiosClient.post("/auth/login", credentials)
            .then(res => {
                setUserState({...userState, user: res.data.user, token: res.data.accessToken});
                setTimeout(() => {console.log(userState)}, 2000);
            })
            .catch(err => console.log(err.response));
    };

    return (
        <AuthContext.Provider value={{
            ...userState,
            register,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;