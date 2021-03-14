import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth, baseUrl } from '../use-auth';

const LogOut = () => {
    const history = useHistory();
    const { setUser, setJwtToken, setError } = useAuth();
    const logout = async () => {
        try {
            // TOTO: implemente log_out route in Flask
            // const response = await fetch(`${baseUrl}/log_out`)
            setUser(null)
            setJwtToken('')
            localStorage.removeItem('access_token');
            history.push('/')
        }    
        catch(e) {
            setError(true)
        }
    }
    return (
        <button className="btn btn-primary" onClick={logout}>
            Log out
        </button>
    )
}

export default LogOut;