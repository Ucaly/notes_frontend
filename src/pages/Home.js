import React, { useEffect } from 'react';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';
import LogOut from '../components/LogOut';
import { useGlobalContext } from '../context';
import { useAuth } from '../use-auth';
import { Link } from 'react-router-dom';
export default function Home() {
    // const { currentUser } = useGlobalContext();
    const { user } = useAuth();
    let userName = '';
    // const checkUser = () => {
    //     if (currentUser !== null) {
    //         console.log('current user: ', currentUser)
    //         userName = currentUser;
    //     }
    // }
    // useEffect(() => {
       
    // }, [user])
    return (
        <main className="note-container">
            <section className="section">
                <p><h2 className="section-title">Notes</h2></p>
                 {
                     user ? (
                        <div className="home-container">
                            <p>
                                <h3> Hi {user}!</h3>
                                <LogOut />
                            </p>
                        </div>
                      ) : null
                 }
            </section>
        </main>
    )
}
