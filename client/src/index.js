import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetCategories } from './actions/categoryActions'
import {startSetNotes} from './actions/noteAction'

import {setUser} from './actions/userAction'

import axios from './config/axios'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})
console.log(store.getState())
// store.dispatch(startGetUser())

if(localStorage.getItem('authToken')) {
    axios.get('/users/account',{
             
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then(response=>{
        const user = response.data
        store.dispatch(setUser(user))
        store.dispatch(startSetCategories())
        store.dispatch(startSetNotes())
    })
}



const jsx = (<Provider store={store}>
    <App />
</Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))
