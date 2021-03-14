import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl, useAuth } from '../use-auth';

export default function Note({id, title, body}) {
    const { jwtToken } = useAuth();
    const deleteNote = async () => {
        if (!id) {
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${jwtToken}`);
        const response = await fetch(`${baseUrl}/notes/${id}/delete`, {
            method: 'DELETE',
            headers: myHeaders
        })
    }
    return (
        <article className="note-container">
            <div>
                <div className="note-title">Title: </div>
                <span>{title}</span>
            </div>
            <div className="note-top">
                <p>{body}</p>
            </div>
            <p><Link className="btn" to={`/note_update/${id}`}>update</Link>
            <Link className="btn" onClick={deleteNote}>delete</Link></p>
        </article>
    )
}