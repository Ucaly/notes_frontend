import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth  } from '../use-auth';

function LogIn() {
    const initialUserState = {username: '', password: ''}
    const [loginUser, setLoginUser] = useState(initialUserState)
    const { user, login, error} = useAuth();
    const history = useHistory();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginUser({...loginUser, [name]: value})
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        if (!loginUser.username || !loginUser.password) {
            return;
        }
        const isLoggedIn = await login(loginUser.username, loginUser.password);
        if (isLoggedIn) {
            setLoginUser(initialUserState)
            history.push('/')
        }
    }

    return (
        <section className="section">
            <form className="form-login">
                <h2>Log in</h2>
                <div>
                    {/* username input */}
                    <label htmlFor='username'>User name: </label>
                    <input type='text' name='username' id='username' value={loginUser.username} onChange={handleChange}
                    />

                </div>
                <div>
                    {/* password input */}
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' value={loginUser.password} onChange={handleChange}
                    />
                </div>
                { error && (
                    <p>Cannot log in</p>
                )}
                <button className="btn btn-primary" type='submit' onClick={handleSubmit}>
                    Log in
                </button>
            </form>
        </section>
    )
}
export default LogIn