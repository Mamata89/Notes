import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './components/static/home'
import Register from './components/auth/register'
import Login from './components/auth/login'
import Account from './components/auth/account'
import { connect } from 'react-redux'
import { startUserLogout } from './actions/userAction'

import CategoriesList from './components/categories/list'
import CategoryNew from './components/categories/new'
import CategoryEdit from './components/categories/edit'
import CategoriesShow from './components/categories/show'

import NotesList from './components/notes/list'
import NotesAdd from './components/notes/new'
import NotesEdit from './components/notes/edit'
import NotesShow from './components/notes/show'

function App(props) {
    const handleLogout = () => {
        props.dispatch(startUserLogout())
    }
  return (
    <BrowserRouter>
 <div>
     
 <h2>Note App</h2>
                <Link to="/">Home</Link>
        
        {
                    Object.keys(props.user).length !== 0 ? (
                        <div>
                            <Link to="/users/account">Account</Link>
                            <Link to='/categories'>Categories</Link>
                            <Link to='/notes'>Notes</Link>
                            <Link to="#" onClick={handleLogout}>Logout</Link>
                        </div>
                    ) : (
                            <div>
                                <Link to="/users/register">Register</Link>
                                <Link to="/users/login">Login</Link>
                        
                            </div>
                        )
                }
      
  
        <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />
                    <Route path="/users/account" component={Account}/>
                  

                    <Route path='/categories' component={CategoriesList} exact={true} />
                    <Route path='/categories/new' component={CategoryNew} />
                    <Route path='/categories/edit/:id' component={CategoryEdit} exact={true} />
                    <Route path='/categories/:id' component={CategoriesShow} />

                    <Route path='/notes' component={NotesList} exact={true} />
                    <Route path='/notes/new' component={NotesAdd} />
                    <Route path='/notes/edit/:id' component={NotesEdit} exact={true} />
                    <Route path='/notes/:id' component={NotesShow} />
                </Switch>
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)