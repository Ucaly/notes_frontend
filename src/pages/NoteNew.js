import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, baseUrl } from '../use-auth';

const NoteNew = () => {
    const { user, jwtToken } = useAuth();
    const [note, setNote] = useState({title: '', body: ''});
    // console.log('id: ', id);
    // console.log('notes: ', notes)

    const addNote = async () => {
        const body = JSON.stringify(note);
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `Bearer ${jwtToken}`);

        const response = await fetch(`${baseUrl}/notes/new`, {
            method: 'POST',
            headers: myHeaders,
            body: body
        })
        const res = await response.json();
        if (res.success) {
            setNote({title: '', body: ''});
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNote({...note, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!note.title) {
            return;
        }
        addNote();
    }

    return (
        <main>
            <Link to='/notes' className="btn btn-primary">
                back to notes
            </Link>
            <section>
                <form >
                    <div>
                        <label>Title: </label>
                        <input type='text' name='title' id="title" value={note.title} onChange={handleChange} ></input>
                    </div>
                    <div>
                        <label className="note-edit-label">Body: </label>
                        <textarea name='body' id="body" value={note.body} onChange={handleChange} />
                    </div>
                    <button type='submit' onClick={handleSubmit} className="btn btn-primary">Add note</button>
                </form>
            </section>
        </main>
    )
}

export default NoteNew