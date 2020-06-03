import React from 'react'
import { connect } from 'react-redux'
import NoteForm from './form'
import { StartAddNote } from '../../actions/noteAction'
function NoteNew(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/notes')
        props.dispatch(StartAddNote(formData, redirect))
    }
    return <div>
        <h2>Add Notes</h2>
        < NoteForm handleSubmit={handleSubmit} />
    </div>
}
export default connect()(NoteNew)