import axios from '../config/axios'

export const setCategories = (categories) => {
    return { type: 'SET_CATEGORIES', payload: categories }
}
export const startSetCategories = () => {
    return (dispatch) => {
        axios.get('/categories')
            .then((response) => {
                const categories = response.data
                dispatch(setCategories(categories))
            })
    }
}


export const addCategory = (category) => {
    return { type: 'ADD_CATEGORY', payload: category }
}
export const StartAddCategory = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/categories', formData)
            .then((response) => {
                const category = response.data
                console.log(response.data)
                dispatch(addCategory(category))
                // redirect()
                window.location.href="/categories"
            })
    }
}

export const updateCategory = (category) => {
    return { type: 'UPDATE_CATEGORY', payload: category }
}
export const StartUpdateCategory = (formData, id, redirect) => {
    return (dispatch) => {
        axios.put(`/categories/${id}`, formData)
            .then((response) => {
                console.log(response.data)
                const category = response.data
                dispatch(updateCategory(category))
                redirect()
            })
    }
}

export const removeCategory = (id) => {
    return { type: 'REMOVE_CATEGORY', payload: id }
}
export const StartRemoveCategory = (id) => {
    return (dispatch) => {
        axios.delete(`/categories/${id}`)
            .then((response) => {
                console.log(response.data)
                const category = response.data
                dispatch(removeCategory(category._id))
                // redirect()
            })
    }
}
