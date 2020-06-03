import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { findNotes } from '../../selectors/noteSelector'
// import {findDepartments } from '../../selectors/departmentSelector'
function NotesShow(props) {
    // const { _id, name,email,mobile,department} = props.employee|| {}
    return (
        <div>
            <h1>Show Page</h1>
            {
                props.note ? (
                    <div>
                        <h2>note show</h2>
                        <p>Id-{props.note._id}</p>
                        <p>Title-{props.note.title}</p>
                        <p>Body-{props.note.body}</p>
                        <p>Category-{props.note.category.name} </p>
                        <Link to={`/notes/edit/${props.note._id}`}>edit</Link><br />
                        <Link to='/notes'>back</Link></div>
                ) : (
                        <div>loading...</div>
                    )
            }

        </div>
    )
}
const mapStateToProps = (state, props) => {
    console.log(state)
    const id = props.match.params.id
    console.log("id is what" + id)
    return {
        category: state.categories,
        note: findNotes(state.notes, id),

    }
}
export default connect(mapStateToProps)(NotesShow)
