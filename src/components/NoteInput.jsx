import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const titleInput = e.target.value.slice(0, this.state.maxChar);
        this.setState({
            title: titleInput
        });
    }

    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value
            }
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <div className="note-input">
                <h2>Add Note</h2>
                <form onSubmit={this.onSubmitEventHandler} required>
                    <div className="note-input__title__char-limit">
                        <p>Character remaining: {this.state.maxChar - this.state.title.length}</p>
                    </div>
                    <input type="text" placeholder="Add title here ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                    <textarea id="height" placeholder="Add note here ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required ></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;