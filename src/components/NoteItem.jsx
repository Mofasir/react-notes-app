import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import ActiveButton from "./ActiveButton";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    archived ? <ActiveButton id={id} onActive={onActive} /> : <ArchiveButton id={id} onArchive={onArchive} />
                }
            </div>
        </div>
    );
}

export default NoteItem;