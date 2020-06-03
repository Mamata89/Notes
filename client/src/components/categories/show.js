import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { findCategories } from '../../selectors/categorySelector'
function CategoriesShow(props) {
    const { _id, name } = props.category || {}
    return (
        <div>
            {
                props.category ? (
                    <div>
                        <h2>category show-{_id}</h2>
                        <p>{name}</p>
                        <Link to={`/categories/edit/${_id}`}>edit</Link><br />
                        <Link to='/categories'>back</Link></div>
                ) : (
                        <div>loading...</div>
               
               
                        )
            }

            

        </div>

    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        category: findCategories(state.categories, id)
    }
}
export default connect(mapStateToProps)(CategoriesShow)