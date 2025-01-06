import React from 'react';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { search: '' };

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(e) {
        this.setState({ search: e.target.value }, () => {
            return this.props.searchNote(this.state)
        });
    }

    render() {
        return (
            <div className='note-search'>
                <input type="text" placeholder="Search notes ..." value={this.state.search} onChange={this.onSearchChangeEventHandler} />
            </div>
        );
    }
}

export default NoteSearch;