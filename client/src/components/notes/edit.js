import React from 'react'
import NoteForm from '../notes/form'
import { StartUpdateNote } from '../../actions/noteAction'
import {connect} from 'react-redux'

function NotesEdit(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>{
            props.history.push('/notes')
        }
          props.dispatch(StartUpdateNote(formData,id,redirect))
    }
    return(
        <div>
            <h1>Edit Notes</h1>
           <NoteForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(NotesEdit)