import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/noteReducer'
import categoriesReducer from '../reducers/categoryReducer'
import userReducer from '../reducers/userReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        categories: categoriesReducer,
        notes: notesReducer,
    }), applyMiddleware(thunk))
    return store
}
export default configureStore