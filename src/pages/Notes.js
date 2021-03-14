import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Note from '../components/Note';
import { baseUrl, useAuth } from '../use-auth';

export default function Notes() {
    const { user, jwtToken, setJwtToken, notes, setNotes } = useAuth();
    // const [notes, setNotes] = useState([])

    const loadNotes = async () => {
        // console.log('token: ', jwtToken)
        if (!jwtToken ) {
            const localToken = await localStorage.getItem('access_token')
            if (localToken)
                setJwtToken(localToken)
            else
                return;
        }
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${jwtToken}`);
            const response = await fetch(`${baseUrl}/notes`, {
                method: 'POST',
                headers: myHeaders
            })
            const data = await response.json()
            if (data.success) {
                setNotes(data.notes)
            }
        } catch (error) {
            console.log('Cannot load notes')
        }
    };
    useEffect(() => {
        loadNotes()
    },[])

    // if (notes.length < 1) {
    //     return (
    //         <h2>No notes</h2>
    //     )
    // }
    return (
        <section className="section">
            <p><h2>Notes</h2></p>
            <div >
                {
                    notes.map((note) => {
                        return <Note key={note.id} {...note} />
                    })
                }
            </div>
            <p><Link to='/note_new' className="btn btn-primary" >Add new note</Link></p>
        </section>
    )

}

