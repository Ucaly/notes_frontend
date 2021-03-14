import React, { useState, useEffect, useContext, createContext } from 'react';
export const baseUrl = 'http://127.0.0.1:5000';

const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>
        {children}
    </authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [jwtToken, setJwtToken] = useState('');
    const [error, setError] = useState(null);
    const [signedup, setSignedup] = useState(false);
    const [notes, setNotes] = useState([]);

    const login = async (username, password) => {
        try {
            const body = JSON.stringify({'username': username, 'password': password});
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json')
            const res = await fetch(`${baseUrl}/log_in`, {
                method: 'POST',
                headers: myHeaders,
                body: body
            })
            const response = await res.json();
            if (response.success) {
                // console.log('login res: ', response)
                await localStorage.setItem("access_token", response.access_token)
                setJwtToken(response.access_token);
                setError(false)
                setUser(username)
                return true
            } else {
                return false
            }
        } catch (e) {
            setError(true)
        }
    }

    const signup = async (username, password) => {
        // fetch
        try {
            const body = JSON.stringify({'username': username, 'password': password});
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json')
            const res = await fetch(`${baseUrl}/sign_up`, {
                method: 'POST',
                headers: myHeaders,
                body: body
            })
            const response = await res.json();
            if (response.success) {
                setError(false)
                setSignedup(true);
                // return response.user_added;
                // history.push('/log_in');
            }
        } catch (e) {
            setError(true)
        }
    }

    const logout = async () => {
        await localStorage.removeItem('access_token');
        setUser(null);
    }
    return {
        user, jwtToken, signedup, setError, setUser, setJwtToken, setSignedup, login, signup, logout, notes, setNotes
    };
}