import axios from '../config/axios'


export const setNotes = (notes) => {
    return { type: 'SET_NOTE', payload: notes }
}
export const startSetNotes = () => {
    return (dispatch) => {
        axios.get('/notes', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const notes = response.data
                dispatch(setNotes(notes))
            })
    }
}


export const addNote = (note) => {
    return { type: 'ADD_NOTE', payload: note }
}
export const StartAddNote = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/notes', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                const note = response.data
                console.log(response.data)
                dispatch(addNote(note))
                // redirect()
                window.location.href="/notes"
            })
    }
}

export const removeNote = (id) => {
    return { type: 'REMOVE_NOTE', payload: id }
}
export const StartRemoveNote = (id) => {
    return (dispatch) => {
        axios.delete(`/notes/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                console.log(response.data)
                const note = response.data
                dispatch(removeNote(note._id))
                // redirect()
            })
    }
}

export const updatenote = (note) => {
    return { type: 'UPDATE_NOTE', payload: note }
}
export const StartUpdateNote = (formData, id, redirect) => {
    console.log(formData)
    console.log(id)
    return (dispatch) => {

        axios.put(`/notes/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then((response) => {
                console.log('note', response.data)

                const note = response.data
                dispatch(updatenote(note))
                redirect()
            })
    }
}