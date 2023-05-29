import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) || [];
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token'))) || [];
    const navigate = useNavigate();

    const login = async (data) => {
        try {
            const loginData = await axios.post(`http://localhost:4000/login`, data);
            console.log(loginData)
            localStorage.setItem('token', JSON.stringify(loginData.data.token));
            localStorage.setItem('user', JSON.stringify(loginData.data.user));
            setUser(loginData.data.user)
            setToken(loginData.data.token);             
            setTimeout(() => {             
            navigate('/');
        }, 2000)
        } catch(error) {
            if(error.tokenInvalid) logout()
            console.log(error)
        }
    }

    const logout = () => {
        setUser(null)
        setToken(null)
        navigate('/login')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const auth = {
        login,
        logout,
        user,
        token 
    }

    return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
