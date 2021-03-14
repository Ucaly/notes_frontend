import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import { baseUrl, useGlobalContext } from '../context'
import { useAuth } from '../use-auth';
function SignUp() {
    // const { setCurrentUser } = useGlobalContext();
    const { signup, signedup } = useAuth();
    const usernameValue = React.useRef('')
    const passwordValue = React.useRef('')
    const initialUserState = {username: '', password: ''}
    const [newUser, setNewUser] = useState(initialUserState)
    const [error, setError] = useState(false)
    const history = useHistory();
    // React.useEffect(() => {
    //     usernameValue.current.focus()
    // }, [])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewUser({...newUser, [name]: value})
    }
    // function signupUser() {
    //     setCurrentUser({username: usernameValue.current.value, password: passwordValue.current.value})
    // }

    function handleSubmit(e) {
        e.preventDefault();
        if (!newUser.username || !newUser.password) {
            return;
        }
        // setCurrentUser(newUser)
        // addNewUser(newUser)
        signup(newUser.username, newUser.password);
        setNewUser(initialUserState)
    }
    // React.useEffect(() => {
        // history.push('/log_in')
    // }, [signedup]);
    // const addNewUser = async (newUser) => {
    //     try {
    //         const body = JSON.stringify(newUser);
    //         const myHeaders = new Headers();
    //         myHeaders.append('Content-Type', 'application/json')
    //         const res = await fetch(`${baseUrl}/sign_up`, {
    //             method: 'POST',
    //             headers: myHeaders,
    //             body: body
    //         })
    //         const response = await res.json();
    //         if (response.success) {
    //             setError(false)
    //             // setCurrentUser(newUser.username)
    //             history.push('/log_in');
    //         }
    //     } catch (e) {
    //         setError(true)
    //     }
    // }

    return (
        <section className="section">
            <form className="form-login">
                <h2>Sign up</h2>
                <div>
                    {/* username input */}
                    <label htmlFor='username'>User name: </label>
                    <input type='text' name='username' id='username' value={newUser.username} onChange={handleChange}
                    />

                </div>
                <div>
                    {/* password input */}
                    <label htmlFor='password'>Password: </label>
                    <input type='password' name='password' id='password' value={newUser.password} onChange={handleChange}
                    />
                </div>
                { error && (
                    <p>Cannot add new user</p>
                )}
                <button className="btn btn-primary" type='submit' onClick={handleSubmit}>
                    Sign up
                </button>
            </form>
        </section>
    )
}
export default SignUp