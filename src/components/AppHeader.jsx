import React from 'react';
import NoteSearch from './NoteSearch';

function AppHeader({ searchNote, inputSearch }) {
    return (
        <div className='note-app__header'>
            <h1>Notes App</h1>
            <NoteSearch searchNote={searchNote} inputSearch={inputSearch} />
        </div>
    )
}

export default AppHeader;