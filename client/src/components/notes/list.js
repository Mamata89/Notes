import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetNotes, StartRemoveNote } from '../../actions/noteAction'
function NotesList(props) {
    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if (confirmRemove) {
            props.dispatch(StartRemoveNote(id))
        }
    }
    console.log("notes props", props)
    if (props.note.length == 0) {
        // console.log("insode if")
        props.dispatch(startSetNotes())
    }
    return (

        <div>
            <h2>Listing notes-{props.note.length}</h2>
          
            <ul>
                {props.note.map(note => {
                    return <li key={note._id}><Link to={`/notes/${note._id}`}>{note.title}</Link>
                        <button onClick={() => { handleRemove(note._id) }}>remove</button>
                    </li>
                })}
            </ul>
            <Link to='/notes/new'>Add Note</Link>
        </div>
    )


}
const mapStateToProps = (state) => {
    return {
        note: state.notes
    }
}
export default connect(mapStateToProps)(NotesList)