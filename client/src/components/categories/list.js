import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startSetCategories, StartRemoveCategory} from '../../actions/categoryActions'
function CategoriesList(props) {
    const handleRemove = (id) => {
        const confirmRemove = window.confirm('are you sure')
        if (confirmRemove) {
            props.dispatch(StartRemoveCategory(id))
        }
    }
    console.log("categories props", props)
    if (props.categories.length == 0) {
        // console.log("insode if")
        props.dispatch(startSetCategories())
    }
    return (
        <div>
            <h2>Listing categories-{props.categories.length}</h2>
            <ul>
                {props.categories.map(category => {
                    return <li key={category._id}><Link to={`/categories/${category._id}`}>{category.name}</Link><button onClick={() => { handleRemove(category._id) }}>remove</button></li>
                })}
            </ul>
            <Link to='/categories/new'>Add category </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
export default connect(mapStateToProps)(CategoriesList)