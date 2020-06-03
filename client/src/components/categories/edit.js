import React from 'react'
import { connect } from 'react-redux'
import { StartUpdateCategory } from '../../actions/categoryActions'
import CategoryForm from './form'
function CategoryEdit(props) {
    const handleSubmit = (formData) => {
        const id = props.match.params.id
        const redirect = () => props.history.push('/categories')
        props.dispatch(StartUpdateCategory(formData, id, redirect))
    }
    return <div>
        <h2>Edit Category</h2>
        <CategoryForm handleSubmit={handleSubmit} />
    </div>
}
export default connect()(CategoryEdit)