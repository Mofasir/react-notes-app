import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function AppBody({ notes, inputSearch, addNote, onDelete, onArchive, onActive, showArchived, onToggleArchiveVisibility }) {
    const notesActive = notes.filter(
        (note) => note.archived === false && note.title.toLowerCase().includes(inputSearch.toLowerCase().trim())
    );
    const notesArchive = notes.filter(
        (note) => note.archived === true && note.title.toLowerCase().includes(inputSearch.toLowerCase().trim())
    );

    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Active Notes</h2>
            <NoteList notes={notesActive} onDelete={onDelete} onArchive={onArchive} />
            <button onClick={onToggleArchiveVisibility} className="toggle-archive-button">
                {showArchived ? "▲ Hide Archived Notes ▲" : "▼ Show Archived Notes ▼"}
            </button>
            {showArchived && (
                <>
                    <h2>Archived Notes</h2>
                    <NoteList notes={notesArchive} onDelete={onDelete} onActive={onActive} />
                </>
            )}
        </div>
    );
}

export default AppBody;