import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../use-auth';
import logo from '../notes.svg'
export default function Navbar(props) {
    const { user } = useAuth();

    return(
        <nav className='navbar'>
            <div className='nav-center'>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>
                            <img src={logo} className="logo" />
                        </Link>
                    </li>
                    {
                        user ? (
                            <>
                                <li>
                                    <Link to='/notes'>Notes</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to='/log_in'>Log in</Link>
                                </li>
                                <li>
                                    <Link to='/sign_up'>Sign up</Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}