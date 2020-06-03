import React from 'react'
import { connect } from 'react-redux'
import CategoryForm from './form'
import { StartAddCategory } from '../../actions/categoryActions'
function CategoryNew(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push('/categories')
        props.dispatch(StartAddCategory(formData, redirect))
    }
    return <div>
        <h2>Add Category</h2>
        < CategoryForm handleSubmit={handleSubmit} />
    </div>
}
export default connect()(CategoryNew)