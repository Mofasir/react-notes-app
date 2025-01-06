import React from "react";
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import { getInitialData } from "../utils/index";
import AppFooter from "./AppFooter";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);

        const notes = getInitialData();

        this.state = {
            notes: notes,
            inputSearch: '',
            showArchived: false,
        };

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onActiveEventHandler = this.onActiveEventHandler.bind(this);
        this.onToggleArchiveVisibility = this.onToggleArchiveVisibility.bind(this);
    }

    onSearchEventHandler({ search }) {
        this.setState(() => {
            return { inputSearch: search };
        });
    }

    onAddNoteEventHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    },
                ],
            };
        });
    }

    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes })
    }

    onArchiveEventHandler(id) {
        this.setState({
            notes: this.state.notes.map((note) => note.id === id ? {...note, archived: true} : note),
        });
    }

    onActiveEventHandler(id) {
        this.setState({
            notes: this.state.notes.map((note) => note.id === id ? {...note, archived: false} : note),
        });
    }

    onToggleArchiveVisibility() {
        this.setState((prevState) => {
            return { showArchived: !prevState.showArchived };
        });
    }

    render() {
        return (
            <>
                <AppHeader 
                    searchNote={this.onSearchEventHandler}
                    inputSearch={this.state.inputSearch} 
                />
                <AppBody 
                    notes={this.state.notes}
                    addNote={this.onAddNoteEventHandler}
                    inputSearch={this.state.inputSearch}
                    onDelete={this.onDeleteEventHandler}
                    onArchive={this.onArchiveEventHandler}
                    onActive={this.onActiveEventHandler}
                    showArchived={this.state.showArchived}
                    onToggleArchiveVisibility={this.onToggleArchiveVisibility}
                />
                <AppFooter />
            </>
        );
    }
}

export default NoteApp;